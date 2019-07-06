<style scoped>
    .lm {
        background: #fff;
    }
    .wrap{
        min-height:100vh;
        padding-top:180px;
        /* padding-top: 43px; */
    }

    .head {
        padding: 16px;
        background: #ffffff;
        line-height: 1;
        height: 180px;
        position:fixed;
        top:43px;
        left:0;
        right:0;
        z-index:999;
    }

    .list {
        border-top:10px solid #f6f6f6;
        background: #ffffff;
        list-style: none;
        box-sizing: border-box;
        color: #999999;
        font-size: 12px;
        padding-bottom: 30px;

    }

    .list li {
        padding: 16px;
        box-sizing: border-box;
    }

    .list li:last-child {
        /* border-bottom: none; */
        padding-bottom: 30px;
    }

    .zdxx {
        width: 100%;
        height: 147px;
        background: url(/static/grzx/wd_jf_top.png) no-repeat center;
        background-size: 110% 122%;
        box-shadow: 0 2px 10px 0 rgba(106, 88, 48, 0.12);
        border-radius: 10px;

        font-size: 12px;
        color: #ffffff;
        padding: 20px;
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
        margin-top: 4px;
    }

    .item {
        border-bottom: 1px solid #ececec;
        height: 78px;
        line-height:1;
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
        line-height: 1;
        color: #333333;
        margin-top:12px;
    }
</style>
<template>
    <div class="lm" ref="aa">

        <navigator title="积分账单" @back="$_goback_$"/>

        <!-- 内容 -->
        <div class="wrap">

            <div class="head">
                <Row class="zdxx">
                    <Col span="24">
                        <img :src="$_global_$.ImgServer + userInfo.faceUrl"/>
                        <div>
                            <p class="username"> {{userInfo.name}}</p>
                            <p>账户类型:&nbsp;个人</p>
                        </div>

                    </Col>
                    <Col span="24" style="margin-top: 1.06667rem"><span>{{$_Mes_$.credits}}</span> 积分</Col>
                </Row>
            </div>

            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" ref="loadmore"
                         :autoFill="false">
                <ul class="list">
                    <li class="item" v-for='item in $_data_$'>
                        <Row>
                            <Col span="12">
                                <p class="number">流水号:&nbsp;{{item.code}}</p>
                                <p class="name" style="white-space:nowrap;">{{item.consumeItem}}</p>
                            </Col>
                            <Col span="12" align="right">
                                <p class="number">{{item.opTimeStr}}</p>
                                <p v-if="item.opType==0" class="name" style="color: #00C1DE;font-family:DINAlternate-Bold;
font-weight:bold;">+{{item.credits}}</p>
                                <p v-else class="name" style="font-family:DINAlternate-Bold;
font-weight:bold;">-{{item.credits}}</p>
                            </Col>
                        </Row>
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

            $_getList_$() {
                this.$_querycfg_$.mod = "operate/creditsRecord/page";
                this.$_querycfg_$.params.accountId = this.$_Mes_$.id;
                if (!this.$_querycfg_$.params.accountId) {
                    return
                }
                this.$_querycfg_$.params.pageNum = this.pageNum;
                this.$_fquery_$(rsp => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            for (let i = 0; i < rsp.data.data.records.length; i++) {
                                this.$_data_$.push(rsp.data.data.records[i]);
                            }
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
                    this.pageNum++;
                    this.$_getList_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>