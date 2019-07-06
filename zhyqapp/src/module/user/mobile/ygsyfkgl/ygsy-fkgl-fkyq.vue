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
        padding: 0 0 65px 0;
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

    /*.mfooter {*/
    /*position: fixed;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*}*/

    .mbtn {
        font-size: 16px;
        width: 100%;
        border-radius: 0;
        padding: 15px 0
    }

    .mzt {
        color: #00C1DE !important;
        font-size: 16px !important;
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
            <ul class="mul2" style="border: none">
                <li style="border: none">
                    <span class="fk">反馈信息</span>
                </li>
                <li class="mzt">
                    状态：{{$_msg_$.auditStatus | format}}
                </li>
            </ul>
        </div>
        <!--<div class="mfooter">-->
        <!--<Row>-->
        <!--<Col span="24">-->
        <!--<Button style="background-color:#e4e4e4;color: #000 " @click="$_fksh_$(2)" type="ghost" class="mbtn" disabled>已通过</Button>-->
        <!--</Col>-->
        <!--</Row>-->
        <!--</div>-->
    </div>
</template>

<script>
    // import controler from './controler.js';
    import navigator from '../public/navigator';

    export default {
        //mixins: [controler],
        components: {
            navigator,
        },
        filters: {
            format(item) {
                if (item == 0) {
                    return '待审核'
                }
                if (item == 1) {
                    return '已同意'
                }
                if (item == 2) {
                    return '已拒绝'
                }
            }
        },
        data() {
            return {
                $_msg_$: '',
                id: 0,
                message: ''
            }
        },
        created() {
            this.$_nextPage_$()
            this.$_info_$();
        },
        methods: {
            $_info_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: this.$_global_$.serverPath + `/company/visitor/detail/${this.$route.query.id}`,
                    data: {},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$_msg_$ = rsp.data.data
                           // console.log(this.$_msg_$)
                        }
                    }
                })
            },
            $_nextPage_$() {
                this.message = this.$root.inparams.id
            },
            $_back_$() {
                if(this.$route.query.type){
                    var type = this.$route.query.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
                }
            },
        },

    }
</script>