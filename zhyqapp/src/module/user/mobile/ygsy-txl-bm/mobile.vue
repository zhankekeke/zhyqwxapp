
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        min-height:100vh;
        background-color:#f6f6f6;
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
        padding: 50px 0px 75px 0;
    }

    .footer .active {
        color: #7599ff;
    }

    .wrap img {
        width: 100%;
    }

    .wrap {
        padding: 50px 0 0 0;
    }

    .right {
        float: right;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }

    .wrap {
        box-sizing: border-box;
        padding: 50px 0px 0 0px;
        font-size: 14px;
        color: #333;
        background: #f6f6f6;
    }

    .box {
        background: #fff;
    }

    .box img {
        width: 47px;
        height: 47px;
        vertical-align: middle;
    }

    .box1 {
        box-sizing: border-box;
        padding: 10px;
    }

    .search {
        background: #ececec;
        padding: 10px 10px;
        box-sizing: border-box;
    }

    .box {
        margin-bottom: 10px;
        box-sizing: border-box;
        padding: 10px 20px;
        line-height: 47px;
    }

    .list {
        overflow: hidden;
        background: #fff;
    }

    .list li {
        border-top: 1px solid #ececec;
        box-sizing: border-box;
        padding: 15px 20px;
    }

    .list img {
        width: 30px;
        height: 100%;
        background-color: #ccc;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="通讯录"  />
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <div class="search">
                    <Row>
                        <Col span="20">
                            <Input v-model="$_search_$" placeholder="搜索" clearable style="width:98%"/>
                        </Col>
                        <Col span="4">
                            <Button type="primary">搜索</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <div class="box">
                <Row>
                    <Col span='4'>
                        <img :src="$_img_$" alt="">
                    </Col>
                    <Col span='20' style="font-size:14px;">{{$_name_$}}>{{$_lastName_$}}</Col>
                </Row>
            </div>
            <ul class="list">
                <li v-for='item in $_List_$' @click="$_nextPage_$(item)">
                    <Row>
                        <Col span='18'><span>{{item.name}}</span></Col>
                        <Col span='6' style='text-align: right;color:#ccc;'>
                            <Icon type="chevron-right"></Icon>
                        </Col>
                    </Row>
                </li>
            </ul>
            <ul class="list" style=" margin-top: 10px;">
                <li v-for='item in $_List2_$' @click="$_nextPage_$(item)">
                    <Row>
                        <Col span='18'><img src="">&nbsp;&nbsp;<span>{{item.name}}</span></Col>
                        <Col span='6' style='text-align: right;color:#ccc;'>
                            <Icon type="chevron-right"></Icon>
                        </Col>
                    </Row>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import {Toast} from 'mint-ui';
     import navigator from '../public/navigator';
    export default {
        mixins: [controler],
        components:{
           navigator,
        },
        data() {
            return {
                $_search_$: '',
                $_List_$: [],
                $_List2_$: [],
                $_img_$: '',
                $_name_$: '',
                $_lastName_$: ''
            }
        },
        created() {
            this.$_img_$ = this.$root.inparams.img;
            this.$_name_$ = this.$root.inparams.name;
            this.$_lastName_$ = this.$root.inparams.lastName;
            if (this.$root.inparams.employee) {
                this.$_List2_$ = this.$root.inparams.employee;
            } else {
                this.$_List_$ = this.$root.inparams.child;
            }
        },
        methods: {
           
            $_nextPage_$(item) {
                if (this.$root.inparams.employee) {
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-txl-gr', {
                        ygData: item,
                        lastName: this.$root.inparams.lastName,
                        child: this.$root.inparams.child,
                        img: this.$root.inparams.img,
                        name: this.$root.inparams.name,
                        employee: this.$root.inparams.employee
                    })
                } else {
                    if (item.child) {
                        this.$root.$_Route_$('user', 'mobile', 'ygsy-txl-bm', {
                            lastName: this.$_lastName_$ + '>' + item.name,
                            child: item.child,
                            img: this.$_img_$,
                            name: this.$_name_$,
                            employee: ""
                        })
                    } else {
                        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                        let userInfo = JSON.parse(cookie);
                        //请求部门下员工
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/company/company/${userInfo.enterpriseId}/department/${item.id}/employee`,
                            data: {}
                        }).then(res => {
                            if (res.status === 200) {
                                if (res.data.code === 0) {
                                    if (res.data.data.records.length > 0) {
                                        this.$root.$_Route_$('user', 'mobile', 'ygsy-txl-bm', {
                                            lastName: this.$_lastName_$ + '>' + item.name,
                                            child: item.child,
                                            img: this.$_img_$,
                                            name: this.$_name_$,
                                            employee: res.data.data.records
                                        })
                                    } else {
                                        Toast('部门下暂无员工');
                                    }
                                }
                            }
                        });
                    }
                }
            }
        }
    }
</script>