<style scoped>
    .wrap {
        background: #fff;
        color: #333333;
        font-size: 16px;
    }

    .txitem {
        border-top: 10px solid rgb(243, 243, 243);
        border-bottom: 10px solid rgb(243, 243, 243);
        height: 124px;
    }

    .txitem img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        float: right;
        margin: 17px;
    }

    .txitem p {
        float: left;
        line-height: 104px;
        padding-left: 16px;
    }

    .txitem span {
        float: right;
        line-height: 104px;
        padding-right: 16px;
        color: #999999;
    }

    .list {
        list-style: none;
        /*padding: 0 10px;*/
    }

    .clear:after, .clear:before {
        content: '';
        display: block;
        clear: both;
    }

    .clear {
        zoom: 1;
    }

    .item {
        line-height: 54px;
        border-bottom: 1px solid rgb(243, 243, 243);
        padding: 0 16px;
        box-sizing: border-box;
        height: 54px;
    }

    .item .key {
        float: left;
    }

    .item .value {
        float: right;
        text-align: right;
        color: #999999;
        font-size: 14px;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item .right {
        float: right;
        color: #999999;
        margin-left: 15px;
    }

    .modal-btn {
        line-height: 3;
        font-size: 16px;
    }

    >>> .ivu-input {
        border: none;
        border-radius: 0;
        font-size: 14px;
        background: none;
        color: #495060;
    }

    .ivu-input-wrapper {
        margin-left: 0;
    }

    .ivu-form-item {
        border-bottom: 1px solid rgb(243, 243, 243);
    }

    >>> .ivu-form-item-label {
        font-size: 14px;
    }

    >>> .ivu-input-group-append {
        border: none;
        background: none;
    }

    >>> .ivu-input-group-append .ivu-btn {
        color: #fff;
    }

    >>> .ivu-modal-footer {
        padding: 0;
    }

    >>> .ivu-modal {
        margin: 30px;
    }

    .ivu-btn-primary {
        background-color: rgba(0, 193, 222, 1);
        border-color: rgba(0, 193, 222, 1);
    }

    >>> .ivu-upload-drag {
        border: none;
    }
    >>> .uploads{
        position: absolute;
    width: 100px;
    right: -2px;
    top: 49px;
    }
    .uploads >>> .ivu-progress-text{
         position: absolute;
        right: 58px;
       color: #fff;   
    }
    >>> .ivu-progress-inner{
        display:none;
    }
</style>
<template>
    <div class="lm" ref="aa">
        <navigator title="个人信息" @back="$_goback_$"/>
        <!--修改手机号-->
        <Modal v-model="modalPhoneNum" :styles="{top: '25%'}" :closable="false" width="350">
            <div style="text-align:center">
                <p style="font-size: 16px;color:rgb(51,51,51);line-height: 2">修改手机号</p>
            </div>
            <Form style="margin-top: 15px" ref="formValidate" :model="formValidate" :label-width="80"
                  :rules="ruleValidate">
                <!--<FormItem label="老手机号">-->
                <!--<Input v-model="userInfo.phoneNumber" disabled></Input>-->
                <!--</FormItem>-->
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
            <Row slot="footer" style="text-align: center">
                <Col span="12">
                    <div class="modal-btn" style="background: #419bf3;color: white;border-bottom-left-radius: 5px;"
                         @click="ok(1)">确定
                    </div>
                </Col>
                <Col span="12">
                    <div class="modal-btn" @click="cancel()">取消</div>
                </Col>
            </Row>
        </Modal>
        <!--修改邮箱-->
        <Modal v-model="modalEmail" :styles="{top: '25%'}" :closable="false" width="350">
            <div style="text-align:center">
                <p style="font-size: 16px;color:rgb(51,51,51);line-height: 2">修改邮箱</p>
            </div>
            <Form ref="emailValidate" :model="emailValidate" :rules="emailRule">
                <FormItem prop="emailUrl">
                    <Input class="ivu-form-item" v-model="emailValidate.emailUrl" placeholder="请输入邮箱地址"></Input>
                </FormItem>
            </Form>
            <Row slot="footer" style="text-align: center">
                <Col span="12">
                    <div class="modal-btn" style="background: #419bf3;color: white;border-bottom-left-radius: 5px;"
                         @click="ok()">确定
                    </div>
                </Col>
                <Col span="12">
                    <div class="modal-btn" @click="cancel()">取消</div>
                </Col>
            </Row>
        </Modal>

        <!-- 内容 -->
        <div class="wrap">
            <Upload ref="upload"
                    :show-upload-list="false"
                    :on-success="uploadSuccess"
                    :before-upload="beforeupload"
                    :limit="1"
                    type="drag"
                    :action="$_global_$.uploadServerHost">
                <div class="txitem">
                    <p>头像</p>
                    <span>
                        >
                    </span>
                     <Progress class="uploads"  v-if="item.showProgress" :percent="!item.percentage">上传中</Progress>
                    <img v-if="userInfo.faceUrl || item.status == 'finished'" :src="$_global_$.ImgServer + userInfo.faceUrl"/>
                    <img v-else src="/static/hysyy/faceimg.svg"/>
                </div>
            </Upload>
            <ul class="list">
                <li class="item clear">
                    <p class="key">姓名</p>
                    <p class="value">{{userInfo.name}}</p>
                </li>
                <li class="item clear" @click="handleRender(1)">
                    <p class="key">电话</p>
                    <div class="right">></div>
                    <p class="value">{{userInfo.phoneNumber}}</p>

                </li>
                <li class="item clear" @click="handleRender(0)">
                    <p class="key">邮箱</p>
                    <div class="right">></div>
                    <p class="value">{{userInfo.emailUrl}}</p>

                </li>
                <li class="item clear" @click="calendarShow = true">
                    <p class="key">生日</p>
                    <div class="right">></div>
                    <p v-if="userInfo.brithday" class="value">{{userInfo.brithday.substr(0, 10)}}</p>
                </li>
                <li class="item clear">
                    <p class="key">入职日期</p>
                    <p v-if="userInfo.createDate" class="value">{{userInfo.createDate.substr(0, 10)}}</p>
                </li>
                <li class="item clear">
                    <p class="key">所属单位</p>
                    <p class="value" style="float:none">{{userInfo.enterpriseName}}</p>
                </li>
            </ul>
        </div>
        <calendar :show.sync="calendarShow" :defaultDate="userInfo.brithday" @change="handleConfirm"
                  :weekNames="weekNames"/>
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
                info:{},
                item:'',
                formValidate: {},
                emailValidate: {},
                uid:null,
                uploadList:[],
                // value: '',
                // verifyCode: '',
                queryCodeTime: 0,
                modalEmail: false,
                modalPhoneNum: false,
                mytime: new Date(-315648000),
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                calendarShow: false,
                baseUrl: this.$_global_$.ImgServer,
                ruleValidate: {
                    verifyCode: [
                        {required: true, message: '验证码必须填写', trigger: 'change'}],
                    phoneNumber: [
                        {required: true, message: '手机号必须填写', trigger: 'change'},
                        {pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'change'}],
                },
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
            this.info = JSON.parse(cookie);
            this.getUserInfo()
        },
        methods: {
            // 获取用户信息
            getUserInfo(){
                this.$_sendQuery_$({
                    method:"GET",
                    url:`${this.$_global_$.serverPath}/user/user/${this.info.id}`,
                    data:{},
                    headers:{"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.userInfo = rsp.data.data
                        }
                    }
                })
            },
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            },
            ok(type) {
                if (type == 1) {
                    this.$refs.formValidate.validate(validate => {
                        if (validate) {
                            // delete this.formValidate.oldPhoneNumber;
                            this.restPhone(this.formValidate.phoneNumber, this.formValidate.verifyCode);
                        }
                    });
                } else {
                    this.$refs.emailValidate.validate(validate => {
                        if (validate) {
                            this.formValidate = this.emailValidate;
                            this.changeUserInfo();
                        }
                    });
                }
            },
            cancel() {
                this.modalEmail = false;
                this.modalPhoneNum = false;
            },
            handleRender(type) {
                if (type == 1) {
                    // this.modalPhoneNum = true;
                    // this.formValidate = {oldPhoneNumber: this.userInfo.phoneNumber}
                    this.$root.$_Route_$('user', 'mobile', 'grzx-grxx-yzm', {})

                } else {

                    // this.modalEmail = true;
                    // this.emailValidate = {emailUrl: this.userInfo.emailUrl}
                    this.$root.$_Route_$('user', 'mobile', 'grzx-grxx-yx', {})

                }
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
                        setTimeout(timer, 1000);
                    } else this.$Message.error(data.message || '验证码发送失败')
                })
            },
            confirmData() {
                // 输出格式化后的时间
                this.userInfo.brithday = this.formatDate(this.$refs.datePicker.value);
                this.formValidate = {brithday: this.userInfo.brithday};
                this.changeUserInfo()
            },
            // 日期弹窗确认
            handleConfirm(date) {
                // 输出格式化后的时间
                this.userInfo.brithday = date.format('YYYY-MM-DD');
                this.formValidate.name = this.userInfo.name;
                this.formValidate.emailUrl = this.userInfo.emailUrl;
                this.formValidate.sex = this.userInfo.sex;
                this.formValidate.faceUrl = this.userInfo.faceUrl;
                this.formValidate.brithday = this.userInfo.brithday;
                this.calendarShow = false;
                this.changeUserInfo()
            },
            beforeupload(file) {
                const fileSize =  file.size/1024/1024<10
               //console.log(fileSize)
                if(!fileSize){
                    this.$Message.error('上传图片大小不能超过10MB')
                }
                return fileSize;
            },
            uploadSuccess(res, file, fileList) {
                this.item = file
                // console.log(res)
                 console.log(file)
                 this.uid = 1
                // console.log(fileList)
                this.userInfo.faceUrl = res.data;
                this.formValidate.faceUrl = res.data;
                //console.log(file)
                this.formValidate.name = this.userInfo.name;
                this.formValidate.emailUrl = this.userInfo.emailUrl;
                this.formValidate.sex = this.userInfo.sex;
                this.formValidate.brithday = this.userInfo.brithday;
                this.formValidate.phoneNumber = this.userInfo.phoneNumber;
                this.changeUserInfo()
            },
            formatDate(date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? '0' + h : h;
                let f = date.getMinutes();
                f = f < 10 ? '0' + f : f;
                let s = date.getSeconds();
                s = s < 10 ? '0' + s : s;
                return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
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
                                this.cancel();
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
                                this.cancel();
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