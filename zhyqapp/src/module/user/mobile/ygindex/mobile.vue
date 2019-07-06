<style scoped lang="less">
@import "../../../../css/variable.less";
@left-margin-right:20px;
@page-margin:0 @left-margin-right;
.container{
    background-color:#fff;
    .zone-box{
        color:#fff;
        height:40px;
        font-size:14px;
        line-height:40px;
        padding:@page-margin;
        background-color:@primary-color;
        p:before{
            content:'';
            margin-right:7px;
            display:inline-block;
            vertical-align:middle;
            width:16px; height:16px;
            background:url(/static/ygindex/positioning@3x.png) center no-repeat;
            background-size:13px 16px;
        }
    }
    .notification{
        height:39px;
        font-size:14px;
        background-color:#F7F7F7;
        padding:9px @left-margin-right;
        .icon{
            float:left;
            display:block;
            margin-top:4px;
            height:15px; width:15px;
        }
        .list{
            line-height:23px;
            margin:0 30px 0 22px;
            .swiper-slide{
                height:1.5em;
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
        .more{
            color:#000;
            float:right;
            margin-top:3px;
            line-height:16px;
            span{
                color:#fff;
                padding:0 8px;
                text-align:center;
                border-radius:9px;
                background-color:@primary-color;
            }
        }
        &:after{
            clear:both;
            content:'';
            display:block;
        }
    }
    .swiper-banner{
        position:relative;
        padding:24px 0 19px;
        .swiper-container{
            height:180px;
            padding:0 20px;
            .swiper-slide{
                top:0;
                overflow:hidden;
                border-radius:8px;
                transition:height 300ms, top 300ms;
                &.swiper-slide-active{
                    top:0!important;
                    height:100%!important;
                }
                &.swiper-slide-next,
                &.swiper-slide-prev,
                &.swiper-slide-duplicate-next,
                &.swiper-slide-duplicate-prev{
                    top:20px;
                    height:140px;
                }
                .banner-item{
                    position:relative;
                    height:100%;
                    width:100%;
                    img{
                        display:block;
                        height:100%;
                        width:100%;
                    }
                    .title{
                        color:#fff;
                        width:100%;
                        height:49px;
                        padding:0 1em;
                        font-size:16px;
                        line-height:49px;
                        bottom:0; left:0;
                        font-weight:bold;
                        position:absolute;
                        text-align:center;
                        background-color:rgba(6, 6, 6, 0.4);
                        overflow:hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .swiper-pagination{
            width:100%;
            height:3px;
            bottom:0; left:0;
            /deep/.swiper-pagination-bullet{
                width:18px;
                height:3px;
                margin:0 5px;
                border-radius:6px;
                vertical-align:top;
                background-color:rgba(0, 0, 0, 0.3);
                &.swiper-pagination-bullet-active{
                    background-color:#00C1DE;
                }
            }
        }
    }

    .apps-box{
        padding:@page-margin;
        .fixed-menus{
            margin:0 -8px;
            padding:20px 0;
            text-align:center;
            .ivu-col{
                flex:1;
                text-align:center;
                &:nth-child(1) .fixed-menu-item{
                    background-color:#5DB5F6;
                }
                &:nth-child(2) .fixed-menu-item{
                    background-color:#00C1DE;
                }
                &:nth-child(3) .fixed-menu-item{
                    background-color:#FF8E58;
                }
                .fixed-menu-item{
                    margin:0 auto;
                    border-radius: 8px;
                    padding:13px 0 11px;
                    width:100px; height:69px;
                    .menu-icon{
                        width:22px;
                        height:22px;
                        margin:0 auto;
                        img{
                            max-width:100%;
                            max-height:100%;
                        }
                    }
                    .menu-name{
                        color:#fff;
                        font-size:14px;
                        padding-top:9px;
                        line-height:1em;
                    }
                }
            }
        }
        .menus{
            .title{
                color:#212121;
                font-size:18px;
                line-height:1em;
                padding:10px 0 0;
                .more{
                    float:right;
                    color:#212121;
                    font-size:14px;
                }
            }
            .list{
                text-align: center;
                margin-bottom:30px;
                .ivu-col{
                    margin-top:30px;
                    .menu-icon{
                        width:50px;
                        height:50px;
                        margin:0 auto;
                        border-radius:50%;
                        position:relative;
                        background-color:#f7f7f7;
                        img{
                            max-width:22px;
                            max-height:24px;
                            position:absolute;
                            top:50%; left:50%;
                            transform:translate(-50%, -50%);
                        }
                    }
                    .menu-name{
                        font-size:13px;
                        margin-top:12px;
                    }
                }
            }
        }
    }
}
.zone-selector{
    .item{
        padding:15px 3px 5px;
        border-bottom:1px solid #eee;
        .name{
            font-size:15px;
        }
        .address{
            color:#999;
            font-size:12px;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
}
/deep/.ivu-modal-footer{
    display:none;
}
.loading-modal /deep/ .ivu-modal-content{
    background-color: transparent;
}
</style>
<template>
    <div class="container">
        <navigator :back-icon="false" title="首页"/>
        <div class="zone-box" @click="openZoneModal = true">
            <p v-if="currentZone">
                <span>{{currentZone.name}}</span>
                <Icon type="ios-arrow-right"></Icon>
            </p>
            <p v-else>加载中...</p>
        </div>
        <div class="notification">
            <img class="icon" src="/static/ygindex/notification@3x.png" />
            <a href="javascript:;" class="more" @click="toMessage">
                <span class="count">{{unreadCount}}</span>
                <Icon type="ios-arrow-forward"></Icon>
            </a>
            <div class="list">
                <div class="">
                    <swiper>
                        <swiper-slide v-for="(item, index) in message" :key="index" @click.native="toMessage(item)">{{item.content}}</swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="swiper-banner">
            <swiper :options="bannerOpts" ref="bannerSwiper">
                <template v-if="carousel.length">
                    <swiper-slide v-for="item in carousel" :key="item.id" @click.native="toBanner(item)">
                        <div class="banner-item">
                            <img :src="item.image|imgsrc" :alt="item.info">
                            <div class="title">{{item.name}}</div>
                        </div>
                    </swiper-slide>
                </template>
                <swiper-slide v-else>
                    <div class="banner-item">
                        <img src="/static/ygindex/banner@2x.png">
                        <div class="title">智慧园区</div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
        <div class="apps-box">
            <Row class="fixed-menus" v-if="!isVisitor">
                <i-col v-for="(item, index) in fixedMenu" :key="index" :span="8">
                    <div class="fixed-menu-item" @click="to(item)">
                        <div class="menu-icon">
                            <img :src="item.fixedIcon" :alt="item.name">
                        </div>
                        <p class="menu-name">{{item.name}}</p>
                    </div>
                </i-col>
            </Row>
            <div class="menus">
                <div class="title">
                    <span>常用</span>
                    <a class="more" href="javascript:;" @click="toMore()" v-if="!isVisitor">更多</a>
                </div>
                <Row class="list">
                    <i-col :span="6" v-for="(item, index) in commonMenu" :key="index" class="icon" v-if="hasAccess(item)">
                        <div class="list-item" @click="to(item)">
                            <div class="menu-icon">
                                <img :src="item.icon" :alt="item.name">
                            </div>
                            <p class="menu-name">{{item.name}}</p>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <footbar/>
        <Modal v-model="openZoneModal">
            <ul class="zone-selector">
                <li class="item" v-for="(item, index) in zoneList" @click="setCuttentZone(((openZoneModal=false),item))">
                    <p class="name">{{item.name}}</p>
                    <p class="address">{{item.address}}</p>
                </li>
            </ul>
        </Modal>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapGetters, mapActions } from 'vuex'
import navigator from '../public/navigator'
import footbar from '../public/footbar'
import {ACCESS_VISITOR, visitorMenus} from "@/store/module/menus/menus";

export default {
    components:{navigator, footbar, swiperSlide, swiper},
    data(){
        return {
            unreadCount:0,
            message:[],
            openZoneModal:false,
            carousel:[],
            bannerOpts:{
                loop:true,
                observe:true,
                observeParents:true,
                observeSlideChildren:true,
                spaceBetween:10,
                loopAdditionalSlides:3,
                pagination:{
                    el:'.swiper-pagination'
                }
            }
        }
    },
    computed:{
        ...mapGetters(['currentZone','currentZoneId','role']),
        ...mapState({
            zoneList:state=>state.app.zone.list,
            fixedMenu:state=>state.menus.fixedMenu,
            commonMenu(state){
                return this.isVisitor?visitorMenus:state.menus.commonMenu
            }
        }),
        isVisitor(){
            return this.role === ACCESS_VISITOR;
        }
    },
    mounted(){
        new Promise(resolve => {
            let checkAuth = ()=>{
                if(!this.$store.getters.token){
                    this.$router.push('/login')
                }else{
                    resolve(true)
                }
            };
            if(this.$route.query.code && this.$store.state.app.isWeixin){
                this.$root.$_try_login_$(this.$route.query.code).then(result=>{
                    if(result === true) {
	                    this.$router.replace('/ygindex');
	                    resolve(true);
                    } else checkAuth()
                })
            }else checkAuth()
        }).then(()=>{
            this.queryZone();
            this.queryMessage(this.currentZoneId);
            this.queryCarousel(this.currentZoneId);
        })
    },
    methods:{
        ...mapActions(['setZoneList','setCuttentZone']),
        to(item){
            this.$root.$_Route_$(...item.url)
        },
        toBanner(item){
            if(/([\w-]+:)?\/\//.test(item.appUrl)){
                window.location = item.appUrl;
            }else this.$root.$router.push(item.appUrl)
        },
        toMessage(item){
            this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxx-list')
        },
        toMore(){
            this.$router.push('/ygindex/gdyy');
        },
        queryZone(){
            this.$_sendQuery_$({
                method:'POST',
                url:`/zone/zone/search`,
                headers:{
                    contentType:'application/json'
                },
                data:{
                    pageSize:1000
                }
            }).then(({data})=>{
                if(data.code === 0){
                    this.setZoneList(data.data.records)
                }
            })
        },
        queryMessage(zoneid){
            this.$_sendQuery_$({
                data:{},
                method:'POST',
                headers:{contentType:'application/json'},
                url:`/company/message/${zoneid}/unread/count`
            }).then(({data})=>{
                if(data.code === 0){
                    if(data.data){
                        this.message = [data.data];
                        this.unreadCount = data.data.unreadCount
                    }else{
                        this.message = [];
                        this.unreadCount = 0;
                    }
                }
            });
        },
        queryCarousel(zoneId){
            return this.$_sendQuery_$({
                method:'POST',
                headers:{contentType:'application/json'},
                url:'/operate/mallCarousel/queryCarouselImageList',
                data:{zoneId, typeCode:0, type:1}
            }).then(({status, data})=>{
                if(data.code === 0){
                    this.$refs.bannerSwiper.swiper.destroy(true, true);
                    this.carousel = data.data;
                    this.$nextTick(()=>{
                        this.$refs.bannerSwiper.mountInstance();
                    })
                }else{
                    this.$Message.error(data.message||'活动加载失败！')
                }
            })
        },
        updateSwiperPagination(name, el){
            this.$refs[name].swiper.pagination.update({el})
        },
        hasAccess(item){
            return (item.access & this.role) > 0
        }
    },
    watch:{
        currentZoneId(zoneid){
            this.queryMessage(zoneid);
            this.queryCarousel(zoneid);
        }
    }
}
</script>
