<style lang="less" scoped>
    @backgroundColor: #f6f6f6;
    .header {
        z-index: 99;
        height: 50px;
        width: 100%;
        line-height: 50px;
        left: 0;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        background: #fff;
    }
    .msearch{
        color:#333333;
    }
    .wrap {
        padding: 6px 0 90px 0;
        box-sizing: border-box;
        background: #fff;
    }
    .footer ul {
        overflow: hidden;
    }
    .footer img {
        width: 19px;
        height: 19px;
    }
    .footer ul li {
        float: left;
        width: 49%;
        text-align: center;
    }

    .footer ul li span {
        height: auto;
        line-height: 50px;
    }

    .footer .active {
        color: #00C1DE;
    }

    .footer {
        font-size: 12px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: #fff;
        box-shadow: 0 0 0.32rem 0 rgba(232, 232, 232, 0.9);
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 5px;
        font-size: 20px;
    }

    .banner img {
        width: 100%;
        height: auto;

    }

    .banner {
        padding: 0 15px;
    }

    .plug-container {
        padding: 0 15px;
        background-color: #fff !important;
        box-sizing: border-box;
        /deep/ .ivu-icon {
            color: #B3B3B3 !important;
            font-size: 18px;
            margin-top: 3px;
            margin-left: 5px;
        }
        /deep/ .ivu-input-group-prepend {
            background-color: @backgroundColor !important;
        }
        /deep/ .ivu-input {
            color:#333333 !important;
            background-color: @backgroundColor !important;
        }
    }
    .wrap .img {
        width: 100%;
        height: auto;
    }
    .help .tlt {
        margin: 10px 0;
    }

    .choose {
        overflow: hidden;
        margin-bottom: 10px;
        width: 250%;
    }

    .choose li {
        float: left;
        width: 10%;
        text-align: center;
        padding: 3px 2px;
        margin-right: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        white-space: nowrap;
        color: #333;
    }

    .choose li.active {
        font-size: 14px;
        position: relative;
        color: #00C1DE;
        font-weight: bold;
    }

    .choose li.active:after {
        content: "";
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 0;
        border-bottom: 2px solid #00C1DE;
    }

    .goodsmsg {
        padding: 15px 0;
        box-sizing: border-box;
        display: block;
        border-bottom: 1px solid #E5E5E5;
    }

    .help .list::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .help .list {
        overflow-x: auto;
    }
    .baoxiu {
        position: fixed;
        right: 10%;
        bottom: 73px;
        z-index: 999;
    }

    .baoxiu img {
       width:80px;
       height:80px;
    }

    .baoxiu span {
        width: 56px;
        display: block;
        text-align: center;
        color: #fff;
        border-radius: 50px;
        font-size: 14px;
        height: 56px;
        line-height: 50px;
    }

    .goodsmsg p:nth-child(2) {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        height: 15px;
        -webkit-box-orient: vertical;
        font-size: 13px;
        color: rgb(153, 153, 153);
        line-height: 10px;
        padding:0 16px;
        box-sizing:border-box;
        background-color: white;
        line-height: 15px;
    }

    .goodsmsg1 {
        font-size: 16px;
        color: #333;
        padding:0 16px 10px;
        box-sizing:border-box;
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .goodsmsg2 {
        font-size: 14px;
        color: #656D72;
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        /deep/ p{
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; 
        }
    }
    .cont {
        border-top: 8px solid @backgroundColor;
    }

    .cont .goodsmsg:last-child {
        border-bottom: none;
    }

    .rootBar {
        margin-top: 10px;
        font-size: 14px;
        width: 100%;
        height: 40px;
        float: left;
        border-bottom:2px solid #f6f6f6;
        overflow-y: hidden;
        overflow-x: auto;
        white-space: nowrap;
        text-align: left;
        line-height: 40px;
        padding-left:15px;
        .childrenBar {
            text-overflow: ellipsis;
            overflow: hidden;
            width: 80px;
            height: 40px;
            position: relative;
            text-align:center;
            display: inline-block;
        }
        .active {
            text-overflow: ellipsis;
            overflow: hidden;
            color: #00C1DE;
            width: 80px;
            height: 40px;
            position: relative;
            display: inline-block;
            text-align:center;
            font-weight: bold;
        }

        .active:after {
            content: "";
            bottom: 0;
            left: 0;
            position: absolute;
            width: 100%;
            height: 0;
            border-bottom: 4px solid #00C1DE;
        }
    }

    .rootBar::-webkit-scrollbar {
        display: none;
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
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator  title="帮助中心" @back="$_back_$"/>
        <search @ListenToChild="childData" style="color:#333333;" class="msearch" v-model="$_search_$"  @on-search="$_Search_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="banner">
                <a>
                    <img src="/static/gjfw/banner.svg"/>
                </a>
            </div>
            <div class="help">
                <div class="rootBar">
                    <div :class="activeClass == 'one' ? 'active':'childrenBar'" @click="$_lister_$('','one')">全部分类</div>
                    <div :class="activeClass == index ? 'active':'childrenBar'" v-for="(item,index) in gjfwType"
                         @click="$_lister_$(item,index)">{{item.name}}
                    </div>
                </div>
                <div style=" clear: both"></div>
                <div class="cont" v-if="chosegjfw.length>0">
                    <div class="goodsmsg"
                         v-for="(item,index) in chosegjfw" 
                         :key="index" @click="jump(item)">
                        <p v-if="!item.putaway" class="goodsmsg1">{{item.name}}</p>
                        <p v-if="!item.putaway" class="goodsmsg2"  v-html="item.info"></p>
                    </div>
                </div>
                <div class="divNoList" v-else>
                <img style="margin-top: 25%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">暂无记录~</div>
            </div> 
            </div>
            <!-- <div class="baoxiu" :style="{'top':pmHeight}"> -->
            <div class="baoxiu">
                <span @click="$_gjfw_$"><img src="/static/gjfw/gjfw.svg"></span>
            </div>
        </div>
        <div>
            <div class='footer'>
                <ul class="">
                    <li>
                    <span style="float: left;margin-left:28%;margin-top: 2.5%">
                        <img class="icon1" src="/static/gjfw/question.png" alt=""></span>
                        <span class="active" style="float:right;margin-right: 28%">帮助中心</span>
                    </li>
                    <span style="border-left: 1px solid #E8E8E8; height:26px;margin-top: 3%; float: left"></span>
                    <li @click="$_fwjl_$">
                    <span style="float: left;margin-left: 28%;margin-top: 4%">
                        <img class="icon2" src="/static/gjfw/fujl2.png" alt=""></span>
                        <span style="float:right;margin-right: 28%;color: #B3B3B3">服务记录</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import search from '../public/search2';
    import {Indicator} from 'mint-ui';

    export default {
        mixins: [controler],
        components: {
            navigator, search,[Indicator.name]:Indicator
        },
        data() {
            return {
                pmHeight: 0,
                navShow: 1,
                activeClass: 'one',
                chosegjfw: [],
                userInfo: '',
                $_search_$: '',
                gjfw: [],
                record: '',
                gjfwList: '',
                records: {},
                id: [],
                gjfwType: [
                    {
                        label: '全部',
                        value: '全部'
                    }
                ]
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_list_$()

        },
        watch: {
            $_search_$(val) {
                val.trim() == ''
                this.$_lister_$(this.id[0])
            }
        },
        updated: function () {
            this.pmHeight = document.body.clientHeight - 130 + 'px';
        },
        methods: {
            //判断导航是否显示
            childData(type) {
                this.navShow = type;
            },
            //问题分类
            $_list_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + '/steward/classify/queryClassifyList',
                    data: {
                        zoneId: this.userInfo.zoneId,
                        putaway: 0,
                        level: 1
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    // console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code == 0) {
                            Indicator.close();
                            this.gjfwType = rsp.data.data
                            var arr = this.gjfwType
                            for (var i = 0; i < arr.length; i++) {
                                var temp = {}
                                {
                                    id:arr[i].id
                                }
                                this.id.push(temp)
                                this.$_lister_$()
                            }

                        }
                    }
                })
            },
            // 问题列表

            $_lister_$(item, index = '') {
                if (index !== '') {
                    this.activeClass = index;
                }
                //this.$refs.i.addClass('active').siblings('li').removeClass('active')
                if (item && item != 'one') {
                    Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + '/steward/commonProblems/queryCommonProblemsPageList',
                        data: {
                            zoneId: this.userInfo.zoneId,
                            classifyId: item.id,
                            putaway: 0
                        },
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code == 0) {
                                Indicator.close();
                                this.chosegjfw = rsp.data.data.records
                                //console.log(this.gjfwType)

                            }
                        }
                    })
                } else {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + '/steward/commonProblems/queryCommonProblemsPageList',
                        data: {
                            zoneId: this.userInfo.zoneId
                        },
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code == 0) {
                                this.chosegjfw = rsp.data.data.records
                                //console.log(this.gjfwType)

                            }
                        }
                    })
                }
            },
            $_Search_$() {
                //console.log(999)
                if (this.$_search_$.trim()) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + '/steward/commonProblems/queryCommonProblemsPageList',
                        data: {
                            zoneId: this.userInfo.zoneId,
                            name: this.$_search_$.trim()
                        },
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code == 0) {
                                this.chosegjfw = rsp.data.data.records

                            }
                        }
                    })
                } else {
                    this.$_list_$(0)
                }
            },
            jump(item) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-fwjlxq', {id: item})
            },
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            //管家服务
            $_gjfw_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsygjbx', {id: 1})
            },
            //服务记录
            $_fwjl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfwjl', {id: 1})
            }
        },
        mounted() {
            // this.$nextTick(() => {
            //     $('.choose').find('li').eq(0).addClass('active').siblings('li').removeClass('active')
            //         $('.choose li').click(function () {
            //             $(this).addClass('active').siblings('li').removeClass('active')
            //         })
            // })
        }
    }
</script>