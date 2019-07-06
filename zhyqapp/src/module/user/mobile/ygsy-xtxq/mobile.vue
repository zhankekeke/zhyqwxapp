<style>
#ModuleContent{margin: 0!important;padding: 0!important;  background-color:rgb(246,246,246)!important;}
.MainContent{top:0!important;}
body{position: static;font-size:14px;}
</style>
<style scoped>
#ModuleContent{
   background-color:rgb(246,246,246)!important;
}
.container {
    background-color:#f6f6f6;
    min-height:100vh;
}
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.wrap{ padding:0 15px 0 15px;box-sizing:border-box;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.type{
    font-size:14px;
    color:rgb(51,51,51);
}
.list ul li{
    position:relative;
    padding-top:15px;
    overflow:hidden;
    border-radius:10px;
}
.lister{
   padding:25px 15px;
   box-sizing:border-box;
   background-color:#fff;
}
.lists{
  position:relative;
}
.lister p:last-child{
    white-space: nowrap;
    overflow: hidden;
    color:rgb(136,136,136);
    text-overflow: ellipsis;
    font-size:14px;

}
.lister p:first-child{
    font-size:16px;
    color:#000;
    font-weight:550;
    padding-bottom:10px;
} 
.create{
    line-height:30px;
}
.lists .informs{
    text-align:center;
    font-size:12px;
    color:rgb(153,153,153);
    padding-bottom:15px;
}
.circle{
    width:10px;
    height:10px;
    background:rgba(250,84,28,1); 
    display:block;
    float:left;
    margin-right:6px;
    border-radius:100%;
    margin-top:7px;
}
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
         <navigator title="系统通知" @back="$_backer_$" />
        <!-- 中间部分 -->
        <div class="wrap">
           <div class="list">
               <ul v-if="fwjl.length != 0">
               <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill = false ref="loadmore">
                   <li v-for="item in fwjl"  class="lists" @click="inform(item)">
                     <p class="informs">
                        
                         {{item.createTime}}
                     </p>
                     <div class="lister">
                      <p> <span v-if="!item.isRead" class="circle"></span> {{item.title}}</p>
                      <p>{{item.content}}</p>
                     </div>
                   </li>
                    <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                     </div>
                </mt-loadmore> 
               </ul>
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
    filters:{
     format(item){
       if(item == 0){
           return '未处理'
       }
       if(item == 1){
           return '处理中'
       }
       if(item == 2){
           return '已解决'
       }
       if(item == 3){
           return '已完成'
       }
     },
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
     }
    },
    data() {
        return {
            $_model_$:'',
            userInfo:'',
            pageNum:1,
            fwjl:{
            },
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
        this.xtxq()
        this.list()
      
    },
    methods:{
        list(){
          this.$_sendQuery_$({
                method:"POST",
                url:this.$_global_$.serverPath+`/company/message/${this.currentZoneId}/category/${this.messageType}/message/page`,
                data:{
                },
                headers:{
                "Content-type":"application/json"
                } 
            }).then((rsp)=>{
                //console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code ==0){
                          this.fwjl = rsp.data.data.records
                        //  console.log(this.fwjl)
                        
                    }
                }
              })
        },
        xtxq(){
            this.$root.inparams.id
          this.messageType = this.$root.inparams.type
        },
        inform(item){
            this.$_sendQuery_$({
                method:"PUT",
                url:this.$_global_$.serverPath+`/company/message/${this.currentZoneId}/read/${item.id}`,
                data:{},
                headers:{
                "Content-type":"application/json"
                } 
            }).then((rsp)=>{
                if(rsp.status === 200){
                    if(rsp.data.code ==0){
                        if(item.messageType == 'MALL'){
                            this.$router.push({
                                    path:'/ygsy-jfsc-gmjl/ygsy-jfsc-ddxq',
                                    query:{
                                        id:item.resourceId,type:item.messageType
                                    }
                            })
                        }else if(item.messageType == 'SERVICE'){
                            if(item.resourceType == 0){
                                this.$_sendQuery_$({
                                    method: "POST",
                                    url: `${this.$_global_$.serverPath}/steward/steward/queryRecordDetails`,
                                    data: {
                                        recordId: item.resourceId,
                                        role: "c"
                                    },
                                    headers: {"Content-type": "application/json"}
                                }).then((rsp) => {
                                    if (rsp.status === 200) {
                                        if (rsp.data.code === 0) {
                                            if(rsp.data.data.recordStatus == 3){
                                                this.$root.$_Route_$('user', 'mobile', 'ygsyfwcl', {id: item.resourceId,type:item.messageType,show:1})
                                            }else{
                                                this.$root.$_Route_$('user', 'mobile', 'ygsyfwcl', {id: item.resourceId,type:item.messageType})
                                            }
                                        }
                                    }
                                })
                                
                            }else if(item.resourceType == 2){
                                 this.$root.$_Route_$('user', 'mobile', 'ygsyfwsl', {type:item.messageType})
                            } else{
                                this.$_sendQuery_$({
                                    method: "POST",
                                    url: `${this.$_global_$.serverPath}/steward/steward/queryRecordDetails`,
                                    data: {
                                        recordId: item.resourceId,
                                        role: "c"
                                    },
                                    headers: {"Content-type": "application/json"}
                                }).then((rsp) => {
                                    if (rsp.status === 200) {
                                        if (rsp.data.code === 0) {
                                            this.itemr = rsp.data.data
                                            if(rsp.data.data.commiterTimelinessStar){
                                                    this.$root.$_Route_$('user', 'mobile', 'ygsy-gjfw-pj', {id: item.resourceId,type:item.messageType})
                                            }else{
                                                this.$root.$_Route_$('user', 'mobile', 'ygsy-fwjl-sxxq', {id: item.resourceId,type:item.messageType})
                                            }
                                        }
                                    }
                                })
                                
                            }
                        }else if(item.messageType == 'VISITOR'){
                            //访客预约  1：审核 2 邀请
                            if(item.resourceType == 0){
                                this.$_sendQuery_$({
                                    method: "GET",
                                    url: `${this.$_global_$.serverPath}/company/visitor/detail/${item.resourceId}`,
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                }).then(res => {
                                    if (res.status === 200) {
                                        if (res.data.code === 0) {
                                            if(res.data.data.auditStatus == 2){
                                                this.$router.push({
                                                    path:'/ygsyfkgl/ygsy-fkgl-fkjj',
                                                    query:{id:item.resourceId,type:item.messageType}
                                                })
                                            }else if(res.data.data.auditStatus == 0){
                                                this.$router.push({
                                                    path:'/ygsyfkgl/ygsy-fkgl-fksh',
                                                    query:{id:item.resourceId,type:item.messageType}
                                                })
                                            }else{
                                                this.$router.push({
                                                    path:'/ygsyfkgl/ygsy-fkgl-fkyq',
                                                    query:{id:item.resourceId,type:item.messageType}
                                                })
                                            }
                                        }
                                    }
                                })
                            }else{
                                this.$router.push({
                                    path:'/fk-yy-bflb/fk-yyxq',
                                    query:{id: item.resourceId,type:item.messageType}
                                })
                            }
                        }
                    }}
            })
            
            
        },
        $_back_$(){
            this.$root.inparams.id
        },
        //返回首页
        $_backer_$(){
            this.$root.$_Route_$('user','mobile','ygsy-xtxx-list',{id:1})
        },
        //服务记录
         handleTopChange(status) {
                this.topStatus = status;
       },
       loadBottom() {
             setTimeout(() => {
                    this.pageNum++;
                    this.list();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
      }
    }
}
</script>