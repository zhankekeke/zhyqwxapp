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
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        font-weight: 400;
    }

    .header {
        height: 50px;
        left: 0;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 99;
    }

    .wrap {
        box-sizing: border-box;
        padding: 50px 0px 0px 0px;
        font-size: 14px;
        color: #333;
        background: #f2f2f2;
        color: #666;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap2 {
        box-sizing: border-box;
        padding: 50px 0px 75px 0px;
        font-size: 14px;
        color: #333;
        background: #f2f2f2;
        color: #666;
    }

    .mul li {
        padding: 15px 20px 15px 20px;
        background-color: white;
    }

    .mul2 li {
        padding: 5px 20px 5px 20px;
        background-color: white;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <div class='header'>
            <Icon type="chevron-left" class='back' @click='$_back_$'></Icon>
            访客邀请
        </div>
        <!-- 中间部分 -->
        <div class="wrap2">
            <Row style="padding-top:10px; background-color: #f2f2f2">
                <ul class="mul">
                    <li style="border-top: 1px solid #f4f4f4; border-bottom: 1px solid #f4f4f4">
                        <span style="font-size: 16px">来访类型&nbsp;&nbsp;&nbsp; 预约</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span><span style="color: rgb(136,136,136)">员工姓名</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.employeeName}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span><span style="color: rgb(136,136,136)">公司</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.employeeCompany}}</span>
                    </li>
                    <li style="margin-bottom:10px;border-top: 1px solid #f4f4f4">
                        <span><span style="color: rgb(136,136,136)">联系方式</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.employeeMobile}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4; border-bottom: 1px solid #f4f4f4">
                        <span style="font-size: 16px">访客信息</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4;">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">姓名</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.visitorName}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">手机号</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.visitorMobile}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">单位名称</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.visitorCompany}}</span>
                    </li>
                    <li style=" margin-bottom:10px;border-top: 1px solid #f4f4f4; border-bottom: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">所在部门</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.visitorOrg}}</span>
                    </li>

                    <li style="border-top: 1px solid #f4f4f4; border-bottom: 1px solid #f4f4f4">
                        <span style="font-size: 16px">邀请信息</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">来访事由</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.visitReason}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">来访时间</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.startTime}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span style="margin-left: 5px;"><span style="color: rgb(136,136,136)">结束时间</span>&nbsp;&nbsp;&nbsp; {{$_intinfo_$.endTime}}</span>
                    </li>
                    <li style="font-size:14px;border-top: 1px solid #f4f4f4;margin-top: 10px;color: rgb(2,155,250); text-align: center">
                        <span v-if="$_intinfo_$.auditStatus == 0">状态：待审核</span>
                        <span v-if="$_intinfo_$.auditStatus == 1">状态：审核通过</span>
                        <span v-if="$_intinfo_$.auditStatus == 2">状态：审核不通过</span>
                        <span v-if="$_intinfo_$.auditStatus == 2"><br>不通过原因：{{$_intinfo_$.auditDesc}}</span>
                        <div style="clear: both"></div>
                    </li>
                </ul>
            </Row>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import {MessageBox} from 'mint-ui';
    import {Toast} from 'mint-ui';

    export default {
        mixins: [controler],
        data() {
            return {
                $_search_$: '',
                $_intinfo_$: '',
            }
        },
        created() {
            this.$_info_$();
        },
        methods: {
            $_info_$() {
                this.$_intinfo_$ = this.$root.inparams.data;
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'fkyylb', {id: 1})
            },
        }
    }
</script>