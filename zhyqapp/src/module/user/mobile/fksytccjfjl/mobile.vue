<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
.ivu-input{
    height:34px;
}

</style>
<style scoped>
.header{z-index:99;height: 50px;width:100%;
border-bottom:1px solid rgb(236,236,236);
line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{border-top:1px solid rgb(236,236,236)}
.footer  .active{color:#7599ff;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width:33.3%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
         <navigator title="缴费记录" @back="$_back_$" />
        <!-- 中间部分 -->
        <div class="wrap">
           <div style="margin:17px 15px 0px 15px; font-size:15px;">
               日期&nbsp;&nbsp;
               <Button style="width:80%;height:32px;position: relative;background-color: #fff;text-align:left;"
               @click="$refs.datePicker.open()">
                <span v-if="$_model_$"> {{$_model_$}}</span>
                <span v-else style="color: #bbbec4">日期</span>
                <Icon v-if="$_model_$ == ''" type="ios-calendar-outline" size="16px"
                                  style="position: absolute;right: 7px;top:9px"></Icon>
             </Button>
              <Icon @click="$_Searchqx_$()" v-if="$_model_$" type="ios-close-outline" size="16px"
                              style="position: absolute;right: 48px;top:65px"></Icon>
                <mt-datetime-picker ref="datePicker"
                type="date" v-model="pickerValue"
                year-format="{value}年"
                month-format="{value}月"
                date-format="{value}日"
                @confirm="handleConfirm"
                >
                </mt-datetime-picker>
           </div>
           <div>
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill = false ref="loadmore">
               <ul>
                   <li v-for="(item,index) in $_jfjlInfo_$" :key="index"
                   style="background:#fff;padding:25px; 15px 25px 15px;box-sizing:border-box;border-bottom:1px solid rgb(236,236,236);">
                        <Row>
                            <Col span="16" style="font-size:14px;color:rgb(51,51,51)">
                             <span style="font-size:14px;color:rgb(51,51,51)">编号：</span>
                                {{item.serialNumber}}
                            </Col>
                            <Col span="8" align="right">
                                {{item.createDate | FormatDate}}
                            </Col>
                        </Row>
                        <Row style="font-size:14px;">
                            <Col span="12">
                                <p style="color:rgb(153,153,153)">车牌号:&nbsp;<span style="color:rgb(51,51,51)">{{item.plateNumber}}</span></p>
                                <p style="color:rgb(153,153,153)">停车时间:&nbsp;<span style="color:rgb(51,51,51)">{{item.parkingTime}}</span>小时</p>
                            </Col>
                            <Col span="12" align="right">
                                <p>{{item.parkingName}}</p>
                                <p>{{item.parkingAddress}}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" style="color:rgb(255,159,0);font-size:16px;" align="right">收费:&nbsp;<span>{{item.totalPrice}}</span>元</Col>

                        </Row>
                   </li>
               </ul>
                 <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>
           </div>
        </div>
        <!-- 底部 -->
        <!-- <div class='footer'>
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
        </div> -->

    </div>
</template>

<script>
import flexible from './flexible.js'
import controler from './controler.js';
import { DatetimePicker } from 'mint-ui';
import 'mint-ui/lib/style.css';
import {Loadmore} from 'mint-ui';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components: {
        navigator,
        [DatetimePicker.name]: DatetimePicker,
        [Loadmore.name]: Loadmore
    },
    filters:{
       FormatDate(item){

         var date = new Date(item);
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            //月
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            //日
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            //格式化后日期为：yyyy-MM-dd HH:mm:ss
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            return currentdate;
       }
    },
    data() {
        return {
             pageNum: 1,//当前第几页
             topStatus: '',
           $_model_$:'',
           $_jfjlInfo_$:{

           },
           pickerValue: new Date(),
            formatDate(date) {
                const y = date.getFullYear()
                let m = date.getMonth() + 1
                m = m < 10 ? '0' + m : m
                let d = date.getDate()
                d = d < 10 ? ('0' + d) : d
                return y + '-' + m + '-' + d
            },
             $_querycfg_$: {
                    mod: "",
                    params: {}
                }
        }
    },
    created(){
     this.$_list_$()
    },
    methods:{
        //预约记录
        $_jfjl_$(){
            this.$root.inparams.id
        },
        $_list_$(){
        this.$_querycfg_$.mod ='zone/zone/parking/records';
		this.$_fquery_$((rsp)=>{
			if(rsp.status === 200){
				if (rsp.data.code === 0) {
                    this.$_jfjlInfo_$ = rsp.data.data.records
                    //console.log(this.$_jfjlInfo_$)
                }else{
                }
            }
        })
        },
        //停车场
        $_tcff_$(){
            this.$root.$_Route_$('user','mobile','fksytcff',{id:1})
        },
        //点击确定按钮之后
        handleConfirm(datePicker, index) {
            // 输出格式化后的时间
            this.$_model_$ = this.formatDate(this.$refs.datePicker.value)
            //console.log(this.$_model_$)
            if(this.$_model_$){
                this.$_querycfg_$.params.startTime = this.$_model_$

                this.$_list_$();
            }
        },
        $_Searchqx_$(){
            this.$_querycfg_$.params = {}
            this.$_model_$ = ''
            this.$_list_$()
        },
        $_back_$(){
          this.$root.$_Route_$('user','mobile','fksytcff',{id:1})
        },
          handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                     this.$_list_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
    }
}
</script>