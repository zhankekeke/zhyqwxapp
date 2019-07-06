<style scoped lang="less">
@space-between:20px;
@text-color:#212121;
@background-color:#f6f6f6;
.page-container{
    min-height:100vh;
    background-color:@background-color;
    .plug-container{
        background-color:#fff;
        /deep/.ivu-input,
        /deep/.ivu-input-group-prepend{
            &,&.empty,&::-webkit-input-placeholder,i.ivu-icon{
                color:#B3B3B3;
            }
        }
    }
    .loading{
        padding:34px 0;
    }
    .box{
        margin-bottom:2px;
        background-color:#fff;
        padding-left:@space-between;
        padding-right:@space-between;
        border-bottom:10px solid @background-color;
        p{
            font-weight:550;
            color:#333333;
            font-family:'PingFangSC-Medium';
            font-size:18px;
        }
        .service-top{
            padding-top:6px;
            .swiper-container{
                height:180px;
                .swiper-slide{
                    top:0;
                    overflow:hidden;
                    border-radius:8px;
                    transition:height 300ms, top 300ms;
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
            .simple-list{
                padding-top:16px;
                padding-bottom:10px;
                text-align:center;
                img{
                    display:block;
                    margin:0 auto;
                    overflow:hidden;
                    border-radius:50%;
                    width:50px; height:50px;
                }
                p.text-ellipsis{
                    color:@text-color;
                    font-size:13px;
                    line-height:1em;
                    padding:14px 0 16px;

                }
            }
        }
        .text-ellipsis{
            height:20px;
           /deep/ p{
                   overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
           }
        }
        .service-box{
            width:166px;
            max-width:90%;
            margin:0 auto 12px;
            a{
                height:86px;
                display:block;
                border-radius:6px;
                background-color:#f1f1f1;
                img{
                    width:100%;
                    height:100%;
                    border-radius:4px;
                }
            }
            .text{
                padding:10px 0;
                line-height:1em;
                .title{
                    color:#333;
                    font-size:14px;
                }
                .desc{
                    color:#656d72;
                    font-size:12px;
                    padding-top:6px;
                    /deep/img{
                        display:none;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="page-container">
        <navigator title="企业服务" :space="15" :back-icon="false"/>
        <search v-model="keyword" @on-search="search"/>
        <div class="box">
            <div class="service-top">
                <swiper :options="bannerOpts" ref="banner">
                    <swiper-slide v-for="item in carousel" :key="item.id" @click.native="toBanner(item)">
                        <div class="banner-item">
                            <img :src="item.image | imgsrc" :alt="item.info">
                            <div class="title">{{item.name}}</div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="loading" v-if="loading.category">
                    <!-- <loading :center="true"/> -->
                </div>
                <Row v-else class="simple-list" :class="{short:serviceCategorys.length<3}" type="flex">
                    <i-col span="18">
                        <Row>
                            <i-col span="8" v-for="item in serviceCategorys" :key="item.id" @click.native="$_toCategory_$(item)">
                                <img :src="item.icon | imgsrc"/>
                                <p class="text-ellipsis">{{item.name}}</p>
                            </i-col>
                        </Row>
                    </i-col>
                    <i-col span="6" @click.native="$_toCategory_$()">
                        <img src="/static/qyfw/quanbu.png">
                        <p class="text-ellipsis">全部</p>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="box">
            <p style="font-size:18px; padding:12px 0;">热门服务 </p>
            <div v-if="loading.hotService" class="loading">
                <!-- <loading :center="true"/> -->
            </div>
            <Row v-else class="service-hot">
                <i-col :xs="12" :sm="8" :md="6" v-for="item in hotServices" :key="item.url" @click.native="$_toService_$(item)">
                    <div class="service-box">
                        <a :href="item.url">
                            <img :src="item.imageUrl | imgsrc">
                        </a>
                        <div class="text">
                            <p class="title">{{item.name}}</p>
                            <div class="desc text-ellipsis" v-html="item.description"></div>
                        </div>
                    </div>
                </i-col>
            </Row>
        </div>
        <footbar/>
    </div>
</template>
<script>
import navigator from '../public/navigator'
import footbar from '../public/footbar';
import search from '../public/search'
// import loading from '@/views/loading'
import 'swiper/dist/css/swiper.css'
import { mapGetters } from 'vuex'
import {Indicator} from 'mint-ui';
import { swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
	components:{ navigator, footbar, search , swiper, swiperSlide, [Indicator.name]:Indicator},
    data(){
		return {
			keyword:'',
            carouselCfgs:{
	            spaceBetween:10
            },
            loading:{
				category:true,
                hotService:true
            },
			hotServices:[],
            serviceCategorys:[],
			carousel:[],
			bannerOpts:{
				loop:true,
				observe:true,
				observeParents:true,
				observeSlideChildren:true,
				spaceBetween:10,
				loopAdditionalSlides:1
			}
        }
    },
    computed:mapGetters({
	    zoneId:'currentZoneId'
    }),
    mounted(){
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
        });
	    this.queryServiceCategory()
        this.queryHotServices()
        this.queryCarousel()
    },
    methods:{
		search(keyword){
			this.$router.push({
				path:'/qyfw/list',
				query:{keyword: this.keyword}
			})
		},
	    $_toCategory_$(category){
		    this.$router.push({
			    path:'/qyfw/list',
			    query:{category: category && category.id}
		    })
        },
	    $_toService_$(service){
		    this.$router.push({
                path:'/qyfw/info',
                query:{id: service.id}
            })
        },
	    queryCarousel(){
		    return this.$_sendQuery_$({
			    method:'POST',
			    headers:{contentType:'application/json'},
			    url:'/operate/mallCarousel/queryCarouselImageList',
			    data:{zoneId:this.zoneId, type:1, typeCode:2}
		    }).then(({status, data})=>{
			    if(data.code === 0){
                    Indicator.close();
				    this.carousel = data.data;
				    this.$refs.banner.swiper.destroy(false);
				    this.$nextTick(()=>{
					    this.$refs.banner.swiper.init();
					    this.$refs.banner.bindEvents()
				    })
			    }else{
				    this.$Message.error(data.message||'活动加载失败！')
			    }
		    })
	    },
	    queryHotServices(){
		    this.$_sendQuery_$({
			    method:'POST',
			    url: `/zone/zone/${this.zoneId}/category/0/enterprise/service/list`,
			    headers:{
				    'content-type':'application/json'
			    },
			    data:{
				    status: 1,
				    orderBy:'1'
			    }
		    }).then(({data})=>{
			    this.loading.hotService = false
			    if(data.code === 0){
				    this.hotServices = data.data.records
			    }else{
				    this.$Message.error(data.message)
			    }
		    }).catch(e=>{
			    this.$Message.error('热门服务加载失败')
		    })
	    },
	    toBanner(banner){
		    if(/([\w-]+:)?\/\//.test(banner.appUrl)){
			    window.location = banner.appUrl;
		    }else this.$root.$router.push(banner.appUrl)
	    },
        queryServiceCategory(){
	        this.$_sendQuery_$({
		        method:'POST',
		        url: `/zone/zone/${this.zoneId}/service/category/0/pageList`,
		        headers:{
			        'content-type':'application/json'
		        },
		        data:{
			        status:1
		        }
	        }).then(({data})=>{
                
		        this.loading.category = false
		        if(data.code === 0){
			        this.serviceCategorys = data.data.records.splice(0, 3)
		        }else{
			        this.$Message.error(data.message)
		        }
	        }).catch(e=>{
		        this.$Message.error('分类加载失败')
	        })
        }
    }
}
</script>
