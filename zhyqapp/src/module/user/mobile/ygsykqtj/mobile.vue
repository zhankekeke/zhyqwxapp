<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    .date12138 {
        background-color: #fff;
        color: #333;
    }

    .date12138 .wh_content_all {
        background-color: #fff !important;
        color: #333;
    }

    .date12138 .wh_item_date, .wh_top_changge {
        background-color: #fff;
        color: #333;
    }

    .date12138 .wh_content_item, .wh_content_item_tag {
        background-color: #fff;
        color: #333 !important;
    }

    .date12138 .wh_top_changge li {
        color: #333 !important;
    }

    .date12138 .wh_jiantou1 {
        border-top: 2px solid #333 !important;
        border-left: 2px solid #333 !important;
    }

    .date12138 .wh_jiantou2 {
        border-top: 2px solid #333 !important;
        border-right: 2px solid #333 !important;
    }
</style>
<style scoped>
    >>> .vertical-center-modal {
        width: 80%;
        margin: 30% auto;
    }
    >>> .ivu-modal {
        top: 0;
    }
    >>> .ivu-modal-footer {
        border-top: none !important;
        padding: 0;
        text-align: right;
    }
    .container {
        overflow: auto;
        position: fixed;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background: #f6f6f6;
    }

    .header {
        height: 50px;
        left: 0;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: rgb(2, 150, 250);
        z-index: 99;
        color: #fff;
    }

    .footer .active {
        color: #029bfa;
    }

    .wrap img {
        width: 100%;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 10px;
    }

    .wrap2 {
        box-sizing: border-box;
        padding: 50px 0px 75px 0px;
        font-size: 14px;
        background: rgb(2, 150, 250);
        color: #666;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 49%;
        text-align: center;
    }

    .footer ul li img {
        width: 25px;
        height: 25px;
    }

    .footer ul li p {
        height: auto;
    }

    .footer {
        font-size: 14px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 0 15px 0;
        z-index: 9999;
        background: #fff;
        /*border-top: 1px solid #f1f1f1;*/
    }

    .box {
        margin: 10px;
        background: #fff;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 15px 10px;
    }

    .box .img {
        border-radius: 100px;
        margin-top: 10%;
        width: 40px;
        height: 40px;
        background-color: #eeeeee;
    }

    .box3 {
        padding: 20px 15px 20px 15px;
        background: #fff;
        box-sizing: border-box;
        width: 90%;
        border-radius: 10px;
        margin: -70px auto;
    }

    .box3 .img {
        width: 40px;
        height: 40px;
        border-radius: 100px;
        background-color: #eeeeee;
        margin-top: 10px;
    }

    .box2 {
        background: #fff;
    }

    .bg {
        box-sizing: border-box;
        padding: 15px 20px;
        color: #666;
        font-size: 14px;
        background: #f2f2f2;
        padding-bottom: 90px;
    }

    .bg .btn {
        float: right;
    }

    .bg p {
        padding: 6px 0;
    }

    .bg .btn button {
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 12px;
    }

    .bg .success {
        background: #3dcd00;
    }

    .bg .error {
        background: #f19b00;
        margin-left: 10px;
    }

    .xuanze {
        width: 90%;
        margin: 0 auto;
    }

    .xuanze li {
        float: left;
        width: 30%;
        height: 26px;
        background-color: #ffffff;
        border-radius: 100px;
        margin-top: -10px;
        font-size: 14px;
        color: rgb(102, 102, 102);
        line-height: 26px;
        padding-left: 12px;
    }

    .xinxi {
        width: 90%;
        margin: 15px auto;
        background-color: white;
        padding-top: 10px;
        height: 94px;
    }

    .xinxi li {
        width: 33%;
        text-align: center;
        float: left;
        height: 28px;
    }

    .xinxi li img {
        width: 20px;
        height: 20px;
        margin-top: 5px;

    }

