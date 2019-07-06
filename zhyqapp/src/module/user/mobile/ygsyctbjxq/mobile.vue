<style>
#ModuleContent {
  margin: 0 !important;
  padding: 0 !important;
}
.MainContent {
  top: 0 !important;
}
body {
  position: static;
}

</style>
<style scoped>
.wrapper{
  height:100vh;
  background:#f6f6f6;
}
.wrap {
  box-sizing: border-box;
  padding: 10px 16px 0px;
  font-size: 14px;
  background: #F6F6F6;
  font-family:PingFangSC-Regular;
   height:100vh;
}
.info{overflow:hidden;}
.info .icon{padding-left:19px;box-sizing:border-box;background-size:16px 16px;line-height:16px;}
.info .first{background:url('/static/ctsk/position.svg') 0px 0px no-repeat;margin-right:65px;}
.info .second{background:url('/static/ctsk/phone.svg') 0px 0px no-repeat;}
.video{width:100%;}
.info .title{font-size:18px;color:#333333;font-weight:bold;margin-bottom:10px;font-weight:500;line-height:1;}
.info .basic{color:#656D72;font-size:12px;font-weight:400;}
.boxInfo{background-color: #fff;padding:14px 12px 0px 14px;margin-top:10px;border-radius:4px;}
.boxInfo .boxTitle{font-size:18px;font-weight:500;color:#212121;line-height:1;margin-bottom:6px;}
.boxInfo ul{list-style:none;margin:0;padding:0;}
.boxInfo ul .item{padding-bottom:19px;border-bottom:1px solid #E5E5E5;overflow:hidden;margin-top:20px;}
.boxInfo ul .item:last-child{border:none;}
.boxInfo ul .item div{float:left;}
.boxInfo ul .item .boxx{width:120px;}
.over{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.boxImage{width:72px;height:72px;border-radius:3px;margin-right:13px;overflow:hidden;position:relative;}
.boxImage img{width:100%;height:100%;}
.boxImage .length{position:absolute;bottom:3px;right:3px;width:20px;height:12px;line-height:12px;background:rgba(0,0,0,0.57);
border-radius:11px;text-align:center;font-size:10px;font-family:PingFangSC-Regular;font-weight:400;color:#fff;}
.boxName{font-size:18px;color:#333333;margin-bottom:18px;font-weight: 500;line-height:1;}
.boxDesc{color:#333;font-size:12px;font-weight:400px;line-height:1;}
.boxInfo ul .item .button{display:block;background:#00C1DE;color:#fff;margin-top:22px;float:right;font-size:14px;
font-weight:400;text-align:center;width: 76px;line-height:28px;height: 28px;border-radius: 14px;line-height:28px;}
.ctInfo{overflow:hidden;margin:0 auto;}
.ctInfo p{float:left;line-height:28px;}
.ctInfo .first{margin-right:35px;}
.box{box-sizing: border-box;border-radius:4px;overflow:hidden;background-color:#fff;padding:6px 6px 10px 7px;
box-shadow:0px 0px 15px 0px rgba(217,226,233,0.5);}
.box .box1{height:151px;width:100%;margin-bottom:13px;border-radius:4px;overflow:hidden;}
.box .box1>img{width:100%;height:100%;}
.view{position:fixed;width:100%;height:100%;background:#000;font-family:PingFangSC-Regular;top:0;left:0;
z-index:999;padding-top:185px;box-sizing:border-box;}
.view .index{font-size:16px;font-weight:400;color:#fff;line-height:1;padding-left:16px;}
.view .boxName{line-height:1;font-weight:400;color:rgba(179,179,179,1);font-size:12px;
position:absolute;left:16px;bottom:16px;margin:0;}
.banner-item>img{width:100%;height:267px;margin-bottom:161px;}
.swiper-pagination.swiper-pagination-fraction{
  position:absolute;top:195px;right:10px;left:auto;width:38px;height:22px;background:rgba(0,0,0,0.57);
border-radius:11px;line-height:22px;text-align:center;font-size:14px;font-family:PingFangSC-Regular;font-weight:400;
color:rgba(255,255,255,1);
}
</style>
<template>
  <div class="container" ref="aa">
    <!-- 首页 -->
    <navigator title="餐厅实况" @back="$_back_$" />
    <!-- 中间部分 -->
    <div class="wrap">
      <div class="box">
        <div class="box1" v-if="row.images">
          <!-- <img class="video" v-if="!row.images.length>0" src = "http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg"> -->
          <img class="video" :src="row.images[0].imageUrl|imgsrc" alt="">
        </div>
        
        <div class="info">
          <p class="title" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{row.name}}</p>
          <div class="ctInfo">
            <p class="icon first"   style="width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              <span class="basic">{{row.address}}</span>
            </p>
            <p class="icon second"   style="width:40%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
              <span class="basic">{{row.telephone}}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 弹出框 -->
      <div class="view" v-if="isImgView" @click="isImgView = false">

        <div class="swiper-banner">
            <swiper :options="swiperOption" ref="bannerSwiper" @slideChange="updateSwiperPagination('bannerSwiper', '.swiper-pagination')">
                <swiper-slide v-for="(item,index) in imgList.images" :key="index">
                    <div class="banner-item">
                        <img :src="item.imageUrl|imgsrc" >
                        <!-- <p class="index">图片{{index}}</p> -->
                        <!-- <span class="shadow">{{index+1}}/{{imgList.images.length}}</span> -->
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>

          <p class="boxName">包间名称:{{imgList.name}}</p>
      </div>
      <div class="boxInfo">
          <p class="boxTitle" style="">包间详情</p>
          <ul >
                <li class="item"  v-for="(item,index) in $_List_$" :key="index">
                        <div  class="boxImage" v-if="item.images">
                            <!-- <img v-for="(item1,index1) in item.images" :key="index1" :src="item1.imageUrl"   alt="" v-preview="item1.imageUrl"> -->
                            <img :src="item.images[0].imageUrl | imgsrc" alt="" @click="imgView(item)">
                            <span class="length" v-show="item.images.length>1">{{item.images | formatLength}}</span>
                        </div>
                        <div class="boxx">
                            <p class="boxName over">{{item.name}}</p>
                            <p class="boxDesc over" style="margin-bottom:12px;">地址：{{item.address}}</p>
                            <p class="boxDesc over">容纳人数：{{item.peopleNumber}}人</p>
                        </div>
                        <a class="button" :href="'tel:'+row.telephone">预定</a>
                </li>
            </ul>
      </div>
    </div>
  </div>
</template>

<script>
import controler from "./controler.js";
import navigator from '../public/navigator';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  mixins: [controler],
  filters: {
      formatLength(item){
          return item.length
      },
      formatImage(item){
        let arr = []
        for(var i=0;i<item.length;i++){
          arr.push(item[i].imageUrl)
        }
        return arr
      }
    },
  data() {
    return {
      $_search_$: "",
      $_List_$: [],
      row:{},
      item:{},
      isImgView:false,
      imgList:{},
      swiperOption: {
        zoom: {
          maxRatio: 5, //最大倍数
          minRatio: 2, //最小倍数
          toggle: false, //不允许双击缩放，只允许手机端触摸缩放。
          containerClass: 'my-zoom-container', //zoom container 类名
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      }
    };
  },
  components:{
        navigator,swiperSlide, swiper
    },
  created(){
    this.$_global_$.serverPath
    this.$_toBj_$()
    this.$_toBjxq_$()
  },
  methods: {
    imgView(item){
     
      this.imgList = item
      this.isImgView = true
    },
    updateSwiperPagination(name, el){
		    this.$refs[name].swiper.pagination.update({el})
        },
    $_back_$() {
      this.$root.$_Route_$("user", "mobile", "ygsyctsk", { id: 1 });
    },
    $_toBjxq_$() {
      if(this.$root.inparams.item){
        this.item = this.$root.inparams.item
        this.info(this.item)
      }
    },
    $_toBj_$(){
      if(this.$root.inparams.row !== 1){
        
         this.row = this.$root.inparams.row;
         this.info(this.row)
          // this.$_List_$ = this.row.boxList
          // console.log(this.row)
      }
    },
    info(item){
     // console.log(item)
      var restaurant
      if(item.restaurantId){
        restaurant = item.restaurantId
      }else{
        restaurant = item.id
      }
      this.$_sendQuery_$({
        method:"GET",
        url:`${this.$_global_$.serverPath}/zone/zone/${item.zoneId}/restaurant/${restaurant}/detail`,
        data:{
          status:1
        },
        headers:{"Content-type":"application/json"}
      }).then((rsp)=>{
        if(rsp.status === 200){
          if(rsp.data.code === 0){
            this.row = rsp.data.data
            this.$_List_$ = this.row.boxList
          }
        }
      })
    },
    //预定页面
    $_toyd_$(item){
        // this.$root.$_Route_$("user","mobile","ygsyctbjyd",{item:item})
    }
  }
};
</script>