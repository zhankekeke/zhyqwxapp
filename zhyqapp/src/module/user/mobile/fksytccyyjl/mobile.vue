<style scoped>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
</style>
<style scoped>
.header{z-index:99;height: 50px;width:100%;
border-bottom:1px solid rgb(236,236,236);
line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{border-top:1px solid rgb(236,236,236)}
.footer .active{color:#7599ff;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width:33.3%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.wrap .dateTime{
  margin:17px 15px 0px 15px; font-size:15px;
}
.wrap .dateTime Button{
    width:80%;height:32px;position: relative;background-color: #fff;text-align:left;
}
.dateTime .icon{
    position: absolute;right: 7px;top:9px
}
>>>.ivu-btn:focus{
  box-shadow:none!important;
}
>>>.ivu-btn:hover{
    color:#6d7380;
}
.lists ul li{
background:#fff;padding:25px 15px 25px 15px;box-sizing:border-box;border-bottom:1px solid rgb(236,236,236);
}

</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <navigator title="预约记录" @back="$_back_$" />
        <!-- 中间部分 -->
        <div class="wrap">
           <div class="dateTime">
               日期:&nbsp;&nbsp;
               <Button
               @click="$refs.datePicker.open()">
                <span v-if="$_model_$"> {{$_model_$}}</span>
                <span v-else style="color: #bbbec4">日期</span>
                <Icon class="icon" v-if="$_model_$ == ''" type="ios-calendar-outline" size="16px"
                                  ></Icon>
             </Button>
              <Icon  @click="$_Searchqx_$()" v-if="$_model_$" type="ios-close-outline" size="16px"
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
           <div class="lists">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill = false ref="loadmore">
               <ul >
                   <li  v-for="(item,index) in $_yyjlInfo_$" :key="index" v-if="item"
                   >
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
                                <p style="color:rgb(153,153,153)">停车时间:&nbsp;<span style="color:rgb(51,51,51)">{{item.leaveTime}}</span></p>
                            </Col>
                            <Col span="12" align="right">
                                <p>{{item.parkingName}}</p>
                                <p style="color:#333333;padding-bottom:5px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:63%;">{{item.parkingAddress}}</p>      
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12" style="color: #169BD5;">状态:&nbsp;<span>{{item.status | formatStatus}}</span></Col>
                            <Col span="12" align="right">
                                <div v-if="item.status == 0" @click="cancel(item.parkingId,item.serialNumber)" class="cancle" style="border: 1px solid #ccc;
                                height: 21px;
                                width: 52px;
                                font-size: 12px;
                                text-align: center;
                                line-height: 21px;
                                border-radius: 10px;">{{item.status | formatDate}}</div>
                            </Col>
                        </Row>
                   </li>
                   <li v-for="(item,index) in $_yyjlInfo_$" :key="index" v-if="!item">暂无预约记录</li>
               </ul>
             <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </div>
            </mt-loadmore>   
           </div>
        </div>
       
    </div>
</template>

<script>
//import flexible from './flexible.js';
import controler from './controler.js';
import { DatetimePicker } from 'mint-ui';
import 'mint-ui/lib/style.css';
import {Loadmore} from 'mint-ui';
import navigator from '../public/navigator';
 import {mapGetters} from 'vuex';
export default {
    mixins: [controler],
    components: {
        [DatetimePicker.name]: DatetimePicker,
        navigator,
        [Loadmore.name]: Loadmore

    },
    filters:{
      formatStatus(item){
          if(item == 3){
              return '取消'
          }
          if(item == 0){
              return '已预约'
          }
           if(item == 1){
              return '已完成'
          }
           if(item == 2){
              return '爽约'
          }
      },
      formatDate(item){
          if(item == 0){
              return '取消'
          }
      },
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
            topStatus: '',
            pageNum: 1,
            serial:'',
            parkId:0,
            userInfo:'',
          $_yyjlInfo_$:[
          ],
           $_model_$:'',
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
    computed: {
            ...mapGetters(['currentZone', 'currentZoneId']),
        },
    created(){
        this.currentZoneId
     this.$_list_$()
      let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
      this.$_global_$.serverPath
    },
    methods:{
         $_back_$(){
            this.$root.$_Route_$('user','mobile','fksytcff',{id:1})
        },
        //预约记录
        $_yyjl_$(){
            this.$root.inparams.id
        },
        //停车场
        $_tcff_$(){
            this.$root.$_Route_$('user','mobile','fksytcff',{id:1}) 
        },
        cancel(id,serial){
           this.serial = serial
           //console.log(this.serial)
           this.parkId = id
          // console.log(this.parkId)
            this.$_sendQuery_$({
            method:"POST",
            url:this.$_global_$.serverPath+`/zone/zone/${this.currentZoneId}/parkinglot/${this.parkId}/cancel`,
            data:{
                serialNumber:this.serial
            },
            headers:{
            "Content-type":"application/json"
            }
        }).then((rsp)=>{
            //console.log(rsp)
            if(rsp.status === 200){
                if(rsp.data.code === 0){
                    this.$_list_$()
                    this.$Message.success(rsp.data.message);
                }
            }
        })
        },
         $_list_$(){
        this.$_querycfg_$.mod ='zone/zone/parking/reserves';
		this.$_fquery_$((rsp)=>{
			if(rsp.status === 200){
				if (rsp.data.code === 0) {
                    //this.$_totalSize_$ = rsp.data.data.total
                    this.$_yyjlInfo_$ = rsp.data.data.records
                }
            }
        })
    },
        //点击确定按钮之后
        handleConfirm(datePicker, index) {
            // 输出格式化后的时间
            this.$_model_$ = this.formatDate(this.$refs.datePicker.value)
            if(this.$_model_$){
                this.$_querycfg_$.params.startTime = this.$_model_$
                this.$_list_$();
            }
            //console.log(this.$_model_$)
        },
        $_Searchqx_$(){
          this.$_querycfg_$.params = {}
          this.$_model_$ = ''
          this.$_list_$()
        },
        handleCancel(){
            //console.log(9999)
             this.$_model_$ = this.formatDate(this.$refs.datePicker.value)
             this.$_model_$ = ''
            this.$_list_$()
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