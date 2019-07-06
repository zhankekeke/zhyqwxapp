<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        position: static;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
    }

    .header {
        height: 50px;
        left: 0;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 99;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        padding: 0px 0px 20px;
        font-size: 14px;
        color: #333;
        min-height: 100vh;
        background: #f6f6f6;
    }

    .box {
        background: #f6f6f6;
    }

    .box img {
        width: 47px;
        height: 47px;
        vertical-align: middle;
    }

    .box1 {
        box-sizing: border-box;
    }

    .list {
        overflow: hidden;
        padding: 0px;
        box-sizing: border-box;
        margin-top: 10px;
    }

    .list li {
        background: #fff;
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom: 10px;
        border-radius: 5px;
        font-size: 14px;
        color: #fff;
        font-family: "Microsoft YaHei";
        height: 156px;
        position: relative;
    }

    .list li .img {
        width: 100%;
        height: auto;
        margin: 0 auto;
        position: absolute;
        top: 0;
        left: 0;
    }

    .list li .shadow {
        width: 100%;
        height: 100%;
        background-color: rgba(51, 51, 51, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        padding: 70px 15px 0;
        box-sizing: border-box;
    }

    .list li .shadow p {
        line-height: 22px;
    }

    .list li .shadow .icon {
        height: 12px;
        width: auto;
        margin-right: 6px;
    }

    .list li .shadow .status {
        position: absolute;
        top: 25px;
        right: 0;
        height: 30px;
        line-height: 30px;
        width: 94px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        background-color: rgba(51, 51, 51, 0.5);
    }

    /* >>> .ivu-input-group-prepend {
        background-color: #fff !important;
        border-color: #fff !important;
    }

    >>> .ivu-input {
        background-color: #fff !important;
        border-color: #fff !important;
    } */

    .newList {
        overflow: hidden;
        padding: 0px;
        box-sizing: border-box;
        margin-top: 10px;
        padding: 0 15px;
    }

    .newList li {
        background: #fff;
        margin-bottom: 10px;
        padding: 6px 6px 10px 7px;
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
        border-radius: 4px;
        overflow: hidden;
    }

    .newList li .imgWrap {
        width: 100%;
        height: 151px;
        margin-bottom: 13px;
    }

    .newList li .imgWrap > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .newList li .info {
        overflow: hidden;
    }

    .newList li .info .title {
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 18px;
    }

    .newList li .info .status {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(0, 193, 222, 1);
        line-height: 14px;
        margin-top: 2px;
    }

    .newList li .basicInfo .time {
        margin-top: 10px;
        padding-left: 20px;
        background: url('/static/yqhd/time.svg') 2px 0 no-repeat;
        background-size: 12px 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
        line-height: 12px;
        margin-bottom: 12px;
    }

    .newList li .basicInfo .address {
        overflow: hidden;
        padding-left: 20px;
        background: url('/static/yqhd/position.svg') 2px 0 no-repeat;
        background-size: 12px 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
        line-height: 12px;
    }

    .newList li .button {
        float: right;
        width: 76px;
        height: 28px;
        background: rgba(0, 193, 222, 1);
        border-radius: 14px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 28px;
        border: none;
        padding: 0;
        margin-top: 16px;
        margin-left: 10px;
        text-align: center;
    }

    .newList li .gray {
        background: rgba(229, 229, 229, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
    }

    .search1 {
        background-color: #fff;
    }
    .search1 >>> .plug-container {
        background-color: #fff;
    }
    /* .search1 >>> .ivu-input-group {
        background:rgba(229,229,229,0.3836) ;
        border-radius: 18px;
    } */
    .search1 >>> .plug-container .ivu-input-group-prepend .ivu-icon {
        color: #B3B3B3;
    }
    /* .search1 >>> .ivu-input-group-prepend {
        background-color: rgba(255, 255, 255, 0.3836) !important;
        border-color: rgba(255, 255, 255, 0.3836) !important;
    }
    .search1 >>> .ivu-input {
        background-color: rgba(255, 255, 255, 0.3836) !important;
        border-color: rgba(255, 255, 255, 0.3836) !important;
    } */

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
    /* >>>.plug-container .ivu-input{
        color:#333 !important;
        opacity:1;
    }
    >>>.plug-container .ivu-input::-webkit-input-placeholder{
        color:#E5E5E5;
        opacity:0;
    } */
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="园区活动" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <div>
                    <Row>
                        <Col span="24" class="search1">
                            <search v-model="$_search_$" @on-search="$_Search_$"/>
                        </Col>
                    </Row>
                </div>
            </div>
            <mt-loadmore v-if="$_List_$.length > 0" :bottom-method="loadBottom" @bottom-status-change="handleTopChange"
                         ref="loadmore">
                
                <ul class="newList">
                    <li v-for='(item,index) in $_List_$' :key="index" @click="$_nextPage_$(item.id)">
                        <div class="imgWrap">
                            <img :src="item.images | FormatImages|imgsrc" alt="">
                        </div>
                        <div class="info">
                            <p class="title"
                               style="float:left;width:70%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                                {{item.title}}
                                <span v-if="!item.couponId == null">+优惠券</span>
                            </p>
                            <p v-if="new Date(item.endDate.replace(/\-/g,'/')).getTime() > new Date().getTime()" class="status"
                               style="float:right;">
                                {{item | FormatJx}}
                            </p>
                            <p v-else class="status" style="color:rgba(250,84,28,1);float:right;"> {{item |
                                FormatJx}}</p>
                        </div>
                        <div class="basicInfo"
                             style="float:left;width:45%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                            <div class="time">{{item.beginDate.substr(0,11)}}</div>
                            <div class="address">
                                <p style="float:left;">{{item.address}}</p>
                            </div>
                        </div>
                        <div style="float:right;" v-if="new Date(item.endDate.replace(/\-/g,'/')).getTime() > new Date().getTime()">
                            <div v-if="item.userApply && item.apply" class="button gray">{{item | FormatBm}}</div>
                            <div v-if="!item.userApply && item.apply" class="button">{{item | FormatBm}}</div>
                            <div class="button" v-if="item.couponId && !item.userCoupon">{{item | FormatYhq}}</div>
                            <div class="button gray" v-if="item.couponId && item.userCoupon">{{item | FormatYhq}}</div>
                        </div>

                    </li>
                </ul>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>
            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/yqhd/yqhd_nolist.svg"/>
                <div class="nolist">目前没有活动哦~</div>
            </div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import {Toast, Loadmore,Indicator} from 'mint-ui';
    import search from '../public/search';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
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
            FormatYhq(item) {
                if (item.userCoupon) {
                    return '已领取'
                } else {
                    return '去领取'
                }
            },
            FormatBm(item) {
                if (item.userApply) {
                    return "已报名"
                } else {
                    return "去报名"
                }
            },
            FormatImages(image) {
                var i = JSON.parse(image)
                if (i.length > 0) {
                    return i[0]
                }
            },
            FormatJx(item) {
                if (new Date(item.endDate.replace(/\-/g,'/')).getTime() < new Date().getTime()) {
                    return "已结束"
                } else {
                    return '进行中'
                }
            }
        },
        components: {
            [Toast.name]: Toast,
            search,
            navigator,
            [Loadmore.name]: Loadmore,
             [Indicator.name]:Indicator
        },
        data() {
            return {
                $_search_$: '',
                $_List_$: [],
                showStatus: true,
                pageNum: 1,
                topStatus: '',
            }
        },
        created() {
            this.$_global_$.serverPath
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
            this.list()
        },
        watch: {
            $_search_$(val) {
                val.trim() == '';
                this.list()
            }
        },
        methods: {
            // 获取活动列表
            list() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/activity/search`,
                    data: {
                        status: 1,
                        zoneId: this.$_userInfo_$.zoneId
                    },
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_List_$ = rsp.data.data.records;
                             Indicator.close();
                            if (this.$_List_$.length == 0) {
                                Toast("暂无数据!")
                            }
                        }
                    }
                })
            },
            // 搜索
            $_Search_$() {
                if (this.$_search_$.trim()) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/company/activity/search`,
                        data: {name: this.$_search_$.trim()},
                        headers: {"Content-type": "application/json"}
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code === 0) {
                                this.$_List_$ = rsp.data.data.records
                                if (this.$_List_$.length == 0) {
                                    Toast("暂无数据!")
                                }
                            }
                        }
                    })
                } else {
                    this.list()
                }

            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.list();
                    // this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_nextPage_$(id) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-yqhd-xq', {id: id})
            },
        },
    }
</script>