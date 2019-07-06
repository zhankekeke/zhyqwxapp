<style scoped lang="less">
    @height:44px;
    @btnWidth:20px;
    .page-navigator-box{
        height: @height;
    }
    .page-navigator{
        width:100%;
        z-index: 999;
        height:@height;
        top:0; left:0;
        position:fixed;
        font-size:20px;
        .btn-back{
            width: @btnWidth;
            height: @height;
            line-height: calc(@height + 2px);
            box-sizing:border-box;
            padding-left:5px;
            .cicon-back{
                font-size:16px;
            }
        }
        .title{
            flex:1;
            height:@height;
            font-size:16px;
            text-align: center;
            line-height:@height;
            box-sizing:border-box;
            padding-right:@btnWidth;
        }
    }
</style>
<template>
    <div class="page-navigator-box" v-if="!isTabPage">
        <Row class="page-navigator" type="flex" :style="style">
            <i-col class="btn-back" v-if="backIcon !== false" @click.native="$_back_$">
                <span class="cicon-back"></span>
            </i-col>
            <i-col class="title">{{title||''}}</i-col>
        </Row>
    </div>
</template>
<script>
import px_rem_ratio from '@/config/rem'
import {tabs} from './footbar'
export default {
	props:{
		title:String,
		backIcon:{
			type:[Boolean, String],
            default(){
				return true
            }
        },
        space:{
			type:Number,
            default(){
				return 15
            }
        },
        backUrl:Array,
		backgroundColor:{
			type:String,
			default(){
				return '#00C1DE'
            }
        },
        color:{
	        type:String,
	        default(){
				return '#fff'
            }
        }
    },
    computed:{
		style(){
			return {
				color:this.color,
				paddingLeft:this.space/px_rem_ratio+'rem',
                paddingRight:this.space/px_rem_ratio+'rem',
                backgroundColor:this.backgroundColor,
            }
        },
	    isTabPage(){
		    return tabs.some(item=>item.path === this.$route.path) && /miniprogram/i.test(window.navigator.userAgent)
	    }
    },
    methods:{
		$_back_$(){
			if(this.backUrl === void 0){
				if(this.$listeners.back){
					this.$emit('back')
                }else{
					this.$router.back();
                }
            }else{
				this.$root.$_Route_$(...this.backUrl)
			}
        }
    }
}
</script>
