<style>
#ModuleContent {
    margin: 0!important;
    padding: 0!important;
    background:#fff;
}

.MainContent {
    top: 0!important;
}

body {
    position: static;
}
</style>
<style scoped>
.container {
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-weight: 400;
}

.header {
    height: 50px;
    left: 0;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 99;
}
.footer .active {
    color: #7599ff;
}
.right {
    float: right;
}

.header .back {
    width: 25px;
    position: absolute;
    top: 15px;
    left: 6px;
}

.wrap {
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
    border-top:1px solid rgb(246,246,246);
}
.top{
  padding: 20px 15px 22px;
  box-sizing:border-box;
   background:#fff;
}
.item{width:100%;list-style:none;padding:18px 0 14px;box-sizing:border-box;position:relative;font-size:14px;
border-radius:5px;box-shadow:0px 0px 6px 0px rgba(4,0,0,0.2);overflow:hidden;font-family:"Microsoft YaHei";
background:#fff;margin-bottom:12px;}
.item .img{float:left;width:155px;height:75px;margin-right:17px;}
.item .img>img{width:100%;height:auto;}
.itemContent{float:left;padding-top:3px;box-sizing:border-box;}
.itemContent .itemNumber{color:rgb(1,155,250);margin-bottom:14px;line-height:1;font-weight:bold;}
.itemContent .itemBrand{color:rgb(51,51,51);margin-bottom:20px;line-height:1;}
.itemContent .itemHandle{color:rgb(136,136,136);}
.itemContent .itemHandle img{height:12px;width:auto;margin-right:7px;}
.itemContent .itemHandle .edit{margin-right:27px;}
.item .tip{position:absolute;border-top-right-radius:5px;right:0;top:0;width:62px;height:65px;}
.banner{width:100%;list-style:none;padding:19px 0;box-sizing:border-box;font-size:10px;
border-radius:5px;box-shadow:0px 0px 6px 0px rgba(4,0,0,0.2);overflow:hidden;font-family:"Microsoft YaHei";
background:#fff;color:rgb(153,153,153);}
.banner .dashedContent{border:1px dashed rgb(218,218,218);margin:0 auto;padding-top:15px;box-sizing:border-box;
width:75px;height:76px;text-align:center;}
.banner .dashedContent img{margin-bottom:13px;height:20px;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
         <navigator title="我的车辆" @back="$_back_$" />
        <!-- 中间部分 -->
        <div class="wrap">
            <ul v-if="$_lists_$.length" class="top" >
                <li class="item" v-for='(item,index) in $_lists_$' :key='index'>
                   <div class="img">
                        <!-- <img src="@/imgs/mobile/wdcl_car.png" alt=""> -->
                        <img :src="item.imageUrl" alt="">
                    </div>
                    <div class="itemContent">
                        <div @click="$_clxq_$(item)">
                            <p class="itemNumber">{{item.province}}{{item.plateNumber}}</p>
                            <p class="itemBrand">{{item.brand}}</p>
                        </div>
                        <div class="itemHandle">
                            <span class="edit">
                                <img @click="edit()" src="@/imgs/mobile/wdcl_bianji.png" alt="">编辑
                            </span>
                            <span @click="$_clxq_$(item)" class="unbind">
                                <img src="@/imgs/mobile/wdcl_jiechu.png" alt="">解绑
                            </span>
                        </div>
                    </div>
                    <img v-if="item.carType == 2" class="tip" src="@/imgs/mobile/wdcl_gdcw.png" alt="">
               </li>
            </ul>
            <div style="padding:0 15px;">
                <div class="banner">
                    <div class="dashedContent"  @click="$_xzcl_$">
                        <img src="@/imgs/mobile/wdcl_xinzeng.png" alt="">
                        <p style="line-height:1;">新增车辆</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import controler from './controler.js';
import { Toast } from 'mint-ui';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components:{
        navigator,
        [Toast.name]: Toast
    },
    data() {
        return {
            $_lists_$:[],
            userInfo:{}
        }
    },
    created(){
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.$_global_$.serverPath	
        this.list()
        if(this.$root.inparams.mess){
            const mes = this.$root.inparams.mess +'解除绑定成功'
            Toast(mes);
        }
    },
    methods: {
        // 获取车辆列表
        list(){
            this.$_sendQuery_$({
                method:"POST",
                url:`${this.$_global_$.serverPath}/zone/car/employee/list`,
                data:{},
                header:{"Content-type":"application/json"}
            }).then((rsp)=>{
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        this.$_lists_$ = rsp.data.data.records
                    }
                }
            })
        },
        $_back_$() {
            //停车服务
            this.$root.$_Route_$('user', 'mobile', 'fksytcff', { id: 1 })
        },
        //全部
        $_qb_$() {
            this.$root.inparams.id
        },
        //车辆详情
        $_clxq_$(item){
        this.$root.$_Route_$('user', 'mobile', 'fksyclxq', { item:item }) 
        },
        edit(){
            this.$root.$_Route_$('user', 'mobile', 'fksyxzcl', { id:1 })
        },
        unBind(){
         this.$root.inparams.mess
        },
        //新增车辆
        $_xzcl_$(){
            this.$root.$_Route_$('user', 'mobile', 'fksyxzcl', { id: 1 }) 
        }
    }
}
</script>