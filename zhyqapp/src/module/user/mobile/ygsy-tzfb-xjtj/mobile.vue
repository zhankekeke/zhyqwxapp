<style scoped>
    .header {
        height: 50px;
        width: 100%;
        line-height: 50px;
        left: 0;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
    }

    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 5px;
        font-size: 20px;
    }

    .wrap {
        padding: 25px 22px 0;
    }

    .name {
        padding-left: 15px;
        font-size: 14px;
        line-height: 50px;
        border-bottom: 10px solid #ececec;
        border-top: 10px solid #ececec;
        margin-top: 50px
    }

    >>> .ivu-tree ul {
        font-size: 14px;
        margin-left: 12px;
        border-bottom: 1px solid #ececec;
    }
</style>
<template>

    <div class="lm" ref="aa">
        <!-- 首页 -->
        <div class='header'>
            <Icon @click="$_back_$" type="ios-arrow-back" class="back"/>
            添加
        </div>
        <div class="name">
            <p>{{userInfo.enterpriseName}}</p>
        </div>
        <!-- 中间部分 -->
        <div class="wrap">

            <Tree :data="$_list_$"></Tree>

        </div>
    </div>
</template>

<script>
    import controler from './controler.js';

    export default {
        mixins: [controler],
        data() {
            return {
                $_search_$: '',
                $_list_$: [],
                userInfo: '',
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            // console.log(this.userInfo);
            this.$_getList_$()
        },
        methods: {
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-xj', {})
            },
            $_Search_$() {
            },
            $_getList_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/company/${this.userInfo.enterpriseId}/department`,
                    data: {}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            let list = res.data.data;

                            for (let i = 0; i < list.length; i++) {
                                list[i].title = list[i].name;
                                list[i].expand = true;
                                list[i].children = list[i].child;
                                if (list[i].child) {
                                    let listItem = list[i].child;
                                    for (let y = 0; y < listItem.length; y++) {
                                        list[i].children[y].title = listItem[y].name;
                                        list[i].children[y].expand = true;
                                        list[i].children[y].children = listItem[y].child;
                                    }
                                }
                            }
                            this.$_list_$ = list;
                            console.log(this.$_list_$)
                        }
                    }
                })
            }
        }
    }
</script>