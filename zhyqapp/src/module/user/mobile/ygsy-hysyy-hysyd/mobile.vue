<style>
    body {
        position: static;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        max-height:100vh;
        position:relative;
        /*font-weight: 400;*/
    }

    .truncation {
        height: 10px;
        background-color: #f6f6f6;
        width: 100vw;
    }

    .wrapTruncation {
        width: 100vw;
        height: 10px;
        line-height: 10px;
        background-color: #f6f6f6;
        text-align: center;
        position: relative;
        /*left: -15px*/
    }

    .wrap {
        box-sizing: border-box;
        /*padding: 5px 15px 25px 15px;*/
        font-size: 14px;
        background: #fff;
        color: #666;
        line-height: 1;
        padding-bottom: 50px;
    }

    .image {
        position: relative;
        margin: 22px 20px;
    }

    .image img {
        width: 72px;
        height: 72px;
        border-radius: 3px;
    }

    .image .shadow {
        color: #000;
        font-size: 13px;
        /*padding-left: 10px;*/
    }

    .wrap .title {
        font-size: 16px;
        color: rgb(51, 51, 51);
        line-height: 48px;
        padding-left: 28px;

    }

    .title .require:before {
        content: "*";
        display: inline-block;
        margin-right: 4px;
        line-height: 1;
        font-family: SimSun;
        font-size: 12px;
        color: #ed3f14;
    }

    .wrap .content {
        line-height: 32px;
        text-align: right;
        padding: 8px 0 8px 0;
    }

    .wrap .exceptContent {
        /*line-height: 50px;*/
        /*padding: 0 0 8px 0;*/
        padding: 0 20px 8px 16px;
    }

    .exceptContent .addStaff {
        display: inline-block;
        background-color: #f6f6f6;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        margin: 0 8px;
    }

    .exceptContent .addStaff img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
    }

    .wrap .FormRow {
        border-top: 1px solid #f6f6f6;
        padding-right: 16px
    }

    >>> .ivu-form-item {
        margin-bottom: 0px;
    }

    .yytj >>> .ivu-modal-footer {
        padding: 0;
        border-top: none;
        margin-top: 10px;
    }

    >>> .ivu-input {
        border: none;
        padding-right: 5px;
        text-align: right;
        font-size: 15px;
    }

    .padding16s {
        background: #fff;
        padding-left: 28px;
        line-height: 40px;
        position: fixed;
        width: 100%;
        border-top: 1px solid #f6f6f6;
        bottom: 0;
    }

    .jfdk {
        height: 33px;
        font-size: 12px;
        line-height: 33px;
        padding-left: 28px;
    }

    .jfdk p {
        color: #00C1DE;
    }

    .qjs {
        width: 114px;
        height: 49px;
        text-align: center;
        background: #00C1DE;
        color: #fff;
        line-height: 48px;
        font-size: 18px;
    }

    .address {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 8px
    }

    .jiahao {
        width: 19px;
        height: 19px;
        position: absolute;
        padding: 15px;
    }
    >>>.ivu-input:focus{
        outline:none;
        box-shadow:none !important;
    }
    >>>.ivu-form-item-error-tip{
        top:22px;
        left:auto;
        right:0;
    }
    .yytj >>>.ivu-btn{height:45px;}
    .yytj >>>.ivu-btn:nth-child(1){
        background: #fff;
        border: none;
        border-top: 1px solid #dddee1;
    }
    .yytj >>>.ivu-btn:nth-child(2){
        background:linear-gradient(136deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
    }
    >>>.ivu-form-item-content{margin:0 !important;}
    .yytj >>>.ivu-modal-close{display:none;}
    .yytj >>>.ivu-modal-body{padding:30px 0 0 19px;}
    .popLine{margin-bottom: 11px;position:relative;padding-left:24px;line-height:1;}
    .popImg{position:absolute;top:-1px;width:16px;height:16px;left:0;display: block;}
    .special{font-size:24px;font-family:DINAlternate-Bold;font-weight:bold;}
    .popImg1{top:8px;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="付款"/>
        <!--<div class="truncation"></div>-->
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 会议室基础信息 -->
            <Row class="image">
                <Col span="6">
                    <img v-if="$_hysmsg_$.images.length>0" :src="$_hysmsg_$.images[0].imageUrl|imgsrc"/>
                    <img v-else src="http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg"/>
                </Col>
                <Col span="18" class="shadow">
                    <Row>
                        <Col span="14" :style="{fontSize:toRem(18)}" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"><span>{{$_hysmsg_$.name}}</span></Col>
                        <Col span="10" style="text-align: right">
                            <span :style="{fontSize:toRem(14), color:'#FF8E58'}">{{$_hysmsg_$.price*60}}元/时</span>
                        </Col>
                    </Row>
                    <Row type="flex" align="middle">
                        <Col span="24" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;" :style="{fontSize:toRem(12),marginTop:toRem(18)}">
                            <span>可容纳{{$_hysmsg_$.peopleNumber}}人</span>
                            <!--<img style="width:auto;height:11px;" src="/static/hysyy/mjicon.png"/>-->
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;{{$_hysmsg_$.area}}平</span>
                        </Col>
                    </Row>
                    <Row type="flex" align="middle">
                        <Col span="24" class="address" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">
                            <img :style="{width:'auto',height:toRem(13)}" src="/static/ctsk/address-black.png" alt="">
                            <span style="color: #656D72">{{$_hysmsg_$.address}}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Form ref="$_addFormValidate_$" :model="$_formValidate_$" :rules="$_ruleValidate_$"
                  :label-width="100" style="width:100%;">
                <Row class="FormRow">
                    <Col span="10" class="title" :style="{paddingLeft:toRem(16)}">
                        <div class="require">会议主题</div>
                    </Col>
                    <Col span="14" class="content">
                        <FormItem prop="$_theme_$">
                            <Input style="margin:0;" v-model="$_formValidate_$.$_theme_$" placeholder="请填写"
                            ></Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row class="FormRow">
                    <Col span="10" class="title">
                        <div>会议时间</div>
                    </Col>
                    <Col span="14" class="content">
                        <div>{{$_hysmsg_$.datetime}}&nbsp;&nbsp;{{$_hysmsg_$.slidertime[0]}}—{{$_hysmsg_$.slidertime[1]}}</div>
                    </Col>
                </Row>
                <Row class="FormRow">
                    <Col span="10" class="title">
                        <div>预约时长</div>
                    </Col>
                    <Col span="14" class="content">
                        <div>{{$_paymentInfo_$.timediff}}分钟</div>
                    </Col>
                </Row>
                <div class="wrapTruncation"></div>
                <Row>
                    <Col span="24" class="title" :style="{paddingLeft:toRem(16)}">
                        <div class="require">邀请参会人员</div>
                    </Col>
                    <Col span="24" class="exceptContent">
                        <div class="addStaff" v-for="(item,index) in $_getParticipantsList_$" :key="index">
                            <img v-if="item.faceUrl" :src="item.faceUrl|imgsrc"/>
                            <img v-else src="/static/hysyy/faceimg.svg"/>
                        </div>
                        <div class="addStaff" @click="$_choicestaff_$">
                            <img src="/static/gjfw/+.png"
                                 class="jiahao"/>
                            <!--style="width:0.8rem;height:0.8rem;position: relative;top:0.266667rem;left: 0.266667rem"/>-->
                        </div>
                    </Col>
                </Row>
                <div class="wrapTruncation"></div>
                <Row v-if="this.rule" class="FormRow">
                    <Col span="19" class="title">
                        <div>积分&nbsp;{{$_thisEnterpriseJfInfo_$.staffjf}}&nbsp;&nbsp;可抵{{money}}元</div>
                        <!--可使用{{$_paymentInfo_$.dkjf}}-->
                    </Col>
                    <Col span="5" class="content">
                        <Switch v-model="$_ifJF_$" @on-change="$_checkDK_$">
                            <!--<span slot="open">是</span>-->
                            <!--<span slot="close">否</span>-->
                        </Switch>
                    </Col>
                </Row>
                <Row class="FormRow">
                    <Col span="14" class="title">
                        <div>使用代金券<span v-if="this.djq !== ''">({{djq}}元)</span></div>
                    </Col>
                    <Col span="10" class="content">
                        <Switch v-model="$_ifDJQ_$" @on-change="$_selectDJQ_$">
                            <!--<span slot="open">是</span>-->
                            <!--<span slot="close">否</span>-->
                        </Switch>
                    </Col>
                </Row>
                <div class="wrapTruncation"></div>
                <Row class="FormRow">
                    <Col span="14" class="title">
                        <div>金额</div>
                    </Col>
                    <Col span="10" class="content">
                        <div>￥<span :style="{fontSize:toRem(18)}">{{Math.floor($_paymentInfo_$.gdje*100)/100}}</span>
                        </div>
                    </Col>
                </Row>
                <div class="wrapTruncation"></div>
                <Row>
                    <Col class="jfdk" span="24">
                        <p v-if="$_ifJF_$">积分已抵扣&nbsp;&nbsp;{{money}}元</p>
                        <p v-else>积分已抵扣&nbsp;&nbsp;0元</p>
                    </Col>
                </Row>

                <Row v-if="!this.rule" class="FormRow">
                    <Col span="24" class="title">
                        <div>因未设置积分规则故无法使用积分进行抵扣</div>
                    </Col>
                </Row>
                <!--<Row>
                    <Col span="24">
                        <Button type="primary" long shape="circle" @click="$_formsubmit_$">提交</Button>
                    </Col>
                </Row>-->
            </Form>
            <!--选择参会人员弹窗-->
            <contact :open.sync="isContactOpen" :select.sync="select" @input="onInput" :const-values="constvalue"></contact>

            <!--确认提交预约弹窗-->
            <Modal class="yytj" v-model="$_success_$" :styles="{top: '25%'}" width="360" :mask-closable="false">
                <div style="text-align:center;margin-bottom: 8px;">
                    <p style="font-size: 18px;color:rgb(51,51,51);font-weight:500;line-height:1;">您确定要预约该会议室吗？</p>
                    <div style="font-size: 14px;margin-top: 21px;line-height:1;">
                        <Row style="text-align: left;">
                            <Col span="24" class="popLine" style="">
                                <img class="popImg" style="" src="/static/hysyy/Iconhysmc.svg"
                                     alt="">
                                <span>会议室名称：</span>
                                <span>{{$_hysmsg_$.name}}</span>
                            </Col>
                            <Col span="24" class="popLine">
                                <img class="popImg" src="/static/hysyy/Icontime.svg"
                                     alt="">
                                <span>时间：</span>
                                <span>{{$_hysmsg_$.datetime}}&nbsp;{{$_hysmsg_$.slidertime[0]}}-{{$_hysmsg_$.slidertime[1]}}</span>
                            </Col>
                            <Col span="24" class="popLine">
                                <img  class="popImg" src="/static/hysyy/Iconyfje.svg"
                                     alt="">
                                <span>应付金额：</span>
                                <span>{{Math.floor($_paymentInfo_$.gdje*100)/100}}元</span>
                            </Col>
                            <Col span="24" class="popLine" v-if="$_ifDJQ_$">
                                <img class="popImg" src="/static/hysyy/Icondjq.svg"
                                     alt="">
                                <span>代金券：</span>
                                <span>{{$_checkdjq_$.denomination}}元</span>
                            </Col>
                            <Col span="24" v-if="$_ifJF_$" class="popLine">
                                <img class="popImg" src="/static/hysyy/Iconjf.svg"
                                     alt="">
                                <span>积分：</span>
                                <span>{{$_paymentInfo_$.dkjf}}积分</span>
                            </Col>
                            <Col span="24" class="popLine">
                                <img class="popImg popImg1" src="/static/hysyy/Iconsfje.svg"
                                     alt="">
                                <span>实付金额：</span>
                                <span style="color:rgb(255,142,88,1);">
                                    <span class="special" style="">{{Math.floor($_paycash_$*100)/100}}</span>元
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div slot="footer" style="background-color: rgb(249,249,249);text-align: center;border-radius:6px;">
                    <ButtonGroup style="width: 100%">
                        <Button style="font-size: 15px;width:50%;margin-left: 0px;border-top-left-radius: 0"
                                @click="$_cancel_$">取消
                        </Button>
                        <Button type="primary" style="font-size: 15px;width: 50%;border-top-right-radius: 0"
                                @click="$_ok_$">确定
                        </Button>
                        
                    </ButtonGroup>
                    <span></span>
                </div>
            </Modal>

            <!--代金券列表-->
            <voucher :usetype="1" :receiverid="$_thisUserInfo_$.id" :paycash="$_paymentInfo_$.gdje"
                     :opendjqlist="$_djqsuccess_$" @suredjq="$_finaldjq_$"></voucher>
        </div>
        <Row class="padding16s">
            <Col span="14">
                <div>
                    <span>实际支付：</span>
                    <span style="color: #FF8E58;">￥<span :style="{fontSize: toRem(20)}">{{Math.floor($_paycash_$*100)/100}}</span>
                            </span>
                </div>
            </Col>
            <Col span="10" align="right">
                <!--<Button type="primary" shape="circle" @click="$_formsubmit_$">提交</Button>-->
                <div class="qjs" @click="$_formsubmit_$">去结算
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import controler from "./controler.js";
    import navigator from '../public/navigator';
    import voucher from '../public/voucheruser';
    import contact from '../public/employee-selector';
    import {Toast} from 'mint-ui';
    import {toRem} from "../public/date-slider/utils";

    export default {
        mixins: [controler],
        components: {
            navigator,
            voucher,
            contact
        },
        data() {
            return {
                select:[], // 选择参会人员
                constvalue:{}, // 默认选中 必须选中
                showJs: true, // 是否显示结算,默认显示
                $_thisUserInfo_$: '', //用户信息
                $_hysmsg_$: {},  //会议室信息
                $_formValidate_$: {
                    $_mtime_$: '', //会议时间
                    $_theme_$: '',  //会议主题
                    $_remarks_$: '', //备注信息
                    $_num_$: 0, //参会人数
                },
                $_getParticipants_$: [],  //获取参会人员id
                $_getParticipantsList_$: [],  //获取参会人员列表
                $_sendMeetingInfo_$: {},  //会议室预约提交相关信息
                $_paymentInfo_$: {},   //支付信息相关内容
                $_thisEnterpriseJfInfo_$: {},  //当前企业积分账户信息
                $_paycash_$: 0,  //实际支付的金额
                $_ifJF_$: false,  //是否要积分抵扣  默认false
                $_ifDJQ_$: false,  //是否要使用代金券抵扣  默认false
                $_djqsuccess_$: false,  //代金券弹窗
                $_checkdjq_$: {},  //选择的代金券信息
                $_success_$: false,  //确认提交预约弹窗
                isContactOpen: false, //参会人员弹窗
                $_ruleValidate_$: {
                    //企业信息
                    $_theme_$: [
                        {required: true, type: 'string', message: '请输入会议主题', trigger: 'change'},
                        {type: 'string', max: 50, message: '会议主题不能超过50字', trigger: 'change'},
                        {validator: this.$_validatestr_$, trigger: 'change'}

                    ],
                    $_num_$: [
                        {required: true, type: 'number', message: '参会人数至少为1人', min: 1}
                    ],
                    $_remarks_$: [
                        {type: 'string', max: 500, message: '备注不能超过500字', trigger: 'change'}
                    ]
                },
                money: '',
                djq: '',
                rule: ''

            };
        },
        methods: {
            //返回会议室列表
            /*$_back_$() {
                this.$root.$_Route_$("user", "mobile", "ygsyhysyy");
            },*/
            toRem,
            //获取会议室相关信息
            $_hysinfo_$() {
                this.$_hysmsg_$ = this.$root.inparams.info;
                // console.log(this.$_hysmsg_$)

                //计算预约的时长
                let date1 = this.$_hysmsg_$.slidertime[0].substring(0,2)
                let date2 = this.$_hysmsg_$.slidertime[1].substring(0,2);
                let date3 = this.$_hysmsg_$.slidertime[0].substring(3,5)
                let date4 = this.$_hysmsg_$.slidertime[1].substring(3,5);
               
                let date5 = (date2 - date1) * 60 + (date4 - date3);
                this.$_paymentInfo_$.timediff = date5;

            },
            //选择参会人员
            $_choicestaff_$() {
                //进入到选择联系人插件
                this.isContactOpen = true;

            },
            //参会人员弹窗
            onInput(value) {
                this.$_getParticipantsList_$ = value;
                this.$_getParticipants_$ = [];

                for (let i = 0; i < value.length; i++) {
                    //参会人员 id
                    this.$_getParticipants_$.push(value[i].id);
                }
                this.$_formValidate_$.$_num_$ = this.$_getParticipants_$.length;  //参加会议的人数
            },
            //获取公司账户信息
            getxjInfo() {
                //计算需要支付的金额
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/operate/creditsRule/info?zoneId=${this.$_thisUserInfo_$.zoneId}`,

                }).then((rsp) => {
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            this.rule = rsp.data.data
                            if (this.rule) {
                                this.$_paymentInfo_$.exRate = rsp.data.data.exRate;  //1元能兑换多少积分（兑换率）
                                this.$_paymentInfo_$.payjf = this.$_hysmsg_$.price * this.$_paymentInfo_$.timediff * this.$_paymentInfo_$.exRate;  //预约会议室需要支付的积分
                                this.$_paymentInfo_$.totaljf = this.$_paymentInfo_$.payjf;  //不使用任何优惠要支付的积分数（数值不更改）
                                this.$_paymentInfo_$.gdje = this.$_paymentInfo_$.payjf / this.$_paymentInfo_$.exRate;  //需要花费的现金
                                this.$_paycash_$ = this.$_paymentInfo_$.payjf / this.$_paymentInfo_$.exRate;  //需要花费的现金
                            } else {
                                this.$_paycash_$ = this.$_hysmsg_$.price * this.$_paymentInfo_$.timediff
                            }

                            //获取公司账户
                            this.$_sendQuery_$({
                                method: "POST",
                                url: `${this.$_global_$.serverPath}/operate/account/accountInfo`,
                                data: {
                                    "enterpriseId": this.$_thisUserInfo_$.enterpriseId,
                                    "accountType": 0
                                },
                                headers: {"Content-type": "application/json"}
                            }).then((rsp) => {
                                if (rsp.status == 200) {
                                    if (rsp.data.code == 0) {
                                        this.$set(this, '$_thisEnterpriseJfInfo_$', rsp.data.data);
                                        //获取个人积分信息
                                        this.$_sendQuery_$({
                                            method: "POST",
                                            url: `${this.$_global_$.serverPath}/operate/account/accountInfo`,
                                            data: {
                                                "refId": this.$_thisUserInfo_$.id,
                                                "accountType": 1
                                            },
                                            headers: {"Content-type": "application/json"}
                                        }).then((rsc) => {
                                            if (rsc.status == 200) {
                                                if (rsc.data.code == 0) {
                                                    this.$set(this.$_thisEnterpriseJfInfo_$, 'staffjf', rsc.data.data.credits);

                                                    //可以进行抵扣的积分
                                                    if (this.$_paymentInfo_$.payjf > this.$_thisEnterpriseJfInfo_$.staffjf) {
                                                        this.$_paymentInfo_$.dkjf = this.$_thisEnterpriseJfInfo_$.staffjf;
                                                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                                                    } else {
                                                        this.$_paymentInfo_$.dkjf = this.$_paymentInfo_$.payjf;
                                                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                                                    }
                                                }
                                            }
                                        })
                                    }
                                }
                            })

                        }
                    }
                })
            },
            //是否需要积分抵扣
            $_checkDK_$() {
                if (this.$_ifJF_$) {
                    //积分抵扣的金额
                    this.$_paymentInfo_$.payjf = this.$_paymentInfo_$.payjf - this.$_paymentInfo_$.dkjf;
                } else {
                    //取消积分抵扣
                    this.$_paymentInfo_$.payjf = this.$_paymentInfo_$.payjf + this.$_paymentInfo_$.dkjf;
                }
                this.$_paycash_$ = this.$_paymentInfo_$.payjf / this.$_paymentInfo_$.exRate; //实际支付金额
            },

            //是否使用代金券开关
            $_selectDJQ_$() {
                console.log(this.$_ifDJQ_$)
                if (this.$_ifDJQ_$) {
                    //使用代金券
                    this.$_djqsuccess_$ = true;

                } else {
                    this.djq = ''
                    //不使用代金券
                    this.$_djqsuccess_$ = false;
                    //关闭积分抵扣
                    this.$_ifJF_$ = false;
                    //先将代金券换算成积分
                    let djqtojf = this.$_checkdjq_$.denomination * this.$_paymentInfo_$.exRate;
                    //取消优惠券之后需要支付的积分
                    this.$_paymentInfo_$.payjf = this.$_paymentInfo_$.dkjf + djqtojf;
                    //可以进行抵扣的积分
                    if (this.$_paymentInfo_$.payjf > this.$_thisEnterpriseJfInfo_$.staffjf) {
                        this.$_paymentInfo_$.dkjf = this.$_thisEnterpriseJfInfo_$.staffjf;
                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                    } else {
                        this.$_paymentInfo_$.dkjf = this.$_paymentInfo_$.payjf;
                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                    }
                    //实际需要支付的金额
                    this.$_paycash_$ = this.money;


                }
            },
            //已在子组件中选择代金券
            $_finaldjq_$(value) {
                if (value.length > 0) {
                    this.$_checkdjq_$ = value[0];
                    this.djq = value[0].denomination;
                    // console.log(value);

                    //先将代金券换算成积分
                    let djqtojf = this.$_checkdjq_$.denomination * this.$_paymentInfo_$.exRate;

                    //使用优惠券之后需要支付的积分
                    if (djqtojf < this.$_paymentInfo_$.totaljf) {
                        this.$_paymentInfo_$.payjf = this.$_paymentInfo_$.totaljf - djqtojf;
                    } else {
                        this.$_paymentInfo_$.payjf = 0;
                    }

                    //将积分转换为现金
                    this.$_paycash_$ = this.$_paymentInfo_$.payjf / this.$_paymentInfo_$.exRate;

                    //积分抵扣变为默认不抵扣状态
                    this.$_ifJF_$ = false;

                    //可以进行抵扣的积分
                    if (this.$_paymentInfo_$.payjf > this.$_thisEnterpriseJfInfo_$.staffjf) {
                        this.$_paymentInfo_$.dkjf = this.$_thisEnterpriseJfInfo_$.staffjf;
                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                    } else {
                        this.$_paymentInfo_$.dkjf = this.$_paymentInfo_$.payjf;
                        this.money = this.$_paymentInfo_$.dkjf / this.$_paymentInfo_$.exRate
                    }

                } else {
                    this.$_ifDJQ_$ = false;
                    this.$_djqsuccess_$ = false;
                }
            },


            //提交预约会议室
            $_formsubmit_$() {
                this.$refs.$_addFormValidate_$.validate((valid) => {
                    if (valid) {
                        this.$_success_$ = true;
                    }
                });
            },
            //确认提交预约
            $_ok_$() {
                this.$refs.$_addFormValidate_$.validate((valid) => {
                    if (valid) {
                        this.$_sendMeetingInfo_$.meetingTheme = this.$_formValidate_$.$_theme_$;
                        this.$_sendMeetingInfo_$.employeeIds = this.$_getParticipants_$.join(",");
                        
                        this.$_sendMeetingInfo_$.description = this.$_formValidate_$.$_remarks_$;
                        this.$_sendMeetingInfo_$.reserveDate = this.$_hysmsg_$.datetime;

                        this.$_sendMeetingInfo_$.startTime = this.$_hysmsg_$.slidertime[0];
                        this.$_sendMeetingInfo_$.endTime = this.$_hysmsg_$.slidertime[1];

                        //是否使用积分
                        if (this.$_ifJF_$) {
                            this.$_sendMeetingInfo_$.usePoint = 1;
                        } else {
                            this.$_sendMeetingInfo_$.usePoint = 0;
                        }
                        //使用代金券
                        if (this.$_ifDJQ_$) {
                            this.$_sendMeetingInfo_$.couponId = this.$_checkdjq_$.id;
                        }


                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/zone/zone/${this.$_thisUserInfo_$.zoneId}/meeting/${this.$_hysmsg_$.id}/reserve`,
                            data: this.$_sendMeetingInfo_$,
                            headers: {"Content-type": "application/json"}
                        }).then((rsp) => {
                            if (rsp.status === 200) {
                                if (rsp.data.code === 0) {
                                    this.$root.$_Route_$("user", "mobile", "ygsy-hysyy-yyjl", {success: true});
                                } else {
                                    Toast(rsp.data.message);
                                }
                            }
                        });
                    } else {
                        Toast('请将信息填写完整');
                    }
                });
            },
            //取消对话框
            $_cancel_$() {
                this.$_success_$ = false;
            },
            // 默认包含自己
            hasme(){
                var id = this.$_thisUserInfo_$.id
                this.constvalue[id] = true

                // var arr = []
                // arr.push (this.$_thisUserInfo_$)
                // this.$_getParticipantsList_$ = arr
            }

        },
        created() {

            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_thisUserInfo_$ = JSON.parse(cookie);

            //获取当前企业的现金账户信息和员工当前的积分
            this.getxjInfo();

            //获取会议室信息
            this.$_hysinfo_$();

            this.hasme();


        },
        mounted(){
           var oHeight = $(document).height();
           window.onresize=function(){
    
               // console.log(oHeight)
                if($(document).height() < oHeight){
                    $(".padding16s").css("position","static");
                }else{
                    $(".padding16s").css("position","fixed"); //adsolute或fixed，看你布局
                }
            }; 
       },
       destroyed() {
           window.onresize = void 0;
       },
    };
</script>