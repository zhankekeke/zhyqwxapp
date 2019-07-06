<style scoped lang="less">
@import "../../../../css/variable.less";
.footbar{
    height:50px;
    .container{
        width:100%;
        z-index:1000;
        position:fixed;
        bottom:0; left:0;
        box-shadow:0 0 12px 0 rgba(232, 232, 232, 0.9);
        background-color:#fff;
        .tab{
            padding:7px 0 6px;
            text-align: center;
            .tab-box{
                width:60px;
                margin:0 auto;
                img{
                    height:20px;
                    margin:0 auto;
                    display:block;
                }
                p{
                    line-height:1em;
                    margin-top:5px;
                }
            }
            .tab-box.focus{
                color:@primary-color;
            }
        }
    }
}
</style>
<template>
    <div class="footbar">
        <Row class="container">
            <i-col class="tab" span="8" v-for="(item, index) in tabs" :key="index">
                <div class="tab-box" :class="{focus:item.focus}" @click="$router.replace(item.path)">
                    <img v-if="item.focus" :src="item.focusIcon" :alt="item.name"/>
                    <img v-else :src="item.icon" :alt="item.name"/>
                    <p>{{item.name}}</p>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export const tabs = [{
	name:'首页',
	path:'/ygindex',
	icon:'/static/ygindex/foot-icons/shouye@2x.png',
	focusIcon:'/static/ygindex/foot-icons/shouye-focus@2x.png'
}, {
	name:'服务',
	path:'/qyfw',
	icon:'/static/ygindex/foot-icons/fuwu@2x.png',
	focusIcon:'/static/ygindex/foot-icons/fuwu-focus@2x.png'
}, {
	name:'我的',
	path:'/grzx',
	icon:'/static/ygindex/foot-icons/wode@2x.png',
	focusIcon:'/static/ygindex/foot-icons/wode-focus@2x.png'
}];
export default {
	computed:{
		...mapGetters(['currentSubRoute']),
        tabs(){
	        return tabs.map(item=>{
				return {
					...item,
					focus:this.$route.path === item.path
				}
            });
        }
    }
}
</script>
