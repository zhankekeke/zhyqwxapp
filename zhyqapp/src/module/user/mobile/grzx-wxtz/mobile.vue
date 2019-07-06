<style scoped>
    .wrap {
        background: #F6F6F6;
        font-family: PingFangSC-Regular;
        font-weight: 400;

    }

    .list {
        color: #333333;
        background: #ffffff;
        margin-top: 10px;
        font-size: 16px;
    }

    .item {
        height: 54px;
        line-height: 54px;
    }

    .item img {
        float: left;
        margin: 11px 18px;
    }

    .title {
        border-bottom: 1px solid rgb(243, 243, 243);
        padding-right: 16px;
        height: 54px;
        float: left;
        width: 300px;
        box-sizing:border-box;
    }

    .switch {
        float: right;
        margin-top: 15px
    }

    .tishi {
        background: #ffffff;
        height: 33px;
        font-size: 12px;
        color: rgba(0, 193, 222, 1);
        line-height: 33px;
        padding-left: 16px;
    }

</style>
<template>
    <div class="lm" ref="aa">
        <navigator title="微信通知" @back="$_goback_$"/>
        <div class="wrap">
            <p class="tishi">关闭相关微信通知，但在系统通知界面中还会存在</p>
            <Row class="list">
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_xt.svg"/>
                    <div class="title">
                        <p style="float: left">系统通知</p>
                        <Switch class="switch" v-model="data.system" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_ct.svg"/>
                    <div class="title">
                        <p style="float: left">餐厅通知</p>
                        <Switch class="switch" v-model="data.restaurant" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_fk.svg"/>
                    <div class="title">
                        <p style="float: left">访客通知</p>
                        <Switch class="switch" v-model="data.visitor" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_hd.svg"/>
                    <div class="title">
                        <p style="float: left">活动通知</p>
                        <Switch class="switch" v-model="data.activity" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_hys.svg"/>
                    <div class="title">
                        <p style="float: left">会议室通知</p>
                        <Switch class="switch" v-model="data.meeting" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_jfsc.svg"/>
                    <div class="title">
                        <p style="float: left">积分商城通知</p>
                        <Switch class="switch" v-model="data.mall" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_kf.svg"/>
                    <div class="title">
                        <p style="float: left">客服通知</p>
                        <Switch class="switch" v-model="data.service" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_kq.svg"/>
                    <div class="title">
                        <p style="float: left">考勤通知</p>
                        <Switch class="switch" v-model="data.attendance" @on-change="Change"></Switch>
                    </div>
                </Col>
                <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_tcc.svg"/>
                    <div class="title">
                        <p style="float: left">停车场通知</p>
                        <Switch class="switch" v-model="data.parkingLot" @on-change="Change"></Switch>
                    </div>
                </Col>
                <!-- <Col span="24" class="item">
                    <img src="/static/grzx/wxtz_txl.svg"/>
                    <div class="title">
                        <p style="float: left">通讯录通知</p>
                        <Switch class="switch" v-model="txlSwitch" @on-change="txlChange"></Switch>
                    </div>
                </Col> -->
            </Row>
        </div>
    </div>
</template>

<script>
    import navigator from '../public/navigator';
    import {Toast} from 'mint-ui'

    export default {
        components: {
            navigator,
        },
        data() {
            return {
                userInfo: {},
                data:{
                    system: true,
                    restaurant: true,
                    visitor: true,
                    activity:true,
                    meeting: true,
                    mall:true,
                    service:true,
                    attendance: true,
                    parkingLot: true
                },
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            this.list()
        },
        methods: {
            // 获取所有推送配置
            list(){
                this.$_sendQuery_$({
                    method:'GET',
                    url:`/user/user/config`,
                    headers: {"Content-type": "application/json"}
                }).then(({data})=>{
                    if(data.code === 0){
                        let list = JSON.parse(data.data.notifyConfig)
                        if(list){
                            for(let i in list){
                                if(list[i] == 1){
                                    list[i] = true
                                }else{
                                    list[i] = false
                                }
                            }
                            this.data = list
                        }
                    }else{
                        Toast(data.message);
                    }
                })
            },
            Change(){
                let config1=JSON.parse(JSON.stringify(this.data))
                for(let i in config1){
                    if(config1[i] == true){
                        config1[i] = 1
                    }
                    else{
                        config1[i] = 0
                    }
                }
                this.$_sendQuery_$({
                    method:'POST',
                    url:`/user/user/config`,
                    data:{notifyConfig:JSON.stringify(config1)},
                    headers: {"Content-type": "application/json"}
                }).then(({data})=>{
                    if(data.code === 0){
                        Toast(data.message)
                    }
                })
            },
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            }

        }
    }
</script>