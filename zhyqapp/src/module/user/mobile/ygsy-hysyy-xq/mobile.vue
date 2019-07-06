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
    }

    .wrap {
        box-sizing: border-box;
        font-size: 14px;
        background-color:#F6F6F6;
        color: #666;
    }

    .image {
        position: relative;
        padding: 17px 16px 20px 20px;
        border-bottom: 1px solid #E5E5E5;
        background-color:#fff;
    }

    .image img {
        width:72px;
        height:72px;
        border-radius:3px;
    }

    .image .shadow {
        font-family:PingFangSC-Medium;
        padding-left: 13px;
        line-height:1;
    }
    .addressIcon{
         padding-left:18px;
        box-sizing:border-box;
        background:url('/static/hysyy/addressicon.svg') 2px 1px no-repeat;
        background-size:11px 13px;
        line-height:1;
    }
    .addressIcontext{
        font-size:12px;
        line-height:1;
    }
    .yybutton >>>.ivu-btn {
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

    .wrap .meetingTimeTitle {
        font-size: 13px;
        color: #333333;
        line-height: 40px;
        margin-bottom: 2px;
        font-weight: normal;
    }

    .wrap .fuwu{
        padding: 0 0px 0 16px;
        background-color:#fff;
    }
    .wrap .title {
        font-size: 14px;
        color: #333333;
        line-height: 53px;
        height:53px;
        width:86px;
        position:relative;
    }
    .wrap .title .arrow{
        position:absolute;
        top:24px;
        left:64px;
    }

    .wrap .content {
        line-height: 32px;
        padding: 8px 0 8px 0;
    }
    .wrap .basicContent{
        overflow:hidden;
        width:185px;
        padding-top:16px;
    }
    .wrap .basicContent1{
        width:260px;
    }
    .wrap .basicContent .tag{
        display:block;
        float:left;
        width:50px;
        height:20px;
        background:rgba(197,243,250,1);
        border-radius:4px;
        line-height:20px;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,193,222,1);
        text-align:center;
        margin-bottom:12px;
        margin-right:7px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .wrap .basicContent .tag1{
        display:block;
        float:left;
        margin-right:17px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(101,109,114,1);
        padding-left:26px;
        box-sizing:border-box;
        background-repeat:no-repeat;
        background-position: 0px 17px;
        background-size:19px 19px;
        line-height:53px;
        height:53px;
    }
    .wrap .basicContent .tag1:nth-child(3n+3){
        margin-right:0;
    }
    .wrap .teContent{
        width:76px;
        padding-top:12px;
        box-sizing:border-box;
        overflow:hidden;
    }
    .wrap .teContent .telephone{
        display:block;
        width:76px;
        height:28px;
        border-radius:14px;
        border:1px solid rgba(0,193,222,1);
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,193,222,1);
        line-height:28px;
        padding-left:35px;
        box-sizing:border-box;
        background:url("/static/hysyy/telephone.svg") 19px 8px no-repeat;
        background-size:12px 12px;
        text-align:left;
    }
    .title .datetime{
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        position:relative;
        line-height:1;
         /* padding-right:14px;
        display:block;
        box-sizing:border-box;
        background:url('/static/hysyy/rili.svg') right 0px no-repeat;
        background-size:14px 14px; */
    }
    .title .date{
        width:14px;height:14px;
        position:absolute;
        left:85px;
        top:3px;
    }
    .one{font-size: 18px;line-height:1;}
    .two{font-size: 14px;line-height:1;}
    .image1{width:72px;}
    .krn{margin-right:29px;}
    .mar{margin-top:18px;}
    .dz{margin-top:12px;}
    .telebook{width:76px;height:28px;border-radius:14px;display:block;background:#00C1DE;text-align:center;
    line-height:28px;color:#fff;fpnt-size:12px;font-family:PingFangSC-Regular;font-weight:400;
    margin-top:32px;}
    .online{ background:#fff;padding-top:20px;text-align:center;font-size:12px;color:#B3B3B3;font-family:PingFangSC-Regular;
font-weight:400;line-height:20px;}

