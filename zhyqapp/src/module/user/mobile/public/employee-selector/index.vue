<style lang="less" scoped>
.container{
    width:100%;
    height:100%;
    .container-body{
        height:100%;
        overflow-y:auto;
        overflow-x:hidden;
    }
    .flex-hide{
        flex:1;
        overflow:hidden;
    }
    /deep/.ivu-modal,
    /deep/.ivu-modal-content{
        top:0;
        margin:0;
        width:100%;
        height:100%;
        border-radius:0;
        .ivu-modal-header,
        .ivu-modal-footer{
            padding:0;
            width:100%;left:0;
            position:absolute;
            &.ivu-modal-header{
                top:0;
            }
            &.ivu-modal-footer{
                bottom:0;
            }
        }
        .ivu-modal-body{
            height:100%;
            overflow-y:auto;
            padding:45px 0 50px;
            background-color:#F6F6F6;
        }
    }
    .card{
        width:100%;
        padding:0 16px;
        margin-top:10px;
        background-color:#fff;
    }
    .info{
        height:66px;
        flex-wrap: nowrap;
        align-items: center;
        .company-logo{
            width:40px;
            height:40px;
            overflow:hidden;
            img{
                width:inherit;
                height:inherit;
                border-radius:50%;
            }
        }
        .txt{
            padding:0 8px;
            .company-name{
                color:#333;
                font-size:18px;
                font-weight:bold;
            }
            .level-path{
                font-size:16px;
                .swiper-container{
                    .swiper-slide{
                        width:auto;
                        padding:.2em 0;
                        line-height:1em;
                        position:relative;
                        .item{
                            white-space:nowrap;
                            /deep/.ivu-breadcrumb-item-link{
                                color:#57a3f3;
                            }
                        }
                        /deep/ .ivu-breadcrumb-item-separator{
                            font-size:12px;
                        }
                    }
                    .swiper-slide:last-child{
                        /deep/.ivu-breadcrumb-item-link{
                            color:#333;
                        }
                        /deep/ .ivu-breadcrumb-item-separator{
                            display:none;
                        }
                    }
                }
            }
        }

    }
    .list{
        .empty{
            opacity: .8;
            padding: 10px;
            text-align: center;
            p{
                color: #999;
                font-size:16px;
                line-height:2em;
            }
            a{
                font-size:12px;
            }
        }
        .title{
            font-size:18px;
            font-weight:500;
            line-height:1em;
            padding:19px 0 10px;
        }
        .list-item{
            margin:0 -16px;
            border-bottom:1px solid #E5E5E5;
            &:last-child{
                border-bottom:none;
            }
            .ivu-row-flex{
                height:54px;
                padding:6px;
                align-items:center;
                .checkbox{
                    padding:10px;
                    .ivu-checkbox-group-item{
                        margin:0;
                        display:block;
                        /deep/.ivu-checkbox{
                            width:16px;
                            height:16px;
                            display:block;
                            &+span{
                                display:none;
                            }
                        }
                    }
                }
                .face{
                    padding-right:12px;
                    img{
                        width:38px;
                        height:38px;
                        border-radius:50%;
                    }
                }
                .flex-hide{
                    font-size:14px;
                    .ivu-icon{
                        float:right;
                        padding:4px 10px;
                    }
                }
            }
        }
    }
    .footer{
        font-size:18px;
        font-weight:400;
        border-radius:0;
        bottom:0; left:0;
        position:absolute;
        width:100%; height:49px;
    }
}
</style>
<template>
    <Modal class="container" :value="open" :closable="false" @on-visible-change="changeOpenState">
        <navigator slot="header" title="添加" @back="cancel"/>
        <div class="container-body">
            <Row class="card info" type="flex">
                <i-col class="company-logo">
                    <img src="/static/icons/company@3x.png" :alt="info.enterpriseName">
                </i-col>
                <i-col class="txt flex-hide">
                    <p class="company-name text-ellipsis">{{info.enterpriseName}}</p>
                    <div class="level-path one-line" @click="toNextLevel(0)">
                        <breadcrumb separator=">">
                            <swiper :options="scrollOptions" ref="slevel">
                                <swiper-slide v-for="(item, index) in currentNodePath" :key="index">
                                    <breadcrumb-item class="item" @click.native.stop.prevent="toNextLevel(index+1)">
                                        <span class="text-ellipsis" style="display:inline-block; max-width:10em;">{{item.node.name}}</span>
                                        <i class="cicon-go" slot="separator"></i>
                                    </breadcrumb-item>
                                </swiper-slide>
                            </swiper>
                        </breadcrumb>
                    </div>
                </i-col>
            </Row>
            <Row class="card list">
                <loading v-if="!department" center="center" />
                <div v-show="department && !currentList.length" class="empty">
                    <p>-暂无数据-</p>
                    <a v-if="currentNodePath.length" href="javascript:;" @click="toNextLevel(currentNodePath.length-1)">返回上一级部门</a>
                </div>
                <i-col v-for="(item, index) in currentList" :key="item.id" class="list-item">
                    <Row type="flex">
                        <i-col class="checkbox">
                            <Checkbox v-model="item.isSelected"
                                      :indeterminate="item.isIndeterminate"
                                      :disabled="!item.employeeCount || item.constValue !== void(0)"
                            ></Checkbox>
                        </i-col>
                        <i-col class="face" v-if="!item.isDepartment">
                            <img :src="item.node.faceUrl | imgsrc(default_face_img)"/>
                        </i-col>
                        <i-col class="flex-hide" @click.native="toNextLevel(item)">
                            <Icon type="chevron-right" v-if="item.isDepartment"></Icon>
                            <p class="text-ellipsis">{{item.node.name}}</p>
                        </i-col>
                    </Row>
                </i-col>
            </Row>
            <Row class="card list" v-if="employeesRecent.length">
                <i-col class="title">常用联系人</i-col>
                <i-col v-for="(item) in employeesRecent" :key="item.id" class="list-item">
                    <Row type="flex">
                        <i-col class="checkbox">
                            <Checkbox :value="checkExtendsRecent(item.id)"
                                      :disabled="checkHasConstValue(item.id)"
                                      @on-change="updateRecent(item.id, $event)"></Checkbox>
                        </i-col>
                        <i-col class="face">
                            <img :src="item.faceUrl | imgsrc(default_face_img)" />
                        </i-col>
                        <i-col class="flex-hide">
                            <p class="text-ellipsis">{{item.name}}</p>
                        </i-col>
                    </Row>
                </i-col>
            </Row>
        </div>
        <Button class="footer" @click="confirm" type="primary" slot="footer">确定</Button>
    </Modal>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
