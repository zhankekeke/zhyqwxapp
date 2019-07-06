<style>
#ModuleContent {
  margin: 0 !important;
  padding: 0 !important;
  background:#fff;
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
.container {
  font-size: 16px;
  color: #f2f2f2;
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
  color:#333;
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
  padding: 10px 15px 0px;
  border-top:1px solid rgb(246,246,246);
  font-size: 14px;
  color: #333;
  background: #fff;
}
.box1{box-sizing: border-box;height:173px;margin-bottom:25px;border-radius:5px;overflow:hidden;}
.video{width:100%;}
.info{padding-bottom:15px;border-bottom:0.5px solid #ececec;}
.info .icon{width:auto;height:11px;margin-right: 6px;}
.info .title{font-size:17px;color:#333333;font-weight:bold;margin-bottom:12px;}
.info .basic{color:#333333;font-size:14px;}
.ctInfo{overflow:hidden;margin:0 auto;}
.ctInfo p{float:left;margin-right:35px;line-height:28px;}
/* .ctInfo .first{width:} */
.boxInfo .boxTitle{padding:25px 0px 14px 0px;font-size:17px;font-weight:bold;color:#333333;}
.boxInfo ul{list-style:none;padding:0;margin:0;}
.boxInfo ul li{border-radius:5px;height:173px;margin-bottom:20px;overflow:hidden;}
.over{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
</style>
<template>
  <div class="container" ref="aa">
    <!-- 首页 -->
    <navigator title="包间详情" @back="$_toBjxq_$" />
    <!-- 中间部分 -->
    <div class="wrap">
     <div class="box1" v-if="row.images">
        <!-- <img class="video" src = "http://pic1.win4000.com/wallpaper/4/58a27666822d1.jpg"> -->
        <img class="video" :src="row.images[0].imageUrl|imgsrc" alt="">
      </div>
      <div class="info">
        <p class="title over">{{row.name}}</p>
        <div class="ctInfo">
          <p class="over">
            <img class="icon" src="@/imgs/mobile/address-black.png" alt="">
            <span class="basic">{{row.address}}</span>
          </p>
          <p class="over">
            <img class="icon" src="@/imgs/mobile/ct-telephone.png" alt="">
            <span class="basic">{{row.telephone}}</span>
          </p>
          <p style="margin:0;" class="over">
            <img class="icon" src="@/imgs/mobile/ct-peopleNumber.png" alt="">
            <span class="basic">{{row.peopleNumber}}人</span>
          </p>
        </div>
      </div>
      <!-- <div class="boxInfo">
          <p class="boxTitle">包间详情</p >
          <span style="text-indent:10px;" v-html="row.description"></span>
       </div> -->
       <div class="boxInfo"  v-if="row.images.length>2">
          <p class="boxTitle" style="">包间详情</p>
          <ul>
            <li v-for="(item,index) in row.images" :key="index">
              <img class="video" :src = "item.imageUrl">
            </li>
          </ul>
       </div>
    </div>
  </div>
</template>

<script>
import controler from "./controler.js";
import navigator from '../public/navigator';
export default {
  mixins: [controler],
  components:{
        navigator
    },
  data() {
    return {
      row:{},
      item:{},
    };
  },
  created(){
    this.$_global_$.serverPath
    this.$_toyd_$()
    this. Info()
  },
  methods: {
    $_toBjxq_$() {
      this.$root.$_Route_$("user", "mobile", "ygsyctbjxq", { item: this.item,row:1 });
    },
    Info(){
      this.$_sendQuery_$({
        method:"GET",
        url:`${this.$_global_$.serverPath}/zone/zone/${this.item.zoneId}/restaurant/${this.item.restaurantId}/box/${this.item.id}`,
        data:{
          
        },
        headers:{"Content-type":"application/json"}
      }).then((rsp)=>{
        if(rsp.status === 200){
          if(rsp.data.code === 0){
            this.row = rsp.data.data
          }
        }
      })
    },
     $_toyd_$(){
        this.item = this.$root.inparams.item;
    }
  }
};
</script>