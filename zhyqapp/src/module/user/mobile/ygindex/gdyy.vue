<style scoped lang="less">
.container{
    min-height:100%;
    background-color: #F6F6F6;
    >*{
        padding:0 15px;
        background-color:#fff;
    }
    .index-yy{
        height:41px;
        overflow: hidden;
        padding:10px 15px;
        border-top:1px solid #EBEBEB;
        .yys:first-child{
            margin-left:0;
        }
        .yys{
            float:left;
            height:21px;
            min-width:21px;
            margin-left:16px;
            img{
                height:100%;
                display:block;
                margin:0 auto;
            }
            .ivu-icon{
                font-size:20px;
                margin-top:8px;
            }
        }
        a{
            float:right;
            color:#029BFA;
            display:block;
            font-size:12px;
            line-height:20px;
            text-align:center;
            width:40px; height:20px;
            background-color:#DFF2FE;
            border:1px solid currentColor;
        }
    }
    .index-yy:after{
        content:'';
        display:block;
        clear:both;
    }
    .yy-box{
        margin-top:10px;
        .box-title{
            color:#333;
            padding:25px 0;
            font-size:17px;
        }
        .box-container{
            text-align: center;
            .ivu-col{
                margin-bottom:16px;
                .box-item{
                    width:80px;
                    height:76px;
                    margin:0 auto;
                    padding:12px 0;
                    position:relative;
                    .menu-icon{
                        margin:0 auto;
                        display:block;
                        width:auto; height:25px;
                    }
                    .menu-name{
                        font-size:12px;
                        margin-top:10px;
                    }
                    .ivu-icon-minus-round{
                        color:#fff;
                        font-size:14px;
                        padding:1.5px 3px;
                        border-radius:50%;
                        position:absolute;
                        top:-4px; right:-4px;
                        background-color:#f00;
                    }
                }
                .add-item{
                    .ivu-icon{
                        font-size:24px;
                    }
                }
            }
        }
    }
}
.container.edit-mode{
    .box-item{
        background-color:#f7f7f7;
    }
}
.slide-left-enter-active, .slide-left-leave-active {
    transition: transform .3s;
}
.slide-left-enter, .slide-left-leave-to /* .slide-left-leave-active below version 2.1.8 */ {
    transform:translateX(-100%);
}
.slide-top-enter-active, .slide-top-leave-active {
    transition:height .3s, padding .3s;
}
.slide-top-enter, .slide-top-leave-to /* .slide-left-leave-active below version 2.1.8 */ {
    height:0!important;
    padding:0 15px!important;
}
.add-modal{
    /deep/.ivu-modal{
        top:0;
        margin:0;
        width:100%!important;
        height:100%!important;
        .ivu-modal-content{
            border-radius:0;
            min-height:100%;
            .ivu-modal-header{
                padding:0 15px;
            }
            .ivu-modal-body{
                padding:0;
            }
            .ivu-modal-footer{
                display:none;
            }
        }
    }
}
.apps{
    padding-top:10px;
    background:#f6f6f6;
    .app{
        line-height:72px;
        margin-bottom:1px;
        padding:0 15px 0 20px;
        background-color:#fff;
        .name{
            color:#333;
            font-size:14px;
            position:relative;
            margin-right:76px;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            img{
                position:absolute;
                left:0; top:28px;
                height:16px;
            }
            span{
                margin-left:36px;
            }
        }
        .btns{
            z-index:2;
            right:15px;
            font-size:13px;
            position:absolute;
            span{padding:0 5px;}
        }
    }
    .app:last-child{
        margin-bottom:0;
    }
    .app:after{
        clear:both;
        content:'';
        display:block;
    }
}
</style>
<template>
    <div class="container" :class="{'edit-mode':editMode}">
        <navigator :title="title" @back="back()" :space="15" />
        <transition name="slide-top">
            <div class="index-yy" v-show="!editMode">
                <div class="yys" v-for="(item, index) in commonMenus" :key="index" @click="to(item)" v-if="index<6">
                    <img :src="item.icon" />
                </div>
                <div class="yys" v-if="commonMenus.length>6">
                    <Icon type="ios-more"></Icon>
                </div>
                <a href="javascript:;" @click="editMode=true">编辑</a>
            </div>
        </transition>
        <div class="yy-box">
            <p class="box-title">常用应用</p>
            <Row class="box-container">
                <i-col span="8" v-for="(item, index) in fixedMenus" :key="index">
                    <div class="box-item" @click="to(item)">
                        <Icon type="minus-round" v-show="editMode" @click.prevent.stop="deleteFixedMenu(item)"></Icon>
                        <img class="menu-icon" :src="item.icon" :alt="item.name">
                        <p class="menu-name">{{item.name}}</p>
                    </div>
                </i-col>
                <i-col span="8" v-show="fixedMenus.length<3 && editMode">
                    <div class="box-item add-item" @click="openAddModal('fixed')">
                        <Icon type="plus-round" class="menu-icon"></Icon>
                        <p class="menu-name">添加应用</p>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="yy-box">
            <p class="box-title">我的应用</p>
            <Row class="box-container">
                <i-col span="8" v-for="(item, index) in commonMenus" :key="index">
                    <div class="box-item" @click="to(item)">
                        <Icon type="minus-round" v-show="editMode" @click="deleteCommonMenu(item)"></Icon>
                        <img class="menu-icon" :src="item.icon" :alt="item.name">
                        <p class="menu-name">{{item.name}}</p>
                    </div>
                </i-col>
                <i-col span="8" v-show="commonMenus.length<8 && editMode">
                    <div class="box-item add-item" @click="openAddModal('common')">
                        <Icon type="plus-round" class="menu-icon"></Icon>
                        <p class="menu-name">添加应用</p>
                    </div>
                </i-col>
            </Row>
        </div>
        <transition name="slide-left">
            <div class="yy-box" v-show="!editMode">
                <p class="box-title">全部应用</p>
                <Row class="box-container">
                    <i-col span="8" v-for="(item, index) in unallocatedMenu" :key="index">
                        <div class="box-item" @click="to(item)">
                            <img class="menu-icon" :src="item.icon" :alt="item.name">
                            <p class="menu-name">{{item.name}}</p>
                        </div>
                    </i-col>
                </Row>
            </div>
        </transition>
        <modal :value="!!openApps" :closable="false" class="add-modal">
            <navigator title="添加应用" slot="header" @back="openApps = false"/>
            <div class="apps">
                <div class="app" v-for="(item, index) in allMenu" v-if="item.showIndex || item.showIndex === void 0">
                    <div class="btns">
                        <a href="javascript:;" @click="addToSelect(item)"
                           :disabled="currentSelectLength >= currentMaxLength || currentMenuInSelect(item) || otherMenuInSelect(item) || !hasAccess(item)">添加</a>
                        <span>|</span>
                        <a href="javascript:;" :disabled="!currentMenuInSelect(item)" @click="deleteFromSelect(item)">移除</a>
                    </div>
                    <div class="name">
                        <img :src="item.icon" alt=""/>
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div slot="footer"></div>
        </modal>
    </div>
