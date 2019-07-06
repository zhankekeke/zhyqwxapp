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
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
    }

    .header {
        height: 50px;
        left: 0;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 99;
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
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        padding: 1px 0px 0px 0px;
        font-size: 14px;
        background: #f6f6f6;
        color: #666;
    }

    .wrap2 {
        box-sizing: border-box;
        padding: 0px 0px 75px 0px;
        font-size: 14px;
        background: #f6f6f6;
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
        /*position: fixed;*/
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 0 30px 0;
        background: #fff;
        /*border-top: 1px solid #f1f1f1;*/
    }

    .box {
        margin: 10px 15px;
        background: #fff;
        border-radius: 10px;
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
        padding: 15px;
        background: #fff;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .box3 .img {
        width: 37px;
        height: 34px;
    }

    .box2 {
        background: #fff;
    }

    .bg {
        box-sizing: border-box;
        padding: 15px 20px;
        color: #666;
        font-size: 14px;
        background: #f6f6f6;
        padding-bottom: 30px;
    }

    .bg .btn {
        margin-left: 2%;
    }

    .bg p {
        padding: 6px 0;
    }

    .bg .btn button {
        color: #fff;
        border: none;
        border-radius: 20px;
        padding: 0 10px;
        font-size: 12px;
    }

    .bg .success {
        background: #00C1DE;
    }

    .bg .error {
        background: #FF8E58;
        margin-left: 10px;
    }

    .mul {
    }

    .mul li {
        padding: 15px 20px 15px 20px;
        background-color: white;
    }

    .wsj {
        height: 50px;
        margin-bottom: 100px;
    }

    .kq {
        box-sizing: border-box;
        padding: 10px 20px;
        color:#333;
        font-size: 14px;
        background: #f6f6f6;
    }

    .mname {
        font-size: 18px;
        margin-top: 2%;
        font-weight: bold;
        color: #333;
    }

    .kqinfo {
        font-size:14px;
        color: #333;
    }
    .kqtime {
        color: #333;
        float: right;
        font-size: 14px;
        margin-top: 2%;
        margin-right: -2%;
        text-align: right;
    }
    .m1{font-size: 14px;font-weight: bold}
    .m2{font-size: 12px;}
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="考勤" @back="$_back_$"/>
        <!--<div class='header'>-->
        <!--<Icon type="chevron-left" class='back' @click='$_back_$'></Icon>-->
        <!--考勤-->
        <!--</div>-->
        <!-- 中间部分 -->
        <!-- 考勤 -->
        <div class="wrap">
            <div class="box">
                <Row>
                    <Col span="5" style="margin-left: 2%">
                        <img v-if="$_myData_$.faceUrl" class="img" :src="$_global_$.ImgServer + $_myData_$.faceUrl">
                        <img v-else class="img" src="/static/hysyy/faceimg.svg">
                    </Col>
                    <Col span="18" style="margin-left: -2%">
                        <p class="mname">{{$_myData_$.name}}
                            <span class="kqtime">今天<br/>{{$_myData_$.time}}</span>
                        </p>
                        <p class="kqinfo">
                            <span>考勤组：</span>
                            <span v-if="$_myRule_$ === ''">尚未设定</span>
                            <span v-if="$_myRule_$.orgId === 0 && $_myRule_$ !== ''">公司考勤</span>
                            <span v-if="$_myRule_$.orgId !== 0 && $_myRule_$ !== ''">部门考勤</span>
                        </p>
                    </Col>
                </Row>
            </div>

            <div class="box2">
                <div>
                    <Calendar class="date12138" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"
                              :markDateMore="markday"></Calendar>
                </div>
                <div class="kq">考勤组：
                    <span v-if="$_myRule_$ === ''">尚未设定</span>
                    <span v-if="$_myRule_$.orgId === 0 && $_myRule_$ !== ''">公司考勤</span>
                    <span v-if="$_myRule_$.orgId !== 0 && $_myRule_$ !== ''">部门考勤</span>&nbsp;
                    上班时间：{{$_myRule_$.amTime}}-{{$_myRule_$.pmTime}}&nbsp;
                    <span v-if="$_myRule_$.amElastic">弹性时间：{{$_myRule_$.amElastic}}-{{$_myRule_$.pmElastic}}</span>
                </div>
                <div v-if="$_todayInfo_$ != ''" class="bg" style="background:#fff;color:#000;">
                    <p class="m1" style="color:#333"><span>当日打卡{{dknum}}次，工时共计{{countWork}}小时</span></p>
                    <p class="m2" style="color:#333">
                        <span v-if="$_todayInfo_$.amStatus != 2">上班打卡时间：<span style="color: #333">{{$_todayInfo_$.firstTime}}</span></span>
                        <span v-else>上班打卡时间：无</span>
                        <span class="btn">
                            <button v-if="$_todayInfo_$.amStatus == 0" class="success"
                                    style="background-color: #00C1DE">正常</button>
                            <button v-if="$_todayInfo_$.amStatus == 1" class="error">迟到</button>
                            <button v-if="$_todayInfo_$.amStatus == 2" class="error">未打卡</button>
                        </span>
                    </p>
                    <p class="m2" style="color:#333">
                        <span v-if="$_todayInfo_$.pmStatus != 2">下班打卡时间：<span style="color: #333">{{$_todayInfo_$.lastTime}}</span></span>
                        <span v-else>下班打卡时间：无</span>
                        <span class="btn">
                            <button v-if="$_todayInfo_$.pmStatus == 0" class="success"
                                    style="background-color: #00C1DE">正常</button>
                            <button v-if="$_todayInfo_$.pmStatus == 1" class="error">早退</button>
                            <button v-if="$_todayInfo_$.pmStatus == 2" class="error">未打卡</button>
                        </span>
                    </p>
                    <Row style="margin-top: 0.2801rem; color: #333">
                        <Col span="12"><span
                                style="margin-top:0.2241rem;width: 0.1401rem; height: 0.1401rem; background-color: #00C1DE;display: block; border-radius: 0.5602rem;float: left"></span><span
                                style="float: left; margin-left:0.4201rem;">正常打卡</span></Col>
                        <Col span="12"><span
                                style="margin-top:0.2241rem;width: 0.1401rem; height: 0.1401rem; background-color: #FF8E58;display: block; border-radius: 0.5602rem;float: left"></span><span
                                style="float: left; margin-left:0.4201rem;">打卡异常</span></Col>
                    </Row>
                </div>
                <div v-else class="wsj" style="background-color: #fff; text-align: center">
                    <span style="line-height: 1.9607rem">暂无数据</span>
                </div>
            </div>
        </div>
        <!--&lt;!&ndash; 底部 &ndash;&gt;-->
        <!--<div class='footer'>-->
        <!--<ul style="border: 1px solid #999; width: 76%;border-radius: 50px; margin: 0 auto">-->
        <!--<li @click="$_show_$('kq')"  style="width:55%; height: 1.0084rem; background-color: #333; border-radius: 50px;color: #fff;text-align: center;line-height:1.0084rem;">考勤</li>-->
        <!--<li @click="$_show_$('tj')"style="width:39%; height: 1.0084rem;;color:#333;text-align: center;line-height: 1.0084rem;;">统计</li>-->
        <!--</ul>-->
        <!--</div>-->
    </div>
