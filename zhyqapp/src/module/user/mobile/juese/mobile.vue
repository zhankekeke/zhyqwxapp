<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #e9e9e9;position: static;}
.header{height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{padding:50px 0px 75px 0;}
.footer  .active{color:#7599ff;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width: 33.33%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .tishi{width: 25px;position: absolute;top:10px;right: 20px;}


</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <div class='header'>首页<img class="tishi" src="@/imgs/mobile/tishi.png" alt=""></div>
        <!-- 中间部分 -->
        <div class="wrap">
           
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li>
                    <p><img class="" src="../../../../imgs/mobile/shouye.png" alt=""></p>
                    <p class="active">首页</p>
                </li>
                <li>
                    <p><img class="" src="../../../../imgs/mobile/fuwu.png" alt=""></p>
                    <p>服务</p>
                </li>
                <li>
                    <p><img class="" src="../../../../imgs/mobile/wode.png" alt=""></p>
                    <p>我的</p>
                </li>
            </ul>
        </div>
       
    </div>
</template>

<script>
import controler from './controler.js';
export default {
    mixins: [controler],
    data() {
        return {
           
        }
    },
    methods:{
       
    }
}
</script>