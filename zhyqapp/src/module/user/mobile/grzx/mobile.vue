<style scoped>

    .wrap {
        width: 100%;
        color: #333333;
        line-height: 1;
        font-family:PingFangSC-Regular;
        font-weight:400;
        background:#fff;
    }

    .head {
        overflow: hidden;
        width: 343px;
        height: 167px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 12px 0px rgba(3, 3, 3, 0.08);
        border-radius: 8px;
        margin: 20px 16px;
        position:relative;
    }

    .info {
        float: left;
        padding-top: 6px;
        width: 168px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 20px;
        margin-left: 20px;
    }

    .img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        float: right;
        margin-top: 20px;
        margin-right: 20px;
    }

    .name {
        font-size: 20px;
        line-height: 25px;
        font-family:PingFangSC-Medium;
        font-weight:500;
    }

    .company {
        font-size: 12px;
        line-height: 20px;
        margin-top: 12px;
    }

    .capture {
        padding-left: 20px;
        margin-top: 30px
    }

    .ewm {
        width: 32px;
        height: 32px;
    }

    .bianji {
        width: 32px;
        height: 32px;
        text-align: right;
        position: absolute;
        right: 0;
        bottom: 0px;
    }

    .bianji img {
        z-index: 1;
        position: absolute;
        bottom: 4px;
        right: 4px;
    }

    .bianji:after {
        content: "";
        display: block;
        top: 0;
        left: 0;
        position: absolute;
        width: 0;
        height: 0;
        border: 16px solid transparent;
        border-right-color: #00C1DE;
        border-bottom-color: #00C1DE;
    }

    .item {
        /*margin-top: 10px;*/
        position: relative;
        border-top: 10px solid #f6f6f6;

    }

    .clear:after, .clear:before {
        content: '';
        display: block;
        clear: both;
    }

    .clear {
        zoom: 1;
    }

    .ykt {
        width: 100%;
        background: #fff;
        margin-top: 20px;
        padding-bottom: 16px;
    }

    .ye {
        width: 50%;
        border-right: 1px solid #E1E3EC;
        text-align: center;
        float: left;
    }

    .title {
        font-size: 14px;
        line-height: 30px;
        color: #656D72;
        margin-top: 10px;
    }

    .cont {
        font-size: 30px;
        font-family:DINAlternate-Bold;
        font-weight:bold;
        /*line-height: 30px;*/
    }

    .jf {
        width: 50%;
        text-align: center;
        float: left;
    }

    .djq {
        height: 55px;
        padding-left: 16px;
        font-size: 16px;
        border-bottom: 1px solid #F6F6F6;
    }

    .left {
        float: left;
        line-height: 55px;
    }

    .left img {
        width: 19px;
        height: 19px;
        margin-top: 18px;
        float: left;
    }

    .left p {
        margin-left: 13px;
        float: right
    }

    .right {
        float: right;
        margin: 15px;
    }

    .wrap .titled span {
        width: 100%;
        height: 44px;
        background: rgba(0, 193, 222, 1);
        color: #fff;
        text-align: center;
        line-height: 44px;
        display: block;
        font-size: 18px;
    }

    .tishi {
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
        clear: both;
        padding-left: 16px;
        padding-right: 8px;
        margin-top: 9px;
        line-height: 16px;
    }

