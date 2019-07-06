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
        <navigator title="修改邮箱" />
        <div class="wrap">
            <p class="tishi"></p>
            <Form style="background: #ffffff" ref="emailValidate" :model="emailValidate" :label-width="110"
                  :rules="emailRule">

                <FormItem label="邮箱号" prop="emailUrl">
                    <Input v-model="emailValidate.emailUrl" placeholder="请输入邮箱地址"></Input>
                </FormItem>
            </Form>

            <div class="modal-btn" @click="ok()">确定</div>
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
                emailValidate: {},

                baseUrl: this.$_global_$.ImgServer,

                emailRule: {
                    emailUrl: [{required: true, message: '邮箱不能为空', trigger: 'change'},
                        {
                            pattern: /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
                            message: '邮箱格式不正确',
                            trigger: 'change'
                        }]
                }
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            // this.updateUserInfo();
        },
        methods: {
            // 返回上一级
            $_goback_$() {
                this.$router.back()
            },
            ok(type) {
                this.$refs.emailValidate.validate(validate => {
                    if (validate) {
                        this.formValidate.name = this.userInfo.name;
                        this.formValidate.emailUrl = this.emailValidate.emailUrl;
                        this.formValidate.sex = this.userInfo.sex;
                        this.formValidate.faceUrl = this.userInfo.faceUrl;
                        this.formValidate.brithday = this.userInfo.brithday;
                        this.changeUserInfo();
                    }
                });
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
                                this.$root.$_refresh_user_info_$();
                                this.updateUserInfo();
                                this.$_goback_$()
                            }
                        } else {
                            this.$Message.error("更新失败!");
                        }
                    }
                })
            },
        },
    }
</script>