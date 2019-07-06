<style scoped>
    .wrap {
        overflow: auto;
        position: fixed;
        width: 100%;
        height: 100%;
        font-size: 14px;
        background: #f2f2f2;
        padding-top: 1px;
        color: #666;
    }

    .box {
        background: #fff;
        padding: 10px 15px 10px 15px;
        margin: 10px 0;
    }

    .box .img {
        border-radius: 100px;
        margin-top: 10%;
        width: 40px;
        height: 40px;
        background-color: #eeeeee;
    }

    .dksj {
        color: #333;
        font-weight: bold;
    }


</style>
<template>

    <div class="container" ref="aa">

        <navigator title="考勤" @back="$_back_$"/>

        <!-- 中间部分 -->
        <!-- 考勤 -->
        <div class="wrap">
            <div class="box">
                <Row>
                    <Col span="6">
                        <img class="img"
                             :src="userInfo.faceUrl">
                    </Col>
                    <Col span="18">
                        <p style="font-size:0.426rem; margin-top: 2%">{{userInfo.name}}
                            <span style='float: right;font-size: 0.373rem;margin-top: 7%;color: #333'>{{kqData.attendanceDate}}</span>
                        </p>
                        <p style="font-size:0.32rem;">
                            <span>考勤组：</span>
                            <span v-if="ruleData.orgId === 0">公司考勤</span>
                            <span v-else>部门考勤</span>
                        </p>
                    </Col>
                </Row>
            </div>
            <div style="background: #fff;color: #999;font-size: 0.373rem;line-height: 2">
                <Row>
                    <Col span="3">
                        <div style="height: 4.26rem;">
                            <img style="height: 100%; padding: 0.8rem 0.5333rem;" src="/static/kqtj/kqji_xq_left.png"/>
                        </div>
                    </Col>
                    <Col span="20">
                        <Row>
                            <Col style="border-bottom: 1px solid #ececec;padding:0.4rem 0">
                                <p>上班时间 {{ruleData.amTime}}</p>
                                <p v-if="kqData.amStatus==0" class="dksj">打卡时间 {{kqData.firstTime}}</p>
                                <p v-if="kqData.amStatus==1" class="dksj" style="color: #ffa700">迟到 {{kqData.firstTime}}
                                </p>
                                <p v-if="kqData.amStatus==2" class="dksj" style="color: #ffa700">未打卡</p>
                            </Col>
                            <Col style="padding:0.4rem 0">
                                <p>下班时间 {{ruleData.pmTime}}</p>
                                <p v-if="kqData.pmStatus==0" class="dksj">打卡时间 {{kqData.lastTime}}</p>
                                <p v-if="kqData.pmStatus==1" class="dksj" style="color: #ffa700">早退 {{kqData.lastTime}}
                                </p>
                                <p v-if="kqData.pmStatus==2" class="dksj" style="color: #ffa700">未打卡 </p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import Calendar from '../public/calendar/index';
    import navigator from '../public/navigator';

    export default {
        components: {
            Calendar,
            navigator,
        },
        data() {
            return {
                kqData: '',
                userInfo: '',
                ruleData: '',
            }
        },

        created() {
            // console.log(this.$root.inparams.data)
            this.kqData = this.$root.inparams.data.kqData;
            this.kqData.attendanceDate = this.kqData.attendanceDate.replace(/-/g,".");
            this.userInfo = this.$root.inparams.data.userInfo;
            this.ruleData = this.$root.inparams.data.ruleData;
        },
        methods: {
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsykqjl', {id: 1})
            },

        }
    }
</script>