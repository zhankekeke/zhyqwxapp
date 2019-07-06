<style>
  #ModuleContent {
    margin: 0 !important;
    padding: 0 !important;
    background: #fff;
  }
  .MainContent {
    top: 0 !important;
  }
  body {
    position: static;
  }
  /* .wrapper{
  height:100vh;
  background:#fff;
} */
</style>
<style scoped>

  .wrap {
    box-sizing: border-box;
    padding: 10px 16px 0px;
  background:#fff;
  height:100vh;
  }
  .box {
    background: #fff;
  }
  .box img {
    width: 47px;
    height: 47px;
    vertical-align: middle;
  }
  .box1 {
    box-sizing: border-box;
    padding: 10px;
  }
  .search {
    background: #e4e4e4;
    padding: 10px 10px;
    box-sizing: border-box;
  }
  .box {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px 20px;
    line-height: 47px;
  }
  .list {
    overflow: hidden;
    padding: 0px 0 0px 0;
    box-sizing: border-box;
    padding: 10px;
  }
  .list li {
    background: #fff;
    border: 1px solid #ccc;
    overflow: hidden;
    box-sizing: border-box;
    margin-bottom: 20px;
    font-size: 14px;
    color: #333;
  }
  .list li div {
    margin: 5px 10px;
    overflow: hidden;
  }
  .list li div span {
    vertical-align: baseline;
  }
  .info {
    margin-top: 2px;
    background: #fff;
  }
  .info ul,
  .info ul li {
    margin: 0;
    padding: 0;
  }
  .info ul {
    width: 100%;
  }
  .info ul li {
    line-height:53px;
    height:53px;
    border-top: 1px solid #E5E5E5;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    overflow:hidden;white-space:nowrap;text-overflow:ellipsis;
  }
  .name{
    color:#656D72;
  }
  .fs20 {
    color:rgba(51,51,51,1);;
  }
  .shizhong{
    color:#00C1DE;;
  }
  .yongji{
    color:#FA541C;
  }
  .videoWrap{padding:6px 6px 0 7px;box-sizing:border-box;}
  .video1{width:100%;height:151px;border-radius:4px;}
</style>
<template>
  <div class="container" ref="aa">
    <!-- 首页 -->
    <navigator title="餐厅实况" @back="$_back_$" />
    <!-- 中间部分 -->
    <div class="wrap">
      <div class="video" v-if="row.showVideo == 1">
      <video class="video1"
        controls="controls"
        poster=""
      ></video>
      </div>
      <div class="videoWrap" v-if="row.showVideo == 0"> <img class="video1" :src="row.images[0].imageUrl|imgsrc"></div>
      <div class="info">
        <ul>
          <li style="border:none;">
            <span class="name">餐厅名称：</span>
            <span class="fs20">{{row.name}}</span>
          </li>
          <li>
            <span class="name">餐厅地址：</span>
            <span class="fs20">{{row.address}}</span>
          </li>
          <li>
            <span class="name">总餐位数：</span>
            <span class="fs20">{{row.peopleNumber}}</span>
          </li>
          <!-- <li v-if="!row.showPeople == 0"> -->
            <li  v-if="row.showPeople == 1">
            <span class="name">实时余位：</span>
            <span class="fs20">{{row.freeCount}}</span>
          </li>
          <li v-if="row.showPeople == 1">
            <span class="name">拥挤程度：</span>
            <span class="fs20" :class="row.level == 1 ? 'yongji':'shizhong'">{{row.level | formatLevel}}</span>
          </li>
        </ul>
          <!-- <div style="padding-top:10px;" >
            <span class="name">餐厅详情:</span>
            <span class="fs20" v-html="row.description"></span>
          </div> -->
      </div>
      
    </div>
  </div>
</template>

<script>
import controler from "./controler.js";
import navigator from '../public/navigator';
export default {
  mixins: [controler],
  filters:{
    formatLevel(val){
      if(val == 0){
        return "适中"
      }if(val == 1){
        return "拥挤"
      }
    }
  },
  components:{
        navigator
    },
  data() {
    return {
      $_search_$: "",
      row:{}
    };
  },
  created(){
    this.$_toDetails_$()
  },
  methods: {
    $_back_$() {
      this.$root.$_Route_$("user", "mobile", "ygsyctsk", { id: 1 });
    },
     $_toDetails_$(){
       this.row = this.$root.inparams.row
      // console.log(this.row)
     }
  }
};
</script>