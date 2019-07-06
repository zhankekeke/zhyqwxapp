<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
.ivu-select-visible .ivu-select-selection{
      box-shadow:none!important;
  }
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
.ivu-select-placeholder{text-align:left!important;}
.ivu-select-selected-value{text-align:left!important;}
.wrapper{height:100vh;background:#f6f6f6;}
</style>
<style scoped>
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{
    position: fixed;bottom: 0;left: 0;
    width: 100%; height:60px;background: #fff;
  line-height:60px;
  box-shadow:0px 0px 12px 0px rgba(232,232,232,0.9);
  }
.wrap{
    background-color:#F6F6F6;
    padding-bottom:70px;
}
.content{
    background-color:#fff;
}
.footer  .active{color:#00C1DE;}
.footer ul{overflow: hidden;padding-top:8px;}
.footer ul li{float: left;width:33.3%;text-align: center;font-family:"Microsoft YaHei";font-size:10px;color:#333;}
.footer ul li img{display: block;margin:0 auto 4px;}
.footer ul li p{height: auto;line-height:1;}
.status{font-size:14px;color:#333;line-height:30px;}
.cont{margin:10px 0 0;padding:0 16px 0;list-style:none;}
.cont li{
    width:100%;height:144px;margin-bottom:10px;
    box-shadow:0px 0px 15px 0 rgba(217,226,233,0.5);
border-radius:4px;padding:14px 14px 0;
background-color:#fff;
}
.cont li .top{
    border-bottom:1px solid rgb(246,246,246);padding-bottom:13px;box-sizing:border-box;
overflow:hidden;font-size:12px;color:#333333;}
.cont li .top .number{float:left;line-height:1;}
.cont li .top .time{float:right;text-align:right;line-height:1;}
.cont li .bottom{padding-top:15px;box-sizing:border-box;overflow:hidden;font-size:14px;}
.cont li .bottom .img{width:78px;height:78px;float:left;margin-right:16px;}
.cont li .bottom .img>img{width:100%;height:100%;}
.cont li .bottom .right{float:left;width:40%;}
.cont li .bottom .right .one{overflow:hidden;margin-top:4px;line-height:1;}
.cont li .bottom .right .one .name{display:block;float:left; font-size:16px;color:#333333;font-weight:550;font-family:'PingFangSC-Medium';}
.cont li .bottom .right .one .handle{display:block;float:right;}
.handle span{
       width: 76px;
    background-color: #00C1DE;
    height: 28px;
    display: block;
    margin-top:50px;
    font-size:12px;
    border-radius: 14px;
    color: #fff;
    text-align: center;
    line-height: 28px; 
}
.cont li .bottom .right .one .black{display:block;float:right;text-align:right;font-size:14px;color:rgb(102,102,102);}
.cont li .bottom .left{
  float:right;
  line-height:76px;
}
.cont li .bottom .right .two{line-height:1;margin-top:16px;font-size:13px;color:#333;}
.cont li .bottom .right .three{line-height:1;margin-top:12px;font-size:13px;color:rgb(136,136,136);}
.aa5{
    width:100%!important;
    
}
 .aa5 >>> .ivu-select-selection {
        margin-left: 20%;
        margin-top: 2.1%;
        width: 100%;
        border:none;
    }
    .aa5 >>> .ivu-select-selected-value{
        color: #00C1DE;
    }
   .aa5 >>> .ivu-select-arrow{
        right:21px!important;
        top:54%!important;
    }
    .aa5 >>> .ivu-select-selected-value+.ivu-select-arrow{
        color: #00C1DE;
    }
    >>>.ivu-icon-arrow-down-b:before {
        content: "\F123" !important;
    }
    .aa5 >>> .ivu-select-item {
        font-size: 14px !important;
        border-bottom: 1px solid #f6f6f6;
        padding: 10px 20px !important;
    }
    .aa5 >>> .ivu-select-item:nth-last-child(1)
    {
        border-bottom: 1px solid #fff;
    }
    .aa5 >>> .ivu-select-selected-value {
        font-size: 14px !important;
    }

    .aa5 >>> .ivu-select-dropdown {
        width: 100vw !important;
        left: 0 !important;
        border-radius: 0;
    }

    .aa5 >>> .ivu-select-item-focus {
        background-color: #fff;
        color: #00C1DE;
    }

    .aa5 >>> .ivu-select-item-focus:after {
        content: '';
        background: url(/static/fwsl/dui.png) no-repeat;
        background-size: 16px;
        width: 16px;
        height: 16px;
        float: right;
        background-position: bottom;
    }
  .ivu-select-single .ivu-select-selection .ivu-select-placeholder{
      color:#00C1DE;
      font-size:14px;
      padding-left:0!important;

  }
  .aa5 >>> .ivu-select-arrow{
      font-size:10px;
  }
  .aa5 >>> .ivu-select-placeholder{
      padding-left:0!important;
  }
  .aa5 >>> .ivu-select-selected-value{
  padding-left:0!important;
  }
   .btnDate {
        padding-left: 15%;
        width: 100%;
        height: 32px;
        position: relative;
        background-color: #fff;
        line-height: 34px;
        border-radius: 4px;
        text-align: left;
        font-size: 14px;
        z-index: 99;
    }
    .rltb {
        position: absolute;
        right: 7px;
       line-height:36px;
        z-index: 99;
        top:-1px;
    }
    .content .top{
        padding-top:7px;
    }
    .divNoList {
        text-align: center;
    }
    .nolist {
        color: #B3B3B3;
        margin-top: 19px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: normal;
    }
    
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <navigator title="兑换记录"  />
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索 -->
           <div class="content">
               <Row class="top">
                    <Col span="5">
                        <Select class="aa5" @on-change="selectType" placeholder="类型" >
                            <Option v-for="item in $_type_$" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Col>
                    <Col span="7">
                   <div class="btnDate"
                             @click="calendarShow = true">
                            <span v-if="$_model_$" class="aa3">{{$_model_$}}</span>
                            <span v-else style="color: #bbbec4">日期</span>
                            <Icon v-if="$_model_$ == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                        </div>
                 <calendar 
                 :show.sync="calendarShow" 
                 @change="$_SearchDate_$" 
                 :weekNames="weekNames"
                  @touchmove.native.stop.prevent/>
                <Icon @click="cancelDate()" type="ios-close-outline" size="16px"
                            v-if="$_model_$" class="rltb" ></Icon>
                    </Col>
                </Row>
           </div>
           <!-- 列表 -->
           <div v-if="list.length > 0">
           <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill = false ref="loadmore">
           <ul class="cont">
               <li v-for="(item,index) in list" :key="index" @click="$_ddxq_$(item)">
                   <div class="top">
                       <p class="number"><span>编号：</span>{{item.id}}</p>
                       <p class="time">{{item.commiteTime | formatTime}}</p>
                   </div>
                   <div  v-for="(item1,index1) in item.orderGoods" :key="index1" class="bottom">
                       <div class="img">
                           <img :src="item1.goodsImage | imgsrc" alt="">
                       </div>
                       <div class="right">
                           <p class="one">
                               <span class="name">{{item1.goodsName}}</span>
                           </p>
                           <p class="two" v-if="item1.goodsCredits">
                               <span style="color:rgb(255,159,0)">{{item1.goodsCredits}}</span>积分</p>
                           <p class="two"  v-if="item1.goodsPrices">
                               <span style="color:rgb(255,159,0)">{{item1.goodsPrices}}</span>元</p>
                           <p class="three">{{item.commiterName}}</p>
                       </div>
                       <div class="left"> 
                           <span  v-if="item.orderState == 1" class="black">已支付</span>
                           <span v-if="item.orderState == 2" class="handle">
                                   <span @click.stop="$_ddqs_$(item.id)">送达</span>
                                </span>
                            <span  v-if="item.orderState == 3" class="black">已完成</span>
                            <span  v-if="item.orderState == 4" class="black">已签收</span>
                      </div>
                   </div>
               </li>
           </ul>
           </mt-loadmore>
           </div>
            <div class="divNoList" v-else>
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有订单记录哦~</div>
            </div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul>
                <li>
                    <img style="width:17px;height:21px;" src="/static/fwsl/ddsl_blue.svg" alt="">
                    <p  class="active">订单受理</p>
                </li>
                <li @click="$_fwsl_$">
                    <img style="width:21px;height:21px;" src="/static/fwsl/fwsl_black.svg" alt="">
                    <p>服务受理</p>
                </li>
                <li @click="$_gjxx_$">
                    <img style="width:19px;height:21px;" src="/static/fwsl/gjxx_black.svg" alt="">
                    <p>管家信息</p>
                </li>
            </ul>
        </div>   
    </div>
</template>

<script>
import { DatetimePicker,Loadmore,MessageBox,Toast,Indicator } from 'mint-ui';
import controler from './controler.js';
import 'mint-ui/lib/style.css';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components: {
        navigator,
        [DatetimePicker.name]: DatetimePicker,
        [Loadmore.name]:Loadmore,
        [MessageBox.name]:MessageBox,
        [Toast.name]:Toast,
        [Indicator.name]:Indicator
    },
    filters:{
        formatTime(sDate){
            var date = new Date(sDate);
            var seperator1 = "-";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            //月
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            //日
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            //格式化后日期为：yyyy-MM-dd
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }
    },
    data() {
        return {
            weekNames: ['一', '二', '三', '四', '五', '六', '日'],
            calendarShow: false,
            pickerValue: new Date(),
            formatDate(date) {
                const y = date.getFullYear()
                let m = date.getMonth() + 1
                m = m < 10 ? '0' + m : m
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                return y + '-' + m + '-' + d
            },
            showCancel:false,
            
            $_type_$: [
                {
                    value: '全部',
                    label: '全部'
                }, {
                    value: '1',
                    label: '已支付'
                }, {
                    value: '2',
                    label: '已发货'
                }, {
                    value: '3',
                    label: '已完成'
                }
            ],
            $_model_$:'',
            showHandle:true,
            id:'',
            list:[],
            userInfo:{},
            pageNum: 1,//当前第几页
             topStatus: '',
             type:'',
             date:''
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
        this.$_ddsl_$()
        this.List(this.type,this.$_model_$)
    },
    methods:{
        // 获取列表
        List(type,date){
            let data = {
                    zoneId:this.userInfo.zoneId,
                    stewardId:this.id
            };
            if(type == 1){
                data.orderState = 1
            }if(type == 2){
                data.orderState = 2
            }if(type == 3){
                data.orderState = 3
            }
            if(date){
                data.beginTime = this.$_model_$
            }
            this.$_sendQuery_$({
                method:"POST",
                url:`${this.$_global_$.serverPath}/operate/order/queryOrderListByStewardId`,
                data:data,
                headers:{"Content-type":"application/json"}
            }).then((rsp)=>{
                console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        Indicator.close();
                        this.list = rsp.data.data.records;
                        if(this.list.length == 0){
                            Toast("暂无数据!")
                        }
                    }else{
                         Toast("暂无数据!")
                    }
                }
            })
        },
        // 类型搜索
        selectType(value){
            this.List(value,this.$_model_$)
            this.type = value
        },
        
       //返回首页
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygindex',{id:1})
        },
        // 订单签收
        $_ddqs_$(id){
            MessageBox({
                title: '提示',
                message: '是否确认签收?',
                showCancelButton: true,
                confirmButtonClass: 'confirm',
                cancelButtonClass: 'cancel'
            }).then(action =>{
                if(action == 'confirm'){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/operate/order/orderComplete`,
                        data:{orderId:id},
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                // Toast(rsp.data.data)
                                this.List()
                            }else{
                                Toast(rsp.data.data)
                            }
                        }
                    })
                }
            });
        },
        //订单受理
        $_ddsl_$(){
            this.$root.inparams.id
            this.id = this.$root.inparams.id
        },
        //服务受理
        $_fwsl_$(){
            this.$root.$_Route_$('user','mobile','ygsyfwsl',{id:1})
        },
        //管家信息
        $_gjxx_$(){
            this.$root.$_Route_$('user','mobile','ygsygjxx',{id:this.id})
        },
        //订单受理详情
        $_ddxq_$(item){
            // if(item.orderState == 1 || item.orderState == 3){
                this.$root.$_Route_$('user','mobile','ygsyddslxq',{id:item.id})
            // }
        },
        //点击确定按钮之后
        $_SearchDate_$(date) {
                //this.pageNum = 1;
                // 输出格式化后的时间
                // let datenum = this.formatDate(this.$refs.datePicker.value);
                // datenum = datenum.substr(0, 10);
                let datenum = date.format('YYYY-MM-DD');
                this.$_model_$= datenum;
                //this.searchdate = datenum;
                this.List(this.type,this.$_model_$);
                this.calendarShow = false;

            },
        // 取消时间搜索
        cancelDate(){
            this.$_model_$ = ''
            this.List(this.type,this.$_model_$)
            this.showCancel = false
        },
         // 上拉加载
        loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                     this.List();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
        },
        handleTopChange(status) {
                this.topStatus = status;
        }, 
    }
}
</script>