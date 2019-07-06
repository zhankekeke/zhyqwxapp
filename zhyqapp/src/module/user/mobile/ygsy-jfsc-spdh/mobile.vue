<style scoped>
    .wrap {
        padding: 0px 0px 0px 0px;
    }

    .text {
        line-height: 25px;
    }

    .img {
        width: 100px;
        height: 104px;
    }

    .number {
        padding: 10px 15px;
        border-bottom: 1px solid #f6f6f6;
        font-size: 14px;
        color: rgb(136, 136, 136);
    }

    .number .num {
        display: inline-block;
    }

    .number .num .num_edit_btn {
        display: inline-block;
        line-height: 21px;
        width: 23px;
        text-align: center;
        position: relative;
    }

    .number .num .num_edit_btn.disable {
        color: rgb(229, 229, 229);
    }

    .num .subtract {
        right: -5px
    }

    .num .add {
        left: -5px
    }
.modalclose{
    font-size: 0.4rem;
    color: rgb(51,51,51);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: 40px;
    line-height: 40px;
}
    >>>.ivu-input{
        border: none;
    }
    >>>.ivu-btn-primary{
        background-color: rgb(2,155,250);
        border-color: rgb(2,155,250);
    }

    >>> .ivu-modal-footer {
        padding: 0;
        border-top: none;
        margin-top: 10px;
    }
