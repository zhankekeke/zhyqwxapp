<style scoped lang="less">
#ModuleContent{
    background-color:#fff!important;
}
.page-container{
    padding:0 15px;
    .common-title{
        color:#333;
        font-size:15px;
    }
    .page-navigator{
        margin:0 -15px;
        border-bottom:1px solid #ececec;
    }
    .service-name{
        padding:10px 15px 5px;
        box-sizing:border-box;
        width:100%;
        text-align:center;
        font-size:18px;
        font-weight:550;
        .name{
            flex:1;
            display:flex;
            align-items:center;
        }
    }
    .service-category{
        border-bottom:1px solid #ececec;
        border-top:1px solid #ececec;
        padding:18px 0;
    }
    .service-category:before{
        content:"服务分类：";
    }
    .service-detail{
        .common-title{
            padding:15px 0 21px;
        }
    }
}
.content{
    font-size:14px;
    font-family:'PingFangSC-Regular';
    font-weight:400;
    color:#333333;
    text-indent:25px;
    line-height:22px;
    padding-bottom:20px;
    /deep/ img{
        display:block;
        margin:5px 0 ;
        width:100%;
        height:auto;
    }
}

</style>
<template>
    <div class="page-container">
         <navigator title="事项详情" @back="$_fwjlxq_$" />
        <div class="service-name" type="flex">
            <span>{{item.name}}</span>
        </div>
        <div class="service-detail">
            <div class="content" v-html="item.info"></div>
        </div>
    </div>
</template>
<script>
import navigator from '../public/navigator'
import {Indicator} from 'mint-ui';

export default {
    components:{navigator, [Indicator.name]:Indicator},
    computed:{
        backUrl(){
	        return ['user', 'mobile', this.$root.inparams.back || 'qyfw-all']
        }
    },
    data(){
        return {
          id:0,
          list:[],
          item:{},
        }
    },
    created() {
        // Indicator.open({
        //         text: '加载中...',
        //         spinnerType: 'fading-circle'
        //     });
        this.jump()
       // this.detail()
    },
    methods:{
        jump(){
    		this.$root.inparams.id
            this.item =this.$root.inparams.id
            // Indicator.close();
           // console.log(this.item)
        },
        $_fwjlxq_$(){
           this.$root.$_Route_$('user','mobile','ygsygjfw')
        }
    }
}
</script>
