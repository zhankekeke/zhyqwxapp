<style scoped>
    .wrap {
        background: #F6F6F6;
        color: #333333;
        font-size: 16px;
        height: 100vh;
    }

    .modal-btn {
        font-size: 16px;
        width: 296px;
        height: 44px;
        line-height: 44px;
        background: rgba(0, 193, 222, 1);
        border-radius: 25px;
        text-align: center;
        color: #ffffff;
        margin: 30px 40px;
    }

    >>> .ivu-input {
        border: none;
        border-radius: 0;
        font-size: 18px;
        background: none;
        color: #333333;
    }

    .ivu-input-wrapper {
        margin-left: 0;
    }

    .ivu-form-item {
        border-bottom: 1px solid rgb(243, 243, 243);
        padding: 12px 16px;
        margin-bottom: 0;
        height: 58px;
    }

    >>> .ivu-form-item-label {
        font-size: 18px;
        color: #333333;
        padding: 8px 0;
        text-align: left;
    }

    >>> .ivu-form-item-label::before {
        display: none;
    }

    >>> .ivu-input-group-append {
        border: none;
        background: none;
        color: #00C1DE;
        font-size: 14px;
    }

    >>> .ivu-input-group-append .ivu-btn {
        color: #fff;
    }

    .tishi {
        font-size: 16px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
        width: 100%;
        text-align: center;
        padding: 21px 0;
        height: 58px;
    }
    >>>.ivu-input:focus{box-shadow: none;}
    >>>.ivu-form-item-error-tip{top:79%;left:6px;}
</style>
<template>
    <div class="lm" ref="aa">
        <navigator title="填写验证码" @back="$_goback_$"/>
        <div class="wrap">
            <p class="tishi"><span v-if="queryCodeTime>0">短信验证码已发送，请填写验证码</span></p>
            <Form style="background: #ffffff" ref="formValidate" :model="formValidate" :label-width="110"
                  :rules="ruleValidate">
                <FormItem label="手机号" prop="phoneNumber" number>
                    <Input v-model="formValidate.phoneNumber" placeholder="请输入新手机号"></Input>
                </FormItem>
                <FormItem label="验证码" prop="verifyCode" number>
                    <Input type="text" v-model="formValidate.verifyCode" placeholder="验证码">
                    <span slot="append" v-if="queryCodeTime>0" disabled>{{queryCodeTime}}秒</span>
                    <span slot="append" @click="queryCode" v-else>获取验证码</span>
                    </Input>
                </FormItem>

            </Form>
            <div class="modal-btn" @click="ok(1)">确定</div>
        </div>
    </div>
</template>

<script>
    import navigator from '../public/navigator';
    import calendar from '../public/calendar'

    export default {
        components: {
            navigator,
            calendar
        },
        data() {
            return {
                userInfo: {},
                formValidate: {},
                queryCodeTime: 0,
                modalPhoneNum: false,
                baseUrl: this.$_global_$.ImgServer,
                ruleValidate: {
                    verifyCode: [
                        {required: true, message: '验证码必须填写', trigger: 'change'}],
                    phoneNumber: [
                        {required: true, message: '手机号必须填写', trigger: 'change'},
                        {pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'change'}],
                },
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
        },
        methods: {
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-grxx', {})
            },
            ok() {
                this.$refs.formValidate.validate(validate => {
                    if (validate) {
                        // delete this.formValidate.oldPhoneNumber;
                        this.restPhone(this.formValidate.phoneNumber, this.formValidate.verifyCode);
                    }
                });
            },
            queryCode() {
                if (!this.formValidate.phoneNumber) {
                    return this.$Message.error('请输入新手机号')
                }
                if (!/^(\+86\s*)?1[3-9]\d{9}$/.test(this.formValidate.phoneNumber)) {
                    return this.$Message.error('手机号格式不正确！');
                }
                if (this.queryCodeTime > 0) {
                    return this.$Message.error('您的操作过于频繁！');
                }
                this.queryCodeTime = 60;
                let timer = () => {
                    this.queryCodeTime--;
                    if (this.queryCodeTime > 0) {
                        setTimeout(timer, 1000)
                    }
                };
                this.$_Api_$({
                    mod: 'user/captcha',
                    params: {
                        username: this.formValidate.phoneNumber,
                        type: 'USER_REGISTER'
                    }
                }).then(({data}) => {
                    if (data.code === 0) {
                        // console.log(data);
                        setTimeout(timer, 1000);
                    } else this.$Message.error(data.message || '验证码发送失败')
                })
            },

            updateUserInfo() {
                for (var key in this.formValidate) {
                    this.userInfo[key] = this.formValidate[key]
                }
            },

            // 编辑确定
            changeUserInfo() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/user/user/reset/info`,
                    data: this.formValidate,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data === 1) {
                                // this.$Message.success("更新成功,请重新登录！");
                                this.$root.$_refresh_user_info_$();
                                this.updateUserInfo()
                            }
                        } else {
                            this.$Message.error("更新失败!");
                        }
                    }
                })
            },
            // 修改手机号
            restPhone(phone, captcha) {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/user/user/rest/phone`,
                    data: {phone: phone, captcha: captcha},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data === 1) {
                                // this.$Message.success("更新成功,请重新登录！");
                                this.$root.$_refresh_user_info_$();
                                this.updateUserInfo()

                            }
                        } else {
                            this.$Message.error(rsp.data.message);
                        }
                    }
                })
            },
        },
    }
</script>