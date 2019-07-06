
<style scoped>
.container {
  min-height:100vh;
   background:rgba(246,246,246,1);
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

.wrap {
   padding-top:30px;
}
.item{
list-style:none;
height:122px;
box-sizing:border-box;
position:relative;
margin-left:20px;
margin-right:20px;
padding-top:10px;
border-radius:4px;
overflow:hidden;
background:#fff;
margin-bottom:20px;}
.item .img{float:left;width:130px;height:98px;margin:0 12px 12px;}
.item .img>img{width:100%;height:100%;}
.item .biao{
    position:absolute;
    top:0;
    right:20px;

}
.item .cars{
    position:absolute;
    top:2px;
    right:20px;
    color:#fff;
    font-size:10px;
    width:33px;
    height:30px;
    line-height:30px;
    display:block;
    text-align:center;
}
.itemContent{float:left;padding-top:3px;box-sizing:border-box;}
.itemContent .itemNumber{color:#333333;margin-bottom:8px;font-weight:bold;font-size:18px;}
.itemContent .itemBrand{color:#333333;margin-bottom:10px;
font-size:14px;
}
.itemContent .itemHandle{color:rgb(136,136,136);}
.itemContent .itemHandle .edit{
    margin-right:12px;
    border-radius:14px;
    width: 60px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color:#fff;
    font-size:12px;
    background: rgba(0,193,222,1);
    display: inline-block;
    }
    .itemContent .itemHandle .unbind{
    border-radius:14px;
    width: 60px;
    height: 28px;
    line-height: 28px;
    font-size:12px;
    text-align: center;
    border:1px solid rgba(0,193,222,1);
    color:rgba(0,193,222,1);
    display: inline-block;
    }
.item .tip{position:absolute;border-top-right-radius:5px;right:0;top:0;width:62px;height:65px;}
.banner{
    padding:19px 0;
box-sizing:border-box;
font-size:10px;
height:122px;
border-radius:5px;
overflow:hidden;font-family:"Microsoft YaHei";
background:#fff;color:rgb(153,153,153);}
.banner .dashedContent{margin:0 auto;padding-top:15px;box-sizing:border-box;
width:75px;height:76px;text-align:center;}
.banner .dashedContent img{margin-bottom:13px;height:20px;}
.banner .dashedContent p{
    font-size:16px;
    color:#333;
    font-family:'PingFangSC-Regular';
}
.addCar{padding:0 20px;box-sizing:border-box;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="我的爱车" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <ul v-if="$_lists_$.length >0" >
                <li class="item" v-for='(item,index) in $_lists_$' :key='index' v-if="item">
                    
                    <img class="biao" src="/static/tcc/biao.svg" v-if="item.carType == 2"><span class="cars">固定车位</span>
                    <div class="img">
                        <!-- <img src="@/imgs/mobile/wdcl_car.png" alt=""> -->
                        <img :src="item.imageUrl | imgsrc" alt="">
                    </div>
                    <div class="itemContent">
                        <div>
                            <p class="itemNumber">{{item.province}}{{carNumber[index]}}</p>
                            <p class="itemBrand">{{item.brand}}</p>
                        </div>
                        <div class="itemHandle">
                            <span class="edit" @click="edit(item)">
                               编辑
                            </span>
                            <span @click="$_clxq_$(item)" class="unbind">
                               解绑
                            </span>
                        </div>
                    </div>
               </li>
            </ul>
            <div class="addCar" style="">
                <div class="banner" v-show="$_lists_$.length<3">
                    <div class="dashedContent"  @click="$_xzcl_$">
                        <img src="/static/tcc/add.svg" alt="">
                        <p>添加爱车</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import controler from './controler.js';
import { Toast, Indicator } from 'mint-ui';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components:{
        navigator,
            [Toast.name]: Toast,
            [Indicator.name]:Indicator
    },
    data() {
        return {
            $_lists_$:[],
            userInfo:{},
            carNumber:[],
            temps:{}
        }
    },
    created(){
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.$_global_$.serverPath	
        Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
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
                console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        Indicator.close();
                        this.$_lists_$ = rsp.data.data.records
                         var arr = this.$_lists_$
                         if(arr.length > 0){  
                             for(var i=0;i<arr.length;i++){                 
                               var sr = arr[i].plateNumber.split('').slice(0,1).join()+'·'
                               var temp = arr[i].plateNumber.split('').slice(1).join('')
                               var srs = sr + temp
                                 this.carNumber.push(srs)
                             }
                        
                        
                         }
                    }
                }
            })
        },
      $_back_$(){
         this.$root.$_Route_$('user', 'mobile', 'ygsytcff', { id:1 }) 
      },
        //全部
        $_qb_$() {
            this.$root.inparams.id
        },
        //车辆详情
        $_clxq_$(item){
        this.$root.$_Route_$('user', 'mobile', 'ygsyclxq', { item:item }) 
        },
        edit(item){
            this.$root.$_Route_$('user', 'mobile', 'ygsyclbj', { item:item })
        },
        //新增车辆
        $_xzcl_$(){
            this.$root.$_Route_$('user', 'mobile', 'ygsyxzcl', { id: 1 }) 
        }
    }
}
</script>