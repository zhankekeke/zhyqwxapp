<style scoped>
    .wrap{padding:20px;box-sizing:border-box;min-height:100vh;background:#fff;}
    .title{font-size:16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        line-height:16px;
        width:90%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom:20px;
    }
    .item{
        width:100%;
        height:61px;
        margin-bottom:20px;
        background:#f9f9f9;
        padding:11px 20px 10px;
        box-sizing:border-box;
    }
    .icon{
        display: block;
        width: 33px;
        height: 40px;
        float: left;
        margin-right: 20px;
    }
    .down{
        width: 16px;
        height: 16px;
        float: right;
        display: block;
        margin-top: 9px;
    }
    .content{
        float: left;
        width:70%;
        line-height:1;
        font-family:PingFangSC-Regular;
    }
    .content .title1{
        font-size:16px;
        font-weight:400;
        color:rgba(51,51,51,1);
        width:80%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .content .detail{
        margin-top:8px;
        font-size:12px;
        font-weight:400;
        color:rgba(179,179,179,1);
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
    >>>.ivu-modal-header{border-bottom: none;padding-bottom:0;padding-top:30px;text-align: center;}
    >>>.ivu-modal-footer{border-top:none;overflow:hidden;padding:0;display: none;}
    >>>.ivu-icon{display:none;}
    .pop >>>.ivu-btn:nth-child(2){
        background: linear-gradient(136deg, rgba(0, 193, 222, 1) 0%, rgba(78, 174, 254, 1) 100%);
        color: #fff;
        border-top-right-radius:0;
        border-top-left-radius:0;
        border-bottom-left-radius:0;
    }
    .pop  >>>.ivu-btn:nth-child(1){
        border-top:1px solid #f6f6f6;
    }
    .pop >>>.ivu-btn{
        float: left;
        color: #333;
        background: #fff;
        height:50px;
        width:50%;
        margin:0;
    }
    .tit{
        color:#ccc;
        line-height: 25px;

    }
</style>

<template>
    <div>
        <!-- 首页 -->
        <navigator title="附件下载"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <p class="title">{{title}}</p>
            <div class="item" v-for="(item,index) in files" :key="index">
                <img v-if="format(item.filePath)" class="icon" :src="imgurl" alt="">
                <div class="content">
                    <p class="title1">{{item.fileName}}</p>
                    <p class="detail">{{type}}&nbsp;&nbsp;&nbsp;{{item.fileSize}}</p>
                </div>
                <span @click="pop(item.filePath)"><img class="down" src="/static/yqhd/download.svg" alt=""></span>
            </div>
        </div>
        <!-- 弹出框 -->
        <Modal class="pop"
            v-model="popTip"
            title="温馨提示">
            <p class="tit">请复制此链接在浏览器中打开</p>
            <!-- <span class="url">链接地址:</span> -->
            <button class="url" v-clipboard:copy="popUrl"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError">
              {{popUrl}}
            </button>
            <!-- <p class="url">{{popUrl | imgsrc}}</p> -->
            
        </Modal>
    </div>
</template>

<script>
import navigator from '../public/navigator';
import { Toast } from 'mint-ui' 
export default {
    data(){
        return {
            popTip: false,
            files:[],
            title:'',
            imgurl:'',
            type:'',
            size:'154',
            popUrl : ''
        }
    },
    components: {
            navigator
    },
    methods:{
        // dropDown(url){
        //     //console.log(this.$_global_$.ImgServer + url)

        //  window.location.href=this.$_global_$.ImgServer + url
        // },
        format(url){
            var index=url.lastIndexOf(".")
            var type = url.substring(index+1).toLowerCase()
            // 图片
            var ImgType=["gif", "jpeg", "jpg", "bmp", "png"];
            if(RegExp("\(" + ImgType.join("|") + ")$").test(type)){
                this.imgurl = "/static/yqhd/img.svg"
                this.type = 'image'
                return true
            }
            // 文档
            var docType = ["doc", "docx"]
            if(RegExp("\(" + docType.join("|") + ")$").test(type)){
                this.imgurl = "/static/yqhd/word.svg"
                this.type = 'docx'
                return true
            }
            // 表格
            var xslType = ["xls", "xlsx"]
            if(RegExp("\(" + xslType.join("|") + ")$").test(type)){
                this.imgurl = "/static/yqhd/word.svg"
                thid.type = 'xlsx'
                return true
            }
            // PPT
            var pptType = ["ppt", "pptx"]
            if(RegExp("\(" + pptType.join("|") + ")$").test(type)){
                this.imgurl = "/static/yqhd/ppt.svg"
                this.type = 'ppt'
                return true
            }
            // TXT
            if(RegExp("\txt$").test(type)){
                this.imgurl = "/static/yqhd/txt.svg"
                this.type = 'txt'
                return true
            }
            // 其他
            else{
                this.imgurl = "/static/yqhd/other.svg"
                this.type = 'other'
                return true
            }
            
        },
        pop(url){
            this.popUrl =  this.$_global_$.ImgServer + url
            this.popTip = true
        },
        onCopy () {
            Toast('复制成功！')
            // this.$Message({
            //     message: `复制成功！`,
            //     type: 'success'
            // });
        },
        onError () {
            // this.$Message.error(this.$t('prompt.copyFail'))
             Toast('复制失败！')
        }
    },
    created(){
         this.$_global_$.ImgServer
        this.files = JSON.parse(this.$root.inparams.file) ? JSON.parse(this.$root.inparams.file) : this.$root.inparams.file
        this.title = this.$root.inparams.title
         this.$_global_$.ImgServer
         
    }
}
</script>