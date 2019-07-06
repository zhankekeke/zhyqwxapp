
<style lang="less">
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
        overflow: auto;
        width: 100%;
        height: 100%;
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
        font-weight:450;
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
    .info .bottom{
        padding-left:30px;
        padding-top:15px;
        box-sizing:border-box;
    }
    .bottom .information{
        font-size:18px;
        font-family:'PingFangSC-Medium';
        font-weight:550;
        color:rgba(51,51,51,1);
        margin-bottom:12px;
    }
    .bottom .state{
      font-size:16px;
      font-family:'PingFangSC-Regular';
      font-weight:400;
      color:#00C1DE;  
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
            <navigator title="预约信息" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="qrcode">
                <div class="code">
                    <div class="enter">
                        <span >请对准打卡机，扫码进入</span>
                        <img
                             :src="$_msg_$.qrCode"/>
                        <span style="color:#B3B3B3;">切勿泄露此二维码</span>
                    </div>
                </div>
            </div>
            <div class="info">
             <span style="border-top:1px dashed #ccc;"></span>
                <div  class="people">拜访人:&nbsp;{{mess}}</div>
                <div class="mtime">拜访单位：{{$_msg_$.employeeCompany}}</div>
                <div class="mtime">拜访时间：{{$_msg_$.visitDate}}</div>
                <div class="mtime">拜访事由：{{$_msg_$.visitReason}}</div>
              <div class="bottom">
                <div class="information">反馈信息</div>
                <div class="state">状态：{{$_msg_$.auditStatus | format}}</div>
                </div>
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
             return '已同意'
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
                time:''
            }
        },
        created() {
            this.$_info_$();
            this.$_message_$()
        },
        methods: {
            $_info_$() {
                this.msg= this.$root.inparams.data;
            },
            $_message_$() {
               // this.$_msg_$ = this.$root.inparams.data;
                //console.log(this.$_msg_$)
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/visitor/detail/${this.$route.query.id}`,
                }).then(res => {
                    console.log(res)
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
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'fk-yy-bflb', {id: 1})
            }
        },

    }




</script>