<style scoped>
    .wrap {
        background: #fff;
        border-top: 5px solid rgb(243, 243, 243);
    }

    .item {
        font-size: 15px;
        color: #333333;
    }

    .img {
        width: 34px;
        height: 34px;
        margin-top: 20px;
    }

    .left {
        margin-left: 15px;
    }

    .right {
        margin-right: 15px;
        float: right;
        line-height: 5;
        border-bottom: 1px solid rgb(243, 243, 243);
    }

    .switch {
        float: right;
        margin-top: 28px
    }

</style>
<template>
    <div class="lm" ref="aa">
        <navigator title="通知" @back="$_goback_$"/>
        <div class="wrap">

            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_xt.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">系统通知</p>
                    <Switch class="switch" v-model="xtSwitch" @on-change="xtChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_ct.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">餐厅通知</p>
                    <Switch class="switch" v-model="ctSwitch" @on-change="ctChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_fk.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">访客通知</p>
                    <Switch class="switch" v-model="fkSwitch" @on-change="fkChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_hd.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">活动通知</p>
                    <Switch class="switch" v-model="hdSwitch" @on-change="hdChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_hys.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">会议室通知</p>
                    <Switch class="switch" v-model="hysSwitch" @on-change="hysChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_jfsc.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">积分商城通知</p>
                    <Switch class="switch" v-model="jfscSwitch" @on-change="jfscChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_kf.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">客服通知</p>
                    <Switch class="switch" v-model="kfSwitch" @on-change="kfChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_kq.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">考勤通知</p>
                    <Switch class="switch" v-model="kqSwitch" @on-change="kqChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_tcc.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">停车场通知</p>
                    <Switch class="switch" v-model="tccSwitch" @on-change="tccChange"></Switch>
                </Col>
            </Row>
            <Row class="item">
                <Col span="3" class="left">
                    <img class="img" src="/static/grzx/xtts_txl.png">
                </Col>
                <Col span="18" class="right">
                    <p style="float: left">通讯录通知</p>
                    <Switch class="switch" v-model="txlSwitch" @on-change="txlChange"></Switch>
                </Col>
            </Row>

        </div>
    </div>
</template>

<script>
    import navigator from '../public/navigator';

    export default {
        components: {
            navigator,
        },
        data() {
            return {
                userInfo: {},
                xtSwitch: false,
                ctSwitch: false,
                fkSwitch: false,
                hdSwitch: true,
                hysSwitch: false,
                jfscSwitch: false,
                kfSwitch: false,
                kqSwitch: true,
                tccSwitch: false,
                txlSwitch: false,

            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
        },
        methods: {
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            },
            xtChange(status) {
            },
            ctChange(status) {
            },
            fkChange(status) {
            },
            hdChange(status) {
            },
            hysChange(status) {
            },
            jfscChange(status) {
            },
            kfChange(status) {
            },
            kqChange(status) {
            },
            tccChange(status) {
            },
            txlChange(status) {
            },

        }
    }
</script>