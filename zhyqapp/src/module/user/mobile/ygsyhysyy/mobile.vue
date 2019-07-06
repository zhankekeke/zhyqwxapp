<style>
    body {
        position: static;
    }
    .date_grid>div{visibility: hidden;}
    .time_hh .tooth{text-align:right;padding-right:7px;box-sizing:border-box;}
    .time_mm .tooth{padding-left:7px;box-sizing:border-box;}
</style>
<style scoped>
    .container {
        /*font-size: 16px;*/
        color: #000;
        font-weight: 400;
        height: 100vh;
        background-color: #f6f6f6;
    }
    .wrap {
        padding-bottom: 85px;
        background:rgba(246,246,246,1);
    }
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 1000;
        box-shadow: 0 0 12px 0 rgba(232, 232, 232, 0.9);
    }
    .footer .active {
        color: #00C1DE;
    }
    .footer ul {
        overflow: hidden;
    }
    .footer ul li {
        float: left;
        width: 48%;
        line-height:49px;
        height:49px;
        color:#B3B3B3;
    }
    .footer ul li .footerIcon {
        width:25px;
        height:23px;
        margin-right:8px;
        margin-top:13px;
        display:block;
        margin-left:48px;
        float:left;
    }
    .footer ul li p {
        height: auto;
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
        padding: 10px 0px 0;
        line-height:1;
    }
    .list .listCard .image .shadow  .address{
        padding-left:18px;
        box-sizing:border-box;
        background:url('/static/hysyy/addressicon.svg') 2px 0px no-repeat;
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
        background:url('/static/hysyy/addressicon.svg') 2px 0px no-repeat;
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

    .search2List >>>.ivu-tabs-nav-scroll{
        height:45px;
        background:rgba(255,255,255,1);
    }
    .search2List >>>.ivu-tabs-bar{
        border-bottom: none;
        height:45px;
    }
    .search2List >>>.ivu-tabs-nav .ivu-tabs-tab-active{
        color:#00C1DE;
    }
    .search2List >>>.ivu-tabs-tab{
        font-size:14px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        line-height:30px;
        height:45px;
    }
    .search2List >>>.ivu-tabs-content{
        margin-top:11px;
    }
    .search2List >>>.ivu-tabs-ink-bar{
        background-color:#00C1DE;
    }
    .search2List >>>.ivu-tabs-nav{
        left: 50%;
        transform:translateX(-50%);
    }
    .search2List >>>.ivu-tabs-tabpane{
        background:rgba(255,255,255,1);
    }
    .search2List >>>.searchBtn.ivu-btn.ivu-btn-primary.ivu-btn-long{
        width:296px;
        height:44px;
        background:rgba(0,193,222,1);
        border-radius:25px;
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        margin:0 auto 40px;
        border:none;
        display:block;
    }
    .searchCondition{
        height:56px;
        line-height:56px;
        padding-left:29px;
        box-sizing:border-box;
        background: url('/static/hysyy/date.svg') 6px 20px no-repeat;
        background-size:16px 16px;
    }
    .searchCondition .searchDate{
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .searchArrow{
        padding-right:20px;
        line-height:56px;
        box-sizing:border-box;
        background: url('/static/hysyy/arrow.svg') 145px 23px no-repeat;
        background-size:5px 10px;
    }
    .search2List .time{
        height:85px;
        padding:20px 0 48px 29px;
        box-sizing:border-box;
        background: url('/static/hysyy/time.svg') 6px 20px no-repeat;
        background-size:17px 17px;
        font-size:16px;
        line-height:1;
    }
    >>> .ivu-date-picker .ivu-input{
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        line-height:1;
        color:rgba(51,51,51,1);
    }
    >>> .ivu-input:focus{
        box-shadow: 0 0 0 0;
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
    .cuttingline{
        border-bottom: 1px solid #E5E5E5;
        width:100vw;
        position: relative;
        left: -15px;
    }
    .choicetime{
        width:120px;
        height:120px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);
        border-radius:16px;
        margin-bottom:54px;
    }
    .choicetime1{
        width:55px;
        height:120px;
        line-height:120px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(101,109,114,1);
    }
    .choicetime .timeSelect.ivu-date-picker{
        margin-top:25px;
        width:74px;
        margin-bottom:10px;
        height:41px;
    }
    .choicetime >>>.ivu-input{
        padding: 0;
        text-align: center;
        background-color: #fff;
        font-size:34px;
        font-family:LcdD;
        color:rgba(34,34,34,1);
    }
    .choicetime .timeDesc{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .hysrule{
        padding:0 15px 0 41px;
        box-sizing:border-box;
        background:rgba(246,246,246,1) url('/static/hysyy/rule.svg') 21px 13px no-repeat;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:40px;
        height:40px;
    }
    .yywrap{
        padding:0 15px;
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
    .timeSelect{padding-top:25px;font-size:34px;font-family:LcdD;color:rgba(34,34,34,1);}
    .gearDate >>> .date_grid > div{
            display:none!important;
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


    /*弹出层*/
    .CustomPopup {
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .CustomPopupContent {
        margin-bottom:45px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s ease;
        transform: translateY(100%);
        z-index: 300;
        background: #ffffff;
        padding: 16px;
        height: 440px;
        border-radius: 8px 8px 0px 0px;
    }
    .CustomPopupContentShow {
        transform: translateY(0);
    }
    .CustomPopupContent .popupTitle{
        text-align: center;
        font-size: 14px;
        font-weight: 500;
    }
    .CustomPopupContent .popupContent{
        margin: 15px 0;
        height: 310px;
        overflow-y: scroll;
    }
    .popup-window .sure {
        bottom: 20px;
        position: absolute;
        width: 296px;
        height: 44px;
        left: 40px;
        font-size: 16px;
    }
</style>

<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator style="border-bottom:1px solid #f6f6f6" title="会议室"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <Tabs class="search2List" value="search" :animated="false">
                <TabPane label="预约搜索" name="search" class="tab1">
                    <div class="yywrap">
                        <!--搜索条件-->
                        <Row class="searchCondition">
                            <Col span="12">
                                <span class="searchDate">预约日期</span>
                            </Col>
                            <Col span="12" align="right" class="searchArrow">
                                <!-- <DatePicker type="date" v-model="$_searchtime_$" :options="optionsdate" :editable="false"></DatePicker> -->
                                <span class="bbb" placeholder="请选择" @click="calendarShow = true"
                                >{{$_searchtime_$}}</span>
                                <calendar :show.sync="calendarShow" @change="handleConfirm" :weekNames="weekNames"  disable-before/>
                            </Col>
                        </Row>
                        <div class="cuttingline"></div>
                        <div class="time">
                            <span>预约时间</span>
                        </div>
                        <Row type="flex" justify="center">
                            <Col class="choicetime" span="7" align="center">
                                <div  id="startTime"  class="timeSelect">{{$_startTime_$}}</div>
                                <!-- <van-popup v-model="showStart" position="bottom">
                                    <van-datetime-picker
                                        v-model="$_startTime_$"
                                        type="time"
                                        @confirm = "startConfirm"
                                        @cancel = "startCancel"
                                    />
                                </van-popup> -->
                                <div class="timeDesc">开始时间</div>
                            </Col>
                            <Col class="choicetime1" span="4" align="center">至</Col>
                            <Col class="choicetime" span="7" align="center">
                                <div id="endTime" class="timeSelect">{{$_endTime_$}}</div>
                                <!-- <div class="timeSelect" @click="showEnd = true">{{$_endTime_$}}</div>
                                <van-popup v-model="showEnd" position="bottom">
                                    <van-datetime-picker
                                        v-model="$_endTime_$"
                                        type="time"
                                        @confirm = "endConfirm"
                                        @cancel = "endCancel"
                                    />
                                </van-popup> -->
                                <div class="timeDesc">结束时间</div>
                            </Col>
                        </Row>

                        <Button type="primary" long class="searchBtn" @click="$_toSearchList_$()">搜索</Button>
                    </div>
                    <div class="hysrule" @click="showCustomPopupClick">会议室预约规则 》</div>
                </TabPane>
                <TabPane label="会议室列表" name="list" style="padding: 0;background-color: #f6f6f6">
                    <Tabs v-if="hysData.length > 0" class="large2little" value="large" :animated="false">
                        <TabPane icon="social-apple" name="large">
                            <ul class="list">
                                <li class="listCard" v-for='(item,index) in hysData' :key="index">
                                    <div class="image">
                                        <img v-if="item.images.length>0" :src="item.images[0].imageUrl | imgsrc" alt="">
                                        <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg" alt="">

                                        <div class="shadow"  style="overflow:hidden;">
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
                                                <Button type="primary" @click="$_toDetails_$(item)">去预约</Button>
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
                                            <img v-if="item.images.length>0" :src="item.images[0].imageUrl | imgsrc" alt="">
                                            <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg" alt="">
                                        </Col>
                                        <Col span="18" class="shadow">

                                            <Row>
                                                <Col span="14" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 18px;font-weight:500;color:rgba(51,51,51,1);"><span>{{item.name}}</span></Col>
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
                                                <Button type="primary" @click="$_toDetails_$(item)">去预约</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            </ul>
                        </TabPane>
                    </Tabs>

                    <div class="divNoList" v-else>
                        <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                        <div class="nolist">目前没有会议室哦~</div>
                    </div>
                </TabPane>
            </Tabs>

        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul>
                <li>
                    <img class="footerIcon" src="/static/hysyy/hysyy1.svg" alt="">
                    <span class="active">会议室预约</span>
                </li>
                <span style="border-left: 1px solid #ccc; height:20px;margin-top: 15px; float: left"></span>
                <li @click="$_yyjl_$">
                    <img class="footerIcon" src="/static/hysyy/yyjl2.svg" alt="">
                    <span>预约记录</span>
                </li>
            </ul>
        </div>


        <div class="popup-window">
            <!-- 弹出层 -->
            <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
            <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
                <div class="popupTitle">会议室预约规则</div>
                <div class="popupContent" v-html="meetingRule"></div>
                <Button class="sure" shape="circle" type="primary" long @click="maskClick">确定</Button>
            </div>
        </div>
    </div>

</template>

<script>

    import navigator from '../public/navigator';
    // import dataPicker from 'vue-ios-datepicker'
    import dataPicker from '../public/dataPicker/dataPicker'
    import calendar from '../public/calendar'
    import Date from '../../../../libs/date'
    import {Indicator} from 'mint-ui';
    export default {
        components: {
            navigator,
            calendar,
            [Indicator.name]:Indicator
        },
        data() {
            return {
                nowTime: '',
                weekNames:['一', '二', '三', '四', '五', '六', '日'],
                $_thisUserInfo_$: {},  //用户信息
                hysData: [], // 会议室列表数据
                $_searchname_$: '', //搜索会议室名称
                $_searchtime_$: '', //预约会议室时间
                $_startTime_$: '',  //会议开始时间
                $_endTime_$: '',  //会议结束时间
                $_peopleNumA_$: '', //最少容纳人数
                $_peopleNumB_$: '', //最多容纳人数
                calendarShow: false, // 选择日期插件
                //不能预约的日期
                optionsdate: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                showStart: false,
                showEnd: false,

                showCustomPopup: false,
                meetingRule: '',  //会议室预约规则
            }
        },
        methods: {
            // 弹窗
            showCustomPopupClick() {
                this.showCustomPopup = true;
            },

            maskClick() {
                this.showCustomPopup = false;
            },
            // 时间处理
            handle(date){
            	date = new Date(date);
            	let time = [date.getHours(), date.getMinutes()];
            	if(time[1] % 5 >0){
            		time[1] += 5 - time[1] % 5;
            		if(time[1] >= 60){
            			time[1] -= 60;
			            time[0] ++;
                    }
                }
            	return time.map(item=>item<10?`0${item}`:item).join(':');
            },
            // 日期弹窗确认
            handleConfirm(date) {
                // 输出格式化后的时间
                this.$_searchtime_$ = date.format('YYYY-MM-DD');
                this.calendarShow = false;
            },
            // 获取会议室列表
            $_list_$() {
               Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
                let sendData = {};
                if (this.$_searchname_$ || this.$_peopleNumA_$ || this.$_peopleNumB_$) {
                    sendData.name = this.$_searchname_$;
                    sendData.peopleNumberB = this.$_peopleNumA_$;
                    sendData.peopleNumberE = this.$_peopleNumB_$;
                }

                sendData.pageSize = 999;
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/zone/zone/${this.$_thisUserInfo_$.zoneId}/meetings`,
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                           Indicator.close(); 
                            this.hysData = rsp.data.data.records;
                        } else {
                            this.$Message.error('获取数据失败!');
                        }
                    }
                })
            },

            //进入会议室详情页面
            $_toDetails_$(item) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-hysyy-xq', {id: item.id});
            },
            //进入搜索结果页面
            $_toSearchList_$(){
                let item = {};
                item.searchtime = this.$_searchtime_$;
                item.startTime = this.$_startTime_$;
                item.endTime = this.$_endTime_$;

                this.$root.$_Route_$('user', 'mobile', 'ygsy-hysyy-search', {info:item});
            },
            $_yyjl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-hysyy-yyjl')
            },
            //初始化开始时间
            timer() {
                this.$_startTime_$ = this.handle()
                this.$_endTime_$ = this.handle( new Date().getTime() + 1800000)
                // this.endMinHour = hour1
                // this.endMinMinute = five1
            },
            // 实时监控时间变化
            
            nowTime1(){
                this.timer()
                this.nowTime = setInterval(this.nowTime1,60*1000);
            },
            // 初始化时间
            date() {
                 var date = new Date();
                var seperator1 = "-";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                //月
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                //日
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                this.$_searchtime_$ = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            },
            // 结束时间
            time(){
                var time = this.$_searchtime_$ +' ' + this.$_endTime_$
                var currentTime = time.replace(/\-/g,'/')
                let self = this
                let calendar = new dataPicker();
                calendar.init({
                'trigger': '#endTime', /*按钮选择器，用于触发弹出插件*/
                'type': 'time',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
                'currentTime': currentTime,
                'onSubmit':function(){/*确认时触发事件*/
                    var time = self.$_searchtime_$ +' ' + calendar.value
                    var starttime = self.$_searchtime_$ +' ' + self.$_startTime_$
                    var maxTime = self.$_searchtime_$ + ' '+ "23:45"
                    // 如果当前时间在开始时间之前 如果当前时间与开始时间差不足30分钟
                    if(new Date(time).getTime() - new Date(starttime).getTime() < 1800000){
                        var date = new Date(starttime).getTime() + 1800000;
                        self.$_endTime_$ = self.handle(date);
                        // 如果结束时间在23:45之后
                    }else if(new Date(time) > new Date(maxTime)){
                        self.$_endTime_$ = self.handle(new Date(maxTime).getTime());
                        if(new Date(time).getTime() - new Date(starttime).getTime() < 1800000){
                            self.$_startTime_$ = self.handle(new Date(maxTime).getTime() - 1800000)
                        }
                        
                    }else{
                        var date = new Date(time);
                        self.$_endTime_$ = self.handle(date)
                    }
                },
                'onClose':function(){/*取消时触发事件*/
                }
                });
            },
            // 开始时间
            time1(){
                var time = this.$_searchtime_$ +' ' + this.$_startTime_$
                var currentTime = time.replace(/\-/g,'/')
                let self = this
                let calendar = new dataPicker();
	            calendar.init({
		            'trigger': '#startTime', /*按钮选择器，用于触发弹出插件*/
                    'type': 'time',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
                    'currentTime': currentTime,
		            'onSubmit': function (...value) {/*确认时触发事件*/
                        var time = self.$_searchtime_$ + ' ' + calendar.value
                        var maxTime = self.$_searchtime_$ + ' '+ "23:15"
                        console.log(maxTime)
			            var endtime = self.$_searchtime_$ + ' ' + self.$_endTime_$
			            // 如果开始时间在当前时间之前
			            if (new Date(time) < new Date()) {
				            // 如果结束时间与当前时间差大于30
				            if (new Date(endtime).getTime() - new Date().getTime() > 1800000) {
					            self.$_startTime_$ = self.handle(new Date())
				            } else {
					            self.timer()
                            }
                            // 开始时间最大为23:15
			            } else if(new Date(time) > new Date(maxTime)){
                            self.$_startTime_$ = self.handle(new Date(maxTime))
                            self.$_endTime_$ = self.handle(new Date(maxTime).getTime() + 1800000);

                        }else {
				            self.$_startTime_$ = self.handle(new Date(time))
				            // 如果此时开始时间与结束时间之间不足30分钟
				            if (new Date(endtime).getTime() - new Date(time).getTime() < 1800000) {
					            self.$_endTime_$ = self.handle(new Date(time).getTime() + 1800000);
				            }
			            }

		            }
	            });
            },

            //获取会议室预约规则
            getMeetingRule(){
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/zone/zone/${this.$_thisUserInfo_$.zoneId}/meeting/rule`,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if(rsp.data.data){
                                this.meetingRule = rsp.data.data.description;
                            }
                        } else {
                            this.$Message.error('获取会议室规则失败!');
                        }
                    }
                })
            }


        },
        mounted() {
            this.nowTime = setInterval(this.timer,30*1000);
            this.time();
            this.time1()
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            this.timer();
            this.date();
            this.getMeetingRule();
            
            this.$_list_$()
        },
        beforeDestroy() {
            clearInterval(this.nowTime);        
            this.nowTime = null;
        }
    }
</script>