</style>
<template>
    <div class="container" ref="aa">
        <!-- 头部 -->
        <navigator title="会议室详情" style="border-bottom: 1px solid rgb(236, 236, 236);"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 会议室基础信息 -->
            <Row class="image">
                <Col span="6" class="image1" style="">
                    <img v-if="$_hysmsg_$.images && $_hysmsg_$.images.length>0" :src="$_hysmsg_$.images[0].imageUrl | imgsrc"/>
                    <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg"/>
                </Col>
                <Col span="18" class="shadow">
                    <Row type="flex" align="middle">
                        <Col span="14" class="one" style="font-weight:500;color:rgba(51,51,51,1);"><span>{{$_hysmsg_$.name}}</span></Col>
                        <Col span="10" style="text-align: right"><span class="two"
                                style="color:#FF8E58;font-weight:400;">{{$_hysmsg_$.price*60}}元/时</span>
                        </Col>
                    </Row>
                    <div style="float:left;">
                        <Row type="flex" align="middle" class="mar" style="">
                            <Col span="24" class="addressIcontext" style="font-weight:400;color:rgba(51,51,51,1);">
                                <span class="krn" style="">可容纳{{$_hysmsg_$.peopleNumber}}人</span>
                                <span>{{$_hysmsg_$.area}}平</span>
                            </Col>
                        </Row>
                        <Row type="flex" align="middle" class="dz" style="">
                            <Col class="addressIcon" span="24" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                <span class="addressIcontext" style="font-weight:400;color:rgba(101,109,114,1);">{{$_hysmsg_$.address}}</span>
                            </Col>
                            <!-- <Col span="12" align="right">
                                <Button type="primary" @click="$_tohysyd_$">预订</Button>
                            </Col> -->
                        </Row>
                    </div>
                    <div class="yybutton" style="float:right;">
                        <Button type="primary" v-if="$_hysmsg_$.onlineBooking" @click="$_tohysyd_$">预订</Button>
                        <a v-else :href="'tel:' + 17610825271" class="telebook">预订</a>
                    </div>
                </Col>
            </Row>
            <!--基础服务 -->
            <Row class="fuwu" style="border-bottom: 1px solid #E5E5E5;" v-if="$_length_$">
                <Col span="4" align="left" class="title">
                    基础服务
                    <div v-if="$_length_$ <= 3">
                        <img v-show="$_showAllBasictags_$" class="arrow" src="/static/hysyy/arrowGray.svg" alt="">
                    </div>
                    <div v-else @click="showAllBasic">
                        <img v-show="!$_showAllBasictags_$" class="arrow" src="/static/hysyy/arrowBlue.svg" alt="">
                        <img v-show="$_showAllBasictags_$" class="arrow" style="transform:rotate(180deg)"
                        src="/static/hysyy/arrowBlue.svg" alt="">
                     </div>
                    <!-- <img class="arrow" src="/static/hysyy/arrowGray.svg" alt=""> -->
                </Col>
                <Col span="20" class="basicContent basicContent1" style="padding-top:0;">
                    <!-- <div v-for="(item,index) in $_basictags_$" :key="index"> -->
                        <span  v-for="(item,index) in $_basictags_$" :key="index" class='tag1' :style="{'background-image':`url(/static/hysyy/${item.icon})`}"
                        >{{item.tagName}}</span>
                    <!-- </div> -->
                </Col>
            </Row>
            <!-- 增值服务 -->
            <Row  class="fuwu" style="margin-bottom:10px;" v-if="this.$_tags_$.length">
                <Col span="8" align="left" class="title">
                    增值服务
                    <div v-if="this.$_alltags_$.length <= 3">
                        <img v-show="this.$_showAlltags_$" class="arrow" src="/static/hysyy/arrowGray.svg" alt="">
                    </div>
                    <div v-else @click="showAll">
                        <img v-show="!this.$_showAlltags_$" class="arrow" src="/static/hysyy/arrowBlue.svg" alt="">
                        <img v-show="this.$_showAlltags_$" class="arrow" style="transform:rotate(180deg)"
                        src="/static/hysyy/arrowBlue.svg" alt="">
                     </div>
                </Col>
                <Col span="10" class="basicContent">
                    <div v-for="(item,index) in $_tags_$" :key='index'>
                        <span class='tag'>{{item}}</span>
                    </div>
                </Col>
                <Col span="6" align="middle" class="teContent">
                    <a :href="'tel:' + 17610825271" class="telephone">
                        定制
                    </a>
                </Col>
            </Row>
            <!-- 时间轴 -->
            <Row v-if="$_hysmsg_$.onlineBooking" style="background:#fff;">
                <Col span="24">
                    <date-slider style="font-size:13px; color:#333333;" scroll
                                 :step="$_sliderStep_$"
                                 :min="$_sliderMinTime_$"
                                 :max="$_sliderMaxTime_$"
                                 :use="$_sliderUse_$"
                                 :today="$_isToday_$"
                                 v-model="$_choiceTime_$"
                                 :advanceTime="advanceTime">
                        <div slot="title">
                            <div @click="calendarShow = true">
                                <span class="datetime">
                                    <span>{{$_datetime_$}}</span>
                                    <img class="date" src="/static/hysyy/rili.svg" alt="">
                                </span>
                            </div>
                            <calendar :show.sync="calendarShow" @change="handleConfirm" :weekNames="weekNames" disable-before/>
                        </div>
                    </date-slider>
                </Col>
            </Row>
            <div class="online" v-else>此会议室暂不支持在线预约</div>
        </div>
    </div>
