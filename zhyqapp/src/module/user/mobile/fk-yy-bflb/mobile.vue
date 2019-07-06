<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        position: static;
    }

    .ivu-select-visible .ivu-select-selection {
        box-shadow: none !important;
    }

    .ivu-select-single .ivu-select-selection .ivu-select-placeholder {
        font-size: 14px;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background-color: #fff !important;
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
        color: #7599ff;
        padding-top: 2px;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap  {

        font-size: 14px;
        color: #666;
        background: rgba(246, 246, 246, 1);
        min-height: 93vh;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 49%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        padding-left: 56px;
    }

    .footer ul li img {
        width: 20px;
        height: 21px;
        margin-top: 14px;
        float: left;
    }

    .footer ul li p {
        height: auto;
        float: left;
        margin-left: 8px;
        font-size: 12px;
        padding-top: 1px;
        color: #B3B3B3;
    }

    .footer {
        font-size: 14px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow:0px 0px 12px 0px rgba(232,232,232,0.9);
    }

    .top1 {
        color: #333;
        font-size: 12px;
        box-sizing: border-box;
        padding: 2px 0 0 0;
        background-color: #fff;
    }

    .top1 .select {
        width: 100px;
        height: 38px;
        border-radius: 4px;
    }

    .list {
        overflow: hidden;
        margin-bottom: 58px;
        margin-top:10px;
    }

    .list li {
        line-height: 25px;
        font-size: 14px;
        padding-top: 18px;
        color: #333;
        background: #fff;
        margin-bottom: 10px;

    }

    .list li:last-child {
        margin-bottom: 0;

    }

    .mul2 li {
        padding: 10px 20px 5px 20px;
        border-bottom: 1px solid #f2f2f2;
        height: 55px;
    }

    .ivu-input-group-prepend {
        background-color: #fff !important;
        border-color: #dddee1 !important;
    }

    .ivu-input {
        background-color: #fff !important;
        border-color: #dddee1 !important;
    }

    .visitor {
        display:block;
        float:left;
        font-size: 18px;
        line-height:1;
        color: #333333;
        margin-right: 10px;
        font-family: 'PingFangSC-Medium';
        font-weight: 550;
    }

    .lists {
        padding-left: 32px;
        position: relative;
        padding-right: 15px;
        padding-bottom: 18px;
        box-sizing: border-box;
    }

    .lists .red i {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(250, 84, 28, 1);

    }

    .lists .invitation {
        display: block;
        float:left;
        background: rgba(93, 181, 246, 1);
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 10px;
        line-height: 18px;
        height:18px;
        width: 58px;
        text-align: center;
        font-weight: 400;
        color: #fff;

    }

    .company {
        padding-top: 16px;
        padding-left: 32px;
        padding-right: 16px;
        padding-bottom: 16px;
    }

    .company p:first-child {
        font-size: 12px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
        color: #333333;
    }

    .company p:last-child {
        font-size: 12px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
    }

    .pass span {
        position: absolute;
        right: 0;
        font-size: 14px;
        line-height: 50px;
        font-weight: 400;
    }

    .footer ul span {
        border-left: 1px solid #E1E3EC;
        height: 20px;
        margin-top: 15px;
        float: left;
        line-height: 20px;

    }

    .lists .invite {
        position: absolute;
        left: 16px;
        top: 7px;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: #FA541C;
        display: block;
    }

    .aa5 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 55;
    }

    .aa5 >>> .ivu-select-selection {
        margin-left: 20%;
        margin-top: 2.1%;
        width: 100%;
        border: none;
    }

    .aa5 >>> .ivu-select-selected-value {
        color: #00C1DE;
    }

    .aa5 >>> .ivu-select-selected-value + .ivu-select-arrow {
        color: #00C1DE;
    }

    >>> .ivu-icon-arrow-down-b:before {
        content: "\F123" !important;
    }

    .aa5 >>> .ivu-select-item {
        font-size: 14px !important;
        border-bottom: 1px solid #f6f6f6;
        padding: 10px 20px !important;
    }

    .aa5 >>> .ivu-select-item:nth-last-child(1) {
        border-bottom: 1px solid #fff;
    }

    .aa5 >>> .ivu-select-selected-value {
        font-size: 14px !important;
    }

    .aa5 >>> .ivu-select-dropdown {
        width: 100vw !important;
        left: 0 !important;
        border-radius: 0;
    }

    .aa5 >>> .ivu-select-item-focus {
        background-color: #fff;
        color: #00C1DE;
    }

    .aa5 >>> .ivu-select-item-focus:after {
        content: '';
        background: url(/static/fwsl/dui.png) no-repeat;
        background-size: 16px;
        width: 16px;
        height: 16px;
        float: right;
        background-position: bottom;
    }

    .aa5 >>>.ivu-select-selection .ivu-select-placeholder {
        color: #656D72;
        font-size: 14px;

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
        <navigator title="拜访记录" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="top1">
                <Row class="select">
                    <Select class="aa5" v-model="model1 " placeholder="预约类型" @on-change="$_SearchType_$">
                        <Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}
                        </Option>
                    </Select>
                </Row>
            </div>
            <mt-loadmore v-if="$_List_$.length > 0" :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill=false
                         ref="loadmore">
                <ul class="list">
                    <li v-for='item in $_List_$' @click="$_nextPage_$(item)">
                        <Row style="border-bottom:1px solid #ececec;" class="lists">
                            <p class="red"><i v-if="item.visitorType === 1"></i>
                                <span class="visitor"
                                      style="font-family:'PingFangSC-Medium';">{{item.employeeName}}</span>
                                <span v-if="item.visitorType === 1 && !item.readFlg" class="invite"></span><span
                                        class="invitation" style="color:#fff;background-color:#FF8E58;"
                                        v-if="item.visitorType === 1">邀请函</span>
                                <span class="invitation"
                                      v-if="item.auditStatus === 1 &&item.auditStatus === 1 && item.visitorType !== 1">拜访申请</span>
                                <span class="invitation" v-if="item.auditStatus === 2 ">拜访申请</span>
                                <span v-if="item.visitorType === 1"
                                      style="float:right;">{{item.createTime.substring(0,10)}}</span>
                                <span v-if="item.auditStatus === 1 && item.visitorType !== 1 || item.auditStatus === 2 || item.auditStatus === 0 "
                                      style="float:right;">{{item.createTime.substring(0,10)}}</span></p>
                        </Row>
                        <Row class="company">
                            <Col span='18'>
                                <p>公司：{{item.employeeCompany}}</p>
                                <p>拜访日期：{{item.visitDate.substring(0,10)}}</p>

                            </Col>
                            <Col span='6' style="position: relative" class="pass">
                                  <span style="color:#333333;" v-if="item.auditStatus === 0"
                                  >待审核</span>
                                <span style="color:#00C1DE;" v-if="item.auditStatus === 1 && item.visitorType !== 1"
                                >已同意</span>
                                <span style="color:#FA541C;" v-if="item.auditStatus === 2"
                                >已拒绝</span>
                            </Col>
                        </Row>
                    </li>
                </ul>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>

            <div v-else class="divNoList" >
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有拜访记录哦~</div>
            </div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul>
                <li>
                    <img class="" src="/static/fksf/bf-l.svg" alt="">
                    <p class="active" style="color:#00C1DE;">拜访记录</p>
                </li>
                <span></span>
                <li @click="$_shower_$()">
                    <img class="" src="/static/fksf/zx-h.svg" alt="">
                    <p>在线预约</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import {DatetimePicker} from 'mint-ui';
    import {Loadmore} from 'mint-ui';
    import {Search} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import search from '../public/search';
    import {Toast} from 'mint-ui';
    import navigator from '../public/navigator'
    import {Indicator} from 'mint-ui';
    export default {
        //mixins: [controler],
        components: {
            search,
            navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [Search.name]: Search,
            [Indicator.name]:Indicator
        },
        filters: {
            formatDate(item) {
                var date = new Date(item);
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                //月
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                //日
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = hours + seperator2 + minutes
                return currentdate;
            },
            formater(item) {
                var date = new Date(item);
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                //月
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                //日
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = month + seperator1 + strDate
                return currentdate;
            },
            format(item) {
                var date = new Date(item);
                var seperator1 = "-";
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                //月
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                //日
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                return currentdate;
            }
        },
        data() {

            const validatephone = (rule, value, callback) => {
                if (!(/^1[345789]\d{9}$/.test(value))) {
                    callback('请输入正确的手机号');
                } else {
                    callback();
                }
            };
            const validateStime = (rule, value, callback) => {
                if (!this.model2) {
                    callback('请选择来访开始时间');
                } else {
                    this.$_formValidate_$.$_Stime_$ = this.model2;
                    callback();
                }
            };
            const validateEtime = (rule, value, callback) => {
                if (!this.model3) {
                    callback('请选择来访结束时间');
                } else {
                    this.$_formValidate_$.$_Etime_$ = this.model3;
                    if (this.model2 > this.model3) {
                        callback('结束时间需大于开始时间');
                    } else {
                        callback();
                    }
                }
            };
            return {
                $_ygInfo_$: '',
                topStatus: '',
                $_isshow_$: 1,
                pickerValue: new Date(),
                pickerValue1: new Date(),
                pickerValue2: new Date(),
                formatDate(date) {
                    const y = date.getFullYear()
                    let m = date.getMonth() + 1
                    m = m < 10 ? '0' + m : m
                    let d = date.getDate()
                    d = d < 10 ? ('0' + d) : d;
                    let h = date.getHours()
                    h = h < 10 ? '0' + h : h
                    let f = date.getMinutes()
                    f = f < 10 ? '0' + f : f
                    let s = date.getSeconds()
                    s = s < 10 ? '0' + s : s
                    return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
                },
                $_name_$: '',
                $_formValidate_$: {
                    $_name_$: '',
                    $_phone_$: '',
                    $_company_$: '',
                    $_bumen_$: '',
                    $_reason_$: '',
                    $_Stime_$: '',
                    $_Etime_$: '',
                    $_hys_$: '',
                    $_xzhys_$: ''
                },
                $_ruleValidate_$: {
                    $_name_$: [
                        //非空验证
                        {required: true, type: 'string', message: '请填写姓名', trigger: 'change'},
                        //长度验证
                        {type: 'string', max: 50, message: '姓名不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_phone_$: [
                        {required: true, type: 'number', message: '请输入正确格式手机号', trigger: 'change'},
                        //特殊字符验证
                        {validator: validatephone, trigger: 'change'}
                    ],
                    $_company_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '单位名称不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_bumen_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '部门名称不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_reason_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '事由不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_Stime_$: [
                        //特殊字符验证
                        {required: true, validator: validateStime, trigger: 'change'},
                    ],
                    $_Etime_$: [
                        //特殊字符验证
                        {required: true, validator: validateEtime, trigger: 'change'},
                    ],
                },
                $_type_$: [
                    {
                        value: '全部',
                        label: '全部'
                    }, {
                        value: '被邀请',
                        label: '邀请函'
                    }, {
                        value: '预约',
                        label: '拜访申请'
                    }
                ],
                hysList: [],
                model1: '',
                model2: '',
                model3: '',
                model4: '',
                $_List_$: [],
                pageSize: 10,//每页条数
                pageNum: 1,//当前第几页
                isShow: false,
                searchname: '',
                searchtype: '',
                searchdate: '',

            }
        },
        created() {
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_fkList_$();
            //this.$_Search_$();
        },
        methods: {
            //员工搜索
            $_Search_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/company/employee/phone/${this.searchname}`,
                    data: {},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            if (res.data.data != null) {
                                this.searchname = res.data.phoneNumber;
                                this.$_ygInfo_$ = res.data.data
                            } else {
                                this.$Message.success('未查到此员工，请重新搜索')
                            }
                        }

                    }
                })
            },
            //来访类型搜索
            $_SearchType_$(value) {
                this.pageNum = 1;
                this.searchtype = value;
                this.$_fkList_$(this.searchtype);
            },
            $_choice_$(e) {
                this.isShow = e;
            },
            show() {
                this.$refs.input1.blur();
            },
            $_shower_$() {
                this.$root.$_Route_$('user', 'mobile', 'fk-zxyy', {id: 1})
            },
            //访客记录列表
            $_fkList_$(searchtype) {
                let data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                };
                if (searchtype) {
                    if (searchtype == '预约') {
                        data.visitorType = 0;
                    }
                    if (searchtype == '被邀请') {
                        data.visitorType = 1;
                    }
                }
                if (searchtype && this.pageNum === 1) {
                    this.$_List_$ = [];
                }
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/visitor/visitor/records`,
                    data: data,
                    headers: {"Content-type": "application/json"}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            Indicator.close();
                            for (let i = 0; i < res.data.data.records.length; i++) {
                                this.$_List_$.push(res.data.data.records[i]);
                            }
                        }
                    }
                })
            },
            $_back_$() {

                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})

            },
            //点击确定按钮之后
            handleConfirm(datePicker, index) {

                // 输出格式化后的时间
                this.model2 = this.formatDate(this.$refs.datePicker1.value);
                this.model3 = this.formatDate(this.$refs.datePicker2.value);
            },
            $_nextPage_$(item) {
                if (item.visitorType === 1) {
                    this.$router.push({
                        path:'/fk-yy-bflb/fkyyewm',
                        query:{id: item.id}
                    })
                } else if (item.auditStatus === 0) {
                     this.$router.push({
                        path:'/fk-yy-bflb/fk-yyxq',
                        query:{id: item.id}
                    })
                } else if (item.auditStatus === 2) {
                     this.$router.push({
                        path:'/fk-yy-bflb/fk-yyjj',
                        query:{id: item.id}
                    })
                } else if (item.auditStatus === 1) {
                     this.$router.push({
                        path:'fk-yy-bflb/fk-yy-pass',
                        query:{id: item.id}
                    })
                }
            },
            $_save_$() {
                this.$refs.$_formValidate_$.validate((valid) => {
                    if (valid) {
                        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                        let userInfo = JSON.parse(cookie);
                        //请求部门下员工
                        let data = {
                            visitorName: this.$_formValidate_$.$_name_$,
                            visitorMobile: this.$_formValidate_$.$_phone_$,
                            visitorCompany: this.$_formValidate_$.$_company_$,
                            visitReason: this.$_formValidate_$.$_reason_$,
                            visitDate: this.$_formValidate_$.$_Stime_$,
                            startTime: this.$_formValidate_$.$_Stime_$,
                            endTime: this.$_formValidate_$.$_Etime_$,
                            employeeMobile: this.$_ygInfo_$.phoneNumber
                        };
                        if (!this.$_ygInfo_$) {
                            if (!this.$_ygInfo_$.phoneNumber) {
                                Toast('请搜索拜访员工');
                                return
                            } else {
                                data.employeeMobile = this.$_ygInfo_$.phoneNumber;
                            }
                        }
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/company/visitor/visitor/create`,
                            data: data,
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                if (res.data.code === 0) {
                                }
                            }
                        })
                    }
                });
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.$_fkList_$(this.searchtype);
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>