</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <div class='header'>
            <Icon type="chevron-left" class='back' @click='$_back_$'></Icon>
            考勤
        </div>
        <!-- 统计 -->
        <div class="wrap2"></div>
        <div class="box3">
            <Row>
                <Col span="18">
                    <p style="color: rgb(2,155,250);font-weight: bold">{{$_myData_$.name}}</p>
                    <p style="font-size:0.3641rem;margin-top: 0.2801rem; color: rgb(51,51,51)">
                        <span>考勤组：</span>
                        <span v-if="$_myRule_$.orgId === 0">公司考勤</span>
                        <span v-else>部门考勤</span>
                    </p>
                </Col>
                <Col span="5">
                    <img class="img"
                         :src="$_myData_$.faceUrl">
                </Col>
            </Row>
        </div>
        <div style="clear: both"></div>
        <Row style="padding-top:0.4201rem; background-color: #f6f6f6; margin-top: 2.2409rem;">
            <ul class="xuanze">
                <li>出勤<span style=" font-weight: bold; float: right;margin-right: 15%">{{$_chuqin_$}}</span></li>
                <li style="margin-left: 5%; margin-right: 5%">休息<span
                        style=" font-weight: bold; float: right;margin-right: 15%">{{$_xiuxi_$}}</span></li>
                <li @click="$_changeDate_$">
                    <Icon style="color: rgb(2,155,250)" type="ios-calendar-outline" size="16px"></Icon>
                    &nbsp;{{$_yue_$}}
                </li>
            </ul>
            <div style="clear: both"></div>
            <ul class="xinxi">
                <li>
                    <span style="color: rgb(102, 102, 102); font-size: 0.3922rem;">迟到</span>
                    <br/>
                    <span style="color:rgb(2,155,250); font-weight: bold ;margin-top: 0.1401rem;">{{$_chidao_$}}</span>
                    <br/>
                    <span style="width: 100%;margin-top:0.1401rem;height: 0.8403rem; background-color: rgb(2,155,250); display: block"><img
                            src="/static/kqtj/cd.png"/></span>
                </li>
                <li style="margin-left: 0.5%;margin-right: 0.5%">
                    <span style="color: rgb(102, 102, 102); font-size: 0.3922rem;">早退</span>
                    <br/>
                    <span style="color:rgb(2,155,250); font-weight: bold ;margin-top: 0.1401rem;">{{$_zaotui_$}}</span>
                    <br/>
                    <span style="width: 100%;margin-top:0.1401rem;height: 0.8403rem; background-color: rgb(2,155,250); display: block"><img
                            src="/static/kqtj/zt.png"/></span>
                </li>
                <li>
                    <span style="color: rgb(102, 102, 102); font-size: 0.3922rem;">缺卡</span>
                    <br/>
                    <span style="color:rgb(2,155,250); font-weight: bold ;margin-top: 0.1401rem;">{{$_queka_$}}</span>
                    <br/>
                    <span style="width: 100%;margin-top:0.1401rem;height: 0.8403rem; background-color: rgb(2,155,250); display: block"><img
                            src="/static/kqtj/qk.png"/></span>
                </li>
            </ul>
            <!--<div style="width: 100%; height:40px; line-height: 40px; text-align: center;color: rgb(102,102,102);font-size: 14px; z-index: 999;background-color:rgb(246,246,246);float: left; margin-top: -10px"></div>-->
            <div style="clear: both"></div>
            <div style="width: 90%; margin: 2.4rem auto; height: 6.933rem; background-color: #fff;z-index: 11;position: relative;">
                <ec-chart style="margin-top: -2.4rem;" :chart="bar_fwqs"></ec-chart>
                <div style=" width: 100%; height: 1.067rem;line-height: 1.067rem; background-color: rgb(246,246,246); position: absolute;top:0;left: 0; color:rgb(102,102,102); font-size: 14px;text-align: center ">
                    考勤总览
                </div>
            </div>
        </Row>
        <div class='footer'>
            <ul style="border: 1px solid #999; width: 76%;border-radius: 50px; margin: 0 auto;background-color: #fff">
                <li @click="$_show_$('kq')"
                    style="width:45%; height: 1.0084rem; background-color: #fff; color: #333;text-align: center;line-height:1.0084rem;">
                    考勤
                </li>
                <li @click="$_show_$('tj')"
                    style="background-color:#333;width:55%; height: 1.0084rem; border-radius:100px;color:#fff;text-align: center;line-height: 1.0084rem;">
                    统计
                </li>
            </ul>
        </div>
        <Modal class-name="vertical-center-modal" v-model="modal1" :closable="false">
            <RadioGroup v-model="xzdate" @on-change="$_yuefen_$" vertical>
                <Radio v-for="item in $_monthList_$" :label="item.label"></Radio>
            </RadioGroup>
            <div slot="footer" class="dialog-footer"></div>
        </Modal>
    </div>
</template>