import loading from '@/views/loading'
import navigator from '../navigator'
import newItem from './new-item'
export default {
	components:{navigator, loading, swiper, swiperSlide},
    props:{
		constValues:{
			type:Object,
            default:()=>({})
        },
		select:{
			type:Array,
            default:()=>([])
        },
		open:{
			type:Boolean,
            default:()=>!1
        }
    },
    data(){
		return {
			department:null,
			employeesRecent:[],
            currentNodePath:[],
            default_face_img:'/static/hysyy/faceimg.svg',
			scrollOptions:{
				freeMode: true,
				observer: true,
				mousewheel: false,
				observeParents:true,
				slidesPerView: 'auto'
			}
        }
    },
    mounted(){
	    this.changeOpenState(true);
    },
    computed:{
		...mapState({
            info:state=>state.user.info,
            company:state=>state.app
         }),
	    currentList(){
		    return this.currentNodePath.length
                    ? this.currentNodePath[this.currentNodePath.length - 1].child
                    : this.department && this.department.child || [];
        }
    },
    methods:{
	    cancel(){
		    if(this.currentNodePath.length){
		    	this.toNextLevel(-1);
            }else{
		    	this.currentNodePath = [];
			    this.$emit('update:open', false)
            }
	    },
        update(){
	        let values = (this.department && this.department.values || []).map(item=>{
		        item.id = item.employeeId;
		        return item
	        });
	        this.$emit('input', values);
	        this.$emit('update:select', values.map(item=>item.employeeId));
	        return true
        },
	    confirm(){
		    this.update();
		    this.$emit('update:open', false);
		    this.currentNodePath = [];
	    },
        toNextLevel(item){
	    	if(typeof item === 'number'){
	    		this.currentNodePath.splice(item)
            }else if(item.isDepartment){
		        this.currentNodePath.push(item)
            }
	        this.$nextTick(()=>{
		        this.$refs.slevel.swiper.slideTo(this.currentNodePath.length)
	        });
        },
	    updateRecent(id, value){
		    this.department.setStateById(id, value)
	    },
	    changeOpenState(state){
		    if(state){
			    this.employeesRecent.length || this.getRecentEmployee();
                (this.department && !this.department.resetState(this.select) && (this.update(),true)) || this.getDepartment();
		    }
	    },
	    getDepartment(){
		    this.$_sendQuery_$({
			    method:'GET',
			    url: `/company/company/${this.info.enterpriseId}/department`
		    }).then(({data})=>{
			    if(data.code === 0){
				    this.department = new newItem(data.data, this.select, ()=>this.$forceUpdate(), this.constValues);
				    this.update()
			    }
		    })
	    },
        getRecentEmployee(){
	    	this.$_sendQuery_$({
                url:'/company/company/employee/recent/list',
                method:'post'
            }).then(({data})=>{
			    if(data.code === 0){
			    	this.employeesRecent = data.data;
                }
		    })
        },
	    checkHasConstValue(id){
	    	return this.constValues.hasOwnProperty(id);
        },
        checkExtendsRecent(id){
	    	return this.checkHasConstValue(id)?!!this.constValues[id]: (this.department && this.department.values || []).map(item=>item.employeeId).indexOf(id) !== -1
        }
    }
}
</script>