</style>
<template>
    <div class="lm" ref="aa"> <!-- 内容 -->
        <div class="wrap">
            <!-- 头部 -->
            <navigator title="我的" :back-icon="false"/>
            <Row class="head">
                <Col span="24">
                    <div class="info">
                        <p class="name">{{userInfo.name || username }}</p>
                        <p class="company">{{userInfo.enterpriseName}}</p>
                    </div>
                    <img v-if="userInfo.faceUrl" class="img" :src="userInfo.faceUrl |imgsrc"/>
                    <img v-else class="img" src="/static/hysyy/faceimg.svg"/>
                </Col>
                <Col span="24" class="capture">
                    <img @click="$_ewm_$" class="ewm" v-if="zoneId" src="/static/grzx/wd_ewm_smal.svg" alt="">


                </Col>
                <div class="bianji" @click="$_grzx_$()">
                        <img src="/static/grzx/wd_bj.svg"/>
                </div>
            </Row>
            <!-- 一卡通 -->
            <div class="ykt clear">
                <!-- 余额 -->
                <div class="ye" @click="$_yktye_$()">
                    <p class="cont" style="color:#E1C285">
                        {{accountInfo.balance}}
                        <span style="font-size:12px">元</span>
                    </p>
                    <p class="title">一卡通余额</p>
                </div>
                <!-- 积分 -->
                <div class="jf" @click="$_jfye_$()">
                    <p class="cont" style="color:#00C1DE">
                        {{accountInfo.credits}}
                        <span style="font-size:12px">积分</span>
                    </p>
                    <p class="title">积分余额</p>
                </div>
            </div>
            <div class="item">

                <!-- 代金券 -->
                <Row class="djq clear" @click.native="$_djq_$()">
                    <Col class="left">
                        <img src="/static/grzx/wd_djq.svg" alt="">
                        <p>我的代金券</p>
                    </Col>
                </Row>

                <!-- 系统推送 -->
                <Row class="djq clear" @click.native="$_xtts_$()">
                    <Col class="left">
                        <img src="/static/grzx/wd_xtts.svg" alt="">
                        <p>系统推送设置</p>
                    </Col>
                </Row>
                <!-- 停车场自动扣费 -->
                <Row class="djq clear">
                    <Col class="left">
                        <img src="/static/grzx/wd_tcc.svg" alt="">
                        <p>停车场自动扣费</p>
                    </Col>
                    <Col class="right">
                        <Switch v-model="tccSwitch" @on-change="txlChange"></Switch>
                    </Col>
                </Row>

            </div>
            <p class="tishi">“停车场自动扣费”开启后，将自动从您的SAAS钱包中扣除费用，扣费成功后栏杆会自动开启，方便快捷。</p>
        </div>
        <!-- 底部 -->
        <footbar/>
    </div>
</template>

<script>
    import footbar from '../public/footbar'
    import navigator from '../public/navigator';

    export default {
        components: {
            footbar,
            navigator

        },
        data() {
            return {
                selected: '首页',
                tccSwitch: false,
                ewmUrl: '',
                userInfo: '',
                zoneId: 0,
                username:'',
                currentZoneId: 0,
                accountInfo: {
                    credits: 0,
                    balance: 0

                },

            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
           // console.log(this.userInfo)
            this.zoneId = this.userInfo.zoneId
            this.currentZoneId = this.$store.getters.currentZoneId
            if (this.currentZoneId) {
                this.$_getEwm_$();
            }
            this.info();
            this.$_back_$()
            //this.updataUserInfo()
        },
        methods: {
            txlChange(status) {
                this.tccSwitch = status;
                // this.$Message.info('开关状态：' + status);
            },
            // 获取账户信息
            info() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/operate/account/accountInfo`,
                    data: {
                        refId: this.userInfo.id,
                        accountType: 1
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(rsp => {
                    //console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data != null)
                                this.accountInfo = rsp.data.data;
                        }
                    }
                });
                // this.updataUserInfo()
            },
            $_getEwm_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/attendance/employee/qrCode`,
                    data: {}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.ewmUrl = "data:image/jpeg;base64," + res.data.data
                        }
                    }
                })
            },
            $_back_$(){
             this.username = this.$root.inparams.name
             //sconsole.log(this.$root.inparams.name)
            },
            // 个人中心
            $_grzx_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-grxx', {})
            },
            // 二维码
            $_ewm_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-ewm', {ewmUrl: this.userInfo.ewmUrl})
            },
            // 一卡通余额
            $_yktye_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-yktye', {data: this.accountInfo})
            },
            // 积分余额
            $_jfye_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-jfye', {data: this.accountInfo})
            },
            // 代金券
            $_djq_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-wddjq', {})
            },
            $_shouye_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_xtts_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx-wxtz', {id: 1})
            }
        }
    }
</script>
