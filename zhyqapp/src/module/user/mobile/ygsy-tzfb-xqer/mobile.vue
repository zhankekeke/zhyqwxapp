
<style scoped>
.containe{
    background:rgba(246,246,246,1);
    min-height:100vh;
}
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
    }
    .item {
        margin-top: 10px;
        border-bottom: 1px solid #f7f7f7;
        font-size: 14px;
        width: 100%;
        padding:17px 16px;
        box-sizing:border-box;
    }
    .item p{
        margin-left:10px;
        font-size:18px;
        font-weight:550;
       font-family:'PingFangSC-Medium';
    }

    .cash {
        float: left;
        margin-right:10px;
        vertical-align:middle;
        margin-top:2px;

    }
 
    .text {
        font-size: 13px;
        padding:19px 16px 20px;
        box-sizing:border-box;
        font-size:14px;
        color:#333333;
        font-family:'PingFangSC-Regular';

    }
   >>> .texts p img{
        width:30px!important;
   }
    .texts span{
        font-size:14px;
        font-weight:400;
        font-family:'PingFangSC-Regular';
        color:#333333;
    }
    .fujian {
        padding: 25px 15px 80px;
        font-size: 14px;
        color: rgb(136, 136, 136);
        background: #fff;
        border-top: 10px solid rgb(243, 243, 243);
    }
    .demo-upload-list{
        margin-left:45px;
        overflow:scroll;
        height:auto;
        max-height: 230px;
        min-height: 115px;
    }
    .warp{
        padding-bottom:30px;
    }
    .warp .detail{
        background-color:#fff;
    }
    .text .receive{
        margin-top:15px;
    }
    .detail .texts{
        margin-top:15px;
        padding:0 16px;
        box-sizing:border-box;
        padding-bottom:36px;
    }
    .button{
    margin:60px 40px auto;
    }
    .button button{
        height:44px;
        text-align:center;
        width:296px;
    font-size:16px;
    font-weight:550;
    font-family:'PingFangSC-Medium';
    }
    .casher{
         float: left;
        margin-right:8px;
        vertical-align:middle;
        margin-top:2px;
        width:24px;
    }
      .texts ul li{
        width:33.3333%;
        float:left;
        margin-left:10px;
        height:100px;
        width:100px;
        margin-bottom:5px;
    }
    .texts ul li:nth-child(3n+1){
         margin-left:0;
    }
    .href{
     height:75px;width:1.9733rem;display:block;line-height:75px;
     text-align:center;
     background:url('/static/yqhd/img.svg') no-repeat center;
     background-size:100% 100%;
     font-size:10px;
     color:#333;
   }
     .popUp >>> .ivu-modal-footer{
   display:none!important;
   }
   .popUp >>> .ivu-modal-header-inner{
       text-align:center;
   }
   .popUp >>> .ivu-modal-close{
       display:none;
   }
    .tit{
        color:#ccc;
        line-height: 25px;

    }
    .url{
        word-wrap:break-word;
        line-height:25px;
        width:100%;
        border:none;
        outline: none;
        background: #fff;
        text-align: left;
    }
