<style scoped>
.container {
    background-color:#f6f6f6;
    min-height:100vh;
}
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{ padding:17px 15px 0 15px;border-top:5px solid rgb(246,246,246)}
.footer .active{color:#029bfa;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width: 50%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.type{
    font-size:14px;
    color:rgb(51,51,51);
}
.list ul li{
    position:relative;
    padding-top:15px;
    overflow:hidden;
}
.list .img{
    width:35px;
    height:auto;
    margin-right:15px;
}
.list .img img{
    width:100%;
}
.lister{
    padding-bottom:15px;
    position:relative;
    margin-left:48px;
    border-bottom:1px solid rgb(236,236,236);
}
.lister p:last-child{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
} 
.create{
    line-height:30px;
}
.wei{
    top: 3px;
    right: 0;
    height: 15px;
    padding:0 6px;
    font-size: 10px;
    line-height: 17px;
    border-radius: 7px;
    position: absolute;
    text-align: center;
    box-sizing:border-box;
    color: rgb(235,235,235);
    background-color: rgb(231,56,62);

}
.list .lister p:first-child{
color:rgb(51,51,51); font-size:16px;font-weight:550;
}
.list .lister p:nth-child(2){
color:rgb(136,136,136);font-size:14px;
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
         <navigator title="系统通知"  @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
           <div class="list" v-if="fwjl.length >0">
               <ul >
                   <li v-for="item in fwjl" @click="xtxq(item)" v-if="item">
                     <div class="img" style="float:left" v-if="item.messageType == 'MEETING' ">
                        <img src="/static/xtxx/hys.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'SERVICE' ">
                        <img src="/static/xtxx/fw.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'VISITOR' ">
                        <img src="/static/xtxx/fk.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'ACTIVITY' ">
                        <img src="/static/xtxx/hd.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'MALL' ">
                        <img src="/static/xtxx/jfsc.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'SYSTEM' ">
                        <img src="/static/xtxx/xt.png">
                     </div>
                      <div class="img" style="float:left" v-if="item.messageType == 'STEWARD' ">
                        <img src="/static/xtxx/zx.png">
                     </div>
                     <div class="lister">
                      <p> {{item.title}} <span class="wei" v-if="item.unreadCount > 0">{{item.unreadCount}}</span></p>
                      <p >{{item.content}}</p>
                     </div>
                    
                   </li>
               </ul>
            </div>
            <div v-else class="divNoList" >
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">暂无通知~</div>
            </div>
           </div>
        </div>
       
    </div>
</template>

<script>
import controler from './controler.js';
import navigator from '../public/navigator';
import {Toast,Loadmore,Indicator} from 'mint-ui';
import {mapGetters} from 'vuex';
export default {
    mixins: [controler],
    components:{
         navigator,
        [Loadmore.name]: Loadmore,
        [Indicator.name]:Indicator
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
            pageSize:100,
            fwjl:{
                compnyName:''

            },
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
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        });
        this.list()
    },
    methods:{
        list(){
          this.$_sendQuery_$({
                method:"POST",
                url:this.$_global_$.serverPath+`/company/message/${this.currentZoneId}/category/list`,
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
                          Indicator.close();
                        //  console.log(this.fwjl)
                        
                    }
                }
              })
        },
        xtxq(item){
             this.$root.$_Route_$('user','mobile','ygsy-xtxq',{type:item.messageType})
        },
        //返回首页
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygindex',{id:1})
        },
        //服务记录
    //      handleTopChange(status) {
    //             this.topStatus = status;
    //    },
    //    loadBottom() {
    //             setTimeout(() => {
    //                 this.pageNum++;
    //                 this.list();
    //                 this.$refs.loadmore.onBottomLoaded();
    //             }, 1000);
    //   }
    }
}
</script>