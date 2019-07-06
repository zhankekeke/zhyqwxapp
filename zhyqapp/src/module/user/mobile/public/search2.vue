<style lang="less" scoped>
    @import "../../../../css/variable.less";
    @color:#fff;
    @borderRadius:14px;
    @backgroundColor:rgba(255, 255, 255, .3836);
    .plug-container{
        padding:6px 20px;
        background-color:@primary-color;
        /deep/.ivu-input-group-prepend{
            padding:0;
            border:none;
            border-radius:@borderRadius;
            background-color:@backgroundColor;
            .ivu-icon{
                color:@color;
                padding:0 8px;
                font-size: 14px;
            }
        }
        /deep/.ivu-input{
            height:28px;
            border:none;
            padding-top:5px;
            padding-left:3px;
            border-radius:@borderRadius;
            background-color:@backgroundColor;
            &,&.empty,&::-webkit-input-placeholder{
                color:@color;
            }
        }
        /deep/.ivu-input:focus{
            box-shadow:none;
        }
    }
</style>
<template>
    <div class="plug-container">
        <Input @on-blur="sendShow(1)" @on-focus="sendShow(0)" :placeholder="placeholder" @on-keydown.enter="$emit('on-search')" :value="value" @input="$emit('input', $event)" :class="{empty:!value}">
            <Icon type="ios-search" slot="prepend" @click="$emit('on-search')"></Icon>
        </Input>
    </div>
</template>
<script>
export default {
	props:{
		value:String,
		placeholder:{
			type:String,
            default(){
				return ''
            }
        }
    },
    methods:{
	    sendShow(type){
	        this.$emit("ListenToChild",type)
        },
    }
}
</script>
