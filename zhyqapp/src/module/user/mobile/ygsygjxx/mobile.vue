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
        background: #fff;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        height:60px;
        line-height:60px;
        box-shadow:0px 0px 12px 0px rgba(232,232,232,0.9);
    }
    .wrap {
        /*padding: 10px 0px 75px 0px;*/
        height: 100vh;
        background-color: #F6F6F6;
        margin-bottom:60px;
    }

    .footer .active {
        color: #00C1DE;
    }

    .footer ul {
        overflow: hidden;
        padding-top:8px;
    }

    .footer ul li {
        float: left;
        width: 33.3%;
        text-align: center;
        font-family: "Microsoft YaHei";
        font-size: 10px;
        color: #333333;
    }

    .footer ul li img {
        display: block;
        margin: 0 auto 4px;
    }

    .footer ul li p {
        height: auto;
        line-height: 1;
    }

    .cont {
        list-style: none;
        background: #fff;
        box-sizing: border-box;
        /*margin-top: 10px;*/
    }

    .cont li {
        height: 50px;
        border-bottom: 1px solid #E5E5E5;
        line-height: 50px;
        overflow: hidden;
        padding: 0 16px;
        font-size: 16px;
        color: #333333;
    }

    .cont li:last-child {
        border-bottom: none;
    }

    .cont li .key {
        float: left;
        color: #333333;
        font-size: 16px;
        font-family: 'PingFangSC-Regular';
    }

    .cont li .value {
        float: right;
        font-size: 14px;
        text-align: right;
        color: #333333;
        font-family: 'PingFangSC-Regular';
    }

    .cont li .rightarrow {
        float: right;
        display: block;
        width: 5px;
        height: 9px;
        margin-left: 10px;
        margin-top: 20px;
    }

    .tx {
        width: 100%;
        line-height: 75px;
        height: 110px;
        background: #fff;
        padding: 20px 16px;
        border-top: 10px solid #f6f6f6;
        margin-bottom: 10px;
        font-size: 16px;
    }

    .tx .img {
        height: 70px;
        float: right;
        width: 70px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 1);
        overflow:hidden;
    }

    .tx .img img {
        width: 100%;
        display: block;
        height: 70px;
        border-radius: 50%;
        
    }

    .switch {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0 16px;
        box-sizing: border-box;
        height: 54px;
        background-color: #fff;
        line-height: 54px;
        overflow: hidden;
        font-size: 16px;
    }

    .ivu-switch {
        margin-top: 15px !important;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="管家信息" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="tx">
                <span style="color:#333333;">头像</span>
                <div class="img">
                    <img v-if="info.image" :src="info.image | imgsrc" alt="">
                     <img v-else class="img" src="/static/hysyy/faceimg.svg"/>
                </div>
            </div>
            <div class="switch">
                <span style="color:#333333;">工作状态:&nbsp;&nbsp;<span>{{info.workStatus | formater}}</span></span>
                <Switch style="float:right;" v-model="switch1" @on-change="change"/>
            </div>
            <!-- 详细信息 -->
            <ul class="cont">
                <li>
                    <p class="key">姓名</p>
                    <p class="value" style="color:#999999;">{{info.name}}</p>
                </li>
                <li>
                    <p class="key">电话</p>
                    <p class="value" style="color:#999999;">{{info.phone_number}}</p>
                </li>
                <li>
                    <p class="key">综合得分</p>
                    <p class="value">{{info.synthesize | format}}分</p>
                </li>
                <li>
                    <p class="key">服务总次数</p>
                    <p class="value">{{info.service_count | format}}次</p>
                </li>
                <li>
                    <p class="key">平均响应式</p>
                    <p class="value">{{info.avg_reply_time | format}}分钟</p>
                </li>
                <li>
                    <p class="key">平均处理时间</p>
                    <p class="value">{{info.avg_handle_time | formate}}小时</p>
                </li>
                <li>
                    <p class="key">星级</p>
                    <p class="value">
                        <Rate allow-half :value="info.synthesize | format" disabled></Rate>
                    </p>
                </li>
                <!--<li>-->
                <!--<p>服务企业</p>-->
                <!--</li>-->
                <!--<li v-for="(item,index) in enterprise"-->
                <!--:key="index">{{item.enterprise_name}}-->
                <!--</li>-->
                <li style="overflow:hidden;" @click="$_go_$">
                    <p class="key">绑定管家</p>
                     <p class="value" style="float:right;color:rgb(153, 153, 153);" v-if="steward.length == 0">暂无绑定管家<span style="font-weight:bold;float:right;margin-left:10px;">></span>
                    <p class="value" style="float:right;color:rgb(153, 153, 153);" v-if="steward.length >0">{{steward[0].stewardName}} <span style="font-weight:bold;float:right;margin-left:10px;">></span>
                    </p>
                </li>

            </ul>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul>
                <li @click="$_ddsl_$">
                    <img style="width:17px;height:21px;" src="/static/fwsl/ddsl_black.svg" alt="">
                    <p>订单受理</p>
                </li>
                <li @click="$_fwsl_$">
                    <img style="width:21px;height:21px;" src="/static/fwsl/fwsl_black.svg" alt="">
                    <p>服务受理</p>
                </li>
                <li>
                    <img style="width:19px;height:21px;" src="/static/fwsl/gjxx_blue.svg" alt="">
                    <p class="active">管家信息</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import {mapGetters} from 'vuex';

    export default {
        mixins: [controler],
        components: {navigator},
        filters: {
            format(item) {
                if (item) {
                    return item
                } else {
                    return 0
                }
            },
             formate(item) {
                if (item) {
                    return item /60
                } else {
                    return 0 
                }
            },
            formater(item) {
                if (item == 0) {
                    return '已下线'
                } else {
                    return '已上线'
                }
            }
        },
        data() {
            return {
                id: '',
                info: {},
                steward: [],
                valueHalf: 0,
                switch1: true
            }
        },
        computed: {
            ...mapGetters(['currentZone', 'currentZoneId']),
        },
        created() {
            this.currentZoneId
            this.$_global_$.serverPath
             let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            //this.steward()
            this.$_gjxx_$()
            this.Info()
            this.$_bd_$()
            //this.steward()
        },
        methods: {
            // 获取管家信息
            setward() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/queryStewardDetails`,
                    data: {refEmployee: this.userInfo.id},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.stewardId = rsp.data.data.id
                            //this.List(this.$_order_$, this.$_search_$, this.$_model_$)
                        }
                    }
                })
            },
            Info() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/queryStewardDetails`,
                    data: {stewardId: this.id},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.info = rsp.data.data
                            // console.log(this.info)
                           if(this.info.workStatus == 1){
                                this.switch1 = true
                           }else{
                               this.switch1 =false
                           }
                            this.enterprise = this.info.enterprise
                            this.valueHalf = JSON.parse(this.info.star)
                        }
                    }
                })
            },
            //触发开关之前判断默认值
            change(value) {
                //console.log(value)
                //this.switch1 =value
                this.info.workStatus = value
               this.switch1 = this.info.workStatus
              if( !this.switch1){
                  this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/offline`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                  //  console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                           this.switch1 = false
                        }
                    }
                })
              }else{
                  this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/online`,
                    data: {},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.switch1 =true
                          // this.switch1 = this.info.workStatus
                        }
                    }
                })
              }

            },
            $_bd_$(){
               this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/${this.currentZoneId}/bind/list`,
                    data: {
                    stewardId:this.id
                    },
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                   console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                         if(rsp.data.data.length != null){
                             this.steward = rsp.data.data
                         }
                        }
                    }
                }) 
            },
            $_go_$(){
               this.$root.$_Route_$('user', 'mobile', 'ygsygjbd', {id: 1})
            },
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            //订单受理
            $_ddsl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyddsl', {id: this.id})
            },
            //服务受理
            $_fwsl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyfwsl', {id: 1})
            },
            //管家信息
            $_gjxx_$() {
                this.$root.inparams.id
                this.id = this.$root.inparams.id
            }
        }
    }
</script>