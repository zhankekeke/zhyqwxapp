<style scoped>
    .lm {
        background: #f6f6f6;
        min-height:100vh;
    }

    .list {
        list-style: none;
        background: white;
        margin-top: 10px;
    }

    .item {
     border-bottom: 0.026667rem solid #ececec;
   padding:0 16px 0;
   line-height:50px;
   height:50px;
    box-sizing:border-box;
    }

    .item img {
        width: 23px;
        height: 20px;
        line-height:20px;
        display:inline-block;
        /*background: rgba(0, 193, 222, 1);*/
    }

    .item .key {
        position: absolute;
        font-size: 14px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
    }

    .item .value {
        margin-left: 76px;
        font-size: 14px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .head img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        float: left;
        margin: 15px;
        border: 3px solid rgba(255, 255, 255, 0.2);
    }

    .name {
        height: 20px;
        font-size: 20px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
    }

    .enterprise {
        /*width:168px;*/
        height: 12px;
        font-size: 12px;
        margin-top: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
    }

    .head {
        /*border-bottom: 10px solid #f7f7f7;*/

        width: 100%;
        height: 104px;
        background: rgba(0, 193, 222, 1);

    }

    .headp {
        float: left;
        height: 70px;
        margin-top: 30px;
        display: table-cell;
        vertical-align: middle;
    }

    .headr {
        float: right;
        width: 89px;
        height: 34px;
        background: rgba(255, 255, 255, 0.13);
        border-radius: 100px 0px 0px 100px;
        margin-top: 35px;
    }

    .headr img {
        width: 24px;
        height: 24px;
        background: rgba(255, 255, 255, 0.2);
        margin: 5px;
    }

    .headr p {
        /*width: 24px;*/
        margin-top: 12px;
        margin-left: 5px;
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
    }

    .icon {
        text-align: right;
        font-size: 30px;
        color: #8a8a8a;
    }
</style>
<template>

    <div class="lm" ref="aa">

        <navigator title="通讯录"  />

        <!-- 中间部分 -->
        <div class="wrap">
            <div class="head">
                <div>
                    <img v-if="userInfo.faceUrl" :src="$_global_$.ImgServer + userInfo.faceUrl">
                    <img v-else src="/static/hysyy/faceimg.svg">
                </div>
                <div class="headp">
                    <p class="name">{{userInfo.name}}</p>
                    <p class="enterprise">{{userInfo.enterpriseName}}</p>
                </div>
                <div class="headr">
                    <!--<p> {{// userInfo.position}}</p>-->
                    <div><img src="/static/txl/txl_gr.png"/></div>
                    <p> {{userInfo.position}}</p>
                </div>
            </div>
            <ul class="list">
                <li class="item clear">
                    <p class="key">姓名</p>
                    <p class="value">{{userInfo.name}}</p>
                </li>
                <li class="item clear">
                    <p class="key">性别</p>
                    <p v-if="userInfo.sex===0" class="value">男</p>
                    <p v-if="userInfo.sex===1" class="value">女</p>
                </li>
                <li class="item clear">
                    <a :href="'tel:' + userInfo.phoneNumber">
                        <Row>
                            <Col span='20'>
                                <p class="key">电话</p>
                                <p class="value">{{userInfo.phoneNumber}}</p>
                            </Col>
                            <Col span='4'  class="icon">
                                <div style="margin-top:4px;"><img src="/static/txl/txl_tel.png"/></div>
                            </Col>
                        </Row>
                    </a>

                </li>
                <li class="item clear">
                    <p class="key">生日</p>
                    <p class="value" v-if="!userInfo.brithday">无</p>
                    <p class="value" v-else>{{userInfo.brithday.substr(0,10)}}</p>
                </li>
                <li class="item clear">
                    <p class="key">邮箱</p>
                    <p class="value" v-if="!userInfo.emailUrl">无</p>
                    <p class="value" v-else>{{userInfo.emailUrl}}</p>
                </li>
                <li class="item clear">
                    <p class="key">入职时间</p>
                    <p class="value" v-if="!userInfo.createDate">无</p>
                    <p class="value" v-else>{{userInfo.createDate.substr(0,10)}}</p>
                </li>
                <!--<li class="item clear" @click="$_back_$()">-->
                <!--<Row>-->
                <!--<Col span='18'>-->
                <!--<p class="key">部门</p>-->
                <!--<p class="value">{{userInfo.departmentName}}</p>-->
                <!--</Col>-->
                <!--<Col span='6' class="right">-->
                <!--<Icon type="chevron-right"></Icon>-->
                <!--</Col>-->
                <!--</Row>-->
                <!--</li>-->
                <li class="item clear">
                    <p class="key">部门</p>
                    <p class="value"  style="font-size:13px;" >{{userInfo.departmentName}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            navigator,
        },
        data() {
            return {
                userInfo: {},
                enterpriseId: ''
            }
        },
        created() {
            this.userInfo = this.$root.inparams.data;
            console.log(this.userInfo)
            this.enterpriseId = this.$root.inparams.enterpriseId;
            this.getCCList();
        },
        methods: {
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-txl', {id: 1})
            },
            //常用联系人
            getCCList() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/company/${this.enterpriseId}/employee/${this.userInfo.id}`,
                    data: {}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            if (res.data.data) {
                                this.userInfo = res.data.data;
                            }
                        }
                    }
                });
            },
        }
    }
</script>