<style scoped>

    .lm {
        background: #f6f6f6;
        min-height:100vh;
    }

    .head {
        padding: 16px 16px 0;
        background: #ffffff;
        line-height: 1;
        height: 180px;
        top:43px;
        z-index:999;
        box-sizing:border-box;
    }

    .list {
        background: #ffffff;
        line-height: 1;
        list-style: none;
        box-sizing: border-box;
       padding-bottom:30px;
        color: #999999;
        font-size: 12px;
        height:450px;
        overflow-y:scroll;

    }

    .list li {
        padding: 16px;
        box-sizing: border-box;
    }
    .list li:last-child{
        border-bottom:none;
    }
    .list::-webkit-scrollbar{
       display: none;
    }

    .zdxx {
        width: 100%;
        height: 147px;
        background: url(/static/grzx/wd_zd_top.svg) no-repeat center;
        background-size: 105% 116%;
        box-shadow: 0 2px 10px 0 rgba(106, 88, 48, 0.12);
        border-radius: 10px;

        font-size: 12px;
        color: #333333;
        padding: 20px 3px 20px 20px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
    }

    .zdxx img {
        width: 46px;
        height: 46px;
        border-radius: 100%;
        float: left;
        margin-right: 10px;
    }

    .zdxx span {
        font-size: 28px;
        font-family: DINAlternate-Bold;
        font-weight: bold;
    }

    .zdxx .username {
        font-size: 18px;
        margin-bottom: 8px;
        color: #656D72;
        margin-top: 4px;
    }

    .item {
        border-bottom: 1px solid #ececec;
        height: 78px;
    }

    .number {
        line-height: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 5px;

    }

    .name {
        font-size: 14px;
        padding-top: 12px;
        color: #333333;
        padding-bottom: 13px;
        box-sizing: border-box;
    }

    .czbg {
        width: 69px;
        height: 30px;
        background: rgba(255, 255, 255, 0.81);
        border-radius: 100px 0px 0px 100px;
        float: right;
        line-height: 30px;
        text-align: center;
    }

    .cz {
        width: 22px;
        height: 22px;
        background: rgb(225, 194, 133);
        border-radius: 100%;
        float: left;
        margin: 4px;
        color: #ffffff;
        line-height: 22px;
    }
</style>
<template>
    <div class="lm" ref="aa">

        <navigator title="一卡通账单" @back="$_goback_$"/>

        <div class="wrap">
            <div class="head">
                <Row class="zdxx">
                    <Col span="24">
                        <img :src="$_global_$.ImgServer + userInfo.faceUrl"/>
                        <div>
                            <div style="float: left">
                                <p class="username">
                                    {{userInfo.name}}</p>
                                <p style="color:#B3B3B3;">账户类型:&nbsp;个人</p>
                            </div>

                            <div class="czbg" @click="$_chongzhi_$">
                                <p class="cz">￥</p>
                                <p style="color: #E1C285">充值</p>
                            </div>
                        </div>

                    </Col>
                    <Col span="24" style="margin-top: 1.06667rem"><span>{{$_Mes_$.balance}}</span> 元</Col>
                </Row>
            </div>
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" ref="loadmore"
                         :autoFill="false">

                <ul class="list">
                    <li class="item" v-for='item in $_data_$'>
                        <Col span="12">
                            <p class="number">流水号:&nbsp;{{item.code}}</p>
                            <p class="name">{{item.consumeItem}}</p>
                        </Col>
                        <Col span="12" align="right">
                            <p class="number">{{item.opTimeStr}}</p>
                            <p v-if="item.opType == 0" class="name" style="color: #E1C285;font-family:DINAlternate-Bold;
                                  font-weight:bold;">
                                +{{item.consumeSum}}</p>
                            <p v-else class="name" style="color:#333333;font-family:DINAlternate-Bold;
                                font-weight:bold;">-{{item.consumeSum}}</p>
                        </Col>
                    </li>
                </ul>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>

    import {Loadmore, Indicator} from 'mint-ui';
    import navigator from '../public/navigator';

    export default {
        components: {
            [Loadmore.name]: Loadmore,
            navigator,
            [Indicator.name]: Indicator
        },
        data() {
            return {
                $_querycfg_$: {
                    mod: "",
                    params: {}
                },

                topStatus: '',
                pageNum: 1,//当前第几页
                userInfo: '',
                $_data_$: [], // 表格数据
                $_Mes_$: {},
                $_num_$: 0,

            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            this.$_querycfg_$.params.pageSize = 10;
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_jfye_$()
        },
        methods: {
            $_jfye_$() {
                this.$_Mes_$ = this.$root.inparams.data;
                this.$_getList_$();
            },
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            },
            // 充值
            $_chongzhi_$() {
                // this.$root.$_Route_$('user', 'mobile', 'ygyktcz', {})
            },

            $_getList_$() {
                this.$_querycfg_$.mod = "operate/balanceRecord/page";
                this.$_querycfg_$.params.accountId = this.$_Mes_$.id;

                if (!this.$_querycfg_$.params.accountId) {
                    return
                }
                // this.$_querycfg_$.params.pageNum = this.pageNum;

                this.$_fquery_$(rsp => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            this.$_data_$ = rsp.data.data.records
                            // for (let i = 0; i < rsp.data.data.records.length; i++) {
                            //     this.$_data_$.push(rsp.data.data.records[i]);
                            // }
                            this.$_num_$ = Number(rsp.data.data.total);
                        }
                    }
                });
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    // this.pageNum++;
                    this.$_getList_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>