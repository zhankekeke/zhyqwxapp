<style>
    body {
        position: static;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        font-weight: 400;
        height: 100vh;
        background: #f6f6f6;
    }
    .timeSlot{
        height:45px;
        background:rgba(255,255,255,1);
        border-bottom:1px solid rgba(225,227,236,1);
        text-align: center;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:45px;
        margin-bottom:19px;
    }
    .wrap {
        padding-bottom: 10px;
        background-color: #f6f6f6;
    }
    >>>.ivu-tabs-bar{
        border:none;
    }

    .list{
        padding:0 15px;
    }
    .list .listCard{
        padding:6px 6px 10px 7px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);
        border-radius:4px;
        margin-bottom:10px;
    }
    .list .listCard .image {
        position: relative;
    }
    .list .listCard .image img {
        width: 100%;
        height: 151px;
        border-radius: 4px;
        display:block;
    }
    .list .listCard .image .shadow {
        width: 100%;
        padding: 10px 0px 0px;
        line-height:1;
        overflow:hidden;
    }
    .list .listCard .image .shadow  .address{
        padding-left:18px;
        box-sizing:border-box;
        background:url('/static/hysyy/addressicon.svg') 2px 2px no-repeat;
        background-size:11px 13px;
    }
    .list .listCard .yybutton >>>.ivu-btn {
        display:block;
        float:right;
        width:76px;
        height:28px;
        background:rgba(0,193,222,1);
        border-radius:14px;
        margin-top:6px;
        font-size:12px;
        line-height:1;
    }
    /* 小卡片 */
    .listLittle {
        padding:0 15px;
    }
    .listLittle .listCard{
        padding:14px 12px 16px 14px;
        height:102px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);
        border-radius:4px;
        margin-bottom:10px;
    }
    .listLittle .listCard .image {
        position: relative;
    }
    .listLittle .listCard .image img {
        width: 72px;
        height: 72px;
        border-radius: 3px;
        margin-right:13px;
        display:block;
    }
    .listLittle .listCard .image .shadow {
        font-family:PingFangSC-Medium;
        line-height:1;
    }
    .listLittle .listCard .image .shadow .addressIcon{
         padding-left:18px;
        box-sizing:border-box;
        background:url('/static/hysyy/addressicon.svg') 2px 2px no-repeat;
        background-size:11px 13px;
    }
    .listLittle .listCard .yybutton >>>.ivu-btn {
        display:block;
        float:right;
        width:76px;
        height:28px;
        background:rgba(0,193,222,1);
        border-radius:14px;
        margin-top:28px;
        font-size:12px;
        line-height:1;
    }


    >>>.ivu-input-icon{
        display: none;
    }
    >>>.ivu-input{
        border: none;
        padding-right: 5px;
        text-align: right;
        font-size: 15px;
    }

    >>>.ivu-tabs-bar{
        margin-bottom:0;
    }
    .large2little >>>.ivu-tabs-bar{
        height:35px;
        margin:0;
        overflow:hidden;
    }
    .large2little >>>.ivu-tabs-content{
        margin-top:0px;
    }
    .large2little >>>.ivu-tabs-tab{
        padding:0;
    }
    .large2little >>>.ivu-tabs-nav-scroll{
        background-color: #f6f6f6;
        height:35px;
        /* position:relative; */
    }
    .large2little >>>.ivu-tabs-tabpane{
        background-color: #f6f6f6;
        padding: 0;
    }
    .large2little >>>.ivu-tabs-nav{
        position:absolute;
        right: 4px;
        left:auto;
        transform: none;
    }
    .large2little >>>.ivu-tabs-nav .ivu-tabs-tab .ivu-icon{
        margin-right: 0;
    }
    .large2little >>>.ivu-icon-social-apple:before{
        content:"";
        width:16px;
        height:16px;
        background-image: url("/static/hysyy/bigListgray.svg");
        background-size: 100% 100%;
        display: inline-block;
    }
    .large2little >>>.ivu-tabs-nav .ivu-tabs-tab-active .ivu-icon-social-apple:before{
        background-image: url("/static/hysyy/bigList.svg");
    }
    .large2little >>>.ivu-icon-social-windows:before{
        content:"";
        width:17px;
        height:15px;
        background-image: url("/static/hysyy/smallList.svg");
        background-size: 100% 100%;
        display: inline-block;
    }
    .large2little >>>.ivu-tabs-ink-bar{
        display:none;
    }
    .large2little >>>.ivu-tabs-nav .ivu-tabs-tab-active .ivu-icon-social-windows:before{
        background-image: url("/static/hysyy/smallListBlue.svg");
    }

    .divNoList {
        text-align: center;
    }
    .nolist {
        color: #B3B3B3;
        margin-top: 19px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: normal;
    }
</style>

