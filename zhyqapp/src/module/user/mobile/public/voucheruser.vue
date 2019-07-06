<style scoped>
    >>> .ivu-modal {
        margin: 0;
        height: 100%;
        top: 0;
    }

    >>> .ivu-modal-content {
        height: 100%;
        border-radius: 0;
        background-color: rgb(246, 246, 246);
    }

    >>> .ivu-modal-body {
        height: 90%;
        overflow-y: scroll;
        padding: 0;
        line-height: 1;
    }

    >>> .ivu-modal-footer {
        border: none;
        width: 296px;
        height: 54px;
        /*margin: 0 auto;*/
        padding: 40px;
        padding-top: 10px;
    }

    .buttons {
        width: 296px;
        height: 44px;
    }

    /*>>> .ivu-radio-group-button .ivu-radio-wrapper {*/
    /*height: auto;*/
    /*line-height: 1;*/
    /*background-color: rgb(246, 246, 246);*/
    /*padding: 20px 16px 0;*/
    /*border: none;*/
    /*}  */
    >>> .ivu-radio {
        margin-right: 0;
    }

    >>> .ivu-radio-wrapper {
        height: auto;
        line-height: 1;
        background-color: rgb(246, 246, 246);
        padding: 20px 16px 0;
        border: none;
        display: flex;
        align-items: center;
    }

    >>> .ivu-radio-inner {
        /*background: none;*/
        width: 22px;
        height: 22px;
        border: none;
        background: url('/static/hysyy/djq_unchose.svg') no-repeat center;
    }

    >>> .ivu-radio-checked:hover .ivu-radio-inner {
        /*background: none;*/
        width: 22px;
        height: 22px;
        border: none;
        background: url('/static/hysyy/djq_chose.svg') no-repeat center;
    }

    >>> .ivu-radio-inner:after {
        display: none;
    }

    .zhu {
        height: 33px;
        background: #ffffff;
        color: #00C1DE;
        font-size: 12px;
        line-height: 33px;
        padding-left: 28px;
        margin-bottom: 10px;
    }

    .item {
        display: inline-block;
        position: relative;
        width: 300px;
        height: 122px;
        text-align: left;
    }

    .item img {
        width: 22px;
        height: 22px;
        margin-top: 50px;
    }

    .blue {
        float: left;
        color: #ffffff;
        padding: 24px 16px 24px 10px;
        margin-left: 20px;
        width: 100%;
        height: 100%;
        background: url('/static/hysyy/djq_blue_lake.svg') no-repeat center;
        background-size: 300px;
    }

    .orange {
        float: left;
        color: #ffffff;
        margin-left: 20px;
        width: 100%;
        height: 100%;
        background: url('/static/hysyy/djq_orange.svg') no-repeat center;
        background-size: 300px;
    }

    .yuan {
        float: left;
        width: 74px;
        height: 74px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 9px 15px 0px rgba(41, 122, 136, 0.25);
        text-align: center;
        border-radius: 100%;
        margin-right: 14px;
    }

    .yuan p {
        font-size: 14px;
        color: #5DB5F6;
        line-height: 74px;
    }

    .yuan span {
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
        margin-top: 8px;
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
    }

    .page-voucherlist {
        /*font-family: PingFangSC-Regular;*/
        font-family: "DINAlternateBold";
        font-weight: bold;
        z-index: 4000;
    }

    .right1 {
        float: left;
        width: 205px
    }

    .nolist{
        color: #B3B3B3;
        margin-top: 19px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: normal;
    }

