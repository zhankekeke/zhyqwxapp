<style lang="less" scoped>
    @import "../../../../css/variable.less";
    @color:#B3B3B3;
    @borderRadius:18px;
    @backgroundColor:rgba(229, 229, 229, .3836);
    .plug-container{
        padding:6px 20px;
        background-color:@primary-color;
        /deep/.ivu-input-group-prepend{
            border:none;
            padding:6px 4px 4px 15px;
            border-radius:@borderRadius;
            background-color:@backgroundColor;
            .cicon-search{
                color:@color;
                font-size:16px;
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
        <Input :placeholder="placeholder" @on-keydown.enter="onsearch" :value="value" @input="$emit('input', $event)" :class="{empty:!value}" element-id="s-input">
            <span class="cicon-search" slot="prepend" @click="onsearch"></span>
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
				return '请输入关键字'
            }
        }
    },
    methods:{
		onsearch($event){
			document.getElementById('s-input').blur();
			this.$emit('on-search', $event)
        }
    }
}
</script>
