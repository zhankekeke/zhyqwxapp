<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
</style>
<style scoped>
/* .wrap{padding:10px 0 75px;background-color:#F6F6F6;}
.wrap .basic{background-color:#fff;padding:1px 16px 16px;font-size:14px;margin-bottom:10px; box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);}
.wrap .basic .title{
    line-height: 45px;
    border-bottom: 1px solid #F6F6F6;
    color: #333333;
    font-size:18px;
    font-weight:550;
   font-family:'PingFangSC-Medium';

    }
.wrap .basic p{line-height:1.2;}
.wrap .basic .number{margin-top:15px;color:#333333; font-size:14px;}
.wrap .basic .info1{margin-top:15px;color:#333333;}
.wrap .basic .cont{list-style:none;padding:7px 0 0;}
.wrap .basic .cont .item{margin-bottom:7px;line-height:65px;overflow:hidden;padding-top:5px;}
.wrap .basic .cont .item .img{width:70px;height:65px;border-radius:2px;
float:left;margin-right:16px;}
.wrap .basic .cont .item .img>img{width:100%;height:100%;}
.wrap .basic .cont .item .itemInfo{float:left;font-size:14px;color:#333;}
.wrap .basic .cont .item .itemInfo .itemName{margin-right:14px;}
.wrap .basic .total{font-size:14px;color:#FF8E58;} */
.wrap{
        font-family:PingFangSC-Medium;
        background:#f6f6f6;
        padding-bottom:49px;
        box-sizing:border-box;
    }
    .title{
        height:54px;
        line-height:54px;
        padding: 0 16px;
        box-sizing:border-box;
        font-size:18px;
        font-weight:#333;
        font-weight:500;
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
        font-family:PingFangSC-Regular;
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
        font-family:DINAlternate-Bold;
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
    .qsbutton{
        float:right;
        width:76px;
        height:28px;
        text-align:center;
        line-height: 28px;
        border-radius:14px;
        border:1px solid rgba(0,193,222,1);
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,193,222,1);
        margin-top:11px;
    }
    .ddinfo .lc{
        padding-left:42px;
        font-size:14px;
        font-family:PingFangSC-Regular;
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
        font-family:PingFangSC-Regular;
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
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <navigator title="兑换记录详情" />
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 商品信息 -->
            <div class="infowrap">
                <div class="title">商品信息</div>
                    <div class="basicinfo">
                        <div class="imgwrap">
                            <img class="img" :src="$_goodsmsg_$.goodsImage|formatimg|imgsrc"/>
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
            <!-- 用户信息 -->
            <div class="infowrap">
                <div class="title">用户信息</div>
                <div class="ddinfo">
                    <p class="number">{{$_orderinfo_$.entName}}&nbsp;&nbsp;&nbsp;&nbsp;{{$_orderinfo_$.commiterName}}</p>
                    <p>{{$_orderinfo_$.commiterPhone}}</p>
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
                            <p class="lc qs" v-if="$_orderinfo_$.completeTime">
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
                            <p class="lc sd" v-if="$_orderinfo_$.signerTime">
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
           <!-- 状态 -->
           <div class="status">
                状态：{{$_orderinfo_$.orderState|formatState}}
                <div  v-if="$_orderinfo_$.orderState == 2" class="qsbutton" @click="$_ddqs_$($_orderinfo_$.id)">送达</div>
            </div>
        </div> 
    </div>
</template>

<script>
import controler from './controler.js';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components: {
        navigator,
    },
    filters:{
        formatTime(sDate){
            var date = new Date(sDate);
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
            //时
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours;
            }
            //分
            if (minutes >= 0 && minutes <= 9) {
                minutes = "0" + minutes;
            }
            //秒
            if (seconds >= 0 && seconds <= 9) {
                seconds = "0" + seconds;
            }
            //格式化后日期为：yyyy-MM-dd HH:mm:ss
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes + seperator2 + seconds;
            return currentdate;
        },
        formatState(val){
            if(val == 1){
                return '已支付'
            }if(val == 2){
                return '已发货'
            }if(val == 3){
                return '已完成'
            }else{
                 return '已签收'
            }
        },
        formatPrice(item){
            if(item.goodsType == 0){
                return item.goodsPrices + '元'
            }else{
                return item.goodsPrices + '积分'
            }
        },
        formatTotal(val){
            if(this.goodsType == 0){
                return val+'元'
            }else{
                return val + '积分'
            }
        },
        formatCredits(val){
            if(val){
                return val
            }else{
                return 0
            }
        },
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
        formatimg(img){
                var arr = img.split(",")
                if(arr.length){
                    return arr[0]
                }else{
                    return ''
                }
            }
    },
    data() {
        return {
            userInfo:{},
            id:'',
            $_orderinfo_$:{},
            $_yfmoney_$:0,
            $_goodsmsg_$:{},
            total:'',
            goodsType:''
        }
    },
    created(){
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.$_global_$.serverPath;
        this.$_ddxq_$()
        this.List()
    },
    methods:{
        // 获取订单信息
        List(){
            this.$_sendQuery_$({
                method:"POST",
                url:`${this.$_global_$.serverPath}/operate/order/queryOrderDetailsById`,
                data:{orderId:this.id},
                headers:{"Content-type":"application/json"}
            }).then((rsp)=>{
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        this.$_orderinfo_$ = rsp.data.data;
                            // console.log(this.$_orderinfo_$)
                            this.$_goodsmsg_$ = this.$_orderinfo_$.orderGoods[0];
                            // console.log(this.$_goodsmsg_$)
                            if (this.$_goodsmsg_$.goodsType == 0) {
                                //普通商品
                                this.$_yfmoney_$ = this.$_goodsmsg_$.goodsPrices * this.$_goodsmsg_$.goodsCount
                            } else {
                                //积分商品
                                this.$_yfmoney_$ = this.$_goodsmsg_$.goodsCredits * this.$_goodsmsg_$.goodsCount
                            }
                    }
                }
            })
        },
       //返回首页
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygsyddsl',{id:1})
        },
        //订单详情
         $_ddxq_$(){
            this.$root.inparams.id
            this.id = this.$root.inparams.id
        },
         // 订单签收
        $_ddqs_$(id){
            MessageBox({
                title: '提示',
                message: '是否确认签收?',
                showCancelButton: true,
                confirmButtonClass: 'confirm',
                cancelButtonClass: 'cancel'
            }).then(action =>{
                if(action == 'confirm'){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/operate/order/orderComplete`,
                        data:{orderId:id},
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                // Toast(rsp.data.data)
                                this.List()
                            }else{
                                Toast(rsp.data.data)
                            }
                        }
                    })
                }
            });
        },
    }
}
</script>