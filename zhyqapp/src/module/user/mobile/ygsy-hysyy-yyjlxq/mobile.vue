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
    }

    .wrap {
        box-sizing: border-box;
        background: #f6f6f6;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: #666666;
        line-height: 1;
    }

    .wrap .title {
        line-height: 54px;
        border-bottom: 1px solid rgb(223, 223, 223);
        font-size: 16px;
        height: 54px;
        padding: 0 16px;
    }

    .wrap p {
        margin-left: 16px;
        margin-top: 20px;
    }

    .wrap span {
        color: #333333;
    }

    .wrap img {
        width: 64px;
        height: 40px;
        float: left;
        margin: 6px 16px;
    }

    .box {
        background: rgba(255, 255, 255, 1);
        margin-top: 10px;
        padding-bottom: 20px;
    }
    .people{
        line-height:28px;
    }

</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="预约记录详情" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <Row class="box" style="margin-top: 0">
                <Col span="24">
                    <div class="title">订单信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <p>订单编号：
                            <span>{{$_hysyyinfo_$.serialNum}}</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>创建时间：
                            <span>{{$_hysyyinfo_$.createTime}}</span></p>
                    </div>
                </Col>
            </Row>

            <Row class="box">
                <Col span="24">
                    <div class="title">用户信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <p><!--姓名-->
                            <span>{{$_userInfo_$.name}} {{$_userInfo_$.phoneNumber}}</span>
                        </p>
                    </div>
                </Col>
            </Row>

            <Row class="box" style="padding-bottom: 0">
                <Col span="24" style="position:relative; z-index:1">
                    <div class="title">会议室信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <img :src="$_hysimg_$|imgsrc"/>
                        <p style="float: left;margin-left: 0;">
                            <!--会议室名称：-->
                            <span>{{$_hysyyinfo_$.meetingRoomName}} {{$_hysyyinfo_$.address}}</span></p>
                    </div>
                </Col>
            </Row>

            <Row class="box">
                <Col span="24">
                    <div class="title">会议信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <p>会议主题：
                            <span>{{$_hysyyinfo_$.meetingTheme}}</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>会议时间：
                            <span>{{$_hysyyinfo_$.reserveDate}}&nbsp;{{$_hysyyinfo_$.startTime}}-{{$_hysyyinfo_$.endTime}}</span>
                        </p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>参会人数：
                            <span>{{$_hysyyinfo_$.attendCount}}人</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p  class="people">参会人员：
                            <span>{{$_employeenameList_$}}</span></p>
                    </div>
                </Col>
            </Row>
            <!-- 支付信息 v-if="JSON.stringify(this.$_unsubscribe_$) == '{}'"-->
            <Row class="box">
                <Col span="24">
                    <div class="title">支付信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <p>应付金额：
                            <span>{{$_hysyyinfo_$.totalPrice}}元</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>优惠：
                            <span>代金券-{{$_hysyyinfo_$.couponPoint}}元</span>
                            <span>积分-{{$_hysyyinfo_$.rewardDerate}}元</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p style="margin-top: 0.48rem">实付金额：
                            <span style="font-size: 0.533333rem;color: #FF8E58;">{{$_hysyyinfo_$.finalPrice}}元</span>
                        </p>
                    </div>
                </Col>
            </Row>

            <!-- 退订信息 -->
            <Row v-if="JSON.stringify(this.$_unsubscribe_$) !== '{}'"
                 class="box">
                <Col span="24">
                    <div class="title">退订信息</div>
                </Col>
                <Col span="24">
                    <div>
                        <p>退订时间：
                            <span>{{$_unsubscribe_$.createTime}}</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>退回金额：
                            <span>{{$_unsubscribe_$.refundBalance}}元</span></p>
                    </div>
                </Col>
                <Col span="24">
                    <div>
                        <p>退回积分：
                            <span>{{$_unsubscribe_$.rewardPoint}}积分</span></p>
                    </div>
                </Col>
                <Col span="24" v-if="$_unsubscribe_$.couponId">
                    <div>
                        <p>退回代金券券号：
                            <span>{{$_unsubscribe_$.couponId}}</span></p>
                    </div>
                </Col>
            </Row>


            <Row class="box" style="padding-bottom: 0">
                <Col span="24">
                    <div class="title" style="color: #00C1DE;border: none">
                        状态:
                        <span style="color: #00C1DE;" v-if="$_hysyyinfo_$.status==1">已预约</span>
                        <span style="color: #00C1DE;" v-if="$_hysyyinfo_$.status==2">已取消</span>
                        <span style="color: #00C1DE;" v-if="$_hysyyinfo_$.status==3">已退订</span>
                        <span style="color: #00C1DE;" v-if="$_hysyyinfo_$.status==4">已过期</span>
                        <span style="color: #00C1DE;" v-if="$_hysyyinfo_$.status==5">进行中</span>
                    </div>
                </Col>
            </Row>

        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import Calendar from 'vue-calendar-component';

    export default {
        mixins: [controler],
        components: {
            Calendar,
            navigator,
        },
        data() {
            return {
                $_userInfo_$: '',  //用户基本信息
                $_hysyyinfo_$: {}, //会议室预约相关信息
                $_hysimg_$: '',//会议室图片
                $_employeenameList_$: '',//参会人员姓名
                $_unsubscribe_$: {}

            }
        },
        methods: {
            //返回会议室列表
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyhysyy')
            },
            //会议室预约信息
            $_yyjlinfo_$() {
                let info = this.$root.inparams.info;
                let id = this.$root.inparams.id;
                let meetingId = this.$root.inparams.meetingId;
                this.$_sendQuery_$({
                    method: "GET",
                    url: this.$_global_$.serverPath + "/zone/zone/" + this.$_userInfo_$.zoneId + "/meeting/" + meetingId + "/reserve/" + id,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status == 200) {
                        if (rsp.data.code == 0) {
                            this.$_hysyyinfo_$ = rsp.data.data;
                            // 退订信息
                            this.$_unsubscribe_$ = this.$_hysyyinfo_$.meetingUnsubscribe
                            console.log(this.$_unsubscribe_$)
                            //会议室图片
                            this.$_hysimg_$ = this.$_hysyyinfo_$.images[0].imageUrl;
                            //会议参与用户姓名
                            let employeeList = this.$_hysyyinfo_$.employeeList;
                            let namelist = [];
                            for (let i = 0; i < employeeList.length; i++) {
                                namelist.push(employeeList[i].name);
                            }
                            this.$_employeenameList_$ = namelist.join('，');
                        }
                    }
                });
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
            this.$_yyjlinfo_$();
        }
    }
</script>