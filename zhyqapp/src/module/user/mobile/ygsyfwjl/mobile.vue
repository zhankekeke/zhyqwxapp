<style lang="less" scoped>
    .container {
        height: 100vh;
        background-color: #f6f6f6;
    }

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
        width: 100%;
        background: #f6f6f6;
    }
    .wrap {
        background: #f6f6f6;
        border-top: 1px solid rgb(236, 236, 236)
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

    .type {
        font-size: 14px;
        color: rgb(51, 51, 51);
    }

    .list {
        margin-bottom: 60px;
        ul {
            background-color: #fff;
        }
        .list1 {
            color: #333;
            font-size: 14px !important;
            line-height: 50px;
            height: 50px;
            padding: 0 15px;
            border-bottom: 1px solid #f6f6f6;
            font-weight: bold;
            span {
                float: right;
            }
        }
        .list2 {
            float: left;
            width:75%;
            padding: 0 15px;
            box-sizing:border-box;
            p{
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            }
        }
        .list2 p:nth-child(1) {
            margin-top: 10px;
            font-weight: bold;
            width:68%;
            color: #333;
            font-size: 14px !important;
        }
        .list2 p:nth-child(2) {
            color: #333;
            margin-top:10px;
            font-size: 12px !important;
        }
        .list3 {
            float: right;
            margin-right: 15px;
            .list3Btn {
                font-size: 12px !important;
                line-height: 28px;
                color: #fff;
                display: block;
                text-align: center;
                width: 70px;
                height: 28px;
                background-color: #00C1DE;
                border-radius: 25px;
                margin-top: 22px;
            }
        }
    }

    .list ul li {
        border-bottom: 10px solid #f6f6f6;
        padding-bottom:16px;
    }
    .list ul li:last-child {
        border-bottom: none;
    }

    .create {
        line-height: 25px;
    }

    .create p:nth-child(3) {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    .create p:nth-child(2) {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }

    .code-row-bg .create P:first-child {
        font-size: 12px;
    }

    .code-row-bg .create P:nth-child(2) {
        font-size: 14px;
    }

    .code-row-bg .create P:nth-child(2) span {
        font-size: 13px;
    }

    .code-row-bg .create P:nth-child(3) {
        font-size: 14px;
    }

    .code-row-bg .create P:nth-child(3) span {
        font-size: 13px;
    }

    .list .recordStatus p {
        font-size: 13px;
        color: rgb(2, 155, 250);
    }

    .list .recordStatus p:first-child {
        color: rgb(51, 51, 51);
    }

    .top1 {
        padding: 3px 10px;
        color: #333;
        font-size: 12px;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 8px solid #f6f6f6;
    }

    /deep/ .ivu-input:focus {
        box-shadow: none;
    }

    /deep/ .ivu-select-selection {
        border: none;
        font-size: 14px !important;
        box-shadow: none;
    }

    .aa5 {
        /deep/ .ivu-select-placeholder {
            font-size: 14px;
            text-align: left;
            color: #656D72;
        }
        /deep/ .ivu-select-selection {
            width: 30%;
        }
        /deep/ .ivu-select-selected-value {
            color: #00C1DE;
        }
        /deep/ .ivu-select-selected-value + .ivu-select-arrow {
            color: #00C1DE;
        }
        /deep/ .ivu-select-item {
            font-size: 14px !important;
            border-bottom: 1px solid #f6f6f6;
            padding: 10px 20px !important;
        }
        /deep/ .ivu-select-item:nth-last-child(1) {
            border-bottom: 1px solid #fff;
        }
        /deep/ .ivu-select-selected-value {
            font-size: 14px !important;
        }
        /deep/ .ivu-select-dropdown {
            width: 100vw !important;
            left: 0 !important;
            border-radius: 0;
            max-height: none !important;
        }
        /deep/ .ivu-select-item-focus {
            background-color: #fff;
            color: #00C1DE;
        }
        /deep/ .ivu-select-item-focus:after {
            content: '';
            background: url(/static/fwsl/dui.png) no-repeat;
            background-size: 16px;
            width: 16px;
            height: 16px;
            float: right;
            background-position: bottom;
        }
    }

    /deep/ .ivu-icon-arrow-down-b:before {
        content: "\F123" !important;
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
        <navigator title="服务记录" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <p class="top1">
                <Select class="aa5" v-model="$_model_$" style="width:80%;height:0.90666rem;" placeholder="类型"
                        @on-change="selected">
                    <Option v-for="item in $_cityList_$" :value="item.value" :key="item.value">{{ item.label }}
                    </Option>
                </Select>
            </p>
            <div class="list">
                <mt-loadmore v-if="fwjl.length > 0" :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill="false"
                             ref="loadmore">
                    <ul v-if="fwjl.length != 0">
                        <li v-for="item in fwjl" @click="sxxq(item)">
                            <Row type="flex" justify="center" align="middle" class="code-row-bg">
                                <Col span="24" class="create">
                                    <p class="list1">
                                        {{item.createDate | formatDate}}
                                        <span>{{item.recordStatus | format}}</span>
                                    </p>
                              </Col>
                            </Row>
                                    <div class="list2">
                                        <p style="color:#000;">事项名称：{{item.recordTitle}}</p>
                                        <p style="color:#000;">事项描述：{{item.recordDesc}}</p>
                                    </div>
                                    <div class="list3">
                                        <span v-if="item.recordStatus ==2" class="list3Btn">去评价</span>
                                        <span v-if="item.recordStatus ==3" class="list3Btn"
                                              style="background-color:#e5e5e5">已评价</span>
                                    </div>
                                    <div style=" clear: both"></div>

                        </li>
                    </ul>
                    <!--<div slot="top" class="mint-loadmore-top">-->
                    <!--<span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">下拉加载</span>-->
                    <!--<span v-show="topStatus === 'loading'">Loading...</span>-->
                    <!--</div>-->
                </mt-loadmore>

                <div class="divNoList" v-else>
                    <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                    <div class="nolist">您还没有服务记录哦~</div>
                </div>
            </div>
        </div>
        <div class='footer'>
            <ul class="">
                <li @click="$_gjfw_$">
                    <span style="float: left;margin-left:28%;margin-top: 2.5%">
                        <img class="icon1" src="/static/gjfw/bzzxH.png" alt=""></span>
                    <span style="float:right;margin-right: 28%;color: #B3B3B3">帮助中心</span>
                </li>
                <span style="border-left: 1px solid #E8E8E8; height:26px;margin-top: 3%; float: left"></span>
                <li>
                    <span style="float: left;margin-left: 28%;margin-top: 4%">
                        <img class="icon2" src="/static/gjfw/fwjlB.png" alt=""></span>
                    <span class="active" style="float:right;margin-right: 28%;">服务记录</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import {Toast, Loadmore, Indicator} from 'mint-ui';
    import Date from '../../../../libs/date'


    export default {
        mixins: [controler],
        components: {
            navigator,
            [Loadmore.name]: Loadmore,
            [Indicator.name]: Indicator
        },
        filters: {
            format(item) {
                if (item == 0) {
                    return '未处理'
                }
                if (item == 1) {
                    return '处理中'
                }
                if (item == 2) {
                    return '已解决'
                }
                if (item == 3) {
                    return '已完成'
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
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = date.getFullYear() + '年' + month + '月' + strDate + '日'
                return currentdate;
            }
        },
        data() {
            return {
                $_model_$: '',
                userInfo: '',
                pageNum: 1,
                fwjl: [],
                $_sxmc_$: 'wwww',
                $_sxms_$: 'sssss',
                $_sjsj_$: '8.88.8.8',
                $_sjzt_$: '处理中',
                topStatus: '',
                $_cityList_$: [
                    {
                        value: 0,
                        label: '全部'
                    },
                    {
                        value: 1,
                        label: '物业报修'
                    },
                    {
                        value: 2,
                        label: '投诉建议'
                    },
                    {
                        value: 3,
                        label: '企业服务咨询'
                    },
                    {
                        value: 4,
                        label: '留言'
                    }
                ]
            }
        },
        // watch: {
        //     $_model_$(val) {
        //         val == ''
        //         this.list()
        //     }
        // },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            // console.log(this.userInfo)
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.list()
            //this.sxxq()
        },
        methods: {
            list() {
                let data = {
                    current: this.pageNum,
                    size: 5,
                    zoneId: this.userInfo.zoneId,
                    commiterId: this.userInfo.id
                }
                if (this.$_model_$) {
                    data.recordTypeCode = this.$_model_$;
                }
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + '/steward/steward/queryRecordPageList',
                    data: data,
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            for (let i = 0; i < rsp.data.data.records.length; i++) {
                                this.fwjl.push(rsp.data.data.records[i]);
                            }
                        }
                    }
                })
            },
            selected(value) {
                this.$_model_$ = value
                let data = {
                    current: 1,
                    size: 5,
                    zoneId: this.userInfo.zoneId,
                    commiterId: this.userInfo.id
                }
                if (this.$_model_$) {
                    data.recordTypeCode = this.$_model_$
                }
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + '/steward/steward/queryRecordPageList',
                    data: data,
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.fwjl = [];
                            for (let i = 0; i < rsp.data.data.records.length; i++) {
                                this.fwjl.push(rsp.data.data.records[i]);
                            }

                        }
                    }
                })
            },
            sxxq(item) {
                if (item.recordStatus == 3) {
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-gjfw-pj', {id: item.id})
                } else {
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-fwjl-sxxq', {id: item.id})
                }
            },
            submiter() {
                this.$root.inparams.id
                this.list()
            },
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_backer_$() {
                this.$root.inparams.id
            },
            //服务记录
            $_fwjl_$() {
                this.$root.inparams.name
                this.list()
            },
            //帮助中心
            $_gjfw_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsygjfw', {id: 1})
            },
            //购买记录详情
            $_fwjlxq_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfwjlxq', {id: 1})
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.list();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
        }
    }
</script>