</template>

<script>
    import controler from './controler.js';
    import Calendar from '../public/calendar/index';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            Calendar,
            navigator,
        },
        data() {
            return {
                countWork: 0,
                dknum: 0,
                $_myData_$: '',
                markday: [],
                $_search_$: '',
                $_tj_$: [],
                $_myRule_$: '',
                $_todayInfo_$: '',
                cityList: [
                    {
                        value: '2018年11月',
                        label: '2018年11月'
                    },
                    {
                        value: '2018年10月',
                        label: '2018年10月'
                    },
                    {
                        value: '2018年09月',
                        label: '2018年09月'
                    },
                    {
                        value: '2018年08月',
                        label: '2018年08月'
                    }
                ],
            }
        },
        created() {
            this.$_nowMonthData_$();
        },
        methods: {
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_nowMonthData_$(sDay, lDay) {
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                //当天日期
                let date3 = new Date();
                let nowDay = date3.getFullYear() + "." + (date3.getMonth() + 1) + "." + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());

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
                            // res.data.data = {
                            //     "2019-02-02": {
                            //         "id": 1,
                            //         "attendanceDate": "2018-09-09",
                            //         "firstTime": "11:15",
                            //         "lastTime": "19:00",
                            //         "workingHours": 465,
                            //         "amStatus": 1,
                            //         "pmStatus": 0,
                            //         "ruleId": 7,
                            //         "createTime": "2018-12-09 01:15:42"
                            //     },
                            //     "2019-02-03": {
                            //         "id": 2,
                            //         "attendanceDate": "2018-09-10",
                            //         "firstTime": "11:20",
                            //         "lastTime": "18:45",
                            //         "workingHours": 455,
                            //         "amStatus": 0,
                            //         "pmStatus": 0,
                            //         "ruleId": 7,
                            //         "createTime": "2018-12-09 01:15:59"
                            //     },
                            // };
                            for (let key in res.data.data) {
                                let className = '';
                                if (res.data.data[key]) {

                                    if (res.data.data[key].amStatus != 0 || res.data.data[key].pmStatus != 0 || res.data.data[key] == null) {
                                        className = 'mark1';
                                    } else {
                                        className = 'mark2'
                                    }
                                } else {
                                    className = 'mark1';
                                }
                                tmpData.push({
                                    date: key,
                                    className: className
                                })
                            }
                            this.markday = tmpData;
                        }
                    }
                })

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
                })
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
                    newDate = date3.getFullYear() + "-" + (date3.getMonth() < 10 ? "0" + (date3.getMonth() + 1) : date3.getMonth() + 1) + "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
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
                                let i = 0;
                                if (this.$_todayInfo_$.amStatus != 2) {
                                    i++
                                }
                                if (this.$_todayInfo_$.pmStatus != 2) {
                                    i++
                                }
                                this.dknum = i;
                                this.countWork = (this.$_todayInfo_$.workingHours / 60).toFixed(2);
                                
                            } else {
                                this.$_todayInfo_$ = ''
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
                //跳到了本月
            },
            $_show_$(type) {
                if (type == 'kq') {
                    this.$root.$_Route_$('user', 'mobile', 'ygsykqjl', {id: 1})
                }
                if (type == 'tj') {
                    this.$root.$_Route_$('user', 'mobile', 'ygsykqtj', {id: 1})
                }
            },
            $_xiangqing_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsykqxq', {
                    data: {
                        kqData: this.$_todayInfo_$,
                        userInfo: this.$_myData_$,
                        ruleData: this.$_myRule_$,
                    }
                })

            }
        }
    }
</script>