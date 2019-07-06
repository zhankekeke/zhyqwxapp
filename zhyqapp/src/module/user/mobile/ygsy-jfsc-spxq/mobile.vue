<style scoped>
    .lm{
        min-height:100vh;
        background: #F6F6F6;
    }

    .wrap {
        font-size: 14px;
        color: #333333;
        line-height: 1;
        background: #F6F6F6;
    }

    .wrap img {
        width: 375px;
        height: 311px;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #00C1DE;
        text-align: center;
        line-height: 49px;
        height: 49px;
        color: #fff;
        font-size: 18px;
        font-family:PingFangSC-Regular;
        font-weight:400;
    }

    .item {
        width: 100%;
        overflow:hidden;
        margin-bottom: 13px;
        background: #ffffff;
        padding: 10px 20px 16px 16px;
        box-sizing:border-box;
        line-height:26px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:#333;
    }

    .mgtop16 {
        margin-top: 16px;
    }

    .name {
        color: #FF8E58;
        font-size: 26px;
        font-weight:bold;
        line-height:1;
    }
    .item  .goodsname{
        font-size:16px;
        font-weight:500;
        color:#333;
        line-height:1;
    }

    .spxq {
        background: #ffffff;
        
        padding-top:16px;
        padding-bottom:75px;
    }
    .spxq img{
        width:100%;
        height:261px;
        display:block;
        margin:5px 0;
    }
    .spxq >>>p{
        padding:0 16px;
        box-sizing:border-box;
        line-height:20px;
    }

    .spxqtitle {
        text-align: center;
        font-size: 18px;
        margin-bottom: 16px;
        font-weight:500;
        color:rgba(33,33,33,1);
        line-height:1;
    }

    .num {
        text-align: center;
        width: 72px;
        height: 24px;
        border: none;
        background-color: #f5f5f5;
    }

    .CustomPopup {
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .CustomPopupContent {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s ease;
        transform: translateY(100%);
        z-index: 300;
        background: #ffffff;
        padding: 16px;
        height: 500px;
        border-radius: 8px 8px 0px 0px;
    }

    .CustomPopupContentShow {
        transform: translateY(0);
    }

    .popup-window {

    }

    .popup-window img {
        width: 110px;
        height: 86px;
        float: left;
    }

    .popupTitle {
        border-bottom: 1px solid #F6F6F6;
        height: 106px
    }

    .title {
        height: 54px;
        width: 100%;
        border-bottom: 1px solid #F6F6F6;
        padding: 19px 0;
        font-size: 14px;
    }

    .tjdd {
        bottom: 20px;
        position: absolute;
        width: 296px;
        height: 44px;
        left: 40px;
        font-size: 16px;
    }

    .content {
        text-align: right;
    }

    >>> .ivu-input-group-prepend {
        border-right: 0;
        border: none;
        background: #fff;
        padding: 0;
    }

    >>> .ivu-input {
        height: auto;
        line-height: 1;
        border: none;
        padding: 0;
        font-size: 14px;
    }

    .wrap >>> .ivu-icon {
        background: #FBFBFB;
        padding: 5px;
    }

    .popup-window >>> .ivu-icon {
        background: #FBFBFB;
        padding: 5px;
    }

    .shadow {
        float: right;
        background: #f6f6f6;
        border: 2px;
    }
    >>>.ivu-input:focus{
        box-shadow:none;
    }
    .slide{width:375px;height:311px;overflow:hidden;position:relative;}
    .slide >>>.swiper-container{width: 100%;height:100%;}
    .slide >>>.banner-item{width: 100%;height:100%;}
    .slide img{width:100%;height:100%;}
    .swiper-pagination.swiper-pagination-fraction{
  position:absolute;bottom:16px;right:10px;left:auto;width:38px;height:22px;background:rgba(0,0,0,0.57);
border-radius:11px;line-height:22px;text-align:center;font-size:14px;font-family:PingFangSC-Regular;font-weight:400;
color:rgba(255,255,255,1);
}
.desc >>>img{
    width:100%;
    height:auto;
}
.banner-item >>>img{
    width:100%;
    height:100%;
}
.tof{width:80%;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;}
</style>
<template>
    <div class="lm" ref="aa">
        <!-- 首页 -->
        <navigator title="详情" @back="$_back_$"/>

        <div class="wrap">
            <!-- 轮播图 -->
            <div class="slide">
                <swiper :options="swiperOption" ref="bannerSwiper" @slideChange="updateSwiperPagination('bannerSwiper', '.swiper-pagination')">
                    <swiper-slide v-for="(item,index) in imageList" :key="index">
                        <div class="banner-item">
                            <img :src="item|imgsrc">
                        </div>
                    </swiper-slide>
                </swiper>
                 <div class="swiper-pagination"></div>
            </div>


            <Row class="item">
                <Col span="24">
                    <p v-if="$_goodsinfo_$.goodsType==0" style="float: left">金额<span
                            class="name">{{$_dj_$}}</span>{{$_unit_$}}</p>
                    <p v-else style="float: left">积分：<span class="name">{{$_dj_$}}</span></p>
                    <p style="float: right;">库存：{{goodcity}}件</p>
                </Col>
                <Col span="24" class="goodsname mgtop16">
                    <p>{{$_goodsinfo_$.name}}</p>
                </Col>
            </Row>
            <div class="item">
                <p>数量:
                    <span :class="{disable: $_goodsnum_$ <= 1}" @touchend="subtractGoods"><Icon
                            type="minus-round"></Icon></span>
                    <input class="num" type="number" disabled v-model="$_goodsnum_$"/>
                    <span :class="{disable: $_goodsnum_$ <= goodcity}" @touchend="addGoods"><Icon
                            type="plus-round"></Icon></span>
                </p>
                <p class="mgtop16">小计：<span style="color:#FF8E58">{{$_goodsjg_$}}{{$_unit_$}}</span></p>

            </div>

            <!-- 商品详情 -->
            <div class="spxq" v-if="$_goodsinfo_$.info">
                <p class="spxqtitle">-商品详情-</p>
                <div class="desc" v-html="$_goodsinfo_$.info"></div>
            </div>

        </div>


        <div v-if="$_goodsinfo_$.repertory-$_goodsinfo_$.salesCount" class="footer" @click="showCustomPopupClick">立即兑换</div>
        <div v-else class="footer" style="background:#CDCDCD;">立即兑换</div>

        <div class="popup-window">
            <!-- 弹出层 -->
            <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
            <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">

                <div class="popupTitle">
                    <img :src="$_goodsinfo_$.image | formatimage | imgsrc"/>

                    <Row style="width:60%;float: left;margin-left: 0.267rem;line-height: 1">
                        <Col class="tof" span="24">
                            <p  class="tof" style="font-size: 0.42rem;">{{$_goodsinfo_$.name}}</p>
                        </Col>
                        <Col class="tof" span="24" style="margin-top: 0.267rem">
                            <p>库存{{$_goodsinfo_$.repertory - $_goodsinfo_$.salesCount}}件</p>
                        </Col>
                        <Col class="tof" span="24" style="margin-top: 0.64rem">
                            <p v-if="$_goodsinfo_$.goodsType==0">金额：<span class="name">{{$_dj_$}}</span>{{$_unit_$}}
                            </p>
                            <p v-else>积分：<span class="name">{{$_dj_$}}</span></p>
                        </Col>
                    </Row>
                </div>
                <div class="title" style="clear: both">
                    <p style="float: left">数量:</p>

                    <p style="float: right">
                        <span :class="{disable: $_goodsnum_$ <= 0}" @touchend="subtractGoods"><Icon
                                type="minus-round"></Icon></span>
                        <input class="num" type="number" disabled v-model="$_goodsnum_$"/>
                        <span :class="{disable: $_goodsnum_$ >= goodcity}" @touchend="addGoods"><Icon
                                type="plus-round"></Icon></span>
                    </p>
                </div>

                <Row v-if="$_goodsinfo_$.goodsType!=0" class="title">
                    <Col span="12">
                        <p>积分抵扣:{{$_paymentInfo_$.payCash}}积分</p>
                    </Col>
                    <Col span="12" style="text-align: right">
                        <p>积分余额:<span style="color: #00C1DE">{{$_accountInfo_$.credits}}</span>积分</p>
                    </Col>
                </Row>
                <div v-else>

                    <Row class="title">
                        <Col span="19">
                            <div>积分&nbsp;{{$_paymentInfo_$.Jfdk}}&nbsp;&nbsp;可抵{{money}}元</div>
                        </Col>
                        <Col span="5" class="content">
                            <Switch v-model="$_ifJF_$" @on-change="$_checkDK_$">
                            </Switch>
                        </Col>
                    </Row>
                    <Row class="title">
                        <Col span="14">
                            <div>使用代金券<span v-if="this.djq !== ''">({{djq}}元)</span></div>
                        </Col>
                        <Col span="10" class="content">
                            <Switch v-model="$_ifDJQ_$" @on-change="$_selectDJQ_$">
                            </Switch>
                        </Col>
                    </Row>

                </div>

                <Input class="title" v-model="$_beizhu_$"><span slot="prepend">备注:&nbsp;&nbsp;</span></Input>
                <p style="text-align: right">合计 ：<span style="color:#FF8E58;font-size: 0.8rem">{{$_paymentInfo_$.payCash}}</span>{{$_unit_$}}
                </p>
                <Button class="tjdd" shape="circle" type="primary" v-if="goodcity !=0" long @click="$_tjdd_$">提交订单</Button>
                <Button class="tjdd" style="border:none;background-color:#E5E5E5;color:#fff;" shape="circle" type="primary" v-else long @click="$_tjdd_$">提交订单</Button>
            </div>
        </div>

        <!--代金券列表-->
        <voucher :usetype="3" :receiverid="$_thisUserInfo_$.id" :paycash="$_goodsjg_$"
                 :opendjqlist="$_djqsuccess_$" @suredjq="$_finaldjq_$"></voucher>
    </div>
</template>

<script>
    import controler from './controler.js';

    import navigator from '../public/navigator';
    import Mobile from "../ygsyjfsc/mobile";
    import voucher from '../public/voucheruser';
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import {Toast,Indicator} from 'mint-ui'

    export default {
        mixins: [controler],
        components: {
            Mobile,
            navigator,
            voucher,
            swiperSlide, swiper,
            [Toast.name]:Toast,
            [Indicator.name]:Indicator
        },
        filters:{
            formatimage(ev){
                //console.log(ev)
               if(ev != undefined){
                   var arr = ev.split(';')
                   //console.log(arr)
                   if(arr.length > 0){
                       return arr[0]
                   }else{
                       return ''
                   }
               }
                // var arr = ev.split(";")
                // return arr.length ? arr[0] : ''
            }
        },
        data() {
            return {
                $_beizhu_$: '',
                imageList: [],
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
                },
                $_thisUserInfo_$: '', //用户基本信息
                $_goodsinfo_$: {}, //商品详情
                $_dj_$: '', //商品单价
                $_unit_$: '',  //商品单位
                $_goodsnum_$: 0,
                $_goodsjg_$: 0, //商品应付的价格
                showCustomPopup: false,
                goodcity:0,
                $_accountInfo_$: '',  //个人账户信息
                $_exRate_$: '', //现金到积分的兑换率
                $_paymentInfo_$: {
                    payableCash: '',  //应付金额（现金）
                    payableJf: '',    //应付金额（积分）
                    payCash: '',      //实付金额（现金）
                    payJf: '',        //实付金额（积分）
                    Jfdk: '',         //积分抵扣数
                }, //需要显示的各种信息
                $_ifJF_$: false,  //是否要积分抵扣  默认false
                $_ifDJQ_$: false,  //是否要使用代金券抵扣  默认false
                $_djqsuccess_$: false,  //代金券弹窗
                $_checkdjq_$: {},  //选择的代金券信息
                djq: '',  //选择的代金券面额
                money: 0,  //积分可抵扣的现金
                free:0,


            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_account_$();


        },
        methods: {
            // 立即兑换
            showCustomPopupClick() {
                this.showCustomPopup = true;
            },
            // 弹出层消失
            maskClick() {
                this.showCustomPopup = false;
            },

            //返回商城首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyjfsc')
            },
            // 获取商品信息
            $_account_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/operate/account/accountInfo`,
                    data: {refId: this.$_thisUserInfo_$.id, accountType: 1},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            this.$_accountInfo_$ = rsp.data.data;
                             // console.log(this.$_accountInfo_$)
                            this.$_spinfo_$();
                        } else {
                            Toast(rsp.data.message);
                        }
                    }
                })
            },
            // 获取商品信息
            $_spinfo_$() {
                // this.$_goodsinfo_$ = this.$root.inparams.info;
                let id = this.$root.inparams.id;
                this.$_sendQuery_$({
                    method:"POST",
                    url:`${this.$_global_$.serverPath}/operate/goods/queryGoodsById`,
                    data:{id:id},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp)=>{
                    if(rsp.status === 200){
                        if(rsp.data.code === 0){
                            this.$_goodsinfo_$ = rsp.data.data;
                          //  console.log(this.$_goodsinfo_$)
                            this.goodcity=this.$_goodsinfo_$.repertory -this.$_goodsinfo_$.salesCount
                            if(this.goodcity == 0){
                                this.$_goodsnum_$ = 0
                            }else{
                                this.$_goodsnum_$ = 1
                            }
                            this.rule()
                        }
                    }
                })

                
            },
            // 获取商品积分规则
            rule(){
                this.$_unit_$ = this.$_goodsinfo_$.goodsType === 0 ? "元" : "积分";
                this.$_dj_$ = this.$_goodsinfo_$.goodsType === 0 ? this.$_goodsinfo_$.prices : this.$_goodsinfo_$.credits;
                this.$_goodsjg_$ = this.$_dj_$*this.$_goodsnum_$;
                this.imageList = this.$_goodsinfo_$.image.split(";")

                if(this.$_goodsinfo_$.goodsType === 0) {
                    //当商品为现金商品时，需要请求其他内容

                    //获取积分规则详情
                    this.$_sendQuery_$({
                        method: "GET",
                        url: `${this.$_global_$.serverPath}/operate/creditsRule/info?zoneId=${this.$_thisUserInfo_$.zoneId}`,
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((rsp) => {
                        this.$_exRate_$ = rsp.data.data.exRate;  //1元能兑换多少积分（兑换率）

                        this.changeGoodsNum();
                    })
                }else{
                    //当商品为积分商品
                    this.$_paymentInfo_$.payCash = this.$_goodsjg_$;
                }
            },
            //减小商品数量
            subtractGoods() {
                if(this.goodcity == 0){}else{
                    if (this.$_goodsnum_$ > 1) {
                        // 未到最小值~可以减少
                        this.$_goodsnum_$ = this.$_goodsnum_$ - 1;
                        this.$_goodsjg_$ = this.$_goodsnum_$ * this.$_dj_$;

                        if(this.$_goodsinfo_$.goodsType === 0){
                            //普通商品
                            this.changeGoodsNum();
                        }else{
                            //积分商品
                            this.$_paymentInfo_$.payCash = this.$_goodsjg_$;
                        }

                    }
                }
            },
            //增加商品数量
            addGoods() {
                if (this.goodcity > this.$_goodsnum_$) {
                    // 未超过库存量~可以继续添加
                    this.$_goodsnum_$ = this.$_goodsnum_$ + 1;
                    this.$_goodsjg_$ = this.$_goodsnum_$ * this.$_dj_$;

                    if(this.$_goodsinfo_$.goodsType === 0){
                        //普通商品
                        this.changeGoodsNum();
                    }else{
                        //积分商品
                        this.$_paymentInfo_$.payCash = this.$_goodsjg_$;
                    }
                }
            },
            //商品数量变化，所有值都要变化
            changeGoodsNum(){
                //代金券面额为空
                this.djq = '';
                //不使用代金券
                this.$_djqsuccess_$ = false;

                //关闭积分抵扣
                this.$_ifJF_$ = false;
                //关闭代金券抵扣
                this.$_ifDJQ_$ = false;

                this.$_paymentInfo_$.payableCash = this.$_goodsnum_$ * this.$_dj_$;  //应付金额（现金）
                this.$_paymentInfo_$.payableJf = this.$_paymentInfo_$.payableCash * this.$_exRate_$;  //应付金额（积分）
                this.$_paymentInfo_$.payJf = this.$_paymentInfo_$.payableJf;  //实付金额（积分）
                this.$_paymentInfo_$.payCash = this.$_paymentInfo_$.payableJf / this.$_exRate_$;  //实付金额（现金）
                this.$_paymentInfo_$.Jfdk = 0;

                //可以进行抵扣的积分
                if (this.$_paymentInfo_$.payJf > this.$_accountInfo_$.credits) {
                    this.$_paymentInfo_$.Jfdk = this.$_accountInfo_$.credits;
                    this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                } else {
                    this.$_paymentInfo_$.Jfdk = this.$_paymentInfo_$.payJf;
                    this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                }
            },

            //是否需要积分抵扣
            $_checkDK_$() {
                if (this.$_ifJF_$) {
                    //积分抵扣的金额
                    this.$_paymentInfo_$.payJf = this.$_paymentInfo_$.payJf - this.$_paymentInfo_$.Jfdk;
                }else{
                    //取消积分抵扣
                    this.$_paymentInfo_$.payJf = this.$_paymentInfo_$.payJf + this.$_paymentInfo_$.Jfdk;
                }

                //实际支付金额
                this.$_paymentInfo_$.payCash = this.$_paymentInfo_$.payJf / this.$_exRate_$;

            },

            //是否使用代金券开关
            $_selectDJQ_$() {
                if (this.$_ifDJQ_$) {
                    //使用代金券
                    this.$_djqsuccess_$ = true;

                } else {
                    this.djq = '';
                    //不使用代金券
                    this.$_djqsuccess_$ = false;

                    //关闭积分抵扣
                    this.$_ifJF_$ = false;

                    //先将代金券换算成积分
                    let djqtojf = this.$_checkdjq_$.denomination * this.$_exRate_$;

                    //取消优惠券之后需要支付的积分  （此时实付积分就等于应付积分）
                    this.$_paymentInfo_$.payJf = this.$_paymentInfo_$.payableJf;

                    //可以进行抵扣的积分
                    if (this.$_paymentInfo_$.payJf > this.$_accountInfo_$.credits) {
                        this.$_paymentInfo_$.Jfdk = this.$_accountInfo_$.credits;
                        this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                    } else {
                        this.$_paymentInfo_$.Jfdk = this.$_paymentInfo_$.payJf;
                        this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                    }
                    //实际需要支付的金额 即实际支付金额
                    this.$_paymentInfo_$.payCash = this.money;
                }
            },
            //已在子组件中选择代金券
            $_finaldjq_$(value) {
                if (value.length > 0){
                    //选中的代金券的信息
                    this.$_checkdjq_$ = value[0];
                    //代金券的面额
                    this.djq = value[0].denomination;

                    //先将代金券换算成积分
                    let djqtojf = this.$_checkdjq_$.denomination * this.$_exRate_$;

                    //使用优惠券之后实际支付的积分  即实付金额（积分）
                    if(djqtojf < this.$_paymentInfo_$.payableJf){
                        this.$_paymentInfo_$.payJf = this.$_paymentInfo_$.payableJf-djqtojf;
                    }else{
                        this.$_paymentInfo_$.payJf = 0;
                    }

                    //将积分转换为现金 即实付金额（现金）
                    this.$_paymentInfo_$.payCash = this.$_paymentInfo_$.payJf/this.$_exRate_$;

                    //积分抵扣变为默认不抵扣状态
                    this.$_ifJF_$ = false;

                    //可以进行抵扣的积分
                    if (this.$_paymentInfo_$.payJf > this.$_accountInfo_$.credits) {
                        this.$_paymentInfo_$.Jfdk = this.$_accountInfo_$.credits;
                        this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                    } else {
                        this.$_paymentInfo_$.Jfdk = this.$_paymentInfo_$.payJf;
                        this.money = this.$_paymentInfo_$.Jfdk / this.$_exRate_$
                    }

                }else{
                    this.$_ifDJQ_$ = false;
                    this.$_djqsuccess_$ = false;
                }
            },

            
            // 提交订单
            $_tjdd_$() {
                let $_goodsjg_$ = this.$_goodsinfo_$.dhdj * this.$_goodsnum_$;
                if ((this.$_goodsinfo_$.goodsType == '1' || this.$_goodsinfo_$.goodsType == '2') && $_goodsjg_$ > this.$_accountInfo_$.credits * 1) {
                    Toast("积分不够");
                    return
                }
                if (this.$_goodsinfo_$.goodsType == '0' && $_goodsjg_$ > this.$_accountInfo_$.balance * 1) {
                    Toast("余额不够");
                    return
                }
                if (this.$_goodsnum_$ <= 0) {
                    Toast("请选择一个合理的数量");
                    return
                }

                let senddata = {
                    goodsId: this.$_goodsinfo_$.id,
                    goodsCount: this.$_goodsnum_$,
                    remark: this.$_beizhu_$,
                    commiter: this.$_thisUserInfo_$.id,
                    commiterName: this.$_thisUserInfo_$.name,
                    commiterPhone: this.$_thisUserInfo_$.phoneNumber,
                    // department: this.$_thisUserInfo_$.departmentId,
                    // deptName: this.$_thisUserInfo_$.departmentName,
                    enterprise: this.$_thisUserInfo_$.enterpriseId,
                    entName: this.$_thisUserInfo_$.enterpriseName,
                    image: this.$_thisUserInfo_$.faceUrl,
                    zoneId: this.$_thisUserInfo_$.zoneId
                };

                // 积分商品
                if (this.$_goodsinfo_$.goodsType == '1' || this.$_goodsinfo_$.goodsType == '2'){
                    senddata.paymentType = '1';
                }
                // 普通商品
                if (this.$_goodsinfo_$.goodsType == '0'){
                    //混合（积分+现金+代金券）支付  暂时注释，勿删
                    if(this.$_ifJF_$ && this.$_ifDJQ_$){
                        senddata.paymentType = '5';
                        senddata.voucherUserId = this.$_checkdjq_$.id
                    }
                    // 代金券+现金
                    if(!this.$_ifJF_$ && this.$_ifDJQ_$){
                        senddata.paymentType = '4';
                        senddata.voucherUserId = this.$_checkdjq_$.id
                    }
                    // 积分+现金
                    if(this.$_ifJF_$ && !this.$_ifDJQ_$){
                        senddata.paymentType = '3';
                    }
                    // 现金
                    if(!this.$_ifJF_$ && !this.$_ifDJQ_$ && this.$_paymentInfo_$.payCash){
                        senddata.paymentType = '2';
                    }
                }

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/operate/order/createOrder`,
                    data: senddata,
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.showCustomPopup = false;
                            Toast(rsp.data.data);
                            this.$_account_$();
                        } else {
                            Toast(rsp.data.message);
                        }
                    }
                });
            },
            updateSwiperPagination(name, el) {
                this.$refs[name].swiper.pagination.update({el})
            },
        },

    }
</script>