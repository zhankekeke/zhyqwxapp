<style scoped lang="less">
    @import "../../../../css/variable.less";

    @page-margin: 16px;
    .page-container {
        color: #333;

        .common-title {
            font-size: 15px;
        }

        .service-name {
            padding: 16px;
            box-sizing: border-box;

            .icon {
                width: 50px;
                height: 50px;
                padding: 0 15px 0 0;

                img {
                    display: block;
                    width: inherit;
                    height: inherit;
                    border-radius: 2px;
                    background-color: #f1f1f1;
                }
            }

            .name {
                flex: 1;
                display: flex;
                padding-left: 16px;
                align-items: center;
                font-weight: 550;
            }
        }

        .service-category {
            font-size: 16px;
            padding: 18px @page-margin;
            border-top: 10px solid @default-page-bg;
            border-bottom: 10px solid @default-page-bg;
            font-weight: 550;

            &:before {
                content: "服务分类：";
            }
        }

        .service-detail {
            padding: 0 @page-margin;

            .common-title {
                font-size: 16px;
                font-weight: 500;
                padding: 20px 0 14px;
                box-sizing: border-box;
            }

            .content {
                padding-bottom: 84px;

                &, * {
                    font-size: 14px;
                }
            }
        }

        .footer {
            width: 100%;
            height: 84px;
            padding: 20px 0;
            position: fixed;
            bottom: 0;
            left: 0;
            text-align: center;
            background-color: #fff;

            .ivu-btn {
                width: 296px;
                height: 44px;
                border: none;
                font-size: 16px;
                border-radius: 44px;
                background-color: @primary-color;
            }
        }
    }
</style>
<template>
    <div class="page-container">
        <navigator :title="service.name"/>
        <Row class="service-name" type="flex">
            <i-col class="icon">
                <img :src="service.imageUrl|imgsrc">
            </i-col>
            <i-col class="name common-title text-ellipsis">{{service.name}}</i-col>
        </Row>
        <div class="service-category common-title">{{service.categoryName}}</div>
        <div class="service-detail">
            <p class="common-title">服务介绍</p>
            <div class="content" v-html="service.description"></div>
        </div>
        <div class="footer">
            <Button type="primary" @click="toConsult">立即咨询</Button>
        </div>
    </div>
</template>
<script>
import navigator from '../public/navigator'
import {mapState, mapGetters} from 'vuex'
import {Indicator} from 'mint-ui';

export default {
	props:['id'],
    components: {navigator, [Indicator.name]:Indicator},
    data() {
        return {
            service: {}
        }
    },
	computed:mapGetters({
		zoneId:'currentZoneId'
	}),
    created(){
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
        });
	    this.add();
    	this.info();
    },
    methods: {
        toConsult() {
            this.$root.$_Route_$('user', 'mobile', 'ygsygjbx', {id: 3})
        },
        // 浏览量加一
        add() {
            this.$_sendQuery_$({
                method: "GET",
                url: `/zone/zone/${this.zoneId}/enterprise/service/${this.id}/view`,
                data: {},
                headers: {"Content-type": "application/json"}
            })
        },
        info() {
            this.$_sendQuery_$({
                data: {},
                method: "GET",
                url: `/zone/zone/${this.zoneId}/enterprise/service/${this.id}`,
                headers: {"Content-type": "application/json"}
            }).then((rsp) => {
                if (rsp.status === 200) {
                    if (rsp.data.code === 0) {
                        Indicator.close();
                        this.service = rsp.data.data
                        this.add()
                    }
                }
            })
        }
    }
}
</script>