<script>
    import controler from './controler.js';
    import Calendar from '../public/calendar/index';
    import ecChart from '../../../../echarts/chart';

    export default {
        mixins: [controler],
        components: {
            Calendar,
            ecChart
        },
        name: "goods-count",
        data() {
            return {
                $_yue_$: '',
                $_chuqin_$: 0,
                $_zaotui_$: 0,
                $_chidao_$: 0,
                $_xiuxi_$: 0,
                $_queka_$: 0,
                xzdate: "",
                modal1: false,
                $_myData_$: '',
                markday: [],
                $_search_$: '',
                $_tj_$: [],
                $_myRule_$: '',
                $_todayInfo_$: '',
                bar_fwqs: {
                    id: "bar_chartDataOne",
                    type: "moreLine",
                    title: "考勤总览",
                    color: ['#0296FA'],
                    xmes: ['出勤', '休息', '迟到', '早退', '缺卡'],
                    data: []
                },
                $_monthList_$: []
            }
        },
        created() {
            this.$_nowMonthData_$();
        },
        methods: {
            $_yuefen_$(res) {
                let sday = res.split('-');
                let lday = this.$_getLastDay_$(sday[0], sday[1]);
                if (sday[1] < 10) {
                    sday[1] = '0' + sday[1];
                }
                let startdate = sday[0] + '-' + sday[1] + '-01';
                let lastdate = sday[0] + '-' + sday[1] + '-' + lday;
                this.$_yue_$ = sday[0] + '.' + sday[1];
                let date3 = new Date();
                let mon = date3.getMonth() + 1;
                if (mon == sday[1]) {
                    startdate = '';
                    lastdate = '';
                }
                this.$_nowMonthData_$(startdate, lastdate);
                this.modal1 = false
            },
            $_changeDate_$() {
                this.modal1 = true
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_nowMonthData_$(sDay, lDay) {
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                //当天日期
                let date3 = new Date();
                let nowDay = date3.getFullYear() + "年" + (date3.getMonth() + 1) + "月" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate()) + '日';
                this.$_myData_$ = userInfo;
                this.$_myData_$.time = nowDay;
                let data = {};
                if (!sDay) {
                    //当月第一天日期
                    let date1 = new Date();
                    date1.setDate(1);
                    let firstDay = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + (date1.getDate() < 10 ? "0" + date1.getDate() : date1.getDate());
                    //当天日期
                    let date3 = new Date();
                    let nowDay = date3.getFullYear() + "-" + (date3.getMonth() + 1) + "-" + (date3.getDate() - 1 < 10 ? "0" + date3.getDate() - 1 : date3.getDate() - 1);
                    this.$_yue_$ = date3.getFullYear() + "." + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1));
                    data.startDate = firstDay;
                    data.endDate = nowDay;
                } else {
                    data.startDate = sDay;
                    data.endDate = lDay;
                }
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/attendance/employee/records`,
                    data: data,
                    headers: {"Content-type": "application/json"}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            let tmpData = [];
                            this.$_chuqin_$ = 0;
                            this.$_zaotui_$ = 0;
                            this.$_chidao_$ = 0;
                            this.$_xiuxi_$ = 0;
                            this.$_queka_$ = 0;
                            for (let key in res.data.data) {
                                if (!res.data.data[key]) {
                                    this.$_xiuxi_$++;
                                } else {
                                    this.$_chuqin_$++;
                                    if (res.data.data[key].amStatus === 1) {
                                        this.$_chidao_$++;
                                    }
                                    if (res.data.data[key].pmStatus === 1) {
                                        this.$_zaotui_$++;
                                    }
                                    if (res.data.data[key].amStatus === 2 || res.data.data[key].pmStatus === 2) {
                                        this.$_queka_$++;
                                    }
                                }
                            }
                            this.bar_fwqs.data = [];
                            this.bar_fwqs.data.push({
                                name: '',
                                type: 'line',
                                data: [this.$_chuqin_$, this.$_xiuxi_$, this.$_chidao_$, this.$_zaotui_$, this.$_queka_$],
                            });
                            this.markday = tmpData;
                        } else {
                            let tmpData = [];
                            this.$_chuqin_$ = 0;
                            this.$_zaotui_$ = 0;
                            this.$_chidao_$ = 0;
                            this.$_xiuxi_$ = 0;
                            this.$_queka_$ = 0;
                            this.bar_fwqs.data = [];
                            this.bar_fwqs.data.push({
                                name: '',
                                type: 'line',
                                data: [this.$_chuqin_$, this.$_xiuxi_$, this.$_chidao_$, this.$_zaotui_$, this.$_queka_$],
                            });
                            this.markday = tmpData;
                        }
                    }
                });

                //请求考勤规则
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/attendance/employee/rule`,
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.$_myRule_$ = res.data.data;
                        }
                    }
                });
                //请求个人信息
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/user/user/${userInfo.id}`,
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.$_monthList_$ = [];
                            let srartTime = res.data.data.createDate.substring(0, 7);
                            let endTime = date3.getFullYear() + "-" + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1));
                            let date = this.getMonthBetween(srartTime, endTime);
                            for (let i = 0; i < date.length; i++) {
                                this.$_monthList_$.push({
                                    label: date[i],
                                })
                            }
                        }
                    }
                });
                this.clickDay();
            },
            clickDay(data = '') {
                let newDate = '';
                if (data) {
                    data = data.split("/");
                    newDate = data[0] + '-' + (data[1] < 10 ? '0' + data[1] : data[1]) + '-' + (data[2] < 10 ? '0' + data[2] : data[2]);
                } else {
                    //当天日期 -1的日期
                    let date3 = new Date();
                    newDate = date3.getFullYear() + "-" + (date3.getMonth() + 1) + "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
                }
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/attendance/employee/detail`,
                    data: {
                        queryDate: newDate
                    },
                    headers: {"Content-type": "application/json"}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            if (res.data.data) {
                                this.$_todayInfo_$ = res.data.data;
                            } else {
                                this.$_todayInfo_$ = {
                                    "id": 1,
                                    "attendanceDate": "2018-09-09",
                                    "firstTime": "11:15",
                                    "lastTime": "19:00",
                                    "workingHours": 465,
                                    "amStatus": 0,
                                    "pmStatus": 2,
                                    "ruleId": 7,
                                    "createTime": "2018-12-09 01:15:42"
                                }
                            }
                        }
                    }
                })
            },
            changeDate(res) {
                let arr = res.split("/");
                let year = arr[0];
                let mounth = arr[1];
                let day = this.$_getLastDay_$(year, mounth);
                let lastMounthDay = year + '-' + (mounth < 10 ? '0' + mounth : mounth) + '-' + day;
                let firstMounthDay = year + '-' + (mounth < 10 ? '0' + mounth : mounth) + '-01';

                //当月第一天日期
                let date1 = new Date();
                date1.setDate(1);
                let firstDay = date1.getFullYear() + "-" + ((date1.getMonth() + 1) < 10 ? "0" + (date1.getMonth() + 1) : (date1.getMonth() + 1)) + "-" + (date1.getDate() < 10 ? "0" + date1.getDate() : date1.getDate());
                //当天日期
                let date3 = new Date();
                let nowDay = date3.getFullYear() + "-" + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1)) + "-" + (date3.getDate() - 1 < 10 ? "0" + date3.getDate() - 1 : date3.getDate() - 1);
                if (firstMounthDay == firstDay) {
                    lastMounthDay = nowDay
                }
                this.$_nowMonthData_$(firstMounthDay, lastMounthDay);
            },
            $_getLastDay_$(year, month) {
                let new_year = year;    //取当前的年份
                let new_month = month++;//取下一个月的第一天,方便计算(最后一天不固定)
                if (month > 12) {
                    new_month -= 12;        //月份减
                    new_year++;            //年份增
                }
                let new_date = new Date(new_year, new_month, 1);                //取当年当月中的第一天
                return (new Date(new_date.getTime() - 1000 * 60 * 60 * 24)).getDate();//获取当月最后一天日期
            },
            deleteT(source, location, len) {
                return source.substring(0, location) + source.substring(location + len, source.length);
            },
            clickToday(data) {
                console.log(data); //跳到了本月
            },
            $_show_$(type) {
                if (type == 'kq') {
                    this.$root.$_Route_$('user', 'mobile', 'ygsykqjl', {id: 1})
                }
                if (type == 'tj') {
                    this.$root.$_Route_$('user', 'mobile', 'ygsykqtj', {id: 1})
                }
            },
            getMonthBetween(start, end) {
                var result = [];
                var s = start.split("-");
                var e = end.split("-");
                var min = new Date();
                var max = new Date();
                min.setFullYear(s[0], s[1]);
                max.setFullYear(e[0], e[1]);
                var curr = min;
                while (curr <= max) {
                    var month = curr.getMonth();
                    var str = curr.getFullYear() + "-" + (month);
                    var s = curr.getFullYear() + "-0";
                    if (str == s) {
                        str = curr.getFullYear() - 1 + "-12";
                    }
                    result.push(str);
                    curr.setMonth(month + 1);
                }
                return result;
            },
        }
    }
</script>