</style>
<template>
    <div class="lm" ref="aa">
        <!-- 首页 -->
        <navigator style="border-bottom: 1px solid #f6f6f6;" title="确定" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <Row style="padding: 0.34667rem 0.4rem 0.48rem 0.4rem">
                <Col span="24">
                    <Row>
                        <Col span="9">
                            <!--<img class="img" src="http://ftjw-1251053291.file.myqcloud.com/d/file/2018/11-20/9edcd86232001f368a8231d074ed70c9.jpg" />-->
                            <img class="img" :src="$_orderinfo_$.image"/>
                        </Col>
                        <Col class="text" span="15" style="padding-left: 0.13333rem;color: rgb(51,51,51)">
                            <p style="font-size: 0.37333rem;padding-top: 0.4rem">{{$_orderinfo_$.name}}</p>
                            <p style="font-size: 0.4rem;padding-top: 0.4rem">
                                {{$_orderinfo_$.dhdj}}{{$_orderinfo_$.dhunit}}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div style="height: 0.26667rem;background-color: rgb(246,246,246)"></div>
            <Row class="number">
                <Col span="6" style="line-height:0.85333rem;">
                    数量
                </Col>
                <Col span="18" style="line-height: 32px;text-align: right">
                    <span class="num">
                        <span class="subtract num_edit_btn" style="border: 1px solid rgb(229, 229, 229);" :class="{disable: $_goodsnum_$ <= 1}"
                              @touchend="subtractGoods"><Icon type="minus-round"></Icon></span>
                        <input style="width: 1.33333rem;line-height: 0.56rem;text-align:center;display: inline-block;border: 1px solid rgb(229,229,229);background-color: #fff;"
                               type="number" disabled v-model="$_goodsnum_$"/>
                        <span class="add num_edit_btn" style="border: 1px solid rgb(229, 229, 229);" :class="{disable: $_goodsnum_$ >= $_orderinfo_$.repertory}"
                              @touchend="addGoods"><Icon type="plus-round"></Icon></span>
                    </span>
                </Col>
            </Row>
            <!--暂时注释，勿删-->
            <!--<Row v-if="$_orderinfo_$.goodsType=='0'" class="number">
                <Col span="19" style="line-height:0.85333rem;">
                    <div>积分抵扣：<span style="color: rgb(51,51,51);">{{$_sjdkJF_$}}积分</span></div>
                </Col>
                <Col span="5" align="right" style="line-height:0.85333rem;">
                    <Switch v-model="$_ifJF_$" @on-change="$_checkDK_$">
                        <span slot="true">是</span>
                        <span slot="false">否</span>
                    </Switch>
                </Col>
            </Row>-->
            <Row class="number">
                <Col span="12" style="line-height:0.85333rem;">
                    <!--<span v-if="$_orderinfo_$.goodsType=='0'">积分抵扣：<span style="color: rgb(51,51,51);">2600积分</span></span>
                    <span v-else>&nbsp;</span>-->
                    <span>&nbsp;</span>
                </Col>
                <Col v-if="$_orderinfo_$.goodsType=='1' || $_orderinfo_$.goodsType=='2'" span="12" align="right" style="line-height:0.85333rem;">
                    积分余额: <span style="color: rgb(2,155,250)">{{$_accountInfo_$.credits}}</span><span
                        style="color: rgb(51,51,51);">积分</span>
                </Col>
                <Col v-if="$_orderinfo_$.goodsType=='0'" span="12" align="right" style="line-height:0.85333rem;">
                    账户余额: <span style="color: rgb(2,155,250)">{{$_accountInfo_$.balance}}</span><span
                        style="color: rgb(51,51,51);">元</span>
                </Col>
            </Row>
            <Row class="number">
                <Col span="4" style="line-height:0.85333rem;">
                    备注：
                </Col>
                <Col span="20">
                    <Input :maxlength="50" v-model="$_bz_$"></Input>
                </Col>
            </Row>
            <Row class="number" style="border: none">
                <Col span="24" class="text">
                    确定支付信息：合计<span style="color: rgb(255,159,0);">{{$_goodsjg_$}}</span><span
                        style="color: rgb(51,51,51);">{{$_orderinfo_$.dhunit}}</span>
                </Col>
            </Row>
            <Row style="padding: 0.26667rem 0.4rem;margin-top: 1.06667rem">
                <Col span="24" align="center">
                    <Button style="height: 1.33333rem" type="primary" long shape="circle" @click="$_tjdd_$" >提交订单</Button>
                </Col>
            </Row>

            <Modal v-model="$_success_$" :styles="{top: '25%'}" width="360" :mask-closable="false">
                <div style="text-align:center;color: rgb(2,155,250);margin-bottom: 0.21333rem;">
                    <img style="width: 1.33333rem;margin-top: 0.4rem" src="/static/jfsc/success.png"/>
                    <p style="font-size: 0.4rem;margin-top: 0.26667rem">提交订单已成功</p>
                </div>
                <div slot="footer" style="background-color: rgb(249,249,249);text-align: center;border-radius:6px;">
                    <div class="modalclose" @click="$_ok_$">知道了</div>
                    <span></span>
                </div>
            </Modal>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            navigator,
        },
        data() {
            return {
                $_userInfo_$: '', //用户基本信息
                $_orderinfo_$: {}, //订单详情
                $_goodsnum_$: 1,
                $_goodsjg_$: 0, //商品应付的价格
                $_bz_$: '', //订单备注
                $_success_$: false,  //订单完成弹窗
                $_accountInfo_$: '', //账号信息

                /*$_rule_$: '',  //积分兑换规则   暂时注释，勿删
                $_ifJF_$:false,  //是否使用积分抵扣 （商品类型为普通商品时使用）
                $_sjdkJF_$: 0,  //实际抵扣的积分*/
            }
        },
        methods: {
            // 返回
            $_back_$() {
                let goodsinfo = this.$_orderinfo_$;
                this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-spxq', {info: goodsinfo})
            },
            // 订单内容
            $_ddinfo_$() {
                this.$_orderinfo_$ = this.$root.inparams.info;
                this.$_goodsnum_$ = this.$_orderinfo_$.dhnum;
                this.$_goodsjg_$ = this.$_orderinfo_$.dhdj * this.$_goodsnum_$;

                //获取用户账号信息
                this.$_account_$();

                // 暂时注释，勿删
                /*if(this.$_orderinfo_$.goodsType==0){
                    //获取积分兑换规则
                    this.$_sendQuery_$({
                        method:"GET",
                        url:`${this.$_global_$.serverPath}/operate/creditsRule/info?zoneId=${this.$_userInfo_$.zoneId}`,
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((res)=>{
                        if(res.status == 200){
                            if(res.data.code == 0){
                                this.$_rule_$ = res.data.data;
                            }
                        }
                    })
                }*/

            },
            //减小商品数量
            subtractGoods() {
                if (this.$_goodsnum_$ > 1) {
                    // 未到最小值~可以减少
                    this.$_goodsnum_$ = this.$_goodsnum_$ - 1;
                    this.$_goodsjg_$ = this.$_goodsnum_$ * this.$_orderinfo_$.dhdj;
                }
                // this.$_checkDK_$();   暂时注释，勿删
            },
            //增加商品数量
            addGoods() {
                if (this.$_orderinfo_$.repertory > this.$_goodsnum_$) {
                    // 未超过库存量~可以继续添加
                    this.$_goodsnum_$ = this.$_goodsnum_$ + 1;
                    this.$_goodsjg_$ = this.$_goodsnum_$ * this.$_orderinfo_$.dhdj;
                }
                // this.$_checkDK_$();   暂时注释，勿删
            },
            //获取账户信息
            $_account_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/operate/account/accountInfo`,
                    data: {refId: this.$_userInfo_$.id, accountType: 1},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_accountInfo_$ = rsp.data.data;
                        }
                    }
                })
            },

            //是否需要积分抵扣  暂时注释，勿删
            /*$_checkDK_$(){
                let nowzj = this.$_goodsnum_$ * this.$_orderinfo_$.dhdj;  //当前商品应付的总价
                if(this.$_ifJF_$){
                    //使用积分抵扣
                    let payjf = nowzj * this.$_rule_$.exRate;   //当前需要支付的商品总价，转换成相应的积分
                    //判断积分余额是否够用
                    if(this.$_accountInfo_$.credits >= payjf){
                        //积分余额够支付商品
                        this.$_sjdkJF_$ = payjf;
                        //最终支付的金额
                        this.$_goodsjg_$ = 0;
                    }else{
                        //积分余额不够支付商品
                        this.$_sjdkJF_$ = this.$_accountInfo_$.credits;
                        //扣除积分之后，商品的总价（积分）
                        payjf = payjf-this.$_accountInfo_$.credits;
                        //将积分转换成元,最终支付的金额
                        this.$_goodsjg_$ = payjf/this.$_rule_$.exRate;
                    }
                }else{
                    this.$_sjdkJF_$ = 0;
                    this.$_goodsjg_$ = this.$_goodsnum_$ * this.$_orderinfo_$.dhdj;
                }
            },*/


            // 提交订单
            $_tjdd_$() {
                if ((this.$_orderinfo_$.goodsType == '1' || this.$_orderinfo_$.goodsType == '2') && this.$_goodsjg_$ > this.$_accountInfo_$.credits * 1) {
                    this.$Message.error("积分不够");
                    return
                }
                if (this.$_orderinfo_$.goodsType == '0' && this.$_goodsjg_$ > this.$_accountInfo_$.balance * 1) {
                    this.$Message.error("余额不够");
                    return
                }
                if (this.$_goodsnum_$ <= 0) {
                    this.$Message.error("请选择一个合理的数量");
                    return
                }

                let senddata = {
                    goodsId: this.$_orderinfo_$.id,
                    goodsCount: this.$_goodsnum_$,
                    remark: this.$_bz_$,
                    commiter: this.$_userInfo_$.id,
                    commiterName: this.$_userInfo_$.name,
                    commiterPhone: this.$_userInfo_$.phoneNumber,
                    department: this.$_userInfo_$.departmentId,
                    deptName: this.$_userInfo_$.departmentName,
                    enterprise: this.$_userInfo_$.enterpriseId,
                    entName: this.$_userInfo_$.enterpriseName,
                    image: this.$_userInfo_$.faceUrl,
                    zoneId: this.$_userInfo_$.zoneId
                };

                //混合（积分+现金）支付  暂时注释，勿删
                /*if(this.$_ifJF_$){
                    senddata.paymentType = '3';
                }*/

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
                            this.$_success_$ = true;
                        } else {
                            this.$Message.error(rsp.data.message);
                        }
                    }
                });
            },
            //对话框
            $_ok_$() {
                this.$_success_$ = false;
                this.$root.$_Route_$('user', 'mobile', 'ygsy-jfsc-gmjl')
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
            this.$_ddinfo_$();
        }
    }
</script>