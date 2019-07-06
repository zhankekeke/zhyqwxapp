<style scoped lang="less">
@import "../../../../css/variable.less";
@category-width:82px;
@category-height:63px;
@category-active-bg:#fff;
@category-active-color:@primary-color;
.page-container{
    height:100vh;
    .category{
        box-sizing:border-box;
        height:calc(100vh - 44px);
        border-top:1px solid #ececec;
        .category-group{
            background-color:#f8f8f8;
            .list{
                li{
                    color:#666;
                    display:flex;
                    font-size:12px;
                    position: relative;
                    align-items: center;
                    width:@category-width;
                    height:@category-height;
                    div{
                        text-align:center;
                        max-width:4em;
                        margin:0 auto;
                    }
                }
                li.active{
                    color:@category-active-color;
                    background-color:@category-active-bg;
                    border-left:2px solid @category-active-color;
                }
            }
        }
        .category-list{
            flex:1;
            height:100%;
            overflow-y:auto;
            padding-top:16px;
            overflow-x:hidden;
            .services{
                height:100%;
                padding-left:20px;
                /deep/.ivu-scroll-container{
                    height:100%!important;
                    .ivu-scroll-loader{
                        display:none;
                    }
                }
                .s-item{
                    height:78px;
                    position:relative;
                    padding:17px 0 17px 60px;
                    border-bottom:1px solid #E5E5E5;
                    &:first-child{
                    }
                    .icon{
                        position:absolute;
                        box-sizing:initial;
                        left:0; bottom:13px;
                        width:50px; height:50px;
                        img{
                            display:block;
                            border-radius:2px;
                            height:100%; width:100%;
                            background-color:#f1f1f1;
                        }
                    }
                    .info{
                        .name{
                            color:#333;
                            width:100%;
                            font-size:16px;
                            overflow:hidden;
                            white-space: nowrap;
                            text-overflow:ellipsis;
                        }
                        .desc{
                            margin-top:4px;
                            height:20px;
                            /deep/img{
                                display:none;
                            }
                            &, &/deep/ *{
                                color:#888;
                                width:100%;
                                font-size:12px;
                                overflow:hidden;
                                white-space: nowrap;
                                text-overflow:ellipsis;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="page-container">
        <navigator title="企业服务"/>
        <Row class="category" type="flex">
            <i-col class="category-group" v-if="keyword === void 0">
                <ul class="list">
                    <li :class="{active: onselect === 0}" @click="$_first_load_$(0)">
                        <div style="font-weight:bold">全部分类</div>
                    </li>
                    <li v-for="item in categorys" :class="{active: onselect === item.id}" @click="$_first_load_$(item.id)">
                        <div>{{item.name}}</div>
                    </li>
                </ul>
            </i-col>
            <i-col class="category-list">
                <div v-if="loading && page ===1" style="padding:20px 0">
                    <!-- <loading :center="true"/> -->
                </div>
                <Scroll v-else class="services" :on-reach-bottom="$_loadNextPage_$">
                    <div v-if="!services || !services.length" style="text-align: center; color:#bbbec4; padding:20px 0">-&nbsp;暂无数据&nbsp;-</div>
                    <div v-else class="s-item" v-for="item in services" :key="item.id" @click="$_toServiceInfo_$(item)">
                        <div class="icon">
                            <img :src="item.imageUrl | imgsrc">
                        </div>
                        <div class="info">
                            <p class="name">{{item.name}}</p>
                            <div class="desc" v-html="item.description"></div>
                        </div>
                    </div>
                </Scroll>
            </i-col>
        </Row>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import navigator from '../public/navigator'
// import loading from '@/views/loading'
import {Indicator} from 'mint-ui';
export default {
	props:['category','keyword'],
	components:{navigator, [Indicator.name]:Indicator},
    data(){
		return {
			page:1,
			loading:!0,
			services:[],
            categorys:[],
            oldServicesData:{},
			onselect:parseInt(this.category) || 0
        }
    },
    computed:{
	    ...mapGetters({
		    $_zoneId_$:'currentZoneId'
	    }),
	    ...mapState({
            $_user_$:state=>state.user.info,
	    })
    },
    mounted() {
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
	    this.$_sendQuery_$({
            method:'GET',
            url:`/zone/zone/${this.$_zoneId_$}/service/category/0/list`
        }).then(({data})=>{
        	if(data.code === 0){
        		this.$set(this, 'categorys', data.data);
	        }else{
        		this.$Message.error(data.message)
            }
        }).catch(e=>{
			this.$Message.error('服务分类加载失败')
        })
        this.$_first_load_$()
    },
    methods:{
		loadServices(){
			if(this.loading) return ;
			this.loading = true;
			let onselect = this.onselect;
			return this.$_sendQuery_$({
                method:'POST',
                url:`/zone/zone/${this.$_zoneId_$}/category/${onselect}/enterprise/service/list`,
                headers:{
                	contentType:'application/json'
                },
                data:{
	                status:1,
                	orderBy:'1',
	                name: this.keyword,
                    pageNum: this.page
                }
            }).then(({data})=>{
                this.loading = false
                Indicator.close();
            	if(data.code === 0){
            		if(onselect === this.onselect){
			            this.services = this.services.concat(data.data.records)
                    }
                }
            }).catch(e=>{
            	this.loading = false
            })
        },
	    $_toServiceInfo_$(service){
		    this.$router.push({
                path: '/qyfw/info',
                query:{id:service.id}
		    })
	    },
        $_first_load_$(category){
	        if(category !== void 0){
		        if(this.onselect === category) return;
		        this.oldServicesData[this.onselect] = this.services;
		        this.onselect = category;
		        this.services = [];
	        }
	        this.page = 1;
            this.loading = false;
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
                });
	        this.loadServices();
        },
        $_loadNextPage_$(){
			return new Promise((resolve)=>{
				this.page ++;
				let result = this.loadServices()
                if(result){
                	result.then(e=>[
                			resolve()
                    ])
                }else resolve()
            })
        }
    }
}
</script>
