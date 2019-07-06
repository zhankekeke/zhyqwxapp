
<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 15px 0 0;
        box-sizing: border-box;
        height: 49px;
        box-shadow: 0px 0px 12px 0px rgba(232, 232, 232, 0.9);
    }

    .footer .active {
        color: #029bfa;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 48%;
    }

    .footer ul li p {
        height: 17px;
        padding-left: 87px;
        box-sizing: border-box;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        background-size: 19px 17px;
        line-height: 17px;
        color: #B3B3B3;
    }

    .footer ul li .index {
        background: url('/static/jfsc/scgray.svg') 57px 0 no-repeat;
        background-size: 19px 17px;
    }

    .footer ul li .jl {
        background: url('/static/jfsc/jlblue.svg') 57px 0 no-repeat;
        background-size: 19px 17px;
        color: #00C1DE;
    }

    .wrap {
        padding-bottom: 49px;
        background: #f6f6f6;
        min-height: 93vh;
    }

    .wrap .top {
        height: 40px;
        background: #fff;
        line-height: 40px;
    }

    .orderList {
        padding: 0 16px 5px 16px;
        color: #999;
        font-size: 12px;
        font-family: 'PingFangSC-Regular';
    }

    .orderList .orderInfo {
        height: 144px;
        margin-top: 10px;
        padding: 14px 0px 16px 0px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
    }
    .orderInfo .infoTop {
        padding: 0 15px 26px 14px;
        box-sizing: border-box;
        height: 12px;
        color: #333;
        border-bottom: 1px solid #E5E5E5;
        position: relative;
        line-height: 1;
        font-size: 12px;
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
        right: 15px;
    }

    .orderInfo .infoBottom {
        padding: 15px 18px 0 14px;
        height: 72px;
        position: relative;
    }

    .infoBottom .bottomLeft {
        width: 75%;
        height: 72px;
        display: inline-block;
        position: absolute;
    }

    .infoBottom .bottomRight {
        display: inline-block;
        position: absolute;
        right: 18px;
        color: #333;
        font-size: 14px;
        top: 45px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
    }

    .infoBottom .bottomLeft img {
        width: 72px;
        height: 72px;
    }

    .bottomLeft .leftName {
        display: inline-block;
        position: absolute;
        left: 85px;
    }

    .bottomLeft .leftName .goodsname {
        color: #333;
        font-size: 18px;
        font-weight: 550;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1;
        margin-bottom: 15px;
    }

    .bottomLeft .leftName .goosinfo {
        font-size: 14px;
        color: #333;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .bottomLeft .leftName .goosinfo .special {
        font-size: 14px;
        font-family: 'DINAlternate-Bold';
        font-weight: bold;
        color: #FF8E58;
    }

    .bottomLeft .leftName .userinfo {
        font-size: 12px;
        font-weight: 400;
        color: #656D72;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
    }

    .aa5 >>> .ivu-select-dropdown {
        width: 100vw !important;
        left: 0 !important;
        border-radius: 0;
        overflow:hidden;
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
        margin-left:5px;
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
    .qs{
        width:76px;
        height:28px;
        background:rgba(0,193,222,1);
        border-radius:14px;
        line-height:28px;
        text-align:center;
        font-size:12px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:#fff !important;
    }
    .btnDate {
        width: 100%;
        height: 37px;
        position: relative;
        background-color: #fff;
        line-height: 37px;
        border-radius: 4px;
        text-align: left;
        font-size: 14px;
        z-index: 99;
    }
    .rltb {
        position: absolute;
        right: 30px;
        top: 12px;
        z-index: 99;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="购买记录" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="top">
                <Row>
                    <Col span="7" class="select">
                        <Select class="aa5" v-model="$_state_$" placeholder="状态" @on-change="$_searchOrder_$">
                            <Option v-for="item in $_stateList_$" :value="item.value" :key="item.value">{{item.label}}</Option>
                        </Select>
                    </Col>
                    <Col span="8">
                    <div class="btnDate" 
                     @click="calendarShow = true">
                        <span v-if="$_datetime_$" class="date" placeholder="请选择">{{$_datetime_$}}</span>
                         <Icon v-if="$_datetime_$ == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                    </div>
                        <calendar :show.sync="calendarShow" @change="handleConfirm" :weekNames="weekNames"
                                   @touchmove.native.stop.prevent/>
                        <Icon @click="$_Searchqxe_$()" v-if="$_datetime_$" type="ios-close-outline" size="16px"
                              class="rltb"></Icon>
                              
                    </Col>
                </Row>
            </div>
            <div v-if="$_data_$.length > 0" class="orderList">
                <div class="orderInfo" v-for="(item,index) in $_data_$" :key="index" @click="$_ddxq_$(item)">
                    <div class="infoTop">
                        <span class="topLeft">编号：{{item.orderNumber}}</span>
                        <span class="topRight">{{item.commiteTime | formatDate}}</span>
                    </div>
                    <div class="infoBottom">
                        <div class="bottomLeft">
                            <img :src="item.orderGoods[0].goodsImage|formatimage|imgsrc">
                            <span class="leftName">
                                <p class="goodsname">{{item.orderGoods[0].goodsName}}</p>
                                <p class="goosinfo" v-if="item.orderGoods[0].goodsType==0">
                                    <span class="special">{{item.orderGoods[0].goodsPrices}}</span>
                                    元*{{item.orderGoods[0].goodsCount}}
                                </p>
                                <p class="goosinfo" v-else>
                                    <span class="special">{{item.orderGoods[0].goodsCredits}}</span>
                                    积分*{{item.orderGoods[0].goodsCount}}
                                </p>
                                <p v-if="item.orderGoods[0].goodsIsDelivery && item.orderState>2" class="userinfo">配送管家
                                    &nbsp;{{item.stewardName}}</p>
                            </span>
                        </div>
                        <span v-if="item.orderState==1" class="bottomRight">已支付</span>
                        <span v-else-if="item.orderState==2" class="bottomRight">已发货</span>
                        <span v-else-if="item.orderState==3" class="bottomRight qs" @click.stop="qianshou(item.id)">签收</span>
                        <span v-else class="bottomRight">已签收</span>
                    </div>
                </div>
            </div>
            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/jfsc/gmjl_nolist.svg"/>
                <div class="nolist">您还没有购买记录哦~</div>
            </div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li @click="$_scsy_$">
                    <p class=" index">园区商城</p>
                </li>
                <span style="border-left: 1px solid #ccc; height:20px; float: left"></span>
                <li>
                    <p class="jl">购买记录</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    // import controler from './controler.js';
    import navigator from '../public/navigator';
    import calendar from '../public/calendar';
    import {Toast, Indicator} from 'mint-ui';

    export default {
       // mixins: [controler],
        components: {
            navigator,
            calendar,
            [Toast.name]: Toast,
            [Indicator.name]: Indicator
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
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                // var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate+' '+hours+seperator2+minutes+seperator2+seconds;
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
                return currentdate;
            },
            formatimage(item) {
                var arr = item.split(";")
                return arr[0] ? arr[0] : ''
            }
        },
        data() {
            return {
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                calendarShow: false, // 选择日期插件
                $_thisUserInfo_$: '',  //用户信息
                $_state_$: '', //选择订单状态
                $_datetime_$: '', //选择订单时间
              pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear();
                    let m = date.getMonth() + 1;
                    m = m < 10 ? '0' + m : m;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    return y + '-' + m + '-' + d
                },
                $_data_$: [], //订单列表
                $_stateList_$: [
                    {
                        value: 0,
                        label: '全部'
                    },
                    {
                        value: 1,
                        label: '已支付'
                    },
                    {
                        value: 2,
                        label: '已发货'
                    },
                    {
                        value: 3,
                        label: '已送达'
                    },
                    {
                        value: 4,
                        label: '已签收'
                    },
                ],
            }
        },
        methods: {
            // 日期弹窗确认
            handleConfirm(date) {
                // 输出格式化后的时间
                this.$_datetime_$ = date.format('YYYY-MM-DD');
               // console.log(this.$_datetime_$)
               //if(this.$_datetime_$){
                   this.$_searchOrder_$()
                this.calendarShow = false;
             //  }
              
            },
            // 确认签收
            qianshou(number){
                this.$_sendQuery_$({
                    method:"POST",
                    url:`${this.$_global_$.serverPath}/operate/order/orderConfirm`,
                    data:{orderId:number},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) =>{
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            // Toast(rsp.data.data)
                            this.$_ddList_$()
                        }else{
                            Toast(rsp.data.message)
                        }
                    }
                })
            },
            // 获取订单记录
            $_ddList_$() {
                let sendData = {
                    "zoneId": this.$_thisUserInfo_$.zoneId,
                    "commiter": this.$_thisUserInfo_$.id
                };

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/order/queryOrderLimit",
                    data: sendData,
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close()
                            this.$_data_$ = rsp.data.data.records;
                            //console.log(this.$_data_$)
                        }
                    }
                });
            },
            $_Searchqxe_$(){
            this.$_datetime_$ = ''
            this.$_searchOrder_$()
            },
            //订单查询
            $_searchOrder_$() {
                let data = {
                        "zoneId": this.$_thisUserInfo_$.zoneId,
                        "commiter": this.$_thisUserInfo_$.id,
                        "beginTime": this.$_datetime_$,
                        "endTime": this.$_datetime_$
                    };
                //console.log(this.$_state_$)
                if (this.$_state_$ > 0 ) {
                    data.orderState = Number(this.$_state_$)
                }

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/order/queryOrderLimit",
                    data: data,
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {

                            if (rsp.data.data.records.length) {
                                this.$_data_$ = rsp.data.data.records;
                            } else {
                                this.$_data_$ = []
                                Toast("当天无记录!")
                            }
                        }
                    }
                });

            },
            //查看订单详情
            $_ddxq_$(item) {
                this.$router.push({
                    path:'/ygsy-jfsc-gmjl/ygsy-jfsc-ddxq',
                    query:{
                        id:item.id
                    }
                })
                //this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-ddxq', {id: item.id})
            },

            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyjfsc')
            },
            //商城首页
            $_scsy_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyjfsc')
            },
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
               // this.$_datetime_$ = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_ddList_$();
            this.time()
        }
    }
</script>