</style>
<template>


    <!--选择代金券弹窗-->
    <Modal class="page-voucherlist" :style="style" v-model="djqsuccess" :mask-closable="false" :closable="false">
        <navigator title="我的代金券" @back="$_choicedjq_$"/>

        <div class="zhu"><span>注：一次只能使用一张代金券</span></div>
        <RadioGroup v-if="$_voucherList_$.length > 0" @on-change="$_selectdjq_$" style="width: 100%">
            <Radio :label="item.id" v-for='item in $_voucherList_$' style="width: 100%">
                <div class="item">
                    <!--<div style="float: left;position: absolute;margin-top: 10px">-->
                    <!--<img src="/static/hysyy/djq_unchose.svg"/>-->
                    <!--</div>-->

                    <div v-if="item.threshold==1" class="orange">

                        <div class="yuan" style="margin: 0.64rem 0.266667rem">
                            <p>￥<span>{{item.denomination}}</span></p>
                        </div>

                        <div class="right1">
                            <Row>
                                <Col span="12">
                                    <p class="title" style="margin-top: 0.64rem;">{{item.name}}</p>
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
                    <div v-else class="blue">
                        <div class="yuan">
                            <p>￥<span>{{item.denomination}}</span></p>
                        </div>
                        <div style="float: left">
                            <p class="title">{{item.name}}</p>
                            <p v-if="item.useType==0" class="text">使用场景:餐厅</p>
                            <p v-if="item.useType==1" class="text">使用场景:会议室</p>
                            <p v-if="item.useType==2" class="text">使用场景:停车场</p>
                            <p class="text">有效期:&nbsp;{{item.endDateStr}}</p>

                        </div>
                    </div>
                </div>
            </Radio>
        </RadioGroup>
        <div v-else style="text-align: center;position:relative;top:25%">
            <img src="/static/hysyy/djq_nolist.svg" />
            <div class="nolist">您还没有代金券哦~</div>
        </div>
        <div slot="footer">
            <Button class="buttons" type="primary" shape="circle" long @click="$_choicedjq_$">确定</Button>
        </div>
    </Modal>
</template>
<script>
    import navigator from '../public/navigator';

    export default {
        components: {
            navigator,
        },
        props: {
            //使用类型  0餐厅/1会议室/2停车场/3积分商城
            usetype: {
                type: Number,
                default() {
                    return 1
                }
            },
            //员工id
            receiverid: {
                type: [String, Number],
            },
            //要花费的金额
            paycash: {
                type: [String, Number],
            },
            //是否显示
            opendjqlist: Boolean,


            backgroundColor: {
                type: String,
                default() {
                    return '#fff'
                }
            },
            color: {
                type: String,
                default() {
                    return '#2f2f2f'
                }
            }
        },
        computed: {
            style() {
                return {
                    color: this.color,
                    paddingLeft: this.space + 'px',
                    paddingRight: this.space + 'px',
                    backgroundColor: this.backgroundColor,
                }
            }
        },
        data() {
            return {
                $_voucherList_$: [],
                djqsuccess: this.opendjqlist,
                $_selection_$: [], //选中的代金券
            }
        },

        methods: {
            //获取代金券列表
            $_postvoucherUser_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/operate/voucherUser/list`,
                    data: {
                        "receiverId": this.receiverid,
                        "useType": this.usetype
                    },
                    headers: {"Content-type": "application/json"}
                }).then((rsc) => {
                    if (rsc.status === 200) {
                        if (rsc.data.code === 0) {
                            let list = rsc.data.data;

                            this.$_voucherList_$ = [];

                            for (let i = 0; i < list.length; i++) {

                                if (list[i].threshold == 1) {
                                    //需要满足满减条件
                                    if (this.paycash >= list[i].quota) {
                                        this.$_voucherList_$.push(list[i]);
                                    }

                                } else {
                                    //没有限制
                                    this.$_voucherList_$.push(list[i]);
                                }
                                let item = list[i];
                                if (item.validFlag == 1) {
                                    let timestamp = new Date(item.createTime);
                                    list[i].endDateStr = this.format(timestamp.getTime() + item.validCount * 24 * 60 * 60 * 1000)
                                }
                            }
                        }
                    }
                });
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
            //选择代金券，单选
            $_selectdjq_$(value) {
                this.$_selection_$ = [];
                for (let i = 0; i < this.$_voucherList_$.length; i++) {
                    if (this.$_voucherList_$[i].id == value) {
                        this.$_selection_$.push(this.$_voucherList_$[i]);
                        break;
                    }
                }
            },
            //选择代金券弹窗确认
            $_choicedjq_$() {
                this.djqsuccess = false;
                this.$emit('suredjq', this.$_selection_$);
            },
        },
        watch: {
            opendjqlist(value) {
                this.djqsuccess = value;
            },
            paycash(newnum, oldnum) {
                this.$_postvoucherUser_$();
            }
        }
    }
</script>
