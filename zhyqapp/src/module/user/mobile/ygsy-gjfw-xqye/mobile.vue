<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff!important;position: static;color:#666;font-size:14px;line-height:26px;}
</style>
<style scoped>
.container{
    background-color:#f6f6f6;
    min-height:100vh;
}
.wrap{margin-top:9px;padding:0px 0px 0px 0;border-top:1px solid rgb(246,246,246);font-family:"Microsoft YaHei";background: #fff;}
.wrap .list{list-style:none;padding:15px 0 87px;box-sizing:border-box;}
.list .service{
    color:#333333;
    font-size:18px;
    font-family:'PingFangSC-Medium';
    font-weight:550;
    padding-left:16px;
}
.wrap .list .item{border-bottom:0.5px solid #ececec;font-size:13px;color:#333;padding:0 16px;box-sizing:border-box;
line-height:1.5;overflow:hidden;}
.wrap .list .item .key{display:block;float:left;padding:20px 0px; box-sizing:border-box;}
.wrap .list .item .value{display:block;float:left;padding:20px 0px;width:77%;}
.wrap .list .img{
    padding-left:16px;
    padding-right:10px;
}
.wrap .list .img .key{padding:20px 0 16px;font-size:14px;color:#333;}
.wrap .list .img .image{margin:0;list-style:none;overflow:hidden;}
.wrap .list .img .image .imageItem{float:left;margin-right:15px;width:73px;height:73px;}
.wrap .list .img .image .imageItem img{width:100%;height:100%;}
.list .img .thing{
    font-size:18px;
font-family:'PingFangSC-Medium';
font-weight:550;
color:rgba(51,51,51,1);
}
.list .img{
    margin-top:18px;

}
</style>
<template>
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <navigator title="详情" />
        <!-- 中间部分 -->
        <div class="wrap">
            <ul class="list">
                <span class="service">服务信息</span>
                <li class="item">
                    <span class="key">单号：</span><span class="value">{{info.orderNumber}}</span>
                </li>
              
                <li class="item">
                    <span class="key">事项分类：</span>
                    <span class="value">{{info.recordTypeCode | format}}</span>
                </li>
                <li class="item">
                    <span class="key">事项名称：</span>
                    <span class="value">{{info.recordTitle}}</span>
                </li>
                <li class="item">
                    <span class="key">单位名称：</span><span class="value">{{info.commiterEnterpriseName}}</span>
                </li>
                <li class="item" style=" border-bottom: 0.266rem solid #f6f6f6;">
                    <span class="key">提交时间：</span>
                    <span class="value">{{info.createDate | formatDate}}</span>
                </li>
                <li class="img" >
                <span class="thing">描述信息</span>
                    <p class="key" style="margin-bottom:0.533rem;"> 事项描述：<span class="value">{{info.recordDesc}}</span></p>
                    <ul class="image">
                        <li v-for="(item,index) in imgList" :key="index" class="imageItem">
                            <img :src="item |imgsrc" alt="">
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components:{
        navigator,
    },
    filters:{
      format(item){
         if(item == 1){
             return '物业报修'
         }
         if(item == 2){
             return '建议'
         }
         if(item == 3){
             return '企业服务咨询'
         }
         if(item == 4){
             return '留言'
         }
      },
      formater(item){
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
            if(hours >= 1 && hours <= 9){
                hours = "0" + hours
            }
             if(minutes >= 1 && minutes <= 9){
                minutes = "0" + minutes
            }
             if(seconds >= 1 && seconds <= 9){
                seconds = "0" + seconds
            }
            //格式化后日期为：yyyy-MM-dd HH:mm:ss
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +' ' + hours+ seperator2 + minutes + seperator2 + seconds
            return currentdate;
      }
    },
    data() {
        return {
           id:'',
           info:{},
           imgList:[]
        }
    },
    created(){
     this.$_global_$.serverPath
     this.Detail()
     this.Info()
    },
    methods:{
        // 获取服务记录详情
        Info(){
            this.$_sendQuery_$({
                method:"POST",
                url:`${this.$_global_$.serverPath}/steward/steward/queryRecordDetails`,
                data:{
                    recordId:this.id,
                    role:'c'
                    },
                headers:{"Content-type":"application/json"}
            }).then((rsp)=>{
                console.log(rsp)
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        this.info = rsp.data.data
                         console.log(this.info)
                        this.imgList = rsp.data.data.recordAttachment.split(",")
                    }
                }
            })
        },
        Detail(){
            this.id = this.$root.inparams.id
            //console.log(this.id)
        },
        //返回
        $_backer_$(){
            this.$root.$_Route_$('user','mobile','ygsyfwjl',{id:1})
        }
    }
}
</script>