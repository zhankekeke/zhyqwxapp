<style scoped>
    .wrap{
        font-family:'PingFangSC-Medium';
        padding-bottom:50px;
    }
    .lm{
        background-color:#f6f6f6;
        min-height:100vh;
    }
    .title{
        height:54px;
        line-height:54px;
        padding: 0 16px;
        box-sizing:border-box;
        font-size:18px;
        color:#333333;
        font-family:'PingFangSC-Medium';
        font-weight:550;
        border-bottom: 1px solid #e5e5e5;
        background:#fff;
    }
    .basicinfo{
        background:#fff;
        padding: 10px 16px;
        height:86px;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    .text {
        width:150px;
        float:left;
    }
    .text .goodsinfo{
        line-height:34px;
        font-size:14px;
        font-weight:400;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .imgwrap{
        width:83px;
        float:left;
    }
    .basicinfo .img {
        width: 66px;
        height: 66px;
    }
    .price{
        background:#fff;
        height: 53px;
        line-height:53px;
        padding:0 16px;
        box-sizing:border-box;
        font-size: 14px;
        color:#333;
        font-weight:400;
        margin-bottom:10px;
    }
    .price .special{
        color:#FF8E58;
    }
    .ddinfo{
        background:#fff;
        font-family:'PingFangSC-Regular';
        color:#333;
        font-size:14px;
        font-weight:400;
        padding:19px 16px 20px;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    .ddinfo .number{
        margin-bottom:19px;
    }
    .ddinfo>p{
        line-height:1;
    }
    .ddinfo .price{
        background:#fff;
        height: 14px;
        line-height:14px;
        padding:0;
        box-sizing:border-box;
        font-size: 14px;
        color:#333;
        font-weight:400;
        margin-bottom:0px;
    }
    .ddinfo .price .special{
        color:#FF8E58;
        font-family:'DINAlternate-Bold';
        font-weight:bold;
    }
    .infowrap{
        box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);
    }
    .status{
        height:49px;
        background:#fff;
        box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);
        color:#00C1DE;
        font-size:16px;
        font-weight:400;
        line-height:49px;
        padding:0 16px;
        box-sizing:border-box;
        position:fixed;
        width:100%;
        bottom:0;
        left:0;
    }
    .ddinfo .lc{
        padding-left:42px;
        font-size:14px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:rgba(51,51,51,1);
        height:21px;
        line-height:21px;
        position:relative;
        background-size: 21px 21px;
        background-position: 0 0;
        background-repeat: no-repeat;
        margin-bottom:21px;
        color: #CDCDCD;
    }
    .ddinfo .lc .line{
        width:2px;
        height:16px;
        position:absolute;
        top:24px;
        left:10px;
        background: #E5E5E5;
        display:block;
    }
    .qs{background-image:url('/static/jfsc/qianshoublue.svg');
        color: #333;}
    .sd{background-image:url('/static/jfsc/songdagray.svg');}
    .fh{background-image:url('/static/jfsc/fahuogray.svg');}
    .shr{background-image:url('/static/jfsc/qianshougray.svg');}
    
    .ddinfo .cj{
        padding-left:42px;
        font-size:14px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:rgba(51,51,51,1);
        height:21px;
        line-height:21px;
        position:relative;
        color: #CDCDCD;
    }
    .ddinfo .cj .circle{
        width:8px;
        height:8px;
        display:block;
        border-radius:100%;
        position:absolute;
        top:6px;
        left:7px;
        background: #CDCDCD;
    }
    .qsbutton{
        float:right;
        width:76px;
        height:28px;
        text-align:center;
        line-height: 28px;
        border-radius:14px;
        border:1px solid rgba(0,193,222,1);
        font-size:12px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:rgba(0,193,222,1);
        margin-top:11px;
    }
</style>
<template>
    <div class="lm" ref="aa">
        <!-- 首页 -->
        <navigator title="兑换记录详情" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 商品信息 -->
            <div class="infowrap">
                <div class="title">商品信息</div>
                    <div class="basicinfo">
                        <div class="imgwrap">
                            <img class="img" :src="$_goodsmsg_$.goodsImage|formatimg |imgsrc"/>
                        </div>
                        <div class="text">
                            <div class="goodsinfo">{{$_goodsmsg_$.goodsName}}</div>
                            <!--普通商品-->
                            <div class="goodsinfo" v-if="$_goodsmsg_$.goodsType==0">
                                {{$_goodsmsg_$.goodsPrices}}元 *{{$_goodsmsg_$.goodsCount}}
                            </div>
                            <!--积分商品和代金券-->
                            <div class="goodsinfo" v-else>
                                {{$_goodsmsg_$.goodsCredits}}积分 * {{$_goodsmsg_$.goodsCount}}
                            </div>
                        </div>
                    </div>
            </div>
            
            <!-- 支付信息 -->
            <div class="infowrap">
                <div class="title">支付信息</div>
                <!-- 普通商品 -->
                    <div class="ddinfo" v-if="$_goodsmsg_$.goodsType==0">
                        <p class="number">应付金额：{{$_yfmoney_$}}元</p>
                        <!-- 优惠 -->
                        <p class="number" v-if="$_orderinfo_$.orderCredits || $_orderinfo_$.orderVoucher">
                            优惠：
                            <span v-if="$_orderinfo_$.orderVoucher">
                                优惠券抵扣{{$_orderinfo_$.orderVoucher}}元&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span v-if="$_orderinfo_$.orderCredits">
                                积分抵扣{{$_jf_$}}元
                            </span>
                        </p>
                        <!-- 实付金额 -->
                        <p class="price" v-if="$_orderinfo_$.orderPrices">
                            实付金额：<span class="special">{{$_orderinfo_$.orderPrices}}</span>
                            <span style="color:#FF8E58">元</span></p>
                        <p class="price" v-else>实付金额：<span class="special">0</span>
                        <span style="color:#FF8E58">元</span></p>
                    </div>  
                    
                    <!-- 积分商品 -->
                    <p class="price" v-else>使用积分：
                        <span class="special">{{$_orderinfo_$.orderCredits }}</span>
                    </p>
            </div>
            <!-- 订单信息 -->
            <div class="infowrap">
                <div class="title">订单信息</div>
                <div class="ddinfo">
                    <p class="number">订单编号：{{$_orderinfo_$.orderNumber}}</p>
                    <!-- 不需要配送 -->
                    <div v-if="$_goodsmsg_$.goodsIsDelivery == 0">
                        <p class="lc qs" v-if="$_orderinfo_$.commiteTime" style="color:#333">
                                签收时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="line"></span>
                        </p>
                         <p class="cj" v-if="$_orderinfo_$.commiteTime">
                                创建时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="circle"></span>
                        </p>
                    </div>
                    <!-- 需要配送 -->
                    <div v-else>
                        <div v-if="$_orderinfo_$.orderState == 4">
                            <p class="lc qs" v-if="$_orderinfo_$.completeTime" style="color:#333;">
                                签收时间：{{$_orderinfo_$.completeTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="lc sd" v-if="$_orderinfo_$.signerTime">
                                送达时间：{{$_orderinfo_$.signerTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="lc fh" v-if="$_orderinfo_$.deliverTime">
                                发货时间：{{$_orderinfo_$.deliverTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="cj" v-if="$_orderinfo_$.commiteTime">
                                创建时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="circle"></span>
                            </p>
                        </div>
                        <div v-if="$_orderinfo_$.orderState == 3">
                            <p class="lc shr" v-if="$_orderinfo_$.commiterName">
                                收货人：{{$_orderinfo_$.commiterName}}
                                <span class="line"></span>
                            </p>
                            <p class="lc" v-if="$_orderinfo_$.signerTime"
                            style="background-image:url('/static/jfsc/songdablue.svg');color:#333;">
                                送达时间：{{$_orderinfo_$.signerTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="lc fh" v-if="$_orderinfo_$.deliverTime">
                                发货时间：{{$_orderinfo_$.deliverTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="cj" v-if="$_orderinfo_$.commiteTime">
                                创建时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="circle"></span>
                            </p>
                        </div>
                        <div v-if="$_orderinfo_$.orderState == 2">
                            <p class="lc shr" v-if="$_orderinfo_$.commiterName">
                                收货人：{{$_orderinfo_$.commiterName}}
                                <span class="line"></span>
                            </p>
                            <p class="lc sd">
                                送达时间：未确定
                                <span class="line"></span>
                            </p>
                            <p class="lc" v-if="$_orderinfo_$.deliverTime"
                            style="background-image:url('/static/jfsc/fahuoblue.svg');color:#333;">
                                发货时间：{{$_orderinfo_$.deliverTime | formatDate}}
                                <span class="line"></span>
                            </p>
                            <p class="cj" v-if="$_orderinfo_$.commiteTime">
                                创建时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="circle"></span>
                            </p>
                        </div>
                        <div v-if="$_orderinfo_$.orderState == 1">
                            <p class="cj" v-if="$_orderinfo_$.commiteTime" style="color:#333;">
                                创建时间：{{$_orderinfo_$.commiteTime | formatDate}}
                                <span class="circle" style="background:#00C1DE;"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                <!-- 用户信息 -->
           
            <!-- 状态 -->
            <div class="status">
                状态：{{$_orderinfo_$.orderState|formatstatus}}
                <div  v-if="$_orderinfo_$.orderState == 3" class="qsbutton" @click="qianshou">签收</div>
            </div>
        </div>
    </div>
</template>

<script>
   // import controler from './controler.js';
    import navigator from '../public/navigator';
    import {Toast, Indicator} from 'mint-ui';

    export default {
        //mixins: [controler],
        components: {
            navigator,
            [Toast.name]:Toast,
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
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + hours + seperator2 + minutes + seperator2 + seconds
                return currentdate;
            },
            formatstatus(stauts){
                if(stauts == 1){
                    return '已支付'
                }
                if(stauts == 2){
                    return '已发货'
                }
                if(stauts == 3){
                    return '已送达'
                }
                if(stauts == 4){
                    return '已签收'
                }
            },
            formatimg(img){
                //console.log(img)
                if(img != undefined){
                   var arr = img.split(';')
                   if(arr.length>0){
                       return arr[0]
                   }else{
                       return ''
                   }
                }
                // var arr = img.split(";")
                // if(arr.length){
                //     return arr[0]
                // }else{
                //     return ''
                // }
            }
        },
        data() {
            return {
                $_thisUserInfo_$: '', //用户基本信息
                $_getordermsg_$: '', //订单相关信息
                $_orderinfo_$: {}, //订单详情
                $_goodsmsg_$: {}, //商品信息
                $_yfmoney_$: 0,  //订单应付金额
                $_yhq_$:0, // 优惠券抵扣金额
                $_jf_$:0, // 积分抵扣金额
            }
        },
        methods: {
            // 返回
            $_back_$() {
                if(this.$route.query.type){
                    var type = this.$route.query.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-gmjl')
                }
            },
            //获取订单详情
            $_getorderinfo_$() {
                //查询订单详情
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/operate/order/queryOrderDetailsById`,
                    data: {orderId: this.$route.query.id},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            Indicator.close()
                            this.$_orderinfo_$ = rsp.data.data;
                            this.creditsRule()
                            this.$_goodsmsg_$ = this.$_orderinfo_$.orderGoods[0];
                            // console.log( this.$_goodsmsg_$)
                            // console.log(this.$_goodsmsg_$)
                            if (this.$_goodsmsg_$.goodsType == 0) {
                                //普通商品
                                this.$_yfmoney_$ = this.$_goodsmsg_$.goodsPrices * this.$_goodsmsg_$.goodsCount
                            } else {
                                //积分商品
                                this.$_yfmoney_$ = this.$_goodsmsg_$.goodsCredits * this.$_goodsmsg_$.goodsCount
                            }
                        }else{
                            Toast(rsp.data.message)
                        }
                    }
                })
            },
            // 获取积分规则
            creditsRule(){
                this.$_sendQuery_$({
                    method:"GET",
                    url:`${this.$_global_$.serverPath}/operate/creditsRule/info?zoneId=${this.$_thisUserInfo_$.zoneId}`,
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) =>{
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            let rate = rsp.data.data.exRate
                            this.$_jf_$ = this.$_orderinfo_$.orderCredits/rate
                        }
                    }
                })
            },
            // 确认签收
            qianshou(){
                this.$_sendQuery_$({
                    method:"POST",
                    url:`${this.$_global_$.serverPath}/operate/order/orderConfirm`,
                    data:{orderId:this.$_orderinfo_$.id},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) =>{
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            this.$_getorderinfo_$()
                        }else{
                            Toast(rsp.data.message)
                        }
                    }
                })
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_getorderinfo_$();
            
        }
    }
</script>