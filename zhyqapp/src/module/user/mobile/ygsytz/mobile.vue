<style scoped>
    .container {
        font-size: 14px;
        color: #000;
        font-weight: 400;
    }

    .wrap {
        box-sizing: border-box;
        font-size: 14px;
        color: rgb(51, 51, 51);
        padding: 0 15px;
        border-top: 10px solid rgb(246, 246, 246);

    }

    .item1 {
        background: rgb(255, 255, 255);
        line-height: 4;
        height: 60px;
        margin-top: 10px;
    }

    .list img {
        width: 70px;
        height: 70px;
        /*vertical-align: middle;*/
    }

    .list .mes {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(136, 136, 136);
        font-size: 12px;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: rgb(136, 136, 136);
        font-size: 12px;

        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .list li {
        box-sizing: border-box;
        padding: 15px 0;

        background: white;
        border-bottom: 1px solid #ececec;
        height: 100px
    }

    .icon {
        color: #ef2300;
        margin-right: 5px;
        transform: scale(0.8);
        height: 40px;
        margin-left: 6px;
    }

</style>
<template>

    <div class="container" ref="aa">

        <navigator title="通知" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="item1">
                <RadioGroup v-model="switchData" type="button" @on-change="changeSwitch">
                    <Radio label="全部"></Radio>
                    <Radio label="未读"></Radio>
                </RadioGroup>
                <div style="float: right;font-size: 12px">全部设置为已读</div>
            </div>


            <ul class="list">
                <li v-for='item in $_List_$'>
                    <div style="float: left">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550741275632&di=17264302e14305d9f3d2076e57fffe48&imgtype=0&src=http%3A%2F%2Fs.wasu.cn%2Fdata%2Fimages%2F201508%2F06%2F55c3179434c85.jpg"
                             alt="">
                    </div>
                    <div style="padding-left: 90px; padding-right: 30px;">
                        <div>
                            <p style="float: left;margin-top: 10px;">{{item.title}}</p>
                            <!--<Icon v-if='item.read' type="record" class="icon"></Icon>-->
                            <Icon type="record" class="icon"></Icon>
                        </div>
                        <div class="mes">
                            <span v-html="item.content"></span>
                        </div>

                        <!--<Row>-->
                        <!--<p style="float: left;margin-top: 10px;">{{item.createUserName}}</p>-->
                        <!--<Icon v-if='item.read' type="record" class="icon"></Icon>-->
                        <!--</Row>-->
                        <!--<Row class="desc">-->
                        <!--<span v-html="item.content" :row="2"></span>-->
                        <!--</Row>-->
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import navigator from '../public/navigator';

    export default {
        components: {
            navigator,
        },
        data() {
            return {
                switchData: '全部',
                $_List_$: [],
            }
        },
        created() {
            this.$_getList_$()
        },
        methods: {
            $_tongzhi_$() {
                this.$root.inparams.id;
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            changeSwitch(res) {
                console.log(res);
                console.log(this.switchData)
            },
            $_getList_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/notice/receive`,
                    data: {
                        pageNum: 1,
                        pageSize: 12
                    }
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.$_List_$ = res.data.data.records;
                        }
                    }
                })
            }
        }
    }
</script>