</style>
<template>

    <div class="containe" ref="aa">

        <navigator title="通知详情" @back="$_back_$"/>

        <!-- 中间部分 -->
        <div class="warp">
            <div class="detail">
                <div class="item">
                    <img class="cash" src="/static/tzfb/tzfb_xq_title.svg" alt="">
                    <p>{{$_msg_$.title}}</p>
                </div>
                <div class="text">
                    <div class="time" >发布时间：<span>{{$_msg_$.createDate}}</span>
                    </div>
                     <div v-if="$_msg_$.type == 2"><span>
                     <span>是否缴费：</span>{{$_msg_$.noticePayment.payStatus | account}}</span>
                     </br>需缴费金额：<span>{{$_msg_$.noticePayment.paymentAccount}}</span>
                     </br>
                     <span v-if="$_msg_$.noticePayment.payStatus == 1">缴费时间：{{$_msg_$.noticePayment.createTime}}</span>
                    </div>
                    <div class="receive" >收件人：<span
                           >{{$_msg_$.users}}</span></div>
                </div>
            </div>
            <div class="detail">
                <div class="item">
                    <img class="cash" src="/static/tzfb/tzfb_xq_zw.svg" alt="">
                    <p>正文:</p>
                </div>
                <div class="texts">
                    <span v-html="$_msg_$.content"></span>
                </div>
            </div>
              <div class="detail">
                <div class="item">
                    <img class="casher" src="/static/fwsl/fj.png" alt="">
                    <p>附件:</p>
                </div>
                <div class="texts" style="padding-bottom:16px;"> 
                 <ul style="overflow:hidden;">
                   <li  v-for="(item,index) in files">
                  <img  style="width:2.66rem;height:2.66rem;" v-if="formatItem(item)" v-gallery :src="item | imgsrc">
                    <a class="href" v-else @click="pop(item)">
                    复制链接</a>
                   </li>
                 </ul>
                </div>
            </div>
            <div class="button">
                <Button  shape="circle" size="large" type="primary" @click="$_forward_$" long>转发</Button>

            </div>
             <Modal class="popUp"
            v-model="popTip"
            title="温馨提示">
             <p class="tit">请复制此链接在浏览器中打开</p>
            <button class="url" v-clipboard:copy="popUrl"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">
             {{popUrl}}
            </button>
           
        </Modal> 
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            navigator,
        },
        filters:{
            formatFile(val){
                return val.substring(val.lastIndexOf('/')+1,val.length)
            },
            account(item){
             if(item == 0){
                 return '未缴费'
             }
             if(item == 1){
                 return '已缴费'
             }
            }
        },
        data() {
            return {
                $_msg_$: {},
                files:[],
                popUrl:'',
                popTip:false,
                id:0,
                ids:''
            }
        },
        created() {
            this.$_global_$.serverPath
            this.$_global_$.ImgServer
            this.$_msg_$ = this.$root.inparams.datar;
            //console.log(this.$_msg_$)
            this.id = this.$root.inparams.id
            //console.log(this.id)
            this.ids = this.$root.inparams.ids
          //  console.log( this.$_msg_$ )
            if(this.$_msg_$.files !== ""){
                this.files = this.$_msg_$.files.split(",")
            }
         let users = JSON.parse(this.$_msg_$.users);
         // let users = this.$_msg_$.users
         // console.log(users)
           this.isRead(this.$_msg_$.id)

            this.$_msg_$.users = '';
            for (let i = 0; i < users.length; i++) {
                if (!this.$_msg_$.users) {
                    this.$_msg_$.users = users[i].name;
                } else {
                    this.$_msg_$.users = this.$_msg_$.users + "、" + users[i].name;
                }
            }
        },
        methods: {
            $_back_$() {
                if(this.id){
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb', {id: 1})
                }else if(this.ids){
                    this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-fsjl', {id: 1})
                }
            },
            $_nextPage_$(id) {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb', {id: id})
            },
            $_forward_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-zf', {datar: this.$_msg_$})

            },
            // 判断是图片还是附件
            formatItem(item){
                var isImage = item.substring(item.lastIndexOf(".")+1);
                var imgType = ["jpg","jpeg","png","svg","gif","bmp","webp"]
                if(imgType.indexOf(isImage) > -1){
                    return true
                }else{
                    return false
                }
            },
              pop(item){
              this.popUrl =  this.$_global_$.ImgServer + item
              this.popTip = true
            },
              onCopy () {
                this.$Message.success('复制成功!')
                },
           onError () {
                this.$Message.error('请重新复制')
           },
           
            // 设置已读
            isRead(id){
                this.$_sendQuery_$({
                    method:"GET",
                    url:`${this.$_global_$.serverPath}/company/notice/${id}/read`,
                    data:{},
                    headers:{"Content-type":"application/json"}
                }).then((rsp)=>{
                    if(rsp.status === 200){
                        if(rsp.data.code === 0){
                        }
                    }
                })
            }
        }
    }
</script>