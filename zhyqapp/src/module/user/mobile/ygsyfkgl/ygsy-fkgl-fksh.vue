<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background-color: #f6f6f6;
        height: 100vh;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        font-size: 14px;
        color: #666;
        background-color: #f6f6f6;
    }

    .list {
        overflow: hidden;
        background: #fff;
    }

    .list li {
        border-bottom: 8px solid #f6f6f6;
        box-sizing: border-box;
        padding: 15px 0 15px 30px;
        line-height: 25px;
        font-size: 14px;
        color: #333;
    }

    .mul2 {
        background-color: #fff;
        border-top: 10px solid #f6f6f6;
    }

    .mul2 li {
        padding: 20px 20px 0px 20px;
        border-bottom: 1px solid #f6f6f6;
        height: 55px;
        font-size: 14px;
        color: #333;
    }

    .fk {
        font-size: 18px;
        line-height: 30px;
        font-weight: bold;
        color: #333;
    }

    .mp {
        width: 90%;
        height: 120px;
        margin: 3% auto;
        background-color: #fff;
        border-radius: 4px;
    }

    .mp1 {
        padding: 20px 20px 0 20px;
    }

    .mp2 {
        font-size: 12px;
        padding: 5px 0 0 20px;
    }

    .wxImg {
        display: block;
        width: 60px;
        height: 60px;
        background-color: #ececec;
        float: left;
    }

    .wxImg2 {
        width: 20px;
        height: 20px;
        float: left;
    }

    .mp2_text {
        float: left;
        margin-left: 2%;
        color: #333333
    }

    .mp1 span {
        float: left;
    }

    .mfooter {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .mbtn {
        font-size: 16px;
        width: 100%;
        border-radius: 0;
        padding: 10px 0
    }

    .wcNick {
        font-weight: bold;
        color: #333;
        font-size: 20px;
        margin-left: 5%;
        margin-top: 2%;
    }

    .wcTel {
        color: #B3B3B3;
        font-size: 14px;
        font-weight: normal
    }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="来访信息" @back="$_back_$"/>
        <div class="wrap">
            <ul class="mul2">
                <li style="border: none">
                    <span class="fk">访客信息</span>
                </li>
                <li>
                    邀请人：{{$_msg_$.visitorName}}
                </li>
                <li>
                    电话：{{$_msg_$.visitorMobile}}
                </li>
                <li>
                    单位：{{$_msg_$.visitorCompany}}
                </li>
            </ul>
            <ul class="mul2">
                <li style="border: none">
                    <span class="fk">来访信息</span>
                </li>
                <li>
                    来访时间：{{$_msg_$.visitDate}}
                </li>
                <li>
                    邀请事由：{{$_msg_$.visitReason}}
                </li>
            </ul>
            <div class="mp" v-if="$_msg_$.headImgUrl">
                <ul>
                    <li class="mp1">
                        <div style="border-bottom: 1px solid #f6f6f6;padding-bottom: 0.266em">
                            <img class="wxImg" :src="$_msg_$.headImgUrl">
                            <span class="wcNick">
                                {{$_msg_$.nickname}}<br/>
                                <span class="wcTel">{{$_msg_$.visitorMobile}}</span></span>
                            <div style="clear: both"></div>
                        </div>
                    </li>
                    <li class="mp2">
                        <img class="wxImg2" src="/static/fwsl/wechat.png">
                        <span class="mp2_text">微信名片</span>
                    </li>
                    <div style="clear: both"></div>
                </ul>
            </div>
        </div>
        <div class="mfooter">
            <Row>
                <Col span="12">
                    <Button style="background: #fff;border: none;border-top: 1px solid #E5E5E5"  @click="$_fksh_$(2)" type="ghost"  class="mbtn">拒绝</Button>
                </Col>
                <Col span="12">
                    <Button  @click="$_fksh_$(1)" type="primary" class="mbtn">同意</Button>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    // import controler from './controler.js';
    import {MessageBox} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import navigator from '../public/navigator';

    export default {
        //mixins: [controler],
        components: {
            navigator,
        },
        data() {
            return {
                $_search_$: '',
                $_msg_$: '',
            }
        },
        created() {
            this.$_info_$();
        },
        methods: {
            $_info_$() {
                let id = this.$root.inparams.id;
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/visitor/detail/${this.$route.query.id}`,
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.$_msg_$ = res.data.data;
                        }
                    }
                })
            },
            $_back_$() {
                if(this.$route.query.type){
                    var type = this.$route.query.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
                }
            },
            $_fksh_$(type) {
                //同意
                if (type === 1) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/company/visitor/audit/pass/${this.$_msg_$.id}`,
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            if (res.data.code === 0) {
                                Toast('审核成功，已同意');
                                setTimeout(() => {
                                    this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
                                }, 1000);
                            }
                        }
                    })
                }
                //不同意
                if (type === 2) {
                    MessageBox.prompt('请填写不通过原因').then(({value, action}) => {
                        if (action == 'confirm') {
                            this.$_sendQuery_$({
                                method: "POST",
                                url: `${this.$_global_$.serverPath}/company/visitor/audit/nopass/${this.$_msg_$.id}`,
                                data: {
                                    auditDesc: value
                                },
                                headers: {
                                    "Content-type": "application/json"
                                }
                            }).then(res => {
                                if (res.status === 200) {
                                    if (res.data.code === 0) {
                                        Toast('审核成功，已拒绝');
                                        setTimeout(() => {
                                            this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
                                        }, 1000);
                                    }
                                }
                            })
                        }
                    });
                }
            }
        }
    }
</script>