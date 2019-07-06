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
html,body,.wrapper,.container{
    min-height:100vh;
}
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        font-weight: 400;
        background-color:#F5F5F5;
    }


    .wrap2 {
        background:#F6F6F6;
    }
    .mul{
        border-top:10px solid #F6F6F6;
    }
  .mul li {
        padding: 16px 16px 15px 18px;
        background-color: white;
        box-sizing:border-box;
    }
    .mul li span{
        font-size:14px;
        font-weight:400;
        color:#333333;
        font-family:'PingFangSC-Regular';
    }
  .last{
      border-top:10px solid #F6F6F6; 
  }
 .last h2{
     margin-bottom: 20px;
    font-size: 18px;
     font-family:'PingFangSC-Medium';
     font-weight:550;
     color:#333333;

 }
 
.last .reason{
    /* padding-left:5px; */
}
.last .reason span{
    font-size:16px;
    font-weight:400;
    color:#333333;
    font-family:'PingFangSC-Regular';
}
.mul .vister span{
    font-size:18px;
    margin-top:18px;
    font-family:'PingFangSC-Medium';
    font-weight:550;
    color:rgba(51,51,51,1);
}
.mul .vister{
    padding-bottom:0;
}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
             <navigator title="预约状态" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap2">
                <ul class="mul">
                    <li class="vister">
                        <span>拜访人信息</span>
                    </li>
                    <li >
                        <span>姓名:&nbsp;&nbsp; {{$_intinfo_$.employeeName}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span >电话:&nbsp;&nbsp; {{$_intinfo_$.employeeMobile}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span>单位:&nbsp;&nbsp; {{$_intinfo_$.employeeCompany}}</span>
                    </li>

                    <li class="vister" style="border-top:0.2666rem solid #F6F6F6; ">
                        <span>拜访信息</span>
                    </li>
                    <li >
                        <span >拜访事由:&nbsp;&nbsp; {{$_intinfo_$.visitReason}}</span>
                    </li>
                    <li style="border-top: 1px solid #f4f4f4">
                        <span >拜访时间:&nbsp;&nbsp; {{$_intinfo_$.visitDate}}</span>
                    </li>
                     <li class="last">
                        <h2 >反馈信息</h2>
                         <div class="reason">
                        <span v-if="$_intinfo_$.auditStatus == 0">状态：待审核</span>
                        <span v-if="$_intinfo_$.auditStatus == 1">状态：已通过</span>
                        <span v-if="$_intinfo_$.auditStatus == 2">状态：已拒绝</span>
                         
                        </div>
                    </li>
                      <li style="border-top: 1px solid #f4f4f4;" v-if="$_intinfo_$.auditStatus == 2">
                        <span >拒绝理由:&nbsp;&nbsp; {{$_intinfo_$.auditDesc}}</span>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    // import controler from './controler.js';
    import {MessageBox} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import navigator from '../public/navigator';
    export default {
        //mixins: [controler],
         components:{
            navigator
        },
        filters:{
            format(item){
                if(item == 0){
                   return '等待回应'
                }
                if(item ==1){
                    return '审核通过'
                }
                if(item == 2){
                    return '审核不通过'
                }
            }
        },
        data() {
            return {
                $_search_$: '',
                $_intinfo_$: '',
                intinfo:'',
                detailId:0,
            }
        },
        created() {
            this.$_save_$();
            this.$_global_$.serverPath
            this.detail()
        },
        methods: {
             detail(){
                this.$_sendQuery_$({
                    method:"GET",
                    url:this.$_global_$.serverPath+`/company/visitor/detail/${this.$route.query.id}`,
                    data:{},
                    headers:{
                    "Content-type":"application/json"
                    }
                }).then((rsp)=>{
                    console.log(rsp)
                    if(rsp.status === 200){
                        if(rsp.data.code === 0){
                          this.$_intinfo_$ = rsp.data.data
                        }else{
                            this.$Message.error(rsp.data.message)
                        }
                    }
                })
               
              },
             $_save_$() {
                this.intinfo = this.$root.inparams.data;
                this.detailId = this.intinfo
            },
            $_back_$() {
                if(this.$route.query.type){
                    var type = this.$route.query.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                    this.$root.$_Route_$('user', 'mobile', 'fk-yy-bflb', {id: 1})
                }

            },
        }
    }
</script>