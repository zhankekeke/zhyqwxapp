<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{position: static;}
</style>
<style scoped>
.container{font-size:16px;color:#000;font-weight: 400;font-weight: 400;}
.header{height: 50px;left:0;line-height: 50px;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;z-index: 99;}
.wrap{padding:50px 0px 75px 0;}
.footer  .active{color:#7599ff;}
.wrap img{width: 100%;}
.wrap{padding:50px 0 0 0;}
.right{float: right;}
.header .back{width: 25px;position: absolute;top:15px;left: 6px;}
.wrap {box-sizing:border-box;padding:50px 0px 0 0px;font-size: 14px;color: #333;background: #f2f2f2;}
.list {overflow: hidden;}
.list li{float: left;width: 33.33%;text-align: center;padding: 10px 0;}
.list li img{width: 44px;height: 44px;}
.box{background: #fff;margin-bottom: 10px;box-sizing: border-box;padding: 10px;}
.title{font-size: 16px;margin-bottom: 10px;}
.jian{position: absolute;top:0;right: 0;color: #ef2300;font-size: 18px;z-index: 9;}
.add{color:#4d99d8;position: absolute;top:0;right: 0;font-size: 18px;z-index: 9;}
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <div class='header'><Icon type="chevron-left" class='back' @click='$_back_$'></Icon>编辑</div>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box">
                <p class="title">全部应用</p>
                <ul class="list">
                    <li v-for='item in $_List1_$'>
                        <p >
                            <span style="display:inline-block;position:relative;padding: 8px 8px 0 0;">
                                <img :src="item.url" alt="">
                                <Icon class="jian" type="minus-circled"></Icon>
                            </span>
                        </p>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="box">
                <p class="title">常用</p>
                <ul class="list">
                    <li v-for='item in $_List2_$'>
                        <p>
                            <span style="display:inline-block;position:relative;padding: 8px 8px 0 0;">
                                <img :src="item.url" alt="">
                                <Icon class="jian" type="minus-circled"></Icon>
                            </span>
                        </p>
                        <p>{{item.name}}</p>
                    </li>
                </ul>
            </div>
            <div class="box">
                    <p class="title">全部应用</p>
                    <ul class="list">
                        <li v-for='item in $_List3_$'>
                            <p>
                                <span style="display:inline-block;position:relative;padding: 8px 8px 0 0;">
                                    <img :src="item.url" alt="">
                                    <Icon class="add" type="plus-circled"></Icon>
                                </span>
                            </p>
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
export default {
    mixins: [controler],
    data() {
        return {
           $_List1_$:[
               {
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               }
           ],
           $_List2_$:[
               {
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               }
           ],$_List3_$:[
               {
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               },{
                   name:'考勤记录',
                   url:'https://d2t44wh9rnwl5y.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/员工-首页/u108.png?token=5d971f43f61e32a44e406bbd25b3d141'
               }
           ]
           
        }
    },
    methods:{
       $_tongzhi_$(){
            this.$root.inparams.id;
        },
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygindex',{id:1})
        }
    }
}
</script>