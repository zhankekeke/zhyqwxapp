<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #e9e9e9;position: static;}
</style>
<style scoped>
.container{font-size:16px;color:#000;font-weight: 400;}
.header{height: 50px;left:0;line-height: 50px;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{padding:50px 0px 75px 0;}
.footer  .active{color:#7599ff;}
.wrap img{width: 100%;}
.box{background: #fff;margin: 10px 0;box-sizing: border-box;padding: 0px 15px 0px 15px;}
.rt{
float:right
}
.box span{
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #999999;
    text-align: right;
    line-height: 24px;
    margin-right:10px;
}
.the-p{
    margin-top:10px;background:#fff;padding:15px
}
.box li{
    border-top:1px solid  #efefef;
    border-bottom:1px solid  #efefef;
    padding:10px 0px 10px 0px;
}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width: 50%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .tishi{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}


</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <div class='header'><span><Icon type="ios-arrow-back" class="tishi" @click="$_gotoFkyylb_$" /></span><span>访客邀请</span></div>
        
        <!-- 中间部分 -->
        <div class="wrap">
            <p class="the-p">
                <span>来访类型：</span><span v-for="item in myDate ">{{item.leixing}}</span>
            </p>
           <div class="box">
               
               <ul v-for="item in myDate " >
                   <p>
                       <h2 style="padding:10px 0px 10px 0px">访客信息</h2>
                    </p>
                   <li>
                      <span>姓名:</span><span>{{item.fkname}}</span>
                    </li>
                    <li>
                        <span>手机号:</span><span>{{item.thing}}</span>
                    </li>
                    <li>
                      <span>单位名称:</span><span>{{item.company}}</span>
                    </li>
                    <li>
                      <span>所在部门:</span><span>{{item.bumen}}</span>
                    </li>
               </ul>     
           </div>
           <div class="box">
               <p style="margin-top:10px">
                       <h2 style="padding:10px 0px 10px 0px">访客信息</h2>
                </p>
                <ul v-for="item in myDate ">
                    <li>
                        <span>来访事由:</span><span>{{item.thing}}</span>
                    </li>
                    <li>
                        <span>来访时间:</span><span>{{item.day}}</span><span>{{item.time}}</span>
                    </li>
                </ul>
           </div>
           <div style="background:#fff">
              <Row type="flex" justify="center" align="middle" >
                   <Col align="center">
                        <P style="padding:15px 0px 15px 0px" @click="$_gotoFkewm_$">
                            <span>状态：</span><span v-for="item in myDate">{{item.state}}</span>
                        </P>
                   </Col>
               </Row>
           </div>
           
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li>
                    <p><img class="" src="../../../../imgs/mobile/shouye.png" alt=""></p>
                    <p class="active">在线预约</p>
                </li>
                
                <li>
                    <p><img class="" src="../../../../imgs/mobile/wode.png" alt=""></p>
                    <p>拜访记录</p>
                </li>
            </ul>
        </div>
       
    </div>
</template>

<script>
import controler from './controler.js';
export default {
    mixins: [controler],
    data(){
        return{
            formItem: {
                select:"全部",
            },
            myDate:
            [
                {
                    day:"2018-9-19",
                    time:"9:00-12:00",
                    fkname:"小张",
                    phone:"15600011235",
                    leixing:"预约",
                    company:"飞天经纬",
                    thing:"开会",
                    bumen:"会务部",
                    state:"待处理",
                }  
            ],
        }
    },
    methods:{
        $_gotoFkyylb_$(){
           this.$root.$_Route_$('user','mobile','fkyylb',{id:1})
        },
         $_fkyy_$(){
            this.$root.inparams.id
        },
        $_gotoFkyy_$(){
            this.$root.$_Route_$('user','mobile','fkyy',{id:1})
        },
        $_gotoFkewm_$(){
             this.$root.$_Route_$('user','mobile','fkyyewm',{id:1})
        }
    }
}
</script>