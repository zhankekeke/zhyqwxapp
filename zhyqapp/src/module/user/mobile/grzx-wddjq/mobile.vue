<style scoped>
    .lm{
        background: #f6f6f6;
        height: 100vh;
    }

    .item {
        display: inline-block;
        position: relative;
        width: 335px;
        height: 122px;
        text-align: left;
        margin: 20px;
        margin-bottom: 0;
        font-family: "DINAlternateBold";
        font-weight: bold;
    }

    .orange img {
        width: 22px;
        height: 22px;
        margin-top: 50px;
    }

    .pastpic {
        float: right;
        width: 58px;
        height: 55px;
        margin-top: 10px;
        margin-right: 10px;
    }

    .pastpic img {
        width: 58px;
        height: 55px;
    }

    .blue {
        float: left;
        color: #ffffff;
        padding: 24px;
        padding-right: 16px;
        /*margin-left: 20px;*/
        width: 100%;
        height: 100%;
        background: url('/static/grzx/djq_blue_lake.svg') no-repeat center;
        background-size: 100%;
    }

    .orange {
        float: left;
        color: #ffffff;
        /*margin-left: 20px;*/
        width: 100%;
        height: 100%;
        background: url('/static/grzx/djq_orange.svg') no-repeat center;
        background-size: 100%;
    }

    .past {
        float: left;
        color: #ffffff;
        /*margin-left: 20px;*/
        width: 100%;
        height: 100%;
        background: url('/static/grzx/djq_past.svg') no-repeat center;
        background-size: 100%;
    }

    .yuan {
        float: left;
        width: 74px;
        height: 74px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 9px 15px 0px rgba(41, 122, 136, 0.25);
        text-align: center;
        border-radius: 100%;
        margin-right: 24px;
    }

    .yuan24 {
        float: left;
        width: 74px;
        height: 74px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 9px 15px 0px rgba(41, 122, 136, 0.25);
        text-align: center;
        border-radius: 100%;
        margin: 24px;
    }

    .yuan p {
        font-size: 14px;
        line-height: 74px;
    }

    .yuan span {
        font-size: 30px;
    }

    .yuan24 p {
        font-size: 14px;
        line-height: 74px;
    }

    .yuan24 span {
        font-size: 30px;
    }

    .title {
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 128px;
        padding-bottom: 8px;
        font-family: PingFangSC-Medium;
    }

    .text {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*margin-top: 8px;*/
    }

    .manjian {
        width: 73px;
        height: 30px;
        background: rgba(255, 255, 255, 0.67);
        border-radius: 100px 0px 0px 100px;
        text-align: center;
        float: right;
        margin-top: 10px;
    }

    .manjian p {
        color: #FA541C;
        font-size: 10px;
        line-height: 30px;
        text-align: right;
    }

    .wrap {
        background: #f6f6f6;
        /*padding: 15px;*/
        box-sizing: border-box;
    }

    .rightp {
        float: left;
        width: 212px
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
    <div class="lm" ref="aa">
        <navigator title="代金券" @back="$_goback_$"/>
        <!-- 内容 -->
        <div class="wrap">

            <mt-loadmore v-if="$_List_$.length > 0" :bottom-method="loadBottom"
                         @bottom-status-change="handleTopChange"
                         :autoFill=false
                         ref="loadmore">
                <div v-for='item in $_List_$'>
                    <div class="item">
                        <div v-if="item.threshold==1" class="orange">

                            <div class="yuan24">
                                <p style="color: #FE8E58">￥<span>{{item.denomination}}</span></p>
                            </div>

                            <div class="rightp">
                                <Row>
                                    <Col span="12">
                                        <p class="title" style="margin-top: 24px;">
                                            {{item.name}}</p>
                                    </Col>
                                    <Col span="12" class="manjian">
                                        <p>满{{item.quota}}元可用</p>
                                    </Col>
                                </Row>
                                <p v-if="item.useType==0" class="text">使用场景:餐厅</p>
                                <p v-if="item.useType==1" class="text">使用场景:会议室</p>
                                <p v-if="item.useType==2" class="text">使用场景:停车场</p>
                                <p class="text">有效期:&nbsp;{{item.endDateStr}}</p>
                            </div>
                        </div>
                        <div v-if="item.threshold==2" class="past">

                            <div class="yuan24">
                                <p style="color: #CDCDCD">￥<span>{{item.denomination}}</span></p>
                            </div>

                            <div class="rightp">
                                <Row>
                                    <Col span="12">
                                        <p class="title" style="margin-top: 24px;">
                                            {{item.name}}</p>
                                    </Col>
                                    <Col span="12" class="pastpic">
                                        <img src="/static/grzx/guoqi.svg"/>
                                        <!--<p>满{{item.quota}}元可用</p>-->
                                    </Col>
                                </Row>
                                <p v-if="item.useType==0" class="text">使用场景:餐厅</p>
                                <p v-if="item.useType==1" class="text">使用场景:会议室</p>
                                <p v-if="item.useType==2" class="text">使用场景:停车场</p>
                                <p v-if="item.useType==3" class="text">使用场景:商场</p>
                                <p class="text">有效期:&nbsp;{{item.endDateStr}} (已过期)</p>
                            </div>
                        </div>
                        <div v-if="item.threshold==0" class="blue">
                            <div class="yuan">
                                <p style="color: #00C1DE">￥<span>{{item.denomination}}</span></p>
                            </div>
                            <div style="float: left">
                                <p class="title">{{item.name}}</p>
                                <p v-if="item.useType==0" class="text">使用场景:餐厅</p>
                                <p v-if="item.useType==1" class="text">使用场景:会议室</p>
                                <p v-if="item.useType==2" class="text">使用场景:停车场</p>
                                <p v-if="item.useType==3" class="text">使用场景:商场</p>
                                <p class="text">有效期:&nbsp;{{item.endDateStr}}</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>

            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/hysyy/djq_nolist.svg"/>
                <div class="nolist">您还没有代金券哦~</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Loadmore, Indicator} from 'mint-ui';
    import navigator from '../public/navigator';
    import Date from '../../../../libs/date'

    export default {
        components: {
            [Loadmore.name]: Loadmore,
            navigator,
            [Indicator.name]: Indicator
        },
        filters: {
            formatDate(item) {
                var result = new Date(item.endDateStr).getTime() + new Date(item.validCount).getTime()
                var date = new Date(result);
                var seperator1 = "/";
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
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                return currentdate;
            }
        },
        data() {
            return {
                $_type_$: [
                    {
                        value: '全部',
                        label: '全部'
                    },
                    {
                        value: 0,
                        label: '未使用'
                    },
                    {
                        value: 1,
                        label: '使用'
                    },
                    {
                        value: 2,
                        label: '过期'
                    }
                ],
                $_model_$: '',
                topStatus: '',
                pageSize: 10,
                pageNum: 1,//当前第几页
                userInfo: '',
                $_List_$: [],
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_djqList_$()
        },
        methods: {
            $_djq_$() {
                this.$root.inparams.id
            },
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            },
            $_djqList_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/operate/voucherUser/page`,
                    data: {
                        pageNum: this.pageNum,
                        pageSize: this.pageSize,
                        receiverId: this.userInfo.id,
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                             Indicator.close();
                            let list = res.data.data.records

                            for (let i in list) {
                                if (list[i].voucherEntity.voucherTemplate) {
                                    let item = list[i].voucherEntity.voucherTemplate;
                                    if (item.validFlag == 1) {
                                        let timestamp = new Date(item.createTime);
                                        item.endDateStr = this.format(timestamp.getTime() + item.validCount * 24 * 60 * 60 * 1000)
                                    }
                                    let lastTime = new Date(item.endDateStr);

                                    if (lastTime < new Date().getTime())
                                        item.threshold = 2;
                                    this.$_List_$.push(item);
                                }
                            }
                        }
                    }
                })
            },
            add0(m) {
                return m < 10 ? '0' + m : m
            },
            format(shijianchuo) {
//shijianchuo是整数，否则要parseInt转换
                let time = new Date(shijianchuo);
                let y = time.getFullYear();
                let m = time.getMonth() + 1;
                let d = time.getDate();
                // let h = time.getHours();
                // let mm = time.getMinutes();
                // let s = time.getSeconds();
                // return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
                return y + '-' + this.add0(m) + '-' + this.add0(d);
            },
            selected(value) {
                this.$_model_$ = value
                if (this.$_model_$ == '全部') {
                    this.$_djqList_$()
                    // this.$_model_$=''
                } else if (this.$_model_$) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/operate/voucherUser/page`,
                        data: {
                            pageNum: this.pageNum,
                            pageSize: this.pageSize,
                            receiverId: this.userInfo.id,
                            voucherStatus: this.$_model_$
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            if (res.data.code === 0) {
                                this.$_List_$ = res.data.data.records
                            }
                        }
                    })
                } else if (this.$_model_$ == 0) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/operate/voucherUser/page`,
                        data: {
                            pageNum: this.pageNum,
                            pageSize: this.pageSize,
                            receiverId: this.userInfo.id,
                            voucherStatus: this.$_model_$
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            if (res.data.code === 0) {
                                this.$_List_$ = res.data.data.records
                            }
                        }
                    })
                }
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.$_djqList_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>
