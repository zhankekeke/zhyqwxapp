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
        height: 100vh;
        background-color: #ffffff;
    }

    .wrap {
        background-color: #ffffff;
        min-height: 100vh;
    }

    .people {
        height: 79px;
        line-height: 79px;
        padding: 0 16px;
        box-sizing: border-box;
        border-bottom: 1px solid #f6f6f6;
        font-size: 14px;
        font-weight: 400;
        font-family: 'PingFangSC-Regular';
        color: #333333;
    }

    .people img {
        vertical-align: middle;
        margin-right: 10px;
    }

    .bottom {
        margin-top: 10px;
    }

    .bottom li {
        border-bottom: 1px solid #f6f6f6;
        padding: 17px 16px 17px 20px;
        box-sizing: border-box;
        position: relative;
        font-size: 14px;
        font-weight: 400;
        font-family: 'PingFangSC-Regular';
    }

    .bottom .history {
        padding-left: 64px;
    }

    .bottom li img {
        position: absolute;
        vertical-align: middle;
        height: 38px;
        width: 38px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .bottom .dui {
        width: 19px;
        height: 19px;
        position: absolute;
        right: 0;
        bottom: 30px;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="管家列表"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索 -->
            <!-- 内容 -->
            <div class="people" @click="$_unbind_$()"><img src="/static/fwsl/unbind.svg">取消绑定</div>

            <ul class="bottom" v-if="this.list.length>0">
                <li v-for="(item,index) in list" :key="index" @click="$_bd_$(item)">
                    <img v-if="item.faceUrl" style="vertical-align:middle;" :src="item.faceUrl|imgsrc">
                    <img v-else style="vertical-align:middle;" src="/static/hysyy/faceimg.svg">
                    <div class="history">
                        <span>{{item.stewardName}}</span>
                        <span style="display:block;">{{item.phoneNumber}}</span>
                    </div>
                    <img v-if="item.bindFlg == 1" class="dui" src="/static/fwsl/dui.svg">
                </li>
            </ul>
        </div>
        <!-- 底部 -->
    </div>
</template>

<script>
    import controler from './controler.js';
    import {DatetimePicker, Loadmore, MessageBox, Toast} from 'mint-ui';
    import search from '../public/search';
    import navigator from '../public/navigator';
    import {mapGetters} from 'vuex';

    export default {
        mixins: [controler],
        components: {
            search, navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [MessageBox.name]: MessageBox,
            [Toast.name]: Toast
        },
        data() {
            return {
                model1: '',
                $_model_$: '',
                $_search_$: '',
                $_order_$: '',
                list: [],
                stewardId: 0,
                userInfo: {},
                pageSize: 6,
                pageNum: 1,//当前第几页
                topStatus: '',
                stewardId: '',
            }
        },
        computed: {
            ...mapGetters(['currentZone', 'currentZoneId']),
        },
        created() {
            console.log(this.currentZoneId)
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            this.setward()

        },
        methods: {
            // 获取管家id
            setward() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/${this.currentZoneId}/list`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.list = rsp.data.data
                            // this.stewardId = rsp.data.data.id
                            // this.List(this.$_order_$, this.$_search_$, this.$_model_$)
                        }
                    }
                })
            },
            $_bd_$(item) {
                this.stewardId = item.id
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/${this.currentZoneId}/bind`,
                    data: {
                        targetId: this.stewardId
                    },
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.setward()
                        }
                    }
                })
            },
            $_unbind_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/${this.currentZoneId}/unbind`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.setward()
                        }
                    }
                })
            },
            // 获取服务列表
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsygjxx', {id: 1})
            },
        }
    }
</script>