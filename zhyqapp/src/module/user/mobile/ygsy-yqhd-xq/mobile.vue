<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
        background: #f6f6f6;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        position: static;
    }
</style>
<style lang="less">
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        .ivu-modal {
            top: 0;
        }
    }

    .mint-msgbox-title {
        color: #666666 !important;
        margin-bottom: 10px !important;
    }

    .mint-msgbox-content {
        border: none !important;
    }

    .confirm {
        height: 100% !important;
        font-size: 15px !important;
        font-family: "Microsoft YaHei" !important;
        color: #333333 !important;
        background: #f6f6f6 !important;
    }

    .confirm1 {
        font-size: 15px !important;
        font-family: "Microsoft YaHei" !important;
        color: #fff !important;
        background: #029bfa !important;
    }
</style>
<style scoped>
    .container {
        background: #f6f6f6;
        min-height:100vh;
    }
    .wrap {
        box-sizing: border-box;
        font-size: 13px;
        color: #333;
        background: #f6f6f6;
        font-family:PingFangSC-Medium;
    }

    .padding {
        padding: 0 15px;
        background: #fff;
    }
    .wrap .top{
        overflow:hidden;
        height:54px;
        line-height:54px;
        border-bottom: 1px solid #E5E5E5;
    }
    .wrap .top .title {
        float:left;
        font-size: 15px;
        color: #333333;
        box-sizing: border-box;
        height: 42px;
    }

    .wrap .top .status {
        float:right;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,193,222,1);
    }

    .basic {
        padding:18px 16px 19px;
        box-sizing:border-box;
        margin-bottom:10px;
    }
    .basic p{
        float:left;
    }
    .basic .top1{
        overflow:hidden;
        font-size:14px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin-bottom:16px;

    }
    .basic .top1 p{
        line-height:1;
    }
    .basic .top1 .name{
        margin-right:20px;
    }
    .basic .bottom{
        overflow:hidden;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
    }
    .basic .bottom .address{
        line-height:16px;
        height:16px;
        padding-left:20px;
        background:url("/static/yqhd/position.svg") 0 0 no-repeat;
        background-size:16px 16px;
        margin-right:30px;
    }
    .basic .bottom .time{
        line-height:16px;
        height:16px;
        padding-left:20px;
        background:url("/static/yqhd/time.svg") 0 0 no-repeat;
        background-size:16px 16px;
    }

    .info {
        padding: 20px 16px 16px;
    }
    .info .title{
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:1;
        margin-bottom:16px;
    }
    .info .pic {
        width: 100%;
        height: 151px;
        margin-bottom:16px;
        position:relative;
    }

    .info .pic img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    .info .pic .length{position:absolute;bottom:3px;right:3px;width:20px;height:12px;line-height:12px;background:rgba(0,0,0,0.57);
border-radius:11px;text-align:center;font-size:10px;font-family:PingFangSC-Regular;font-weight:400;color:#fff;}

    .info .desc {
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:20px;
    }

    .createDate {
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        text-align:right;
    }

    .buttonWrap {
        padding:20px 0 5px;
        margin: 0px auto;
        box-sizing:content-box;
        width:296px;
        height:44px;   
    }
    .button {
        background:rgba(0,193,222,1);
        border-radius:25px;
        width:100%;
        height:100%;
        text-align:center;
        line-height:44px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
        font-size:16px;

    }

    .couponTitle {
        font-size: 13px;
        color: #333333;
        padding: 0 15px;
        box-sizing: border-box;
    }

    .coupon {
        /*padding: 0 15px;*/
        box-sizing: border-box;
        position: relative;
        height: 156px;
    }

    .coupon > img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .coupon .couponInfo {
        position: absolute;
        top: 46px;
        left: 0;
        width: 100%;
        /* position: relative; */
    }

    .couponPrice {
        float: left;
        margin:0 20px 0 36px;
        font-size:50px;
        font-family:DINAlternateBold;
        font-weight:bold;
        color:rgba(0,193,222,1);
        line-height:58px;
    }

    .couponDesc {
        float: left;
        box-sizing: border-box;
        width:120px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .couponDesc > p {
        margin: 0;
        line-height:1;
    }

    .couponDesc .couponName {
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin-bottom: 16px;
    }

    .couponDesc .time {
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-bottom:8px;
    }

    .couponButton {
        font-size: 16px;
        color: #fff;
        font-family:PingFangSC-Regular;
        font-weight:400;
        line-height: 1;
        position: absolute;
        top: 25px;
        right: 49px;
    }

    .zhu {
        text-align:center;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(101,109,114,1);
        line-height:12px;
        padding-bottom: 20px;
        margin-top: 6px;
    }
    .view{position:fixed;width:100%;height:100%;background:#000;font-family:PingFangSC-Regular;top:0;left:0;
z-index:999;padding-top:185px;box-sizing:border-box;}
.view .index{font-size:16px;font-weight:400;color:#fff;line-height:1;padding-left:16px;}
.view .boxName{line-height:1;font-weight:400;color:rgba(179,179,179,1);font-size:12px;
position:absolute;left:16px;bottom:16px;margin:0;}
.banner-item>img{width:100%;height:267px;margin-bottom:161px;}
.swiper-pagination.swiper-pagination-fraction{
  position:absolute;top:195px;right:10px;left:auto;width:38px;height:22px;background:rgba(0,0,0,0.57);
border-radius:11px;line-height:22px;text-align:center;font-size:14px;font-family:PingFangSC-Regular;font-weight:400;
color:rgba(255,255,255,1);
}
.desc >>>img{
    width:100%;
    height:auto;
}
.fj{padding-left:19px;box-sizing:border-box;background: url('/static/yqhd/fj.svg') 0px 0px no-repeat;
background-size:13px 14px;line-height:1;font-size:14px;color:#333;
font-family:PingFangSC-Regular;
font-weight:400;}

</style>
<template>
    <div class="container">
        <!-- 首页 -->
        <navigator title="详情"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="top padding">
                <p class="title" style="width:70%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{$_msg_$.title}}</p>
                <p class="status">{{$_msg_$ | FormatJx}}</p>
            </div>
            <!-- 基础信息 -->
            <div class="basic padding">
                <div class="top1">
                    <p class="name">{{$_msg_$.contactName}}</p>
                    <p>{{$_msg_$.contactNumber}}</p>
                </div>
                <div class="bottom">
                    <p class="address" style="width:43%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{$_msg_$.address}}</p>
                    <p class="time">{{$_msg_$.beginDate | fromatDate}} - {{$_msg_$.endDate | fromatDate}}</p>
                </div>


                <!-- <p class="basicInfo">状态：<span style="color: #029bfa">{{$_msg_$ | formatItem}}</span></p>

                <p class="rightInfo"><img class="icon" src="/static/yqhd/hdxq_tx.png" alt="">{{$_msg_$.contactName}}</p>

                <p class="basicInfo">开始：{{$_msg_$.beginDate}}</p>
                <p class="rightInfo"><img class="icon" src="/static/yqhd/hdxq_telephone.png" alt="">{{$_msg_$.contactNumber}}</p>
                <p class="basicInfo">结束：{{$_msg_$.endDate}}</p>
                <p class="rightInfo"><img class="icon" src="/static/yqhd/hdxq_address.png" alt="">{{$_msg_$.address}}</p> -->

            </div>
            <!-- 详细信息 -->
            <div class="info padding">
                <div class="title" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"><p>主题：{{$_msg_$.title}}</p></div>

                <div class="pic">
                    <img :src="$_msg_$.images | FormatImages | imgsrc" alt=""  @click="imgView($_msg_$.images)">
                    <span class="length" v-show="isShow">{{$_msg_$.images | formatLength}}</span>
                </div>
                <!--<p class="desc">{{$_msg_$.content}}</p>-->
                <div class="desc" v-html="$_msg_$.content"></div>
                <div style="overflow:hidden;margin-top:10px;">
                    <p v-if="this.file" @click="toFj" class="fj" style="float:left">附件下载</p>
                    <p class="createDate" style="float:right;">{{$_msg_$.createDate | fromattime}}</p>
                </div>
                
            </div>
            <!-- 图片查看器弹出框 -->
            <div class="view" v-if="isImgView" @click="isImgView = false">

                <div class="swiper-banner">
                    <swiper :options="swiperOption" ref="bannerSwiper" @slideChange="updateSwiperPagination('bannerSwiper', '.swiper-pagination')">
                        <swiper-slide v-for="(item,index) in imgList" :key="index">
                            <div class="banner-item">
                                <img :src="item|imgsrc" >
                            </div>
                        </swiper-slide>
                    </swiper>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <!-- 报名及代金券领取 -->
        <div style="background: #f6f6f6" v-if="new Date($_msg_$.endDate).getTime()>new Date().getTime()">
            <!-- 报名按钮 -->
            <div v-if="$_msg_$.apply == 1" class="buttonWrap">
                <p v-if="!$_msg_$.userApply" class="button" @click="ljbm()">立即报名</p>
                <p v-else class="button" style="background-color:#CDCDCD;" @click="ljbm()">已报名</p>
            </div>
            <!-- 代金券 -->
            <div v-show="showCoupon">
                <!-- <p class="couponTitle">参与活动领代金券</p> -->
                <div class="coupon">
                    <img v-if="showButton" src="/static/yqhd/djq.svg" alt="">
                    <img v-else src="/static/yqhd/djqGray.svg" alt="">
                    <div v-show="showButton" class="couponInfo">
                        <div class="couponPrice"><span style="font-size:16px;">¥</span>{{couponInfo.denomination | formatNumber}}</div>
                        <div class="couponDesc">
                            <p class="couponName">{{couponInfo.name}}</p>
                            <!--<p class="timeRange"></p>-->
                            <p class="time">{{couponInfo.info}}</p>
                            <p v-if="couponInfo.validFlag " class="time"  style="color:#CDCDCD;">领取后{{couponInfo.validCount}}天有效</p>
                            <p v-else class="time"  style="color:#CDCDCD;">有效期：{{couponInfo.endDate | formattime}}</p>
                        </div>
                        <div class="couponButton" @click="lqdjq()">领取</div>
                    </div><div v-show="!showButton" class="couponInfo">
                        <div class="couponPrice" style="color:#CDCDCD;"><span style="font-size:16px;">¥</span>{{couponInfo.denomination | formatNumber}}</div>
                        <div class="couponDesc">
                            <p class="couponName"  style="color:#CDCDCD;">{{couponInfo.name}}</p>
                            <!--<p class="timeRange"></p>-->
                            <p class="time"  style="color:#CDCDCD;">{{couponInfo.info}}</p>
                            <p v-if="couponInfo.validFlag " class="time"  style="color:#CDCDCD;">领取后{{couponInfo.validCount}}天有效</p>
                            <p v-else class="time"  style="color:#CDCDCD;">有效期：{{couponInfo.endDate | formattime}}</p>
                        </div>
                        <div class="couponButton" style="right:42px;">已领取</div>
                    </div>
                </div>
                <!-- 注 -->
                <div class="zhu">
                    注：报名后可立即领取代金券
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {MessageBox, Toast} from 'mint-ui';
    import navigator from '../public/navigator'; 
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        filters: {
            formatItem(item) {
                if (new Date(item.endDate).getTime() < new Date().getTime()) {
                    return "已结束"
                }
                if (item.userApply == false && item.userCoupon == false && item.apply == 0) {
                    return ""
                }
                if (item.userApply == false && item.userCoupon == false && item.apply == 1 && item.couponId == null) {
                    return "未报名"
                }
                if (item.userApply == false && item.userCoupon == false && item.apply == 1) {
                    return "未报名/未领取"
                }
                if (item.userApply == true && item.userCoupon == false && item.couponId == null) {
                    return "已报名"
                }
                if (item.userApply == true && item.userCoupon == true) {
                    return "已报名/已领取"
                }
                if (item.userApply == true && item.userCoupon == false) {
                    return "已报名"
                }
                if (item.userApply == true && item.userCoupon == false) {
                    return "已报名"
                }
                if (item.userApply == false && item.userCoupon == true) {
                    return "已领取"
                }
            },
            FormatImages(image) {
                try{
                    let i = JSON.parse(image)
                    if (i.length > 0) {
                        return i[0]
                    }else{
                        return ''
                    }
                }catch(e){
                    return ''
                }
            },
            formatLength(item){
                try{
                    let i = JSON.parse(item)
                    if (i.length) {
                        return i.length
                    }else{
                        return 0
                    }
                }catch(e){
                    return 0
                }
            },
            fromatDate(sDate) {
                if(sDate){
                    var date = new Date(sDate);
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
                    //格式化后日期为：yyyy-MM-dd HH:mm:ss
                    var currentdate = date.getFullYear() + '/' + month + '/' + strDate;
                    return currentdate;
                }else{
                    return ''
                }
            },
            fromattime(sDate) {
                if(sDate){
                    var date = new Date(sDate);
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
                    //格式化后日期为：yyyy-MM-dd HH:mm:ss
                    var currentdate = date.getFullYear() + '年' + month + '月' + strDate + '日';
                    return currentdate;
                }else{
                    return ''
                }
            },
            formattime(sDate){
                if(sDate){
                    var date = new Date(sDate);
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
                    //格式化后日期为：yyyy-MM-dd HH:mm:ss
                    var currentdate = date.getFullYear() + '-' + month + '-' + strDate;
                    return currentdate;
                }else{
                    return ''
                }
            },
            formatNumber(val) {
                return Number(val)
            },
            FormatJx(item){
                var date = item.endDate ? item.endDate : ''
                if (new Date(date).getTime() < new Date().getTime()) {
                    return "已结束"
                }else{
                    return '进行中'
                }
            }
        },
        components: {
            //[MessageBox.name]: MessageBox,
            //[Toast.name]: Toast,
            navigator,swiperSlide, swiper
        },
        data() {
            return {
                $_msg_$: {},
                id: '',
                userInfo: {},
                showCoupon: false,
                couponInfo: {},
                showButton: true,
                file: [],
                isShow:false,
                isImgView:false,
                imgList:[],
                swiperOption: {
                    zoom: {
                    maxRatio: 5, //最大倍数
                    minRatio: 2, //最小倍数
                    toggle: false, //不允许双击缩放，只允许手机端触摸缩放。
                    containerClass: 'my-zoom-container', //zoom container 类名
                    },
                    pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                    },
                }
            }
        },
        mounted() {
            this.userInfo = this.$store.state.user.info;
            this.$_global_$.serverPath
            this.$_nextPage_$()
            this.info()
        },
        methods: {
            imgView(item){
            
                this.imgList = JSON.parse(item) ? JSON.parse(item): []
                this.isImgView = true
                this.$refs.bannerSwiper.swiper.init();
                this.$refs.bannerSwiper.bindEvents()
            },
            updateSwiperPagination(name, el){
                this.$refs[name].swiper.pagination.update({el})
            },
            // 获取活动详细信息
            info() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/activity/${this.id}`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_msg_$ = rsp.data.data
                            this.$_msg_$.beginDate = this.$_msg_$.beginDate.replace(/\-/g,'/').substring(0,10)
                            this.$_msg_$.endDate = this.$_msg_$.endDate.replace(/\-/g,'/').substring(0,10)
                            this.$_msg_$.createDate = this.$_msg_$.createDate.replace(/\-/g,'/').substring(0,10)
                            // this.file = rsp.data.data.files.split(",")
                            this.file = rsp.data.data.files
                            if (this.$_msg_$.couponId == null) {
                                this.showCoupon = false
                            } else {
                                this.djq();
                                this.showCoupon = true
                            }
                            if (this.$_msg_$.userCoupon) {
                                this.showButton = false
                            }
                            let image = JSON.parse(this.$_msg_$.images)
                            if (image.length>1) {
                                this.isShow = true
                            }else{
                                this.isShow = false
                            }
                        }
                    }
                })
            },
            // 获取代金券详情
            djq() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/operate/voucher/info?idStr=${this.$_msg_$.couponId}`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.couponInfo = rsp.data.data
                            if(this.couponInfo.endDate){
                                this.couponInfo.endDate = this.couponInfo.endDate.replace(/\-/g,'/').substring(0,10)
                            }else{
                                this.couponInfo.endDate = ''
                            }
                        }
                    } else {
                        //Toast(rsp.data.message)
                    }
                })
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyyqhd', {id: 1})
            },
            // 立即报名
            ljbm() {
                const html = `<div>
                <img src="@/imgs/mobile/yqhd_bmcg.png" alt="" srcset="">
                <p style='font-family:"Microsoft YaHei";color:#029bfa;font-size:15px;line-height:1;margin-bottom:9px;'>报名成功</p>
                </div>`
                const html1 = `<div>
                <img src="@/imgs/mobile/yqhd_bmcg.png" alt="" srcset="">
                <p style='font-family:"Microsoft YaHei";color:#029bfa;font-size:15px;line-height:1;margin-bottom:9px;'>报名成功</p>
                </div>`
                const html2 = `<div>
                <p style='font-family:"Microsoft YaHei";color:rgba(0,193,222,1);font-size:15px;line-height:1;margin-bottom:9px;'>您已报名，无需重复报名</p>
                </div>`
                const confirm = `<p style='font-size:15px;font-family:"Microsoft YaHei";color:#333333;'>我知道了</p>`
                if (this.$_msg_$.userApply) {
                    MessageBox({
                        title: '温馨提示',
                        message: html2,
                        confirmButtonText: '知道了',
                        confirmButtonClass: 'confirm'
                    });
                } else {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/company/activity/${this.id}/apply`,
                        data: {},
                        headers: {"Content-type": "application/json"}
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code === 0) {
                                Toast("报名成功!")
                                this.info()
                            } else {
                                MessageBox({
                                    title: '温馨提示',
                                    message: rsp.data.message,
                                    confirmButtonText: '知道了',
                                    confirmButtonClass: 'confirm'
                                });
                            }
                        }
                    })
                }

            },
            // 领取代金券
            lqdjq() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/activity/${this.id}/coupon`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Toast('领取成功!')
                            this.info()
                        } else {
                            Toast(rsp.data.message)
                        }
                    }
                })
            },
            // 接收活动id
            $_nextPage_$() {
                this.id = this.$root.inparams.id
            },
            // 附件页面
            toFj(){
                this.$root.$_Route_$('user', 'mobile', 'ygsy-yqhd-fjxz',{file:this.file,title:this.$_msg_$.title})
            }
        },

    }
</script>