<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator :title="$_searchtime_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="timeSlot">{{$_startTime_$}}——{{$_endTime_$}}</div>
            <Tabs v-if="hysData.length > 0" class="large2little" value="large" :animated="false">
                <TabPane icon="social-apple" name="large">
                    <ul class="list">
                        <li class="listCard" v-for='(item,index) in hysData' :key="index">
                            <div class="image">
                                <img v-if="item.images && item.images.length>0" :src="item.images[0].imageUrl|imgsrc" alt="">
                                <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg" alt="">
                                <div class="shadow">
                                    <Row>
                                        <Col span="14" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 18px;font-weight:500;color:rgba(51,51,51,1);font-family:PingFangSC-Medium;"><span>{{item.name}}</span></Col>
                                        <Col span="10" style="text-align: right"><span
                                                style="font-size: 13px;color:rgba(255,142,88,1);font-family:PingFangSC-Regular;">{{item.price*60}}元/时</span>
                                        </Col>
                                    </Row>
                                    <div style="width:70%;float:left;">
                                        <Row type="flex" align="middle" style="margin-top:10px;">
                                            <Col span="24" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:12px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(51,51,51,1);">
                                                <span style="margin-right:25px;">可容纳{{item.peopleNumber}}人</span>
                                                <span>{{item.area}}平方</span>
                                            </Col>
                                        </Row>
                                        <Row type="flex" align="middle" style="margin-top:8px;">
                                            <Col span="24" class="address" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                                <span style="font-size:12px;font-family:PingFangSC-Regular;font-weight:400;color:rgba(101,109,114,1);">{{item.address}}</span>
                                            </Col>
                                            <!-- <Col span="12" align="right">
                                                <Button type="primary" @click="$_toDetails_$(item)">去预约</Button>
                                            </Col> -->
                                        </Row>
                                    </div>
                                    <div class="yybutton" style="width:30%;float:left">
                                        <Button type="primary" @click="$_tohysyd_$(item)">预定</Button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </TabPane>
                <TabPane icon="social-windows" name="little">
                    <ul class="listLittle">
                        <li class="listCard" v-for='(item,index) in hysData' :key="index">
                            <Row class="image">
                                <Col span="6">
                                    <img v-if="item.images.length>0" :src="item.images[0].imageUrl|imgsrc" alt="">
                                    <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg" alt="">
                                </Col>
                                <Col span="18" class="shadow">

                                    <Row>
                                        <Col span="14" style="font-size: 18px;font-weight:500;color:rgba(51,51,51,1);overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"><span>{{item.name}}</span></Col>
                                        <Col span="10" style="text-align: right"><span
                                                style="font-size: 13px;font-weight:400;color: rgba(255,142,88,1);">{{item.price*60}}元/时</span>
                                        </Col>
                                    </Row>
                                    <div style="width:60%;float:left;margin-top:18px;">
                                        <Row type="flex" align="middle">
                                            <Col span="24" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:12px;font-weight:400;color:rgba(51,51,51,1);">
                                                <span style="margin-right:25px;">可容纳{{item.peopleNumber}}人</span>
                                                <span>{{item.area}}平</span>
                                            </Col>
                                        </Row>
                                        <Row type="flex" align="middle" style="margin-top:8px;">
                                            <Col span="24" class="addressIcon" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                                <span style="font-size:12px;font-weight:400;color:rgba(101,109,114,1);">{{item.address}}</span>
                                            </Col>
                                            <!-- <Col span="12" align="right">
                                                <Button type="primary" @click="$_toDetails_$(item)">去预约</Button>
                                            </Col> -->
                                        </Row>
                                    </div>
                                    <div class="yybutton" style="float:right;">
                                        <Button type="primary" @click="$_tohysyd_$(item)">预定</Button>
                                    </div>
                                </Col>
                            </Row>
                        </li>
                    </ul>
                </TabPane>
            </Tabs>

            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">没有符合要求的会议室哦~</div>
            </div>
        </div>
    </div>

</template>

<script>
    import navigator from '../public/navigator';
    import {Indicator} from 'mint-ui';
    export default {
        components: {
            navigator,
           [Indicator.name]:Indicator
        },
        data() {
            return {
                $_thisUserInfo_$: {},  //用户信息
                hysData: [], // 会议室列表数据
                $_searchtime_$: '', //预约会议室时间
                $_startTime_$: '',  //会议开始时间
                $_endTime_$: '',  //会议结束时间
            }
        },
         created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_list_$()
      },
        methods: {
            // 获取会议室搜索结果列表
            $_list_$() {
                //获取搜索条件
                let condition = this.$root.inparams.info;
                this.$_searchtime_$ = condition.searchtime;
                this.$_startTime_$ = condition.startTime;
                this.$_endTime_$ = condition.endTime;

                let sendData = {};
                sendData.pageSize = 999;
                sendData.reserveDate = this.$_searchtime_$;
                sendData.startTime = this.$_startTime_$;
                sendData.endTime = this.$_endTime_$;
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/zone/zone/${this.$_thisUserInfo_$.zoneId}/meetings`,
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.hysData = rsp.data.data.records;
                            Indicator.close();
                        } else {
                            this.$Message.error('获取数据失败!');
                        }
                    }
                })
            },

            //进入填写预约信息界面
            $_tohysyd_$(item){
                let arr = [];
                arr.push(this.$_startTime_$);
                arr.push(this.$_endTime_$);
                item.slidertime = arr;
                item.datetime = this.$_searchtime_$;
                this.$root.$_Route_$('user','mobile','ygsy-hysyy-xq',{id:item.id, date:this.$_searchtime_$,sliderTime: item.slidertime});

            }
        }
    }
</script>
