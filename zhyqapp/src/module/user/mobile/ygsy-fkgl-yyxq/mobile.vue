<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        position: static;
    }
</style>
<style lang="less">
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        .ivu-modal {
            top: 0;
        }
    }
</style>
<style scoped>
    .container {
        overflow: auto;
        position: fixed;
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-weight: 400;
        background: rgb(2, 155, 250);
    }

    .header {
        background-color: rgb(2, 155, 250);
        height: 50px;
        left: 0;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 99;
        color: #fff;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        padding: 10% 5% 20% 5%;
        font-size: 14px;
        color: #333;
    }

    .mtitle {
        width: 100%;
        height: 40px;
        font-size: 16px;
        float: left;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
    }

    .mtime {
        padding:20px 20px 20px 20px;
        border-top: 1px solid rgba(255,255,255,0.2)
    }

    .mperson {
        margin-top: 10px;
    }

    .btn {
        margin: 40px auto;
    }

    .qrcode {
        margin-top: 10%;
        height: 276px;
        background-color: #fff;

    }

    .info {
        margin-top: 15px;
        background-color: rgba(255, 255, 255, 0.26);
        color: #ffffff;
        padding: 20px 0px 20px 0px;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <div class='header'>
            <Icon type="chevron-left" class='back' @click='$_back_$'></Icon>
            邀请详情
        </div>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="qrcode">
                <div style="height:40px; background-color: rgb(246,246,246);">
                    <img style="width: 18px;height: auto; margin-top:12px;margin-left: 5%; float: left"
                         src="/static/fkgl/qr.png"/>
                    <span style="color:rgb(2, 155, 250); line-height: 40px; margin-left: 3%; float: left">预约二维码</span>
                    <div style=" clear: both"></div>
                    <div style=" margin-top: 5%; text-align: center">
                        <span style="color: rgb(136,136,136); font-size: 12px">请对准打卡机，扫码进入</span>
                        <img style="width: 121px; margin: 5% auto; display: block; height: 121px; background-color: #ccc "
                             :src="$_msg_$.qrCode"/>
                        <span style="color: rgb(136,136,136); font-size: 12px">切勿泄露此二维码</span>
                    </div>
                </div>
            </div>
            <div style="clear: both"></div>
            <div class="info">
                <div style="color: rgb(51,51,51); text-align: center;margin-bottom: 15px;">{{$_msg_$.visitorName}}您好：对方已同意您的预约</div>
                <div class="mtime">来访时间：{{$_msg_$.startTime}}</div>
                <div class="mtime">结束时间：{{$_msg_$.endTime}}</div>
                <div class="mtime">公司名称：{{$_msg_$.employeeCompany}}</div>
            </div>
            <div class="btn">
                <Button shape="circle" @click='$_back_$' size="large"
                        style=" width: 100%;color:rgb(2,155,250); background-color:#fff; border: none"
                        type="Primary">返回列表
                </Button>
            </div>
            <div style="clear: both"></div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';

    export default {
        mixins: [controler],
        data() {
            return {
                $_msg_$: '',
            }
        },
        created() {
            this.$_info_$();
        },
        methods: {
            $_info_$() {
                this.$_msg_$ = this.$root.inparams.data;
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'fkyylb', {id: 1})
            },
        },

    }
</script>