</template>

<script>
    import controler from "./controler.js";
    import navigator from '../public/navigator';
    import dateSlider from '../public/date-slider/vertical';
    import {DatetimePicker,Indicator} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import calendar from '../public/calendar'
    import Date from '../../../../libs/date'

    export default {
        mixins: [controler],
        components: {
            navigator,
            dateSlider,
            [DatetimePicker.name]: DatetimePicker,
             [Indicator.name]:Indicator,
            calendar
        },
        computed:{
	        $_isToday_$(){
		        return this.$_datetime_$ === this.$_today_$;
            }
        },
        data() {
        	let date = new Date()
        	let $_today_$ = [date.getFullYear(), date.getMonth()+1, date.getDate()].map(item=>item<10?'0'+item:item).join('-');
	        return {
	        	$_today_$,
                weekNames:['一', '二', '三', '四', '五', '六', '日'],
                calendarShow: false, // 选择日期插件
                $_userInfo_$: '', //用户信息
                $_hysmsg_$: {},  //会议室信息
                $_jt_$: '',  //时间选择器的开始时间
                $_datetime_$: this.$root.inparams.date||$_today_$, //选择预约时间
                pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear();
                    let m = date.getMonth() + 1;
                    m = m < 10 ? '0' + m : m;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    return y + '-' + m + '-' + d
                },
                $_choiceTime_$:[], // 搜索后进入详情需传入时间
                $_sliderMinTime_$: '06:00', //会议室开放开始时间
                $_sliderMaxTime_$: '23:59', //会议室开放结束时间
                $_sliderStep_$: 5,   //续订的最小时间（分钟）
                $_sliderValue_$: [],   //选择结果
                $_sliderUse_$: [],   //会议室使用情况字符串
                $_sliderSuccess_$: false,  //是否可以立即预约
                $_tags_$:[], // 增值服务临时数组
                $_alltags_$:[], // 增值服务数组
                $_showAlltags_$: false,  // 是否展示全部增值服务
                $_basictags_$:[], // 基础服务临时数组
                $_showAllBasictags_$: false,  // 是否展示全部基础服务
                $_length_$:0,
                info:{},
                advanceTime:'', // 会议室需要提前多长时间预约
            };
        },
        methods: {
            // 日期弹窗确认
            handleConfirm(date) {
                // 输出格式化后的时间
                this.$_datetime_$ = date.format('YYYY-MM-DD');
                this.calendarShow = false;
                this.$_changeDate_$();
            },
            //获取会议室相关信息
            $_hysinfo_$() {
                let meetingId = this.$root.inparams.id;
                // console.log(meetingId)
                this.$_sendQuery_$({
                    method:"POST",
                    url:`${this.$_global_$.serverPath}/zone/zone/${this.$_userInfo_$.zoneId}/meeting/${meetingId}/detail`,
                    data:{},
                     headers: {
                        "Content-type": "application/json"
                    }
                }).then((res) => {
                    if(res.status === 200){
                        if(res.data.code === 0){

                            this.$_hysmsg_$ = res.data.data.meetingRoom;
                            this.advanceTime = res.data.data.meetingRoom.meetingConfig.advanceTime;
                             Indicator.close();
                            this.$_alltags_$ = this.$_hysmsg_$.tags == "" ? [] : this.$_hysmsg_$.tags.split(',')
                            if(this.$_alltags_$.length>3){
                                this.$_tags_$ = this.$_alltags_$.slice(0,3);
                            }else{
                                this.$_tags_$ = this.$_alltags_$
                            }
                            this.$_length_$ = this.$_hysmsg_$.standardTags == [] ? 0 : this.$_hysmsg_$.standardTags.length
                            if(this.$_length_$>3){
                                this.$_basictags_$ = this.$_hysmsg_$.standardTags.slice(0,3);
                            }else{
                                this.$_basictags_$ = this.$_hysmsg_$.standardTags
                            }
                            // if(this.$_hysinfo_$.slidertime){
                            //     this.$_choiceTime_$ = this.$_hysinfo_$.slidertime
                            // }
                            if(this.$_hysinfo_$.datetime){
                                this.$_datetime_$ = this.$_hysinfo_$.datetime
                            }
                        }
                    }
                })

            },
            // 展示所有增值服务
            showAll(){
                if(this.$_showAlltags_$ == false){
                    this.$_showAlltags_$ = true;
                    this.$_tags_$ = this.$_alltags_$;
                }else{
                    this.$_showAlltags_$ = false;
                    this.$_tags_$ = this.$_alltags_$.slice(0,3);
                }
            },
            showAllBasic(){
                if(this.$_showAllBasictags_$ == false){
                    this.$_showAllBasictags_$ = true;
                    this.$_basictags_$ = this.$_hysmsg_$.standardTags;
                }else{
                    this.$_showAllBasictags_$ = false;
                    this.$_basictags_$ = this.$_hysmsg_$.standardTags.slice(0,3);
                }
            },
            error(...args) {
                this.$_sliderSuccess_$ = false;
                let errinfo = args[0].conflict;
                if (errinfo.state != 0) {
                    Toast(errinfo.start + '——' + errinfo.end + '不能被预约，请重新选择');
                }
            },
            //选择预约时间
            $_changeDate_$() {
                let id = this.$root.inparams.id;
                // console.log(id)
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/zone/zone/` + this.$_userInfo_$.zoneId + `/meeting/` + id + `/detail`,
                    data: {
                        "reserveDate": this.$_datetime_$
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {

                            let timeConfig = rsp.data.data.meetingRoom.meetingConfig;
                            this.$_sliderMinTime_$ = timeConfig.startTime;  //开始时间
                            this.$_sliderMaxTime_$ = timeConfig.endTime;    //结束时间
                            this.$_sliderStep_$ = timeConfig.intervalTime * 1;  //续订的最小时间
                            if (rsp.data.data.meetingRecord) {
                                this.$_sliderUse_$ = rsp.data.data.meetingReserveList;
                            } else {
                                this.$_sliderUse_$ = []
                                // let startArr = this.$_sliderMinTime_$.split(':');  //开始时间转数组
                                // let endArr = this.$_sliderMaxTime_$.split(':');  //结束时间转数组
                                // let hourDiff = Math.abs(endArr[0] - startArr[0]);   //小时差值
                                // let minuteDiff = Math.abs(endArr[1] - startArr[1]); //分钟差值
                                // let timeStep = (hourDiff * 60 + minuteDiff) / 5;  //时间差值的步长值

                                // this.$_sliderUse_$ = "0".repeat(timeStep);

                            }
                        }
                    }
                })
            },
            //选择好预约时间后
            $_sliderInput_$(val) {
                this.$_sliderSuccess_$ = true;
                this.$_sliderValue_$ = val;
            },

            //进入填写预约信息界面
            $_tohysyd_$() {
                // if (this.$_sliderSuccess_$) {
                    this.$_hysmsg_$.slidertime = this.$_choiceTime_$;
                    this.$_hysmsg_$.datetime = this.$_datetime_$;
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-hysyy-hysyd', {info: this.$_hysmsg_$});
                // }
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
              Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
            this.$_hysinfo_$();
            if(this.$root.inparams.sliderTime){
                this.$_choiceTime_$ = this.$root.inparams.sliderTime
            }
            //今天日期
            this.$_jt_$ = new Date(this.$_datetime_$);

            this.$_changeDate_$();
        }
    };
</script>
