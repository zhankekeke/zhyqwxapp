<style scoped>
    .container {
        position: relative;
        font-size: 16px;
        color: #000;
        font-weight: 400;
        min-height: 100vh;
        background-color: #f6f6f6;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
    }

    .icon1 {
        width: 21px;
        height: 21px;
    }

    .icon2 {
        width: 24px;
        height: 24px;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 49%;
        text-align: center;
    }

    .footer ul li span {
        height: auto;
        line-height: 50px;
    }

    .footer .active {
        color: #00C1DE;
    }

    .footer {
        font-size: 12px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        box-shadow: 0 0 0.32rem 0 rgba(232, 232, 232, 0.9);
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

    .list {
        overflow: hidden;
        background: #fff;
        margin-bottom: 60px;
    }

    .list li {
        border-bottom: 8px solid #f6f6f6;
        box-sizing: border-box;
        padding: 15px 0 15px 0px;
        line-height: 25px;
        font-size: 14px;
        color: #333;
    }

    .mul2 {
        background-color: #fff;
        border-top: 10px solid #f6f6f6;
    }

    .mul2 li:nth-child(1) {
        height: auto;
    }

    .mul2 li {
        padding: 10px 20px 5px 20px;
        border-bottom: 1px solid #f2f2f2;
        height: 55px;
    }

    >>> .ivu-input-group-prepend {
        background-color: #fff !important;
        border-color: #dddee1 !important;
    }

    >>> .ivu-input {
        background-color: #fff !important;
        border-color: #dddee1 !important;
    }

    >>> .ivu-input:focus {
        box-shadow: none;
    }

    .bbb >>> .ivu-input {
        border: none;
        text-align: right;
        font-size: 14px !important;
    }

    .aaa >>> .ivu-select-selection {
        border: none;
        font-size: 14px !important;
    }

    >>> .ivu-select-placeholder {
        font-size: 14px !important;
    }

    >>> .ivu-select-item {
        font-size: 14px !important;
        border: none !important;
    }

    >>> .ivu-input-group-prepend {
        width: 6%;
    }

    >>> .ivu-icon-ios-search {
        display: none;
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

    .lfName {
        font-size: 0.48rem;
        font-weight: bold;
        color: #333;
        width: 70px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .lfType {
        font-size: 10px;
        width: 60px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 4px;
        color: #fff;
        margin-top: 2.5%;
    }

    .listTip {
        width: 10px;
        height: 10px;
        background-color: #FA541C;
        margin-top: 10px;
        border-radius: 50px;
        position: absolute;
        top: 0;
        left: 4%;
    }

    .lftime {
        margin-right: 30%;
        color: #333;
        font-size: 14px;
    }

    .lfListTop {
        border-bottom: 1px solid #f6f6f6;
        padding-bottom: 0.266rem;
        position: relative;
        padding-left: 8%;
    }

    .lfListsec {
        margin-left: 8%;
    }

    >>> .ivu-switch {
        float: right;
        margin-right: 2%;
    }

    >>> .ivu-form-item-label {
        font-size: 16px;
        color: #333;
    }

    >>> .ivu-input {
        border: none;
        overflow: hidden;
        resize: none;
    }

    >>> .ivu-input-group-prepend {
        border: none;
    }

    >>> .ivu-select-selection {
        border: none;
        box-shadow: none;
    }

    .aaa >>> .ivu-select-selected-value {
        text-align: right;
    }

    .aaa >>> .ivu-select-placeholder {
        text-align: right;
    }

    >>> .ivu-select-selected-value {
        font-size: 14px !important;
    }

    >>> .ivu-form-item-error-tip {
        left: 60%;
        text-align: right;
        top: 75%
    }

    .rltb {
        position: absolute;
        right: 7px;
        top: 9px;
        z-index: 99;
    }

    .wb1 {
        color: #333;
        font-size: 12px;
    }

    .wb2 {
        position: absolute;
        right: 10%;
        font-size: 14px;
    }

    .wb3 {
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
        color: #333;
    }

    .wb4 {
        padding-bottom: 15px;
        margin-bottom: 15px;
        margin-left: 2.5%
    }

    .wb5 {
        width: 86%;
        display: block;
        margin: 15% auto;
        font-size: 16px;
    }

    .wb6 {
        border-left: 1px solid #ccc;
        height: 30px;
        margin-top: 10px;
        float: left
    }

    .tybtn {
        height: 28px;
        background-color: #00C1DE;
        float: left;
        margin-right: 10%;
        border: 1px solid rgba(0, 193, 222, 1);
    }

    .lfListsec >>> .ivu-btn {
        padding: 5px 15px 10px 15px;
    }

    .jjbtn {
        height: 28px;
        float: left;
        color: #00C1DE;
        border: 1px solid rgba(0, 193, 222, 1)
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

    .spTime >>> .ivu-form-item-error-tip {
        margin-top: 10%;
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

    .aa3 {
        color: #656D72;
    }

    .black1 {
        color: #bbbec4;
    }

    .black2 {
        color: #00C1DE;
    }

    .asc {
        text-align: center;
        padding: 8px 0
    }

    .mint-loadmore-top {
        color: #333;
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

    .riqi {
        float: right;
        margin-right: 3%;
    }

    .riqi1 {
        color: #495060;
        font-size: 14px;
    }

    .riqi2 {
        color: #bbbec4;
        font-size: 14px;
    }

    >>> .ivu-input::-webkit-input-placeholder {
        font-size: 14px;
    }
    
</style>
<style >
 .mint-msgbox-header{
        padding-top:30px !important;
    }
    .mint-msgbox-confirm{
        background: linear-gradient(136deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
        color:#fff;
    }
    .mint-msgbox{
        border-radius:10px;
    }
</style>

<template>
    <div class="container" ref="aa">

        <!-- 首页 -->
        <navigator :title="$_pageType_$" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div v-show="$_isshow_$" class="wrap">
            <div class="top1">
                <Row class="asc">
                    <Col span="7" style="margin-top: -1px">
                        <Input class="aa1" placeholder="请输入员工姓名" @on-blur="navShow = 1" @on-focus="navShow = 0"
                               v-model="searchname"
                               @on-keydown.enter="$_Search_$"/>
                    </Col>
                    <Col span="7" style=" margin-left:6%; margin-right:6%">
                        &nbsp;
                        <!--<Select class="aa2" v-model="model1" placeholder="来访类型" @on-change="$_SearchType_$">-->
                        <!--<Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}-->
                        <!--</Option>-->
                        <!--</Select>-->
                    </Col>
                    <Col span="7">
                        <div class="btnDate"
                             @click="calendarShow = true">
                            <span v-if="model4" class="aa3">{{model4}}</span>
                            <span v-else style="color: #bbbec4">日期</span>
                            <Icon v-if="model4 == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                        </div>
                        <calendar :show.sync="calendarShow" @change="$_SearchDate_$" :weekNames="weekNames"
                                  @touchmove.native.stop.prevent/>
                        <Icon @click="$_Searchqx_$()" v-if="model4" type="ios-close-outline" size="16px"
                              class="rltb"></Icon>
                    </Col>
                </Row>
                <Select class="aa5" v-model="model1" placeholder="来访类型" @on-change="$_SearchType_$">
                    <Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}
                    </Option>
                </Select>
            </div>
            <mt-loadmore v-if="$_List_$.length > 0" :bottom-method="loadBottom" @bottom-status-change="handleTopChange"
                         :autoFill=false
                         ref="loadmore">
                <ul class="list">
                    <li v-for='item in $_List_$' @click="$_nextPage_$(item)">
                        <Row class="lfListTop">
                            <div v-if="item.auditStatus === 0" class="listTip"></div>
                            <Col span="6">
                                <div class="lfName">{{item.visitorName}}</div>
                            </Col>
                            <Col span="5">
                                <div class="lfType" style="background-color:#FF8E58;" v-if="item.visitorType === 0">
                                    申请来访
                                </div>
                                <div class="lfType" style="background-color:#5DB5F6;" v-if="item.visitorType === 1">
                                    访客邀请
                                </div>
                            </Col>
                            <Col span="4" offset="9" align="right">
                                <div class="lftime">{{item.createTime|jqTime}}</div>
                            </Col>
                        </Row>
                        <Row class="lfListsec">
                            <Col span='14' style="margin-top: 2%">
                                <p class="wb1"><span>公司：</span>{{item.visitorCompany}}
                                </p>
                                <p class="wb1" style="color:#656D72">来访日期：{{item.visitDate}}</p>
                            </Col>
                            <Col span='10' style="position: relative">
                                <br>
                                <div v-if="item.auditStatus === 0">
                                    <Button @click="$_fksh_$($event,1,item.id)"
                                            shape="circle"
                                            class="tybtn"
                                            type="primary">同意
                                    </Button>
                                    <Button @click="$_fksh_$($event,2,item.id)"
                                            shape="circle"
                                            class="jjbtn"
                                            type="ghost">拒绝
                                    </Button>
                                </div>
                                <div v-else class="wb2">
                                    <span style="color:#00C1DE" v-if="item.auditStatus === 1 && item.visitorType === 0">已同意</span>
                                    <span v-if="item.auditStatus === 1 && item.visitorType === 1">已邀请</span>
                                    <span style="color:#FA541C;" v-if="item.auditStatus === 2">已拒绝</span>
                                </div>
                            </Col>
                        </Row>
                    </li>
                </ul>
                <!--<div slot="top" class="mint-loadmore-top">-->
                <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉加载</span>-->
                <!--<span v-show="topStatus === 'loading'">Loading...</span>-->
                <!--</div>-->
            </mt-loadmore>

            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有访客记录哦~</div>
            </div>
        </div>
        <div v-show="!$_isshow_$" class="wrap">
            <Form label-position="left" ref="$_formValidate_$" :model="$_formValidate_$" :rules="$_ruleValidate_$"
                  :label-width="100">
                <ul class="mul2">
                    <li style="border: none;">
                        <span class="wb3">访客信息</span>
                    </li>
                    <li>
                        <FormItem label="姓名" prop="$_name_$">
                            <Input class="bbb" @on-blur="navShow = 1" @on-focus="navShow = 0"
                                   v-model="$_formValidate_$.$_name_$" placeholder="请输入"></Input>
                        </FormItem>
                    </li>
                    <li>
                        <FormItem label="电话" prop="$_phone_$">
                            <Input class="bbb" @on-blur="navShow = 1" @on-focus="navShow = 0"
                                   v-model="$_formValidate_$.$_phone_$" placeholder="请输入"
                                   number></Input>
                        </FormItem>
                    </li>
                    <li style="margin-left: 2.5%">
                        <FormItem label="单位" prop="$_company_$">
                            <Input class="bbb" @on-blur="navShow = 1" @on-focus="navShow = 0"
                                   v-model="$_formValidate_$.$_company_$" placeholder="请输入"></Input>
                        </FormItem>
                    </li>
                </ul>
                <ul class="mul2">
                    <li style="border: none">
                        <span class="wb3">邀请信息</span>
                    </li>
                    <li class="spTime">
                        <FormItem label="邀请时间" prop="$_Stime_$">
                            <div class="riqi">
                                <div class="riqi1" v-if="model2" @click="calendarShow = true">{{model2}}</div>
                                <div class="riqi2" v-else @click="calendarShow = true">请选择</div>
                            </div>
                            <!--<Input class="bbb" placeholder="请选择" @on-focus="calendarShow = true"-->
                            <!--v-model="model2"></Input>-->
                            <calendar disable-before :show.sync="calendarShow" @change="handleConfirm"
                                      :weekNames="weekNames"/>
                        </FormItem>
                    </li>
                    <li style="margin-left: 2.5%;">
                        <FormItem label="邀请事由" prop="$_reason_$">
                            <Input class="bbb" @on-blur="navShow = 1" @on-focus="navShow = 0"
                                   v-model="$_formValidate_$.$_reason_$" :autosize="{minRows: 1,maxRows: 2}"
                                   type="textarea" placeholder="请输入"></Input>
                        </FormItem>
                    </li>
                    <li style="margin-left: 2.5%;">
                        <FormItem label="会议室" prop="$_hys_$">
                            <i-switch v-model="$_formValidate_$.switch" size="large" @on-change="$_choice_$">
                                <span slot="open"></span>
                                <span slot="close"></span>
                            </i-switch>
                        </FormItem>
                    </li>
                    <li v-show="isShow"
                        class="wb4">
                        <FormItem label="选择" prop="$_xzhys_$">
                            <!--<Select class="aaa" placeholder="请选择会议室" v-model="$_formValidate_$.select">-->
                            <!--<Option v-for="item in hysList" :value="item.id" :key="item.id">{{ item.meetingTheme }}-->
                            <!--</Option>-->
                            <!--</Select>-->
                            <span @click="$_hhyyss_$"
                                  style="width: 100%;line-height: 30px;text-align: right;display: block;font-size: 14px;">
                                <span :class="hysNanem == '请选择会议室'?'black1':'black2'">{{hysNanem}}</span>
                            </span>
                        </FormItem>
                        <mt-actionsheet
                                :actions="hysList"
                                v-model="sheetVisible">
                        </mt-actionsheet>
                    </li>
                </ul>
            </Form>
            <Row>
                <Col span="12">
                    <Button @click="$_restart_$()"
                            shape="circle"
                            type="primary"
                            style="background-color: #fff;color: #00C1DE"
                            class="wb5">重置
                    </Button>
                </Col>
                <Col span="12">
                    <Button @click="$_save_$()"
                            shape="circle"
                            type="primary"
                            class="wb5">发送邀请
                    </Button>
                </Col>
            </Row>
        </div>
        <!-- 底部 -->
        <div>
            <div v-if="this.$_isshow_$ ==1" class='footer'>
                <ul class="">
                    <li @click="$_show_$('jl')">
                    <span style="float: left;margin-left:28%;margin-top: 2.5%"><img class="icon1"
                                                                                    src="/static/fwsl/gjxx_blue.png"
                                                                                    alt=""></span>
                        <span class="active" style="float:right;margin-right: 28%">访客列表</span>
                    </li>
                    <span style="border-left: 1px solid #E8E8E8; height:26px;margin-top: 3%; float: left"></span>
                    <li @click="$_show_$('yq')">
                    <span style="float: left;margin-left: 28%;margin-top: 4%"><img class="icon2"
                                                                                   src="/static/fkgl/fkyq-weidianji.png"
                                                                                   alt=""></span>
                        <span style="float:right;margin-right: 28%;color: #B3B3B3">访客邀请</span>
                    </li>
                </ul>
            </div>
            <!-- 底部 -->
            <div v-else class='footer'>
                <ul class="">
                    <li @click="$_show_$('jl')">
                    <span style="float: left;margin-left: 28%;margin-top: 2.5%"><img class="icon1"
                                                                                     src="/static/fwsl/gjxx_black.png"
                                                                                     alt=""></span>
                        <span style="float:right;margin-right: 28%;color: #B3B3B3">访客列表</span>
                    </li>
                    <span style="border-left: 1px solid #E8E8E8; height:26px;margin-top: 3%; float: left"></span>
                    <li @click="$_show_$('yq')">
                    <span style="float: left;margin-left: 28%;margin-top: 4%"><img class="icon2"
                                                                                   src="/static/fkgl/fkyq-dianji.png"
                                                                                   alt=""></span>
                        <span class="active" style="float:right;margin-right: 28%;">访客邀请</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {DatetimePicker} from 'mint-ui';
    import {Loadmore} from 'mint-ui';
    // import controler from './controler.js';
    import {Search} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import search from '../public/search';
    import navigator from '../public/navigator';
    import {Toast} from 'mint-ui';
    import {MessageBox} from 'mint-ui';
    import {Actionsheet, Indicator} from 'mint-ui';
    import calendar from '../public/calendar'

    export default {
        //mixins: [controler],
        components: {
            calendar,
            navigator,
            search,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [Search.name]: Search,
            [Actionsheet.name]: Actionsheet,
            [Indicator.name]: Indicator
        },
        //过滤器
        filters: {
            jqTime: function (value) {
                if (!value) return ''
                //当天日期
                let date3 = new Date();
                let nowDay = date3.getFullYear() + "-" + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1)) + "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
                //截取日期
                let valueTime = value.substring(0, 10);
                if (valueTime == nowDay) {
                    //返回时间
                    return value.substring(11, 16);
                }
                //返回日期
                return value.substring(5, 10);
            }
        },
        data() {
            const validatephone = (rule, value, callback) => {
                if (!(/^1[3456789]\d{9}$/.test(value))) {
                    callback('号码格式不正确');
                } else {
                    callback();
                }
            };
            const validateStime = (rule, value, callback) => {
                if (!this.model2) {
                    callback('请选择来访时间');
                } else {
                    //当天日期
                    let date3 = new Date();
                    let nowDay = date3.getFullYear() + "-" + ((date3.getMonth() + 1) < 10 ? "0" + (date3.getMonth() + 1) : (date3.getMonth() + 1)) + "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
                    let oDate1 = new Date(this.model2);//选择时间
                    let oDate2 = new Date(nowDay);//现在时间
                    if (oDate1.getTime() < oDate2.getTime()) {
                        callback('需大于当前时间');
                    }
                    this.$_formValidate_$.$_Stime_$ = this.model2;
                    callback();
                }
            };
            const validateEtime = (rule, value, callback) => {
                if (!this.model3) {
                    callback('请选择结束时间');
                } else {
                    this.$_formValidate_$.$_Etime_$ = this.model3;
                    if (this.model2 > this.model3) {
                        callback('大于开始时间');
                    } else {
                        callback();
                    }
                }
            };
            return {
                navShow: 1,
                hysNanem: '请选择会议室',
                sheetVisible: false,
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                calendarShow: false,
                topStatus: '',
                $_isshow_$: 1,
                $_pageType_$: '访客列表',
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
                        {required: true, type: 'string', message: '请填写访客姓名', trigger: 'change'},
                        //长度验证
                        {type: 'string', max: 50, message: '字数限制50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_phone_$: [
                        {required: true, type: 'number', message: '号码格式不正确', trigger: 'change'},
                        //特殊字符验证
                        {validator: validatephone, trigger: 'change'}
                    ],
                    $_company_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '字数限制50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_bumen_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '字数限制50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_reason_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '字数限制50字', trigger: 'change'},
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
                        label: '所有'
                    }, {
                        value: '被访',
                        label: '申请来访'
                    }, {
                        value: '邀请',
                        label: '邀请访客'
                    }
                ],
                hysList: [],
                model1: '',
                model2: '',
                model3: '',
                model4: '',
                $_List_$: [],
                pageSize: 20,//每页条数
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
            this.$_hysList_$();
        },
        mounted() {
            var oHeight = $(document).height();
            window.onresize = function () {
                if ($(document).height() < oHeight) {
                    $(".footer").css("position", "static");
                } else {
                    $(".footer").css("position", "fixed"); //adsolute或fixed，看你布局
                }
            };
        },
        destroyed() {
            window.onresize = void 0;
        },
        methods: {
            $_hhyyss_$() {
                if (this.hysList.length > 0) {
                    this.sheetVisible = true
                } else {
                    Toast('暂无可选会议室');
                }
            },
            $_xzHys_$(res) {
                this.$_formValidate_$.select = res.id;
                this.hysNanem = res.name;
            },

            //姓名搜索
            $_Search_$() {
                this.pageNum = 1;
                this.$_fkList_$(this.searchname, this.searchtype, this.searchdate);
            },
            //来访类型搜索
            $_SearchType_$(value) {
                this.pageNum = 1;
                this.searchtype = value;
                this.$_fkList_$(this.searchname, this.searchtype, this.searchdate);
            },
            //日期搜索
            $_SearchDate_$(date) {
                this.pageNum = 1;
                // 输出格式化后的时间
                // let datenum = this.formatDate(this.$refs.datePicker.value);
                // datenum = datenum.substr(0, 10);
                let datenum = date.format('YYYY-MM-DD');
                this.model4 = datenum;
                this.searchdate = datenum;
                this.$_fkList_$(this.searchname, this.searchtype, this.searchdate);
                this.calendarShow = false;

            },
            $_Searchqx_$() {
                this.searchdate = '';
                this.model4 = '';
                this.$_fkList_$(this.searchname, this.searchtype, this.searchdate);
            },
            $_choice_$(e) {
                this.isShow = e;
            },
            show() {
                this.$refs.input1.blur();
            },
            //可预约会议室
            $_hysList_$() {
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                //请求部门下员工
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/zone/zone/${userInfo.zoneId}/meeting/self/reserves`,
                    data: {
                        queryFlg: 1
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            let newArr = [];
                            for (let i = 0; i < res.data.data.records.length; i++) {
                                if (res.data.data.records[i].status == 1 || res.data.data.records[i].status == 5) {
                                    res.data.data.records[i].name = res.data.data.records[i].meetingTheme
                                    res.data.data.records[i].method = this.$_xzHys_$
                                    newArr.push(res.data.data.records[i])
                                }
                            }
                            this.hysList = newArr;
                        }
                    }
                })
            },
            //访客记录列表
            $_fkList_$(searchname, searchtype, searchdate) {
                let data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                };
                if (searchname) {
                    data.visitorName = searchname;
                }
                if (searchtype) {
                    if (searchtype == '被访') {
                        data.visitorType = 0;
                    }
                    if (searchtype == '邀请') {
                        data.visitorType = 1;
                    }
                }
                if (searchdate) {
                    data.createTime = searchdate;
                }
                if ((searchname || searchtype || searchdate) && this.pageNum === 1) {
                    this.$_List_$ = [];
                }
                if (!searchname && !searchtype && !searchdate && this.pageNum === 1) {
                    this.$_List_$ = [];
                }

                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/visitor/employee/records`,
                    data: data
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
            handleConfirm(date) {
                // 输出格式化后的时间
                this.model2 = date.format('YYYY-MM-DD');
                this.calendarShow = false;
            },
            listDate(date) {

            },
            $_nextPage_$(item) {
                //审核
                if (item.auditStatus === 0) {
                    //this.$root.$_Route_$('user', 'mobile', 'ygsy-fkgl-fksh', {id: item.id})
                    this.$router.push({
                        path:'/ygsyfkgl/ygsy-fkgl-fksh',
                        query:{id:item.id}
                    })
                }
                //邀请
                if (item.auditStatus === 1 && item.visitorType === 1) {
                   //this.$root.$_Route_$('user', 'mobile', 'ygsy-fkgl-yq', {id: item.id})
                     this.$router.push({
                        path:'/ygsyfkgl/ygsy-fkgl-yq',
                        query:{id:item.id}
                    })
                }
                //来访同意
                if (item.auditStatus === 1 && item.visitorType === 0) {
                  //  this.$root.$_Route_$('user', 'mobile', 'ygsy-fkgl-fkyq', {id: item.id})
                  this.$router.push({
                        path:'/ygsyfkgl/ygsy-fkgl-fkyq',
                        query:{id:item.id}
                    })
                }
                //拒绝
                if (item.auditStatus === 2) {
                    //this.$root.$_Route_$('user', 'mobile', 'ygsy-fkgl-fkjj', {id: item.id})
                     this.$router.push({
                        path:'/ygsyfkgl/ygsy-fkgl-fkjj',
                        query:{id:item.id}
                    })
                }
            },
            $_show_$(type) {
                if (type == 'jl') {
                    this.$_isshow_$ = 1;
                    this.$_pageType_$ = '访客列表'
                }
                if (type == 'yq') {
                    this.$_isshow_$ = !1;
                    this.$_pageType_$ = '访客邀请'
                }
            },
            $_restart_$() {
                for (let key in this.$_formValidate_$) {
                    this.$_formValidate_$[key] = '';
                }
                this.model2 = '';

            },
            $_save_$() {
                this.$refs.$_formValidate_$.validate((valid) => {
                    if (valid) {
                        Indicator.open({
                        text: '提交中...',
                        spinnerType: 'fading-circle'
                       });
                        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                        let userInfo = JSON.parse(cookie);
                        //请求部门下员工
                        let data = {
                            visitorName: this.$_formValidate_$.$_name_$,
                            visitorMobile: this.$_formValidate_$.$_phone_$,
                            visitorCompany: this.$_formValidate_$.$_company_$,
                            visitReason: this.$_formValidate_$.$_reason_$,
                            visitDate: this.$_formValidate_$.$_Stime_$,
                            startTime: this.$_formValidate_$.$_Stime_$ + " 00:00:00",
                            endTime: this.$_formValidate_$.$_Stime_$ + " 23:59:59",
                        };
                        if (this.$_formValidate_$.select && this.isShow) {
                            for (let i = 0; i < this.hysList.length; i++) {
                                if (this.$_formValidate_$.select == this.hysList[i].id) {
                                    data.meetingId = this.hysList[i].meetingId;
                                    data.meetingReserveId = this.hysList[i].id;
                                }
                            }
                        }
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/company/visitor/employee/create`,
                            data: data,
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                if (res.data.code === 0) {
                                    Indicator.close();
                                    this.$router.push({
                                        path:'/ygsyfkgl/ygsy-fkgl-yq',
                                        query:{id: res.data.data.id}
                                    })
                                    //this.$root.$_Route_$('user', 'mobile', 'ygsy-fkgl-yq', {id: res.data.data.id})
                                } else {
                                    Toast(res.data.message);
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
                    this.$_fkList_$(this.searchname, this.searchtype, this.searchdate);
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
            $_fksh_$($event, type, id) {
                //阻止父事件
                $event.stopPropagation();
                //同意
                if (type === 1) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/company/visitor/audit/pass/${id}`,
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            if (res.data.code === 0) {
                                Toast('审核成功，已同意');
                                this.$_fkList_$();
                            }
                        }
                    })
                }
                //不同意
                if (type === 2) {
                    MessageBox.prompt('请填写不通过原因').then(({value, action}) => {
                        if (action == 'confirm') {
                            this.$_sendQuery_$({
                                method: "POST",
                                url: `${this.$_global_$.serverPath}/company/visitor/audit/nopass/${id}`,
                                data: {
                                    auditDesc: value
                                },
                                headers: {
                                    "Content-type": "application/json"
                                }
                            }).then(res => {
                                if (res.status === 200) {
                                    if (res.data.code === 0) {
                                        Toast('审核成功，已拒绝');
                                        this.$_fkList_$();
                                        // setTimeout(() => {
                                        //     this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
                                        // }, 1000);
                                    }
                                }
                            })
                        }
                    });
                }
            }
        }
    }
</script>
