<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

</style>
<style lang="less" scoped>
    .container {
        background-color: #f6f6f6;
        height: 100vh;
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
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 0;
    }

    .footer .active {
        color: #7599ff;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 33.3%;
        text-align: center;
    }

    .footer ul li img {
        width: 25px;
        height: 25px;
    }

    .footer ul li p {
        height: auto;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 5px;
        font-size: 20px;
    }

    .wraper {
        margin: 30% auto 0 auto;
        width: 80%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        background-color: #00C1DE;
        border-radius: 30px;
        color: #fff;
    }

    .wrap {
        background-color: #fff;
    }

    .wraper span {
        font-size: 16px;

    }

    .tishi {
        margin-top: 20px;
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: #00C1DE;
    }

    .evaluation p {
        line-height: 32px;
        font-size: 14px;
    }

    .evaluation {
        padding: 15px;
        box-sizing: border-box;
        span {
            margin-right: 20px;
            color: #656D72
        }
        p:nth-child(1) {
            font-size: 16px;
            color: #333;
            img {
                width: 5%;
                margin-right: 5px;
            }

        }
        p:nth-child(2) {
            margin-top: 10px;
        }
    }

    .evaluation h3 {
        font-size: 15px;
        padding-bottom: 20px;
    }

    .evaluation h3 img {
        width: 5%;
        margin-right: 5px;
    }

    .shifou {
        width: 100%;
        height: 56px;
        line-height: 56px;
        color: #333;
        font-size: 16px;
        border-bottom: 8px solid #f6f6f6;
        padding: 0 15px;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="服务评价" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <Row class="shifou">问题是否解决：
                <RadioGroup v-model="shifou">
                    <Radio label="0">是</Radio>&nbsp;&nbsp;&nbsp;
                    <Radio label="1">否</Radio>
                </RadioGroup>
            </Row>
            <!-- 服务评价 -->
            <div class="evaluation">
                <p><img src="/static/gjfw/fuwu.png">服务评价</p>
                <p><span>服务及时</span>
                    <Rate allow-half v-model="$_value1_$"/>
                </p>
                <p><span>流畅高效</span>
                    <Rate allow-half v-model="$_value2_$"/>
                </p>
                <p><span>专业可靠</span>
                    <Rate allow-half v-model="$_value3_$"/>
                </p>
                <p><span>积极周到</span>
                    <Rate allow-half v-model="$_value4_$"/>
                </p>
            </div>
        </div>
        <div class="tishi">
            <span>注意：&nbsp;服务评价一旦提交，将无法继续反馈</span>
        </div>
        <!-- 底部 -->
        <div class="wraper" @click="submiter">
            <span>提交</span>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import {Toast,Indicator} from 'mint-ui';
    export default {
        mixins: [controler],
        components: {
            navigator,
            Toast,
            [Indicator.name]: Indicator
        },
        data() {
            return {
                $_value1_$: 0,
                $_value2_$: 0,
                $_value3_$: 0,
                $_value4_$: 0,
                shifou: '',
                serviceRecord: '',
                fwjl: [],
                $_defaultList_$: []
            }
        },
        created() {
            this.$_global_$.serverPath
            this.fwpj()
        },
        methods: {
            //处理
            $_xq_$() {
                this.$root.inparams.id
            },
            submiter() {
                 Indicator.open({
                        text: '提交中...',
                        spinnerType: 'fading-circle'
                       });
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + '/steward/steward/evaluateServiceRecord',
                    data: {
                        serviceRecordId: this.serviceRecord,
                        commiterTimelinessStar: Number(this.$_value1_$ * 20),
                        commiterEfficiencyStar: Number(this.$_value2_$ * 20),
                        commiterReliableStar: Number(this.$_value3_$ * 20),
                        commiterConsiderateStar: Number(this.$_value4_$ * 20)
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    //console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code == 0) {
                            Indicator.close();
                            Toast(rsp.data.data);
                            this.$root.$_Route_$('user', 'mobile', 'ygsyfwjl')

                        }
                    }
                })
            },
            fwpj() {
                this.$root.inparams.id
                this.serviceRecord = this.$root.inparams.id
            },
            //服务受理
            $_fwsl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfwsl', {id: 1})
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfwjl', {id: 1})
            }
        },
        mounted() {

        }
    }
</script>