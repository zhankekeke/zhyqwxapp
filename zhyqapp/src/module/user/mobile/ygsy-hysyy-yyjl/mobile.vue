<style>
    body {
        background: #fff;
        position: static;
        color: rgb(51, 51, 51);
    }
</style>
<style scoped>
    .wrap {
        /*padding: 7px 0px 60px 0px;*/
        background: #f6f6f6;
        height: 100vh;
        line-height: 1;
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
        line-height: 49px;
        height: 49px;
        color: #B3B3B3;
    }

    .footer ul li .footerIcon {
        width: 25px;
        height: 23px;
        margin-right: 8px;
        margin-top: 13px;
        display: block;
        margin-left: 48px;
        float: left;
    }

    .footer ul li p {
        height: auto;
    }

    .orderList {
        /*padding: 1px 15px 15px 15px;*/
        /*color: #999;*/
        /*font-size: 12px;*/
        background-color: rgb(246, 246, 246);
        padding-bottom:52px;
    }

    .orderList .orderInfo {
        /*height: 100px;*/
        background-color: #fff;
        /*padding: 0 10px;*/
        /*border: 1px solid #f6f6f6;*/
        /*border-radius: 5px;*/
        margin-bottom: 10px;

        height: 102px;
        padding: 14px 16px;
    }

    .orderInfo .infoTop {
        height: 34px;
        border-bottom: 1px dashed #f6f6f6;
        position: relative;
        line-height: 34px
    }

    .infoTop .topLeft {
        width: 50%;
        position: absolute;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .infoTop .topRight {
        position: absolute;
        right: 10px
    }

    .orderInfo .infoBottom {
        /*padding-top: 10px;*/
        /*height: 100px;*/
        position: relative;
    }

    .infoBottom .bottomLeft {
        width: 55%;
        height: 80px;
        display: inline-block;
        position: absolute;
    }

    .infoBottom .bottomRight {
        display: inline-block;
        position: absolute;
        right: 0;
        color: #999999;
        font-size: 14px;
        width: 21%;
        text-align: right;
    }

    .infoBottom .bottomLeft img {
        width: 72px;
        height: 72px;
        border-radius: 3px;
    }

    .bottomLeft .leftName {
        display: inline-block;
        position: absolute;
        left: 94px;
        white-space: nowrap;
        /*width: 70%;*/
    }

    .leftName p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 12px;
        font-size: 12px;
        color: #333333
    }

    >>> .ivu-modal-footer {
        padding: 0;
        border-top: none;
        margin-top: 10px;
    }

    .cancle {
        margin-top: 32px;
        width: 76px;
        height: 28px;
        background: rgb(0, 193, 222);
        border-radius: 14px;
        text-align: center;
    }

    .cancle span {
        font-size: 12px;
        color: rgb(255, 255, 255);
        line-height: 28px;
    }

    .leftName .mtnm {
        margin-top: 0;
        font-size: 18px
    }

    .leftName .mtzt {
        margin-top: 18px;
    }

    >>> .ivu-select-selection {
        border: none;
    }

    .ivu-btn {
        border-color: #fff;
    }

    .head {
        padding: 10px 16px;
    }

    .head span {
        font-size: 12px;
    }

    .headButton {
        width: 67%;
        height: 32px;
        position: relative;
        text-align: left;
        background-color: #fff
    }

    .headButton img {
        position: absolute;
        right: 7px;
        top: 7px
    }

    .wrap .top {
        height: 40px;
        background: #fff;
        line-height: 40px;
    }

    .aa5 {
        width: 80px;
    }
    .aa5 >>> .ivu-select-selection {
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
    >>>.ivu-select-arrow{
        top:15px;
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
        text-align: right;
        line-height:1;
        padding-top:8px;
    }

    .aa5 >>>.ivu-select-dropdown {
        width: 100vw !important;
        left: 0 !important;
        border-radius: 0;
        max-height:275px !important;
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

    .aa5 .ivu-select-single .ivu-select-selection .ivu-select-placeholder {
        color: #00C1DE;
        font-size: 14px;

    }

    .aa5 >>> .ivu-select-placeholder {
        color: #656D72;
        text-align: right;
        font-size: 14px;
    }

    .aa5 >>> .ivu-select-selection:hover, .ivu-select-selection-focused {
        border: none;
        box-shadow: none;
    }

    .select {
        width: 86px;
    }

    .date {
        display: block;
        width: 101px;
        height: 40px;
        line-height: 1;
        padding-top:13px;
        box-sizing:border-box;
        background: url('/static/jfsc/rl.svg') 85px 11px no-repeat;
        background-size: 16px 16px;
        color: #656D72;
        font-size: 14px;
        font-weight: 400;
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

    .top {
        margin-bottom: 10px;
    }
    >>>.ivu-input:focus{box-shadow:none;border-color:#dddee1;}
    >>>.ivu-btn{border:none;height:45px;}
    >>>.ivu-modal-body{padding:30px 31px 0 32px;}
    >>>.ivu-modal-close{display:none;}
    >>>.ivu-btn-group{border:none;}
    >>>.ivu-btn:nth-child(2){
        background: #fff;
        border: none;
        border-top: 1px solid #dddee1;
    }
    >>>.ivu-btn:nth-child(1){
        background:linear-gradient(136deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
    }
    >>>.ivu-input-large{width:105px;height:30px;line-height:30px;padding:0;background:rgba(247,247,247,1);border-radius:4px;
    border:none;}
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator style="border-bottom: 1px solid #f6f6f6;" title="预约记录" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="top">
                <Row>
                    <Col span="6" class="select">
                        <Select class="aa5" v-model="$_state_$" placeholder="状态" @on-change="$_searchOrder_$">
                            <Option v-for="item in $_stateList_$" :value="item.value" :key="item.value">{{item.label}}
                            </Option>
                        </Select>
                    </Col>
                    <Col span="12" offset="2">
                        <span class="date" placeholder="请选择" @click="calendarShow = true">{{$_datetime_$}}</span>
                        <calendar :show.sync="calendarShow" @change="handleConfirm" :weekNames="weekNames"
                                  :disable-before="false"/>
                    </Col>
                </Row>
            </div>
            <div v-if="$_data_$.length > 0" class="orderList">
                <div class="orderInfo" v-for="(item,index) in $_data_$" :key="index" @click="$_jlxq_$(item)">
                    <div class="infoBottom">
                        <div class="bottomLeft">
                            <img :src="item.images[0].imageUrl|imgsrc"/>
                            <span class="leftName">
                                <p class="mtnm">{{item.meetingRoomName}}</p>
                                <p class="mtzt">{{item.meetingTheme}}</p>
                                <p style="color: #656D72">{{item.reserveDate}}&nbsp;&nbsp;{{item.startTime}}-{{item.endTime}}</p>
                            </span>
                        </div>

                        <div class="bottomRight">
                            <span v-if="item.status==1" style="color: #00C1DE">已预约</span>
                            <span v-else-if="item.status==2">已取消</span>
                            <span v-else-if="item.status==3">已退订</span>
                            <span v-else-if="item.status==4">已过期</span>
                            <span v-else-if="item.status==5">进行中</span>
                            <span v-else>未知</span>
                            <!--<Button type="primary" style="margin-top: 32px" v-on:click.stop="$_cancelyy_$(item)">取消预约</Button>-->
                            <div v-if="item.status==1||item.status==5" class="cancle"
                                 v-on:click.stop="$_cancelyy_$(item)"><span>取消预约</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有预约记录哦~</div>
            </div>
        </div>

        <!-- 底部 -->
        <div class='footer'>
            <ul>
                <li @click="$_hysyy_$">
                    <img class="footerIcon" src="/static/hysyy/hysyy2.svg" alt="">
                    <span>会议室预约</span>
                </li>
                <span style="border-left: 1px solid #ccc; height:20px;margin-top: 15px; float: left"></span>
                <li>
                    <img class="footerIcon" src="/static/hysyy/yyjl1.svg" alt="">
                    <span class="active">预约记录</span>
                </li>
            </ul>
        </div>
        <!--取消会议室预约弹窗-->
        <Modal v-model="$_success_$" :styles="{top: '25%'}" width="360" :mask-closable="false">
            <div style="text-align:center;margin-bottom: 20px;">
                <p style="font-size: 18px;color:rgb(51,51,51);margin-bottom: 18px;line-height:1;">您确定要取消该会议室的预约吗？</p>
                <div style="font-size: 16px;color:#333;">
                    <p>如果您确定取消预约该会议室，请在指定位置输入
                        ‘<span style="color: rgb(250,2,2);">立即取消</span>’
                        后，再点击确定
                    </p>
                </div>
                <p style="font-size: 14px;margin-top: 14px">
                    <Input v-model="$_verification_$" size="large" @on-change="$_ljqx_$"></Input>
                </p>
            </div>
            <div slot="footer" style="background-color: rgb(249,249,249);text-align: center;border-radius:6px;">
                <ButtonGroup style="width: 100%">
                    <Button type="primary" style="font-size: 15px;width: 50%;border-top-left-radius: 0" @click="$_ok_$">
                        确定
                    </Button>
                    <Button style="font-size: 15px;width:50%;margin-left: 0px;border-top-right-radius: 0"
                            @click="$_cancel_$">取消
                    </Button>
                </ButtonGroup>
                <span></span>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {DatetimePicker} from 'mint-ui';
    import navigator from '../public/navigator';
    import {Toast,Indicator} from 'mint-ui';

    export default {
        components: {
            navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Indicator.name]:Indicator
        },
        data() {
            return {
                $_thisUserInfo_$: '',  //用户信息
                $_state_$: '', //选择预约状态
                $_datetime_$: '', //选择预约时间
                $_success_$: false,  //取消会议室预约弹窗
                $_choosehys_$: '',  //当前会议室
                $_verification_$: '', //验证是否取消预约
                $_verifysuccess_$: false,  //验证是否成功，默认为false
                pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear();
                    let m = date.getMonth() + 1;
                    m = m < 10 ? '0' + m : m;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    return y + '-' + m + '-' + d
                },
                $_stateList_$: [
                    {
                        value: 0,
                        label: '全部'
                    },
                    {
                        value: 1,
                        label: '已预约'
                    },
                    {
                        value: 2,
                        label: '已取消'
                    },
                    {
                        value: 3,
                        label: '已退订'
                    },
                    {
                        value: 4,
                        label: '已过期'
                    },
                    {
                        value: 5,
                        label: '进行中'
                    },
                ],
                $_data_$: [], //预约记录列表
                calendarShow: false,
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                requestParames: {}


            }
        },
        methods: {
            showDate() {
                this.calendarShow = true;
            },
            $_yyjlList_$() {
                let sendData = {};

                let ydsuccess = false;
                ydsuccess = this.$root.inparams.success;
                if (ydsuccess) {
                    // Toast('会议室预约成功');
                }

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/zone/zone/" + this.$_thisUserInfo_$.zoneId + "/meeting/self/reserves",
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                             Indicator.close();
                            this.$_data_$ = rsp.data.data.records;
                        }
                    }
                });
            },

            //点击确定按钮之后
            handleConfirm(date) {
                Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
                // 输出格式化后的时间
                this.$_datetime_$ = date.format('YYYY-MM-DD');
                this.requestParames = {
                    "startTime": this.$_datetime_$,
                    "endTime": this.$_datetime_$,
                };
                if (this.$_state_$ != 0) {
                    this.requestParames.status = this.$_state_$;
                }
                this.searchForValue();
                this.calendarShow = false;
            },
            //预约记录查询
            $_searchOrder_$() {
                 Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
                if (this.$_state_$ == 0) {
                    this.requestParames = {};
                }else{
                    this.requestParames = {
                        "startTime": this.$_datetime_$,
                        "endTime": this.$_datetime_$,
                        "status" : this.$_state_$
                    };
                }
                this.searchForValue()
            },
            searchForValue() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/zone/zone/" + this.$_thisUserInfo_$.zoneId + "/meeting/self/reserves",
                    data: this.requestParames,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                             Indicator.close();
                            this.$_data_$ = rsp.data.data.records;

                        }
                    }
                });
            },
            //取消预约对话框
            $_cancelyy_$(item) {
                this.$_choosehys_$ = item;
                this.$_success_$ = true;
                this.$_verification_$ = ''
            },
            //验证立即取消是否正确
            $_ljqx_$() {
                if (this.$_verification_$ === '立即取消') {
                    this.$_verifysuccess_$ = true;
                } else {
                    this.$_verifysuccess_$ = false;
                }
            },
            //确认取消预约
            $_ok_$() {
                if (this.$_verifysuccess_$) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + "/zone/zone/" + this.$_thisUserInfo_$.zoneId + "/meeting/" + this.$_choosehys_$.meetingId + "/unsubscribe/" + this.$_choosehys_$.id,
                        data: {},
                        headers: {"Content-type": "application/json"}
                    }).then((rsp) => {
                        if (rsp.status == 200) {
                            if (rsp.data.code == 0) {
                               
                                this.$_success_$ = false;

                                Toast('取消预约成功');
                                this.$_yyjlList_$();
                            } else {
                                this.$_success_$ = false;
                                Toast(rsp.data.message);
                            }
                        }
                    });

                }
            },
            //取消对话框
            $_cancel_$() {
                this.$_success_$ = false;
            },


            //查看订单详情
            $_jlxq_$(item) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-hysyy-yyjlxq', {id: item.id, meetingId: item.meetingId})
            },

            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex')
            },
            //商城首页
            $_hysyy_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyhysyy')
            },
            // 初始化搜索时间
            time() {
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
                this.$_datetime_$ = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_yyjlList_$()
            this.time()
        }
    }
</script>