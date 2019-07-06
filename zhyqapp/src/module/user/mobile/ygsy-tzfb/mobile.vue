
<style scoped>
    .containe {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background: #F6F6F6;
        min-height: 100vh;
    }

    .wrap {
        background: #F6F6F6;
        margin-bottom: 40px;
    }

    .list {
        overflow: hidden;
        margin-top: 10px;
        padding-bottom: 45px;
    }

    .list li {
        box-sizing: border-box;
        padding: 18px 0;
        font-size: 13px;
        background-color: #fff;
        margin-bottom: 10px;

    }

    .list li:last-child {
        margin-bottom: 0;
    }

    .desc {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-top: 10px
    }

    .footer .active {
        color: #00C1DE;
        padding-top: 2px;
    }

    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 49%;
        height: 49px;
        line-height: 49px;
        text-align: center;
        padding-left: 56px;
    }

    .footer ul li img {
        width: 20px;
        height: 21px;
        margin-top: 14px;
        float: left;
    }

    .footer ul li p {
        height: auto;
        float: left;
        margin-left: 8px;
        font-size: 12px;
        padding-top: 2px;
        color: #B3B3B3;
    }

    .footer {
        font-size: 14px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow:0px 0px 12px 0px rgba(232,232,232,0.9);
    }

    .footer ul span {
        border-left: 1px solid #E1E3EC;
        height: 20px;
        margin-top: 15px;
        float: left;
        line-height: 20px;

    }

    >>> .desc img {
        width: 100% !important;
    }

    .search {
        background: #fff !important;
        padding: 5px 16px 5px;
        box-sizing: border-box;
        height: 40px;
        font-size:16px!important;
        line-height: 40px;
    }

    >>> .ivu-input-group {
        background-color: #E5E5E5 !important;
        border-radius: 18px;
        opacity: 0.6;
    }


    .plug-container >>> .ivu-input-group-prepend .cicon-search {
        font-size:16px!important;

    }
   .plug-container >>> .ivu-input{
       color:#333333!important;
       font-size:14px!important;
   }
    .list .row {
        padding: 0 16px 16px;
        box-sizing:border-box;
        border-bottom: 1px solid #E5E5E5;

    }

    .list .users {
        padding: 14px 16px 0;
        box-sizing: border-box;
    }

    .list .users span:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 60%;
        display: inline-block;
        color: #333333;
        font-size: 14px;
        font-family: 'PingFangSC-Regular';
        font-weight: 400;

    }

    .list .users span:last-child {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
    }

    .list .title {
        display: block;
        float: left;
        max-width: 47%;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: 'PingFangSC-Medium';
        white-space: nowrap;
        font-size: 18px;
        color: #333333;
        font-weight: 550;
        height: 18px;
        line-height: 1;

    }

    .list .inform {
        width: 64px;
        height: 18px;
        margin-left: 15px;
        line-height: 18px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        font-size: 10px;
        font-family: 'PingFangSC-Regular';
    }

    .list .date {
        color: #333333;
        font-family: 'PingFangSC-Regular';
        font-size: 14px;
    }

    >>> .text-ellipsis, .text-ellipsis * {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:rgba(101,109,114,1);
        font-size:12px;
        box-sizing: border-box;


    }
    .text-ellipsis >>> p{
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 98%;
    }

    .button {
        width: 69px;
        height: 75px;
        border-radius: 50%;
        position: fixed;
        bottom: 69px;
        right: 16px;
        text-align: center;
        color: #fff;
        line-height: 56px;
        background: url('/static/tzfb/new.svg') center no-repeat;
    }

    .list .read {
        height: 10px;
        width: 10px;
        background-color: rgba(250, 84, 28, 1);
        float: left;
        border-radius: 50%;
        line-height: 10px;
        margin-top: 3px;
        margin-right: 6px;
    }

    >>> .text-ellipsis p img {
        width: 30px;
    }

    .divNoList {
        text-align: center;
    }
    .nolist {
        color: #B3B3B3;
        margin-top: 19px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: normal;
    }
     .loading{
        padding-top:250px;
    }
</style>
<template>

    <div class="containe" ref="aa">

        <navigator title="通知列表" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <search class="search" style="font-size:#333333" v-model="$_search_$" @on-search="$_Search_$"/>
             
            <ul v-if="$_List_$.length > 0 " class="list">
                <li v-for='item in $_List_$' @click="$_nextPage_$(item)">
                    <Row class="row">
                        <Col span='18'>
                            <span class="read" v-if="item.read == false"></span><span class="title">{{item.title}}</span>
                            <span class="inform" v-if="item.type == 1"
                                  style="display:inline-block;background:rgba(93,181,246,1);">{{item.type |formatType}}</span>
                            <span class="inform" v-if="item.type == 2"
                                  style="display:inline-block;background:rgba(255,142,88,1);">{{item.type |formatType}}</span>
                        </Col>
                        <Col span='6' class="date" style='text-align: right'>{{item.createDate.substring(0,10)}}</Col>
                    </Row>
                    <Row class="users">
                        <span>{{item.users | formatUsers}}</span>
                        <div class="text-ellipsis" 
                             v-html="item.content"></div>
                    </Row>
                </li>
            </ul>

            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有通知哦~</div>
            </div>
            <div class="button" @click="$_xj_$"></div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li>
                    <p><img class="" src="/static/tzfb/tzlb_fsjl.svg" alt=""></p>
                    <p class="active">通知列表</p>
                </li>
                <span></span>
                <li @click="fsjl">

                    <p><img class="" src="/static/tzfb/tzfb_fsxx_l.svg" alt=""></p>
                    <p>发送记录</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import search from '../public/search';
    import navigator from '../public/navigator';
    import loading from '@/views/loading'
    import { Indicator } from 'mint-ui';
    export default {
        components: {
            search,
            navigator,
            loading,
            [Indicator.name]:Indicator

        },
        filters: {
            formatUsers(users) {
                var list = JSON.parse(users)
                var final = []
                for (var i = 0; i < list.length; i++) {
                    final.push(list[i].name)
                }
                return final.join("、")
            },
            formatType(item) {
                if (item == 0) {
                    return '普通消息'
                } else if (item == 1) {
                    return '活动通知'
                } else if (item == 2) {
                    return '缴费通知'
                }
            }
        },
        data() {
            return {
                $_search_$: '',
                userInfo: '',
                 loading:{
                    $_List_$:true
                },
                $_List_$: [],

            }
        },

        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_getList_$();
        },
        methods: {
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_nextPage_$(item) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-xqer', {datar: item, id: 1})

                //this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-xq', {data: item})
            },
            // 新建
            $_xj_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-xj', {ids: 1})
            },
            $_Search_$() {
                 Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/notice/search`,
                    data: {
                        title: this.$_search_$,
                        zoneId: this.userInfo.zoneId,
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            Indicator.close();
                            this.$_List_$ = res.data.data.records;
                        }
                    }
                })
            },
            // 收件箱列表
            $_getList_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/notice/receive`,
                    data: {}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.$_List_$ = res.data.data.records;
                            Indicator.close();
                        }
                    }
                })
            },
            // 发送记录
            fsjl() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-fsjl', {})
            },

        }
    }
</script>