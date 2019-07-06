<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        background: #fff;
        position: static;
        color: #666;
    }
</style>
<style scoped>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 15px 0 0;
        box-sizing:border-box;
        height:49px;
        box-shadow:0px 0px 12px 0px rgba(232,232,232,0.9);
    }

    .wrap {
        padding: 0px 0px 49px 0px;
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
        padding-left:87px;
        box-sizing:border-box;
        font-size:12px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        background-size:19px 17px;
        line-height:17px;
        color:#B3B3B3;
    }
    .footer ul li .index{
        background:url('/static/jfsc/sc.svg') 57px 0 no-repeat;
        background-size: 19px 17px;
        color:#00C1DE;
    }
    .footer ul li .jl{
        background:url('/static/jfsc/jl.svg') 57px 0 no-repeat;
        background-size: 19px 17px;
    }

    .swipt-div{position:relative;}
    .swipt-div, .swipt-div img {
        width: 100%;
        height: 100%
    }
    .swipt-div .shadow{position:absolute;bottom:0;left:0;width:100%;height:49px;background:rgba(6,6,6,0.4);
    line-height:49px;text-align:center;padding:0 24px 0 25px;box-sizing:border-box;overflow:hidden;color:#fff;
    text-overflow:ellipsis;white-space:nowrap;font-size:16px;font-family:PingFangSC-Semibold;font-weight:600;}

    .classification {
        width: 100%;
        padding: 0 15px;
        height: 47px;
        line-height:45px;
    }

    .classification .goodstype {
        display: inline-block;
        text-align: center;
        margin-left: 9%;
        width: 18%;
    }

    .classification .goodstype span {
        display: block;
        font-size: 14px;
        font-family:'PingFangSC-Medium';
        font-weight:500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        text-align:center;
        border-bottom:2px solid #fff;
    }
    .classification .goodstype .active{
        color:#00C1DE;
        font-weight:550;
        border-bottom:2px solid #00C1DE;
    }

    .classification .goodstype img {
        height: 40px;
        width: 40px;
        margin-bottom: 1px;
        border-radius: 50%
    }
    .goods{
        padding:0 20px 15px;
        box-sizing:border-box;
    }
    .goods .goodstitle{overflow:hidden;margin:0 auto;line-height:50px;font-family:'PingFangSC-Medium';
    max-width:106px;text-align:center;color:#212121;font-size:18px;font-weight:550;}
    .goods .goodstitle>div{float:left;}
    .goods .goodstitle .line{margin-top:24px;height:2px;background:#212121;width:10px;}
    .goods .goodstitle .choosename{padding:0 5px;}
    .goods .goodsmsg {
        width: 48.5%;
        display: inline-block;
        font-family:PingFangSC-Medium;
        padding-bottom:10px;

    }
    .goods .goodsmsg:nth-child(even) {
        margin-left: 3%
    }

    .goods .goodsmsg p {
        font-size: 14px;
        color: rgb(51,51,51);
        font-weight:500;
    }

    .goods .goodsmsg .goodsimg {
        height: 94px;
        background-color: #f6f6f6;
        text-align: center;
        width:100%;
        border-radius: 4px;
        overflow:hidden;
    }

    .goods img {
        height: 100%;
        width: 100%;
    }

    .goods span {
        color: #FF9900;
    }

    .goods p .chooseimg {
        width: 25px;
        height: 25px;
        position: relative;
        top: 7px;
    }
    .goods .goodsmsg .goodsname{width:80%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
    font-size:14px;color:#333;font-weight:550;margin: 6px 0 6px;}
    .goods .goodsmsg .goodsprice{color:#656D72;line-height:1;font-weight:400;font-size:12px;}
    .goods .goodsmsg .special{font-size:16px;font-family:'DINAlternate-Bold';font-weight:bold;color:#FF8E58;}
    .search{padding-top:6px;}
    .search >>>.plug-container{background-color:#fff;}
    /* .search >>>.ivu-input-wrapper{background-color:#E5E5E5;border-radius:18px;opacity:0.3836;} */
    .search >>> .plug-container .ivu-input-group-prepend .ivu-icon {
        color: #B3B3B3;
    }
    .swiper{margin:12px auto 0;height:180px;width:335px;overflow:hidden;border-radius:8px;}
    .jfwrap{padding:0 20px;}
    .jf{padding:15px 0px 15px 27px;background:url('/static/jfsc/jf.svg') 2px 14px no-repeat;
    background-size:19px 19px;box-sizing:border-box;line-height:15px;font-size:14px;font-family:'PingFangSC-Regular';
    font-weight:400;color:#333;border-bottom:1px solid #e5e5e5;}
    .jf .jfnumber{font-size:18px;font-family:'DINAlternate-Bold';font-weight:bold;color:rgba(255,142,88,1);}
    .splitline{height:10px;background:#f6f6f6;}
    >>>.plug-container .ivu-input{
        color:#333 !important;
        opacity:1;
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
    .divNoList .qs{
        width:96px;
        height:82px;
        display:block;
        margin:0 auto;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="园区商城" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索框 start-->
            <div class="search">
                <search style="padding:0 0.4rem" v-model="$_search_$" @on-search="$_Search_$"/>
            </div>
            <!-- 搜索框 end-->
            <!-- 轮播图 start -->
            <div class="swiper" v-if="$_images_$.length">
                <mt-swipe :auto="4000" :showIndicators="false">
                    <mt-swipe-item v-for="(item,index) in $_images_$" :key="index">
                        <div class="swipt-div">
                            <a :href="item.appUrl">
                                <img :src="item.image|imgsrc" alt="">
                            </a>
                            <div class="shadow">{{item.name}}</div>
                        </div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div v-else class="swiper">
                <img style="width:100%;height:100%;" src="/static/jfsc/banner.svg" alt="">
            </div>
            <!-- 轮播图 end -->
            <div class="jfwrap">
                <p class="jf">
                    <span>我的积分：</span>
                    <span class="jfnumber">{{$_myInfo_$.credits ? $_myInfo_$.credits : "0"}}</span>
                </p>
            </div>
            <!-- 分类 -->
            <div class="classification">
               <span class="goodstype" :style="{marginLeft:(item.key==0?'0':'')}" v-for="(item,index) in $_goodsTypeInfo_$" :key="index" @click="$_changeType_$(item)">
                   <!-- <img :src="item.value"/> -->
                   <span v-if="$_chooseName_$ ==item.label" class="active">{{item.label}}</span>
                   <span v-else>{{item.label}}</span>
               </span>
            </div>
            <div class="splitline"></div>
            <!-- 商品 -->
            <div class="goods">
                <div class="goodstitle">
                    <div class="line"></div>
                    {{$_chooseName_$}}
                    <div class="line" style="float:right;"></div>
                </div>
                <div v-if="this.searchdata.length">
                    <div class="goodsmsg" v-for="(item,index) in searchdata" :key="index" @click="$_qbspxq_$(item)">
                        <div class="goodsimg">
                            <img :src="item.image|formatimage|imgsrc" alt="">
                        </div>
                        <p class="goodsname">{{item.name}}</p>
                        <p class="goodsprice" v-if="item.goodsType==1 || item.goodsType == 2">积分：<span class="special">{{item.credits}}&nbsp;&nbsp;</span></p>
                        <p class="goodsprice" v-if="item.goodsType==0">金额：<span class="special">{{item.prices}}&nbsp;&nbsp;</span>元</p>
                    </div>
                </div>
                <div class="divNoList" v-else>
                        <img class="qs" style="margin-top: 10%" src="/static/jfsc/gmjl_nolist.svg"/>
                        <div class="nolist">该分类暂无商品哦~</div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li>
                    <p class=" index">园区商城</p>
                </li>
                  <span style="border-left: 1px solid #ccc; height:20px; float: left"></span>
                <li @click="$_gmjl_$">
                    <p class="jl">购买记录</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import controler from './controler.js';
    import {Swipe, SwipeItem, TabContainer, TabContainerItem, Indicator} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import search from '../public/search';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            navigator,
            search,
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
            [TabContainer.name]: TabContainer,
            [TabContainerItem.name]: TabContainerItem,
            [Indicator.name]:Indicator
        },
        filters:{
            formatimage(item){
               // console.log(item)
                var arr = item.split(";")
                return arr[0] ? arr[0] : ''
            }
        },
        data() {
            return {
                //轮播
                $_images_$: [],
                //账户信息
                $_myInfo_$: '',
                //商品分类
                $_goodsTypeInfo_$: [
                    {
                        value: "/static/jfsc/qbsp.png",
                        label: '全部商品',
                        key: 0
                    },
                    {
                        value: "/static/jfsc/sp.png",
                        label: '商品',
                        key: 3
                    },
                    {
                        value: "/static/jfsc/dzq.png",
                        label: '电子券',
                        key: 2
                    },
                    {
                        value: "/static/jfsc/rmsp.png",
                        label: '热门商品',
                        key: 1
                    },
                ],
                showfooter: true, // 底部显示
                //选中的当前分类名称
                $_chooseName_$: '',
                //商品列表
                $_goodsListInfo_$: '',
                //商品搜索结果
                searchdata: [],
                //当前子账号信息
                $_thisUserInfo_$: '',
                $_tabIndex_$: '',
                $_search_$: '',
            }
        },
        methods: {
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },


            //轮播
            $_banner_$() {
                let sendData = {
                    type: "1",
                    publishStatus: "0",
                    zoneId: this.$_thisUserInfo_$.zoneId,
                    typeCode:"1"
                };
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/mallCarousel/queryCarouselImageList",
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data.length > 0) {
                                this.$_images_$ = rsp.data.data;
                            } else {
                                this.$_images_$ = [
                                    {image: '/static/jfsc/banner.png',appUrl:'#'},
                                ]
                            }
                        }
                    }
                })
            },
            //我的积分信息
            $_myIntegral_$() {
                let sendData = {
                    "refId": this.$_thisUserInfo_$.id,
                    "accountType": 1
                };
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/account/accountInfo",
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_myInfo_$ = rsp.data.data;
                        }
                    }
                })
            },
            //商品分类
            /*$_goodsType_$() {
                let sendData = {
                    "zoneId": this.$_thisUserInfo_$.zoneId,
                    "visible": 0
                };

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/catalog/queryCatalogList",
                    data: sendData,
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_goodsTypeInfo_$ = rsp.data.data;
                            if(this.$_goodsTypeInfo_$.length>0){
                                this.$_tabIndex_$ = this.$_goodsTypeInfo_$[0].id;
                                this.$_chooseName_$ = this.$_goodsTypeInfo_$[0].name;
                                this.$_goodsList_$(this.$_goodsTypeInfo_$[0].id);
                            }

                        }
                    }
                })
            },*/
            //商品列表
            $_goodsList_$(type, pageNum = '') {
                let current = '';
                if (pageNum != '') {
                    current = pageNum;
                } else {
                    current = 1;
                }
                let sendData = {};
                if (type == 0) {
                    sendData = {
                        "putaway": "0",
                        "current": current,
                        "zoneId": this.$_thisUserInfo_$.zoneId
                    };
                } else {
                    sendData = {
                        "goodsType": type,
                        "putaway": "0",
                        "current": current,
                        "zoneId": this.$_thisUserInfo_$.zoneId
                    }
                }

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + "/operate/goods/queryGoodsPageList",
                    data: sendData,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            this.total = rsp.data.data.total;
                            this.$_goodsListInfo_$ = rsp.data.data.records;
                            this.searchdata = this.$_goodsListInfo_$;
                        }
                    }
                })
            },
            //分类切换
            $_changeType_$(item) {
                Indicator.open({
                        text: '加载中...',
                        spinnerType: 'fading-circle'
                    });
                this.$_chooseName_$ = item.label;
                // console.log(this.$_chooseName_$)
                if (item.key == 1) {
                    //获取热门商品
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + "/operate/goods/queryGoodsPageListByTags",
                        data: {
                            "tags": '热门兑换',
                            "putaway": 0,
                            "zoneId": this.$_thisUserInfo_$.zoneId,
                            "current": 1,
                            "size": 999
                        },
                        headers: {"Content-type": "application/json"}
                    }).then((rsp) => {

                        if (rsp.status === 200) {
                            if (rsp.data.code === 0) {
                                Indicator.close();
                                if (rsp.data.data.records.length > 0) {
                                    this.$_goodsListInfo_$ = rsp.data.data.records;
                                    this.searchdata = this.$_goodsListInfo_$;
                                }
                            }
                        }
                    });
                } else {
                    Indicator.open({
                        text: '加载中...',
                        spinnerType: 'fading-circle'
                    });
                    //其他类型
                    this.$_goodsList_$(item.key);
                }


            },
            //切换页面
            $_changePage_$(pageNum) {
                this.$_goodsList_$(this.$_tabIndex_$, pageNum);
            },

            //搜索
            $_Search_$() {
                this.$_search_$ = this.$_search_$.replace(/\ +/g, "");
                if (this.$_search_$) {
                    this.searchdata = this.$_goodsListInfo_$;
                    this.searchdata = this.search(this.searchdata, {name: this.$_search_$});
                }else{
                    this.$_goodsList_$()
                }
            },
            search(data, argumentObj) {
                let res = data;
                let dataClone = data;
                for (let argu in argumentObj) {
                    if (argumentObj[argu].length > 0) {
                        res = dataClone.filter(d => {
                            return d[argu].indexOf(argumentObj[argu]) > -1;
                        });
                        dataClone = res;
                    }
                }
                return res;
            },
            $_qbspxq_$(item) {
                // this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-spxq', {info: item})
                this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-spxq', {id: item.id})
            },
            //购买记录
            $_gmjl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-gmjl')
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_banner_$();
            this.$_myIntegral_$();
            this.$_changeType_$(this.$_goodsTypeInfo_$[0])
        },
         mounted(){
           var oHeight = $(document).height();
           window.onresize=function(){
    
               // console.log(oHeight)
                if($(document).height() < oHeight){
                    $(".footer").css("position","static");
                }else{
                    $(".footer").css("position","fixed"); //adsolute或fixed，看你布局
                }
            }; 
       },
       destroyed() {
           window.onresize = void 0;
       }
    }
</script>
