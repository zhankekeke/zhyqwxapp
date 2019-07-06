<style>
#ModuleContent{margin: 0!important;padding: 0!important; background-color:#fff!important; }
.MainContent{top:0!important;}
body{position: static;font-size:14px;}
</style>
<style scoped>
.container {
    background-color:#f6f6f6;
    min-height:100vh;
}
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.wrap{padding:0 15px 0 15px;box-sizing:border-box; border-top:1px solid rgb(236,236,236);}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.type{
    font-size:14px;
    color:rgb(51,51,51);
}

.lister{
   padding:25px 0;
   box-sizing:border-box;
}

.lister p:last-child{
    color:rgb(136,136,136);
    line-height:25px;
    font-size:14px;

}
.lister p:first-child{
    font-size:16px;
    font-weight:bold;
    color:rgb(51,51,51);
    padding-bottom:10px;
} 
.list .createTime{
text-align:right;font-size:12px;color:rgb(153,153,153);padding-bottom:15px;
}
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
         <navigator title="系统通知" />
        <!-- 中间部分 -->
        <div class="wrap">
           <div class="list">
                     <div class="lister">
                      <p> {{fwjl.title}}</p>
                      <p>{{fwjl.content}}</p>
                     </div>
                      <p class="createTime" >{{fwjl.createTime}}</p>
           </div>
        </div>
       
    </div>
</template>

<script>
import controler from './controler.js';
import navigator from '../public/navigator';
import {Toast,Loadmore} from 'mint-ui';
import {mapGetters} from 'vuex';
export default {
    mixins: [controler],
    components:{
         navigator,
        [Loadmore.name]: Loadmore,
    },
    data() {
        return {
            $_model_$:'',
            userInfo:'',
            pageNum:1,
            fwjl:{
            },
            id:0,
            messageType:'',
            $_sxmc_$:'wwww',
            $_sxms_$:'sssss',
            $_sjsj_$:'8.88.8.8',
            $_sjzt_$:'处理中',
            topStatus:'',
        }
    },
    computed:{
     ...mapGetters(['currentZone', 'currentZoneId']),
    },
    created() {
         this.currentZoneId
        this.$_global_$.serverPath
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.inform()
        this.list()
        this.lists()
      
    },
    methods:{
        list(){
          this.$_sendQuery_$({
                method:"GET",
                url:this.$_global_$.serverPath+`/company/message/${this.currentZoneId}/detail/${this.id}`,
                data:{
                },
                headers:{
                "Content-type":"application/json"
                } 
            }).then((rsp)=>{
                console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code ==0){
                          this.fwjl = rsp.data.data
                        //  console.log(this.fwjl)
                        
                    }
                }
              })
        },
         lists(){
          this.$_sendQuery_$({
                method:"PUT",
                url:this.$_global_$.serverPath+`/company/message/${this.currentZoneId}/read/${this.id}`,
                data:{
                },
                headers:{
                "Content-type":"application/json"
                } 
            }).then((rsp)=>{
               // console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code ==0){
                        //this.$Message.success('该消息已读!');
                        
                    }
                }
              })
        },
        inform(){
         this.$root.inparams.id
         this.id = this.$root.inparams.id
        },
        //返回首页
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygsy-xtxx-list',{id:1})
        },
        //服务记录
         handleTopChange(status) {
                this.topStatus = status;
       },
       loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.lists();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
      }
    }
}
</script>