</template>
<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import navigator from '../public/navigator'
export default {
    components:{navigator},
    data(){
    	return {
    		openApps:false,
		    editMode:false
        }
    },
    computed:{
	    ...mapGetters(['unallocatedMenu','role']),
    	...mapState({
            allMenu:state=>state.menus.list,
		    fixedMenus:state=>state.menus.fixedMenu,
		    commonMenus:state=>state.menus.commonMenu,
        }),
    	title(){
    		return this.editMode?'编辑':'全部应用'
        },
	    otherMenuInSelect(){
		    let list = this.openApps === 'common'?this.fixedMenus:this.commonMenus;
		    return (menu)=>{
			    return list.indexOf(menu) !== -1
		    }
	    },
        currentMenuInSelect(){
	    	let list = this.openApps === 'fixed'?this.fixedMenus:this.commonMenus;
	    	return (menu)=>{
	    		return list.indexOf(menu) !== -1
            }
        },
        currentSelectLength(){
	    	return this.openApps === 'fixed'?this.fixedMenus.length:this.commonMenus.length
        },
        currentMaxLength(){
	    	return this.openApps === 'fixed'?3:8
        }
    },
    methods:{
    	...mapActions(['deleteCommonMenu','deleteFixedMenu','addToCommonMenu','addToFixedMenu']),
    	to(item){
            (!this.editMode) && this.$root.$_Route_$(...item.url)
        },
        back(){
    		if(this.editMode){
    			this.editMode = false;
            }else this.$router.back()
        },
	    openAddModal(type){
    		this.openApps = type
        },
	    addToSelect(menu){
		    if(this.currentMaxLength > this.currentSelectLength && !this.currentMenuInSelect(menu) && !this.otherMenuInSelect(menu)){
			    if(this.openApps === 'fixed'){
				    this.addToFixedMenu(menu)
			    }else{
				    this.addToCommonMenu(menu)
			    }
            }
        },
	    deleteFromSelect(menu){
		    if(this.currentMenuInSelect(menu)){
			    if(this.openApps === 'fixed'){
				    this.deleteFixedMenu(menu)
			    }else{
				    this.deleteCommonMenu(menu)
			    }
            }
        },
        hasAccess(item){
	        return (item.access & this.role) > 0
        }
    }
}
</script>
