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
        min-height:100vh;
        background-color: #f6f6f6;
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
        padding-bottom: 20px;
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
        padding: 20px 20px;
        border-bottom: 1px solid #f6f6f6;
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
        margin: 0 auto;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 20px;
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
    .buttonWrap{
        padding: 20px 40px;
        background:#FFF;
    }
    .buttonWrap .button{
        width:100%;
        height:44px;
        border-radius:25px;
        color:#fff;
        line-height:44px;
        text-align:center;
        font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        background:rgba(0,193,222,1);
    }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="邀请详情" @back="$_back_$"/>
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
                    <span class="fk">邀请信息</span>
                </li>
                <li>
                    来访时间：{{$_msg_$.visitDate}}
                </li>
                <li>
                    邀请事由：{{$_msg_$.visitReason}}
                </li>
                <li>
                    会议室：{{$_msg_$.meetingRoomName}}
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
            <div class="buttonWrap">
                <div class="button" @click="yqh()">查看邀请函</div>
            </div>
        </div>
    </div>
</template>

<script>
    // import controler from './controler.js';
    import navigator from '../public/navigator';
    import {EventBus} from "../../../../libs/eventbus";

    export default {
       // mixins: [controler],
        components: {
            navigator,
        },
        data() {
            return {
                $_modal_$: !1,
                $_message_$: '',
                $_addr_$: '',
                $_hsy_$: '',
                $_msg_$: ''
            }
        },
        created() {
            this.$_info_$();
        },
        methods: {
            $_info_$() {
               // let id = this.$root.inparams.id;
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
                            //console.log(this.$_msg_$)
                        }
                    }
                })
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfkgl', {id: 1})
            },
            yqh(){
                this.$router.push({
                        path:'/ygsyfkgl/ygsy-fkgl-yqh',
                        query:{id:this.$_msg_$.id}
                })
            }
        },

    }
</script>