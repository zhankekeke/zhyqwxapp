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
        background: #f6f6f6;
        min-height: 100vh;
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

    .wrap {
        padding: 50px 0px 75px 0;
        background: #f6f6f6;
        min-height: 100vh;
    }

    .footer .active {
        color: #7599ff;
    }

    .wrap {
        padding: 50px 0 0 0;
    }

    .right {
        float: right;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        padding: 0;
        font-size: 14px;
        color: #333;
        background: #f6f6f6;
    }

    .box {
        background: #fff;
    }

    .box img {
        width: 47px;
        height: 47px;
        vertical-align: middle;
    }

    .box1 {
        box-sizing: border-box;
    }

    .search {
        background: #e4e4e4;
        padding: 10px 10px;
        box-sizing: border-box;
    }

    .box {
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 10px 20px;
        line-height: 47px;
    }

    .list {
        overflow: hidden;
        box-sizing: border-box;
        padding: 10px 16px 0;
    }

    .list li {
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom: 10px;
        line-height: 1;
        background: #fff;
    }

    .list li .image {
        margin: 0px;
        overflow: hidden;
        padding: 7px 6px 10px 6px;
    }

    .list li .image > img {
        width: 100%;
        height: 151px;
        border-radius: 4px;
        margin-bottom: 13px;
        display:block;
    }

    .list li .shadow {
        width: 100%;
        font-family: PingFangSC-Medium;
        line-height: 1;
    }

    .list li .shadow .name {
        font-size: 18px;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 10px;
    }

    .list li .shadow .free {
        font-size: 20px;
        font-family: DINAlternate-Bold;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
    }

    .list li .shadow .showPeople {
        float: right;
        font-size: 12px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 1;
    }

    .list li .shadow .addressWrap {
        font-size: 12px;
        font-weight: 400;
        color: rgba(101, 109, 114, 1);
        padding-left: 18px;
        line-height: 16px;
        box-sizing: border-box;
        background: url('/static/yqhd/position.svg') 0 0px no-repeat;
        background-size: 16px 16px;
    }

    .list li .shadow .bjyd {
        float: right;
        width: 76px;
        height: 28px;
        background: rgba(0, 193, 222, 1);
        border-radius: 14px;
        line-height: 28px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        margin-top: 8px;
    }

    .shizhong {
        color: #00C1DE;
    }

    .yongji {
        color: #FA541C;
    }

    .search1 {
        background-color: #fff;
    }

    .search1 >>> .plug-container {
        background-color: #fff;
    }

    /* .search1 >>> .ivu-input-group {
        background: rgba(229, 229, 229, 0.386);
        border-radius: 18px;
    } */

    .search1 >>> .plug-container .ivu-input-group-prepend .ivu-icon {
        color: #B3B3B3;
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
    >>>.plug-container .ivu-input{
        color:#333 !important;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="餐厅列表" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <div>
                    <Row>
                        <Col span="24" class="search1">
                            <search v-model="$_search_$" @on-search="$_Search_$" placeholder="请输入餐厅名称"/>
                        </Col>
                    </Row>
                </div>
            </div>
            <mt-loadmore v-if="$_List_$.length > 0" :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill=false
                         ref="loadmore">
                <ul class="list">
                    <li v-for='(item,index) in $_List_$' :key="index">
                        <!-- 正常餐厅 -->
                        <div v-if="!item.boxList.length>0" class="image" @click="$_toDetails_$(item)">
                            <img :src="item.images | FormatImages|imgsrc" alt="">
                            <!-- <img src = "http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg"> -->
                            <div class="shadow">
                                <div>
                                    <span class="name"
                                          style="float:left;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:50%;">{{item.name}}</span>
                                    <span class="showPeople" v-if="item.showPeople == 1">剩余餐位数：
                                    <span class="free">{{item.freeCount}}</span>
                                </span>
                                </div>
                                <div style="width:100%;overflow:hidden;">
                                    <span class="addressWrap"
                                          style="float:left;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:50%;">{{item.address}}</span>
                                    <span style="float:right;display:block;" class="showPeople"
                                          v-if="item.showPeople == 1">拥挤程度：
                                    <span :class="item.level == 1 ? 'yongji':'shizhong'">{{item.level | formatLevel}}</span>
                                </span>
                                </div>
                            </div>

                        </div>
                        <!-- 包间预定 -->
                        <div v-if="item.boxList.length>0" class="image" @click="$_toBj_$(item)">
                            <img :src="item.images | FormatImages |imgsrc" alt="">
                            <div class="shadow">
                                <div style="float:left;display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:50%;">
                                    <p class="name">{{item.name}}</p>
                                    <p class="addressWrap">
                                        {{item.address}}
                                    </p>
                                </div>
                                <div class="bjyd" style="">包间预定</div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>
            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">目前没有餐厅哦~</div>
            </div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import search from '../public/search';
    import navigator from '../public/navigator';
    import {Loadmore, Toast,Indicator} from 'mint-ui';

    export default {
        mixins: [controler],
        filters: {
            formatLevel(val) {
                if (val == 0) {
                    return "适中"
                }
                if (val == 1) {
                    return "拥挤"
                }
            },
            FormatImages(i) {
                if (i.length > 0) {
                    return i[0].imageUrl
                }
            }
        },
        components: {
            search,
            navigator,
            [Loadmore.name]: Loadmore,
            [Toast.name]: Toast,
             [Indicator.name]:Indicator
        },
        data() {
            return {
                $_search_$: '',
                $_List_$: [],
                userInfo: {},
                pageNum: 1,
                topStatus: '',
            }
        },
        created() {
            this.$_global_$.serverPath
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
            this.List()
        },
        watch: {
            $_search_$(val) {
                val.trim() == '';
                this.List()
            }
        },
        methods: {
            // 获取餐厅列表
            List() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/zone/zone/${this.userInfo.zoneId}/restaurant/search`,
                    data: {status: 1},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_List_$ = rsp.data.data.records
                             Indicator.close();
                            if (this.$_List_$.length == 0) {
                                Toast("暂无数据!")
                            }
                        }
                    }
                })
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_toDetails_$(item) {
                this.$root.$_Route_$("user", "mobile", "ygsyctskxq", {row: item})
            },
            //包间预定
            $_toBj_$(item) {
                this.$root.$_Route_$("user", "mobile", "ygsyctbjxq", {row: item})
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.List();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            $_Search_$() {
                if (this.$_search_$.trim()) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/zone/zone/${this.userInfo.zoneId}/restaurant/search`,
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
                    this.List()
                }
            }
        }
    }
</script>
