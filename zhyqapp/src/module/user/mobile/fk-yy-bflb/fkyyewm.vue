
<style lang="less" scoped>
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        .ivu-modal {
            top: 0;
        }
    }
</style>
<style scoped>
html,body,.wrapper,.container{
    min-height:100vh;
}
    .container {
        font-size: 16px;
        font-weight: 400;
        background: #00C1DE;
    }

    .wrap {
        box-sizing: border-box;
        margin:0 20px;
        margin-top:15px;
        font-size: 14px;
        color: #333;
        background: url(/static/fksf/invite.svg) no-repeat center;
        background-size:100% auto;
    }

    .mtitle {
        width: 100%;
        height: 40px;
        font-size: 16px;
        float: left;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
    }


    .mperson {
        margin-top: 10px;
    }

    .btn {
        margin: 15px auto;
        height:85px;
    }
   .btn p{
       color:#fff;
       height:25px;
       line-height:25px;
       padding:15px;
       box-sizing:border-box;
   }
   .btn p:first-child{
       font-size:16px;
   }
    .qrcode {
        height: 292px;

    }

    .info {
        color: #333333;
        padding: 20px 0px 20px 0px;
        box-sizing:border-box;
        position:relative;
        height:270px;
    }
    .info span{
        height:1px;
        display:block;
        border-top:1px dashed #ccc;
        position:absolute;
        width:89%;
         top: -1px;
      left: 19px;


    }
    .code .enter{
        position:absolute;
        margin-top:28px;
       text-align: center; 
    }
    .code .enter span{
        color: #333333; 
        font-size: 14px;
        font-family:'PingFangSC-Regular';
    }
    .code .enter img{
      width: 166px; 
      margin:20px 85px 15px 84px;
      display: block;
       height: 166px;  
    }
     .mtime:first-child{
         margin-top:0;
     }
     .mtime {
       font-size:14px;
      margin-top:12px;
      padding-left:30px;
      font-family:'PingFangSC-Regular';
      font-weight:400;
    }
    .people{
        font-size:14px;
        padding-left:30px;
     font-family:'PingFangSC-Regular';
      font-weight:400;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
            <navigator title="邀请函" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="qrcode">
                <div class="code">
                    <div class="enter">
                        <span style="font-weight:450;">请对准打卡机，扫码进入</span>
                        <img
                             :src="$_msg_$.qrCode"/>
                        <span style="color:#B3B3B3;">切勿泄露此二维码</span>
                    </div>
                </div>
            </div>
            <div class="info">
             <span style="border-top:1px dashed #ccc;"></span>
                <div  class="people">邀请人:&nbsp;{{mess}}</div>
                <div class="mtime">单位：{{$_msg_$.employeeCompany}}</div>
                <div class="mtime">邀请时间：{{$_msg_$.visitDate}}</div>
                <div class="mtime" v-if="$_msg_$.meetingTheme">会议主题：{{$_msg_$.meetingTheme}}</div>
                  <div class="mtime" v-if="$_msg_$.meetingAddress">会议室：{{$_msg_$.meetingAddress}}</div>
                   <div class="mtime">我司地址：{{$_msg_$.companyAddress}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    // import controler from './controler.js';
    import navigator from '../public/navigator';
    export default {
       // mixins: [controler],
        components:{
            navigator
        },
        filters:{
        formatDate(item){
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
     },
     format(item){
         if(item == 0){
             return '待审核'
         }
         if(item ==1){
             return '已通过'
         }
         if(item ==2){
             return '已拒绝'
         }
     }
        },
        data() {
            return {
                $_msg_$: '',
                msg:'',
                mess:'',
                time:'',
                item:''
            }
        },
        created() {
            this.$_message_$()
            this.read()
        },
        methods: {     
      //阅读消息
            $_message_$() {
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/visitor/detail/${this.$route.query.id}`,
                }).then(res => {
                    //console.log(res)
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                          this.$_msg_$ = res.data.data
                          this.mess = res.data.data.employeeName +' '+res.data.data.employeeMobile
                        }else{
                            this.$Message.error(rsp.data.message)
                        }
                    }
                })
            },
            read(){
                  this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/visitor/read/${this.$route.query.id}`,
                }).then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                        }
                    }
                })
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'fk-yy-bflb', {id: 1})
            }
        },

    }




</script>