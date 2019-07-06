
<style scoped>
    .container {
        height: auto !important;
        min-height:100vh;
        background: #f6f6f6;
    }

    .wrap {
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
    }

    .headbg {
        height: 40px;
        color: rgb(101, 109, 114);
        font-size: 14px;
        line-height: 40px;
        padding-left: 16px;
        background: #ffffff;
    }

    .parkname p:nth-child(2) {
        color: #333333;
        padding-bottom: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 63%;
    }

    .aa5 {
        width: 95px;
    }

    .aa5 >>> .ivu-select-placeholder {
        font-size: 14px;
        text-align: left;
        /*color: #656D72;*/
    }

    >>> .ivu-select-selection {
        border: none;
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
        left: -15px !important;
        max-height: none !important;
        border-radius: 0;
        overflow:hidden;
    }

    .aa5 >>> .ivu-select-item-focus {
        background-color: #fff;
        color: #00C1DE;
    }

    .aa5 >>> .ivu-select-item-focus:after {
        content: '';
        background: url(/static/fwsl/dui.png) no-repeat bottom;
        background-size: 16px;
        width: 16px;
        height: 16px;
        float: right;
        /*background-position: bottom;*/
    }

    >>> .ivu-btn {
        border: none;
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

    .lists li {
        width: 375px;
        height: 147px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
        padding: 16px;
        margin-top: 10px;
        line-height: 1;
    }

    .lists .cancle {

        font-size: 12px;
        color: #00C1DE;
        text-align: center;

        width: 60px;
        height: 26px;
        border-radius: 14px;
        border: 1px solid #00C1DE;
        margin-top: 10px;
        float: right;
        line-height: 26px;
    }

    .lists p {
        font-size: 14px;
      text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    }

    .lists img {
        width: 72px;
        height: 72px;
        border-radius: 3px;
        float: left;
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
    .lists .imges{
     border-bottom: 1px solid #f6f6f6;height: 83px;
    }
    .lists .rows{
    width: 260px;float: left;margin-left: 10px;margin-top: 3px;
    }
    .bigModal >>> .ivu-modal-body{
     background:linear-gradient(131deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
     border-radius:16px;    
    }
    .bigModal >>> .ivu-modal-content{
       background:none;
    }
    .top{
        background:none!important;
        position:relative;
    }
    .bigModal >>>.ivu-modal-footer{
        border-top:none!important;
    }
    .top .park{
      position:absolute;
      left:60px;
    }
    .top .sure{
        font-size: 20px;
        color: #fff;
        margin-left:10px;
        font-weight: 600;
        font-family:'PingFangSC-Semibold';  
    }
    .content{
        height:240px;
        background:url('/static/tcc/piao.svg') no-repeat ;
        background-size:100% 100%;
        padding-top:50px;
    }
    .content p:first-child{
        font-size:24px;
        font-weight:550;
        font-family:'PingFangSC-Medium';

    }
    .content p:nth-child(2){
        font-weight:400;
        font-family:'PingFangSC-Regular';
        font-size:14px;
        margin-top:8px;
    }
    .content p:nth-child(3){
        font-size:14px;
        margin-top:8px;
        font-family:'PingFangSC-Regular';
    }
    .content span{
        margin-top:10px;
        font-size:40px;
        font-family:'DINAlternate-Bold';
        font-weight:bold;
        color:rgba(255,142,88,1);
    }
    .bottom{
        margin-top:10px;
        overflow:hidden;
    }
    .bottom .radios{
        margin-left:39px;
        color:#fff;
        font-size:16px;
    }
    .bottom .right{
        float:right;
       color:rgba(255,255,255,1);
        font-size:12px;
        margin-top:5px;
        margin-right:10px;
    }
    .bigModal >>> .ivu-modal-body{
        height:460px;
        padding-top:10px;
    }
   .bigModal >>> .ivu-modal{
        top:43px;
        margin:15px 30px;
    }
    .right span{
    font-size: 14px;
    font-weight: 550;
    /* margin-top: 9px; */
    display: inline-block;
    /* margin-top: 5px; */
    line-height: 10px; 
    }
    .button{
        margin-top:20px;
    }
    .button span{
            width: 192px;
            height: 44px;
            line-height: 44px;
            font-size:16px;
            font-weight:550;
           color:rgba(0,193,222,1);
           font-family:'PingFangSC-Medium';
            text-align: center;
            display: inline-block;
            background-color: #fff;
            border-radius: 22px;
    }
    .ivu-select-visible .ivu-select-selection{
        box-shadow:none!important;
    }
    .parkLot {
        margin-top:15px;
    }
    .parkLot span{
        color:#fff;
        font-size:12px;
        font-family:'PingFangSC-Regular';
    }
   .bigModal >>> .ivu-modal-footer{
           margin-top: 15px;
           text-align:center;
    }
     .nocar >>> .ivu-modal-content{
       margin:130px 30px 0;
       border-radius:8px;

    }
    .nocar >>> .ivu-modal-body{
        height:123px;
        background-color:#fff!important;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .nocar >>> .ivu-modal-footer{
        height:45px;
        color:#fff;
        font-size:16px;
        margin-top:10px;
        font-family:'PingFangSC-Regular';
        text-align:center;
       background:linear-gradient(136deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
       border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .nocar >>> .title{
        font-size:18px;
        color:#333333;
        font-family:'PingFangSC-Medium';
        font-weight:550;
        display:inline;
        margin-bottom:5px;
    }
    .bigModal >>> .btn-cancle{
     width:45px;
     height:45px;
     line-height:37px;
   text-align:center;
     border-radius:60%;
     color:#ffffff;
     font-size:18px;
     font-weight:500;
    border:2px solid #ffffff;
    padding:10px;
    box-sizing:border-box;
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
        right: 23px;
        top: 13px;
        z-index: 99;
    }
</style>

<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="停车场"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="headbg">
                <Col span="7">
                     <Select class="aa5" v-model="carName" style="color:#495060;" placeholder="全部车辆" @on-change="$_searchOrder_$">
                        <Option :value="items">{{items}}</Option>
                        <Option v-for="item in carList" :value="item" :key="item">{{ item}}
                        </Option>
                    </Select>
                </Col>
                <Col span="8">
                    <div class="btnDate"
                             @click="calendarShow = true">
                            <span v-if="$_datetime_$" class="aa3">{{$_datetime_$}}</span>
                            <Icon v-if="$_datetime_$ == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                        </div>
                    <calendar :show.sync="calendarShow" @change="$_Searchqx_$" :weekNames="weekNames"
                              @touchmove.native.stop.prevent/>
                 <Icon @click="$_Searchqxe_$()" v-if="$_datetime_$" type="ios-close-outline" size="16px"
                              class="rltb"></Icon>

                </Col>
            </div>
            <div class="lists" v-if="$_jfjlInfo_$.length>0">
                <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill=false
                             ref="loadmore">
                    <ul>
                        <li v-for="(item,index) in $_jfjlInfo_$" :key="index" v-if="item">

                            <div class="imges">
                                <img :src="item.images[0].imageUrl|imgsrc"/>
                                <!--<img src="/static/gjfw/upload.png"/>-->

                                <Row class="rows">
                                    <Col span="14">
                                        <p style="font-family:PingFangSC-Medium;font-weight:550;white-space:nowrap;
                                        text-overflow:ellipsis;overflow:hidden;white-space:nowrap;">
                                            编号：{{item.serialNumber}}</p>
                                        <p style="font-size: 0.32rem;margin-top: 0.32rem">车牌号:{{item.plateNumber}}</p>
                                        <p style="font-size: 0.32rem;margin-top: 0.32rem;color: #656D72">
                                             <img style="width:0.42rem;height:0.34666rem;" src="/static/tcc/dw.svg">{{item.parkingAddress}}
                                            {{item.parkingName}}</p>
                                    </Col>
                                    <Col span="10" style="text-align: right">
                                        <p style="font-family:PingFangSC-Medium;font-weight:550;"> {{item.createDate |
                                            FormatDate}}</p>
                                        <p style="font-size: 0.32rem;margin-top: 0.32rem">
                                            停车时间:{{item.parkingTime/60}}小时</p>
                                    </Col>
                                </Row>
                            </div>

                            <div style="clear: both;color:#00C1DE">

                                <div v-if="item.status == 0">
                                    <p style="margin-top: 17px;float: right;color: #FF8E58">费用:{{item.totalPrice}}元</p>
                                </div>
                                <div v-else>
                                    <p style="margin-top: 17px;float: left">费用:{{item.totalPrice}}元</p>
                                    <p @click="onPay(item)" class="cancle">去支付</p>
                                </div>


                            </div>
                        </li>
                    </ul>
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                        <span v-show="topStatus === 'loading'">Loading...</span>
                    </div>
                </mt-loadmore>
            <Modal class="bigModal" v-model="$_pay_$" :closable="false"
               style="text-align:center;font-size:0.4rem;">
               <div class="top">
               <img class="park" src="/static/tcc/park.svg">
                 <h2 class="sure">停车费支付</h2>
               </div>
               <div class="content">
                 <p>{{plateNumber}}</p>
                 <p>{{itemes.parkingName}}停车{{itemes.parkingTime/60}}小时收费</p>
                 <p>{{itemes.enterTime | format}}-{{itemes.leaveTime |format}}</p>
                 <span>{{itemes.finalPrice}}<span style="font-size:0.42rem;font-weight:normal;">元</span></span>
               </div>
               <div class="bottom">
                  <RadioGroup class="radios" style="text-align:right;float:left;" v-model="phone" vertical>
                    <Radio label="bao">
                        <img style="vertical-align:middle;" src="/static/tcc/bao.svg">
                        <span>钱包支付</span>
                    </Radio>
                    <Radio label="wei">
                         <img style="vertical-align:middle;"src="/static/tcc/wei.svg">
                        <span>微信支付</span>
                    </Radio>
                </RadioGroup>
                <div class="right" @click="open"> 开启自动扣费&nbsp;<span >></span></div>
               </div>
               <div class="button" @click="nowPay"><span>立即支付</span></div>
               <div class="parkLot" @click="parkPay"><span>停车场支付声明</span></div>
              <div slot="footer" class="btn-footer">
                <span @click="$_pay_$ = false"  class="btn-cancle">X</span>
            </div>
            
        </Modal>
        <Modal class="nocar" v-model="$_parkPay_$" :closable="false">
            <div style="text-align:center;margin-top:0.1333rem;">
            <span class="title">支付声明</span>
            <p>支付声明祝福声明声明声明支付声明祝福声明声明声明支付声明祝福声明声明声明支付声明祝福声明声明声明支付声明祝福声明声明声明</p>
            </div>
            <div slot="footer" class="btn-footer">
                <span @click="$_parkPay_$ = false" class="btn-cancle">我知道了</span>
            </div>
        </Modal>
            </div>
            <div v-else class="divNoList" >
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有缴费记录哦~</div>
            </div>
        </div>
    </div>
</template>

<script>
    import flexible from './flexible.js'
    import controler from './controler.js';
    import {Loadmore} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import {DatetimePicker,Indicator} from 'mint-ui';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [Indicator.name]:Indicator
        },
        filters: {
            FormatDate(item) {
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
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
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
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = hours+ seperator2 + minutes
                return currentdate;
            }
        },
        data() {
            return {
                pageNum: 1,//当前第几页
                topStatus: '',
                carName:'',
                $_parkPay_$:false,
                phone:'bao',
                $_pay_$:false,
                case1Form:'',
                 $_datetime_$: '',
                itemes:{},
                $_model_$: '',
                $_jfjlInfo_$: {},
                pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear()
                    let m = date.getMonth() + 1
                    m = m < 10 ? '0' + m : m
                    let d = date.getDate()
                    d = d < 10 ? ('0' + d) : d
                    return y + '-' + m + '-' + d
                },
                $_querycfg_$: {
                    mod: "",
                    params: {}
                },
                items:'全部车辆',
                plateNumber:'',
                plate:'',
                $_datetime_$: '',
                calendarShow: false,
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                carList: [],
                $_state_$: 0, //选择状态
            }
        },
        created() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_list_$()
            //获取当前时间
          //  this.$_datetime_$ = new Date().toLocaleDateString();
            this.carList = this.$root.inparams.carList;


        },
        methods: {
            //去支付
            onPay(item) {
                console.log(item)
                  this.itemes = item
                 var plateNum = item.plateNumber
                 this.plateNumber = plateNum.split('').slice(0,2).join('')+'·'+plateNum.split('').slice(2).join('')
                //console.log(this.plateNumber)
                //console.log(id)
              this.$_pay_$ = true
            },
            //预约记录
            $_jfjl_$() {
                this.$root.inparams.id
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytcff', {id: 1})
            },
            $_list_$() {
                this.$_querycfg_$.mod = 'zone/zone/parking/records';
                this.$_fquery_$((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            this.$_jfjlInfo_$ = rsp.data.data.records
                            //console.log(this.$_jfjlInfo_$)
                        }
                    }
                })
            },
             $_searchOrder_$(value) {
               // console.log(value)
                this.carName = value
               // this.cars = value
               // console.log(this.cars)
               if(this.carName == '全部车辆'){
                  // console.log(this.carName)
                  this.$_querycfg_$.params.plateNumber = ''
                   this.$_list_$()
               }else{
            //     if(this.carName != '全部'){
                     this.cars = this.carName.split('').slice(0,2).join('') + this.carName.split('').slice(3).join('')
                    this.$_querycfg_$.params.plateNumber = this.cars;
                     this.$_list_$()
                    //this.$_querycfg_$.params.plateNumber = ''
                }
            },
             $_Searchqxe_$(){
                 this.$_datetime_$ = ''
                // this.$_querycfg_$.params.startTime = this.$_datetime_$ + '  00:00:00';
                  this.$_querycfg_$.params.startTime=''
             // this.$_querycfg_$.params.startTime = {}
              this.$_list_$();

            },
            //停车场
            $_tcff_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytcff', {id: 1})
            },
            //点击确定按钮之后
            handleConfirm(datePicker, index) {
                // 输出格式化后的时间
                this.$_model_$ = this.formatDate(this.$refs.datePicker.value)
                //console.log(this.$_model_$)
                if (this.$_model_$) {
                    this.$_querycfg_$.params.startTime = this.$_model_$

                    this.$_list_$();
                }

            },
            showDate() {
                this.calendarShow = true;
            },
            $_Searchqx_$(date) {
                this.$_datetime_$ = date.format('YYYY-MM-DD');

                this.$_querycfg_$.params = {};
                this.$_querycfg_$.params.startTime = this.$_datetime_$ + '  00:00:00';
                this.$_querycfg_$.params.endTime = this.$_datetime_$ + '  24:00:00';
                this.$_list_$();
                this.calendarShow = false;

            },
            //立即支付
            nowPay(){

            },
             //停车场支付声明
             parkPay(){
              this.$_parkPay_$ = true
             },
             //开启扣费
             open(){
                  this.$root.$_Route_$('user', 'mobile', 'ygsygrzx', {id: 1})
             },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.$_list_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>