<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        height: 100vh;
        background-color: #f6f6f6;
    }

    .header {
        z-index: 99;
        height: 50px;
        width: 100%;
        line-height: 50px;
        left: 0;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        height: 1.6rem;
        line-height: 1.6rem;
        box-shadow: 0 0 0.32rem 0 rgba(232, 232, 232, 0.9);
    }

    .wrap {
        padding: 0px 0px 75px 0;
        border-top: 1px solid rgb(246, 246, 246);
        background-color: #f6f6f6;
    }

    .footer .active {
        color: #00C1DE;
    }

    .footer ul {
        overflow: hidden;
        padding-top: 8px;
    }

    .footer ul li {
        float: left;
        width: 33.3%;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-size: 10px;
        color: #333333;
    }

    .footer ul li img {
        display: block;
        margin: 0 auto 4px;
    }

    .footer ul li p {
        height: auto;
        line-height: 1;
    }

    .cont {
        box-sizing: border-box;
        background-color: #f6f6f6;
    }

    .cont ul {
        list-style: none;
    }

    .cont ul li {
        position: relative;
        background-color: #fff;
        width: 100%;
        padding: 15px 0;
        box-sizing: border-box;
        overflow: hidden;
        border-bottom: 8px solid #f6f6f6;
        font-family: "Microsoft YaHei";
    }

    .cont ul li .time {
        font-size: 14px;
        font-weight: bold;
        color: #333333;
        line-height: 1;
        padding: 0 0 15px 0;
    }

    .cont ul li .title {
        margin-top: 17px;
        line-height: 1;
        font-size: 14px;
        color: #333333;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cont ul li .title1 {
        margin-top: 17px;
        line-height: 1;
        font-size: 12px;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cont ul li .title .special {
        color: rgb(153, 153, 153);
    }

    .cont ul li .right {
        text-align: right;
        float: right;
    }

    .cont ul li .left {
        text-align: left;
        float: left;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .cont ul li .tag {
        line-height: 1;
        font-size: 14px;
        color: #333;
        margin-bottom: 37px;
        font-weight: bold;
        position: relative;
    }

    .cont ul li .tag .line {
        width: 14px;
        height: 2px;
        background-color: #333;
        position: absolute;
        bottom: -3px;
        right: 0;
        border-radius: 100%;
    }

    .cont ul li .handle {
        font-size: 13px;
        color: rgb(2, 155, 250);
    }

    .cont ul li .detail {
        font-size: 14px;
        color: #00C1DE;
    }

    >>> .ivu-input-group-prepend {
        background-color: #fff !important;
        border-color: #dddee1 !important;
    }

    >>> .ivu-input {
        background-color: #fff !important;
        border-color: #dddee1 !important;
        border: none;
    }

    >>> .ivu-input:focus {
        box-shadow: none;
    }

    >>> .ivu-select-selection {
        border: none;
        box-shadow: none;
    }

    /*.plug-container.ivu-input-group-prepend{display:none !important;}*/

    >>> .ivu-input-group-prepend {
        display: none !important;
    }

    .ccc >>> .ivu-select-selection {
        text-align: left;
    }

    >>> .plug-container[data-v-65583fca] .ivu-input {
        border-left: 1px solid #dddee1;
        border-color: #dddee1;
        background-color: #fff;
    }

    .btnDate {
        padding-left: 6%;
        width: 100%;
        height: 32px;
        position: relative;
        background-color: #fff;
        line-height: 32px;
        border-radius: 4px;
        text-align: left;
        font-size: 14px;
        z-index: 99;
    }

    .rltb {
        position: absolute;
        right: 7px;
        top: 9px;
        z-index: 99;
    }

    .mpadd {
        padding: 0 15px;
    }

    .mline {
        border-bottom: 1px solid #f6f6f6;
        position: absolute;
        top: 39%;
        left: 0;
        width: 100%;
    }

    .asc {
        text-align: center;
        padding: 8px 0
    }

    .top1 {
        position: relative;
        color: #333;
        font-size: 12px;
        box-sizing: border-box;
        padding: 0 10px 0 10px;
        background: #fff;
        border-bottom: 8px solid #f6f6f6;
    }

    .aa1 {
        z-index: 99;
    }

    .aa1 >>> .ivu-input {
        background-color: #F7F7F7 !important;
        color: #b3b3b3 !important;
        font-size: 14px;
    }

    .aa5 >>> .ivu-select-placeholder {
        font-size: 14px;
        text-align: left;
        color: #656D72;
    }

    .aa5 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 55;
    }

    .aa5 >>> .ivu-select-selection {
        margin-left: 35%;
        margin-top: 2.1%;
        width: 30%;
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
        max-height: none !important;
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

    .tybtn {
        background-color: #00C1DE;
        float: right;
        width: 80px;
        border: 1px solid rgba(0, 193, 222, 1);
    }

    .tybtn span {
        line-height: 28px;
    }

    .mint-loadmore-top {
        font-size: 14px;
        color: #333
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
        <navigator title="服务受理" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索 -->
            <div class="top1">
                <Row class="asc">
                    <Col span="7">
                        <Input class="aa1" placeholder="订单号" @on-blur="navShow = 1" @on-focus="navShow = 0"
                               v-model="$_order_$" @on-keydown.enter="$_Search_$"/>
                    </Col>
                    <Col span="7" style=" margin-left:6%; margin-right:6%">
                        &nbsp;
                        <!--<Select class="ccc" @on-change="selectType" placeholder="类型">-->
                        <!--<Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}-->
                        <!--</Option>-->
                        <!--</Select>-->
                    </Col>
                    <Col span="7">
                        <div class="btnDate"
                             @click="calendarShow = true">
                            <span v-if="$_model_$">{{$_model_$}}</span>
                            <span v-else style="color: #bbbec4">日期</span>
                            <Icon v-if="$_model_$ == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                        </div>
                        <calendar :show.sync="calendarShow" @change="handleConfirm" :weekNames="weekNames"
                                  @touchmove.native.stop.prevent/>
                        <Icon @click="cancelDate()" type="ios-close-outline" size="16px"
                              v-if="$_model_$" class="rltb"></Icon>
                    </Col>
                </Row>
                <Select class="aa5" v-model="model1" placeholder="类型" @on-change="selectType">
                    <Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}
                    </Option>
                </Select>
            </div>
            <!-- 内容 -->
            <div v-if="list.length > 0" class="cont">
                <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill=false
                             ref="loadmore">
                    <ul>
                        <li v-for="(item,index) in list" :key="index">
                            <div class="mline"></div>
                            <div class="mpadd">
                                <div class="left">
                                    <p class="time">{{item.createDate | formatTime}}</p>
                                    <p class="title">事项标题：{{item.recordTitle}}</p>
                                    <p class="title1">联系人：
                                        {{item.commiterName}} {{item.commiterEnterpriseName }}
                                    </p>
                                </div>
                                <div class="right">
                                    <p class="tag">{{item.recordTypeCode | formatTitle}}
                                        <span v-if="item.itemReadStatus == 1 && item.itemReadRole =='h'"
                                              style="height: 10px;width:10px;border-radius: 50%;
                                              background: #ff0000;display: block;float: right"></span>
                                    </p>
                                    <p @click="fwsl(item.recordStatus,item,index)"
                                       :class="[ item.recordStatus == 3 ? 'detail' : 'handle' ]">
                                        <Button
                                                v-if="item.recordStatus != 3"
                                                shape="circle"
                                                class="tybtn"
                                                type="primary">
                                            {{item.recordStatus | formatStatus}}
                                        </Button>
                                        <span v-if="item.recordStatus == 3">{{item.recordStatus | formatStatus}}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!--<div slot="top" class="mint-loadmore-top">-->
                    <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉加载</span>-->
                    <!--<span v-show="topStatus === 'loading'">Loading...</span>-->
                    <!--</div>-->
                </mt-loadmore>
            </div>
            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有服务记录哦~</div>
            </div>
        </div>
        <!-- 底部 -->
        <div>
            <div class='footer'>
                <ul>
                    <li @click="$_ddsl_$">
                        <img style="width:17px;height:21px;" src="/static/fwsl/ddsl_black.svg" alt="">
                        <p>订单受理</p>
                    </li>
                    <li>
                        <img style="width:21px;height:21px;" src="/static/fwsl/fwsl_blue.svg" alt="">
                        <p class="active">服务受理</p>
                    </li>
                    <li @click="$_gjxx_$">
                        <img style="width:19px;height:21px;" src="/static/fwsl/gjxx_black.svg" alt="">
                        <p>管家信息</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import {DatetimePicker, Loadmore, MessageBox, Toast, Indicator} from 'mint-ui';
    import search from '../public/search';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            search, navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [MessageBox.name]: MessageBox,
            [Toast.name]: Toast,
            [Indicator.name]: Indicator
        },
        filters: {
            formatTime(sDate) {
                var date = new Date(sDate);
                var seperator2 = ":";
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                //月
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                //日
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                //时
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                //分
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                var currentdate = date.getFullYear() + '年' + month + '月' + strDate
                    + "日 " + hours + seperator2 + minutes;
                return currentdate;
            },
            formatStatus(val) {
                if (val == 0) {
                    return '受理'
                }
                if (val == 1) {
                    return '处理'
                }
                if (val == 2) {
                    return '再次处理'
                }
                if (val == 3) {
                    return '处理完成'
                }
            },
            formatTitle(val) {
                if (val == 1) {
                    return '物业保修'
                }
                if (val == 2) {
                    return '投诉建议'
                }
                if (val == 3) {
                    return '企业服务咨询'
                }
                if (val == 4) {
                    return '留言'
                }
            }
        },
        data() {
            return {
                navShow: 1,
                model1: '',
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                calendarShow: false,
                $_model_$: '',
                $_search_$: '',
                $_order_$: '',
                list: [],
                pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear()
                    let m = date.getMonth() + 1
                    m = m < 10 ? '0' + m : m
                    let d = date.getDate()
                    d = d < 10 ? ('0' + d) : d
                    return y + '-' + m + '-' + d
                },
                $_type_$: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: '物业保修',
                        label: '物业保修'
                    },
                    {
                        value: '投诉建议',
                        label: '投诉建议'
                    },
                    {
                        value: '企业服务咨询',
                        label: '企业服务咨询'
                    },
                    {
                        value: '留言',
                        label: '留言'
                    }
                ],
                userInfo: {},
                pageSize: 6,
                pageNum: 1,//当前第几页
                topStatus: '',
                stewardId: '',
                showCancel: false
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.setward()

        },
        methods: {
            // 类型搜索
            selectType(value) {
                this.pageNum = 1;
                if (value) {
                    if (value == '全部') {
                        this.$_search_$ = '';
                    }
                    if (value == '物业保修') {
                        this.$_search_$ = 1;
                    }
                    if (value == '投诉建议') {
                        this.$_search_$ = 2;
                    }
                    if (value == '企业服务咨询') {
                        this.$_search_$ = 3;
                    }
                    if (value == '留言') {
                        this.$_search_$ = 4;
                    }
                }
                this.List(this.$_order_$, this.$_search_$, this.$_model_$)
            },
            // 订单搜索
            $_Search_$() {
                this.pageNum = 1;
                this.List(this.$_order_$, this.$_search_$, this.$_model_$)
            },
            // 清空时间搜索
            cancelDate() {
                this.$_model_$ = '';
                this.List(this.$_order_$, this.$_search_$, this.$_model_$);
                this.showCancel = false
            },
            // 获取管家id
            setward() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/queryStewardDetails`,
                    data: {refEmployee: this.userInfo.id},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.stewardId = rsp.data.data.id
                            this.List(this.$_order_$, this.$_search_$, this.$_model_$)
                        }
                    }
                })
            },
            // 获取服务列表
            List(searchname, searchtype, searchdate) {
                let data = {
                    zoneId: this.userInfo.zoneId,
                    stewardId: this.stewardId,
                    current: this.pageNum,
                    size: this.pageSize,
                };
                if (searchname) {
                    data.orderNumber = searchname;
                }
                if (searchtype) {
                    data.recordTypeCode = searchtype;
                }
                if (searchdate) {
                    data.createDate = searchdate;
                }
                if ((searchname || searchtype || searchdate) && this.pageNum === 1) {
                    this.list = [];
                }
                if (!searchname && !searchtype && !searchdate && this.pageNum === 1) {
                    this.list = [];
                }
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/queryRecordPageList`,
                    data: data,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            for (let i = 0; i < rsp.data.data.records.length; i++) {
                                this.list.push(rsp.data.data.records[i]);
                            }
                            if (this.list.length === 0) {
                                Toast("暂无数据!")
                            }
                        } else {
                            Toast(rsp.data.message)
                        }
                    }
                })
            },
            //点击确定按钮之后 时间搜索
            handleConfirm(date) {
                this.pageNum = 1;
                // 输出格式化后的时间
                // let datenum = this.formatDate(this.$refs.datePicker.value);
                // datenum = datenum.substr(0, 10);
                let datenum = date.format('YYYY-MM-DD');
                this.$_model_$ = datenum;
                this.searchdate = datenum;
                this.List(this.$_order_$, this.$_search_$, this.searchdate);
                this.calendarShow = false;
            },
            //服务处理
            fwsl(val, item, index) {
                // 受理
                if (val == 0) {
                    MessageBox({
                        title: '确认受理',
                        message: '确认受理此问题?',
                        showCancelButton: true,
                        confirmButtonClass: 'confirm'
                    }).then(action => {
                        if (action == 'confirm') {
                            this.$_sendQuery_$({
                                method: "POST",
                                url: `${this.$_global_$.serverPath}/steward/steward/acceptServiceRecord`,
                                data: {serviceRecordId: item.id, recordTitle: item.title},
                                headers: {"Content-type": "application/json"}
                            }).then((rsp) => {
                                if (rsp.status === 200) {
                                    if (rsp.data.code === 0) {
                                        Toast(rsp.data.data)
                                        // this.List()//说刷新太暴力了
                                        this.list[index].recordStatus = 1
                                    } else {
                                        Toast(rsp.data.message)
                                    }
                                }
                            })
                        }
                    });
                }
                // 处理
                if (val == 1) {
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfwcl', {id: item.id})
                }
                // 在次处理
                if (val == 2) {
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfwcl', {id: item.id})
                }
                // 详情
                if (val == 3) {
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfwslxq', {id: item.id})
                }
            },
            //返回首页
            $_back_$() {
                if(this.$root.inparams.type){
                    var type = this.$root.inparams.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
                }
            },
            //订单受理
            $_ddsl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyddsl', {id: this.stewardId})
            },
            //服务受理
            $_fwsl_$() {
                this.$root.inparams.id
            },
            //管家信息
            $_gjxx_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsygjxx', {id: this.stewardId})
            },
            // 上拉加载
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.List(this.$_order_$, this.$_search_$, this.$_model_$);
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
        }
    }
</script>