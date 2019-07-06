<style scoped>
#ModuleContent {
    margin: 0!important;
    padding: 0!important;
}

.MainContent {
    top: 0!important;
}

body {
    position: static;
}
>>> .mint-msgbox-content{border:none !important;}
>>> .mint-msgbox-btn{background:rgb(246,246,246) !important;}
</style>
<style scoped>
.container {
    min-height:100vh;
   background:rgba(246,246,246,1);
}
.wrap{
    margin-top:40px;
}
.wrap .wrapContent{
    overflow:hidden;
padding-bottom:15px;
padding-top:20px;
margin:0 16px;box-sizing:border-box;
background-color:#fff; 
color:rgba(76,76,76,1);
border-radius:8px;
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

.num {
    box-sizing:border-box;
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    width: 75%;
    height:30px;
}
.select{
    float:left;
    margin-left:16px;
margin-right:36px;
position:relative;
width:35px;
height:27px;
font-size:14px;
color:rgba(0,193,222,1);
background:rgba(201,248,255,1);
text-align:center;
line-height:27px;
font-size:15px;
}
.san{
       /* width: 0; */
    /* height: 0; */
    /* position: absolute; */
    bottom: 0;
    /* right: 0; */
    /* z-index: 999999; */
    /* width: 10px; */
    /* height: 10px; */
    display: block;
    right: 0;
    position: absolute;
    border-bottom: 10px solid rgba(0,193,222,1);
    border-left: 10px solid transparent;
    /* background-color: rebeccapurple; */
}
/* .select{float:left;width:60px;margin-left:36px;margin-right:16px;} */
.srk{float:left;width:150px;height:40px;border-bottom:1px solid #E5E5E5;
padding-left:10px;
box-sizing:border-box;}
.srk input{width:100%;outline:none;border:none;font-size:18px;color:#333333;font-weight:550;}
.brand{float:left;margin-left:16px;margin-right:16px;
font-family:'PingFangSC-Regular';
font-size:14px;color:rgba(76,76,76,1);line-height:30px;}
.img{width:157px;height:auto;margin:0 auto 31px;}
.img img{width:50%;}
.brand1{font-family:'PingFangSC-Regular';font-size:14px;line-height:30px;}
.buttonWrap{padding:0 40px;box-sizing:border-box; margin-top:60px;}
.button{width:100%;height:44px;border-radius:25px;background:rgba(0,193,222,1);
line-height:44px;font-size:16px;text-align:center;color:#fff;
font-size:16px;
font-weight:550;
}
.confirm{color: #fff !important;background: rgb(2,155,250) !important;}
.cancel{color: rgb(51,51,51) !important;background: rgb(246,246,246) !important;border:none !important;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="我的爱车" />
        <!-- 中间部分 -->
        <div class="wrap">
          <div class="wrapContent">
           <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">品牌车型</div>
                <div class="srk">
                    <input type="text" v-model="item.brand" readonly>
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="select">
                   <span class="san"></span>
                    {{item.province}}
                </div>
                <div class="srk">
                    <input type="text" v-model="item.plateNumber" readonly>
                </div>
            </div>
            <div>
                <div class="brand">车辆图片</div>
            </div>
            <div class="img">
                <!-- <img src="@/imgs/mobile/wdcl_car.png" alt="" srcset=""> -->
                <img :src="item.imageUrl | imgsrc" alt="" srcset="">
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">车辆属性</div>
                 <div class="brand1" v-if="item.carType ==2 ">{{item.carType | formatType}}&nbsp;
                    {{item.startTime.substring(0,10)}} ~ {{item.endTime.substring(0,10)}}</div>
                    <div class="brand1" v-if="item.carType !=2 ">{{item.carType | formatType}}&nbsp;
                    </div>
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">绑定时间</div>
                <div class="brand1">{{item.createDate.substring(0,16)}}</div>
            </div>
        </div>
            <div class="buttonWrap">
                <div class="button" v-show="isShow"  @click="unBind()">解除绑定</div>
            </div>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
import {MessageBox} from 'mint-ui';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    filters:{
        formatTime(sDate){
            var date = new Date(sDate);
            var seperator1 = ".";
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
        },
         formatType(val){
            if(val == 0){
                return '外来车辆'
            }if(val == 1){
                return '临时车辆'
            }if(val == 2){
                return '固定车辆'
            }
        },
        formatCreateTime(sDate){
            var date = new Date(sDate);
            var seperator1 = ".";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            //月
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            //日
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            //时
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours;
            }
            //分
            if (minutes >= 0 && minutes <= 9) {
                minutes = "0" + minutes;
            }
            //格式化后日期为：yyyy-MM-dd HH:mm:ss
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes;
            return currentdate;
        },
        formatCar(val){
            if(val == 0){
                return '外来车辆'
            }
            if(val == 1){
                return '临时车辆'
            }
            if(val == 2){
                return '固定车位'
            }
        }
    },
    components:{
        navigator,
            [MessageBox.name]: MessageBox
    },
    data() {
        return {
            $_select_$: '',
            item:{},
            isShow:true
        }
    },
    created(){
        this.$_global_$.serverPath
        this.$_clxq_$()
    },
    methods: {
        // 车辆详情
        $_clxq_$() {
            this.$root.inparams.item
            this.item = this.$root.inparams.item
        },
        // 解除绑定
        unBind(){
            const html2 = `<p style="font-size:15px;color:#33333 !important;line-height:1;margin:39px 0 34px;">您确定要解除
            <span style="font-size:16px;color:rgb(2,155,250);"> ${this.item.province}
            ${this.item.plateNumber} </span>的绑定吗？</p>`
            MessageBox({
                title: '',
                message: html2,
                confirmButtonText: '确定',
                confirmButtonClass: 'confirm',
                showCancelButton: true,
                cancelButtonText: '取消',
                cancelButtonClass: 'cancel'
            }).then(action => {
                if(action == 'confirm'){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/zone/car/remove/${this.item.id}`,
                        data:{},
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                const mess = this.item.province+this.item.plateNumber
                                this.$router.back()
                            }else{
                                const ht = rsp.data.message
                                MessageBox.alert({
                                    title: '提示',
                                    message: ht,
                                    confirmButtonText: '确定'
                                })
                            }
                        }
                    })
                }else{

                }
            });   
        }
    },
}
</script>