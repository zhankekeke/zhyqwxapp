<style scoped>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
>>> .el-upload__input{visibility: hidden !important;outline:none !important;border:none !important;
width:100% !important;height:100% !important;}
>>> .el-upload__input:focus{outline:none !important;border:none !important;}
>>> .el-upload__input:hover{outline:none !important;border:none !important;}
>>>.input[type="hidden" i], .input[type="image" i], .input[type="file" i]:focus {
outline: none!important;}

>>> .el-upload.el-upload--picture-card{
    border:none !important;
    opacity:0.01;
    width:100% !important;height:100% !important;
}
>>> .el-upload-list.el-upload-list--picture-card{
    display:none;
    
}
</style>
<style scoped>
.container{
    min-height:100vh;
   background:rgba(246,246,246,1);
}
.wrap{
    margin-top:50px;
}
.wrap .wrapContent{overflow:hidden;padding-bottom:15px;
border-top-left-radius:8px;
border-top-right-radius:8px;
padding-top:20px;margin:0 16px;box-sizing:border-box;background-color:#fff;}
.select{float:left;
margin-right:16px;
margin-left:16px;
text-align:center;
 font-size:14px;}
.srk{float:left;width:150px;height:40px;border-bottom:1px solid #E5E5E5;
padding-left:10px;
box-sizing:border-box;}
.brand{ font-size:14px;color:#333333;float:left;
margin-left:16px;
margin-right:10px;
font-family:'PingFangSC-Regular';line-height:30px;}
.brand1{font-family:"Microsoft YaHei";font-size:15px;color:#333333;line-height:30px;}
.srk input{width:100%;outline:none;border:none;font-family:"Microsoft YaHei";font-size:15px;color:#333333;}
.buttonWrap{padding:0 40px;box-sizing:border-box; margin-top:80px;}
.button{width:100%;height:44px;border-radius:25px;background:rgba(0,193,222,1);line-height:44px;font-size:16px;
color:#fff;text-align:center;font-weight:550;font-family:'PingFangSC-Medium';}
.dashedContent1{width:100px;height:100px;position:relative;}
.dashedContent{position:absolute;top:0;left:0;border:1px dashed #999999;margin:0 auto;padding-top:23px;
box-sizing:border-box;width:74px;height:74px;text-align:center;color:rgb(153,153,153);font-size:10px;
z-index: 0;}
.dashedContent img{margin-bottom:14px;width:21px;height:auto;}
.img{width:157px;height:auto;margin:0 auto 31px;position:relative;}
.img .photo{width:70%;height:120px;}
.img .cancel{text-align:right;position:absolute;top:3px;right:83px;width:20px;height:auto;}
>>> .ivu-select-selection {
background:rgba(201,248,255,1);
border:none!important;
color:rgba(0,193,222,1);
font-size:14px;

}
.img .imag{
        width:74px;
        height:74px;
    }
>>> .ivu-select-dropdown::-webkit-scrollbar{
   background-color:#fff;
   visibility:hidden;
}
>>> .ivu-select-dropdown::-webkit-scrollbar-thumb {
            border-radius: 10px;
}
>>> .ivu-select-dropdown::-webkit-scrollbar-track {
            border-radius: 0;
 }
>>> .ivu-select{
    width:auto;
}
>>>.ivu-select-selection{
    position:relative;
}
.select .san{
    width:0;
    position:absolute;
    height:0;
    border-bottom: 6px solid rgba(0,193,222,1);
    border-left: 6px solid transparent;
    z-index:999999;
}

>>>.ivu-select-selected-value:focus{
    outline:none;
}
>>>.ivu-select-visible .ivu-select-selection{
    box-shadow:none;
}
>>>.ivu-select-item{
    padding:3px 0;
    box-sizing:border-box;
}
>>>.ivu-icon-arrow-down-b:before {
    color: rgba(0,193,222,1);
}
.box{
      position:absolute;
      left:24px;
      top:18px;
    }
    >>> .el-progress-circle{
      width: 25px!important;
      height: 25px!important;
    }
     >>> .el-progress__text{
      top:150%;
      font-size:12px;
    }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="我的爱车" />
        <!-- <div class='header'><Icon @click="$_qb_$" type="ios-arrow-back" class="back"/>车辆绑定</div> -->
        <div class="wrap">
         <div class="wrapContent" >
                <div class="brand">品牌车型</div>
                <div class="srk">
                    <input type="text" v-model="item.brand" placeholder="请输入">
                </div>
            </div>
            <div class="wrapContent">
                <div class="select">
                    <Select v-model="$_select_$">
                            <Option v-for="item in $_carList_$" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="srk">
                    <input type="text" v-model="item.plateNumber" placeholder="请输入">
                </div>
            </div>
            <div class="wrapContent" style="border-bottom-left-radius:8px;border-bottom-right-radius:8px;">
                <div class="brand">爱车图片</div>
                <el-form ref="addForm" :model="$_addForm_$" style="
                    width: 100px !important;display: block !important;float: left !important;">
                    <el-form-item>
                        <div v-if="showDashed" class="dashedContent1">
                            <el-upload
                                style="position:absolute!important;top:0 !important;left:0 !important;
                                z-index:999;width:100% !important;height:100% !important;"
                                class="avatar-uploader"
                                :action="uploadServerHost"
                                list-type="picture-card"
                                ref="uploadxls"
                                :show-file-list="true" 
                                :before-upload="beforeupload" 
                                :on-remove="handleRemove" 
                                :on-success="uploadSuccess"
                                :on-progress='uploaded'
                                accept="image/png,image/gif,image/jpg,image/jpeg">
                            </el-upload>
                            <div class="dashedContent">
                                <img src="/static/tcc/add.svg" alt="">
                            </div>
                        </div>
                    
                    </el-form-item>
                </el-form>
              <div  v-if="!showDashed" class="img">
                <div v-for="(item, index) in $_file_$" :key="index" class="images">
                    <div  class="img" >
                        <div class="box" v-if="item && item.percentage">
                            <el-progress  type="circle" v-show="item.percentage != 100" :percentage="Math.round(item.percentage.toFixed(0))"></el-progress>
                        </div>
                        <img class="imag" :src="item.path | imgsrc">
                        <img class="cancel" src="/static/tzfb/cancel.png" v-if="item" @click="handleRemove(index)">
                    </div>
                </div>
            </div>
            </div>
            <div class="buttonWrap">
                <div class="button" @click="bind()">绑定车辆</div>
            </div>
        </div>
    </div>
</template>
<script>
import controler from './controler.js';
import {Toast} from 'mint-ui';
import {Form,FormItem,Upload} from 'element-ui';
import navigator from '../public/navigator';
import {Indicator} from 'mint-ui';
import {Progress} from 'element-ui';
export default {
    mixins: [controler],
    components:{
        navigator,
         [Indicator.name]:Indicator,
        [Toast.name]:Toast,
        [Form.name]:Form,
        [FormItem.name]:FormItem,
        [Upload.name]:Upload,
         [Progress.name]:Progress
    },
    data(){
        return{
            $_select_$: '京',
            item:{
                plateNumber:'',
                brand:''
            },
            $_addForm_$:{},
            $_carList_$: [
                {
                    value: '京',
                    label: '京'
                },
                {
                    value: '津',
                    label: '津'
                },
                {
                    value: '冀',
                    label: '冀'
                },
                {
                    value: '辽',
                    label: '辽'
                },
                {
                    value: '皖',
                    label: '皖'
                },
                {
                    value: '苏',
                    label: '苏'
                },
                {
                    value: '鄂',
                    label: '鄂'
                },
                {
                    value: '晋',
                    label: '晋'
                },
                {
                    value: '吉',
                    label: '吉'
                },
                {
                    value: '粤',
                    label: '粤'
                },
                {
                    value: '宁',
                    label: '宁'
                },
                {
                    value: '豫',
                    label: '豫'
                },
                {
                    value: '黑',
                    label: '黑'
                },
                {
                    value: '鲁',
                    label: '鲁'
                },
                {
                    value: '浙',
                    label: '浙'
                },
                {
                    value: '桂',
                    label: '桂'
                },
                {
                    value: '蒙',
                    label: '蒙'
                },
                {
                    value: '闽',
                    label: '闽'
                },
                {
                    value: '川',
                    label: '川'
                },
                {
                    value: '渝',
                    label: '渝'
                },
                {
                    value: '云',
                    label: '云'
                },
                {
                    value: '湘',
                    label: '湘'
                },
                {
                    value: '新',
                    label: '新'
                },
                {
                    value: '赣',
                    label: '赣'
                },
                {
                    value: '甘',
                    label: '甘'
                },
                {
                    value: '陕',
                    label: '陕'
                },
                {
                    value: '贵',
                    label: '贵'
                },
                {
                    value: '青',
                    label: '青'
                },
                {
                    value: '藏',
                    label: '藏'
                },
                {
                    value: '琼',
                    label: '琼'
                },
                {
                    value: '沪',
                    label: '沪'
                }
            ],
            $_file_$: [],
            baseUrl: this.$_global_$.ImgServer,
            imageUrl:'',
            file:[],
            showDashed: true,
            userInfo:{},
            uploadServerHost:this.$_global_$.uploadServerHost
        }
    },
    created(){
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.$_global_$.serverPath
        this.$_global_$.ImgServer
    },
    methods:{
        $_xzcl_$(){
            this.$root.inparamas.id
        },
        $_qb_$() {
            this.$root.$_Route_$('user', 'mobile', 'ygsytccqb', { id: 1 }) 
        },
        upload(){
            this.$refs.uploadxls.click()
        },
        bind(){
             for(var i=0;i<this.$_file_$.length;i++){
                     let a={}
                    var temp = ''
                    temp += this.$_file_$[i].path
                    a = temp
                    //console.log(a)
                     this.file.push(a)
                 }
            this.imageUrl = this.file.join(',')
            var reg = /^[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
                if(this.item.plateNumber.trim() !== "" && this.item.plateNumber.trim() !== undefined 
                && reg.test(this.item.plateNumber.trim()) && this.item.brand.trim() !== "" && this.item.brand.trim() !== undefined){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/zone/car/bind`,
                        data:{
                            province: this.$_select_$,
                            plateNumber: this.item.plateNumber.trim(),
                            brand: this.item.brand.trim(),
                            imageUrl: this.imageUrl
                        },
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                this.$router.back()
                            }else{
                                Toast(rsp.data.message)
                            }
                        }
                    })
                }else{
                    Toast("请正确输入车辆信息!")
                }
                
        },
        // upload的自己上传
        beforeupload (file) {
         if(file.size > 1024*1024*10){
                    return !! void this.$Message.error('上传图片大小不能超过10MB');
          }
           var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
    
                const extension = testmsg === 'jpg'
    
                const extension2 = testmsg === 'png'
    
                if (!extension && !extension2) {
    
                    return !!void this.$Message.error('上传格式只能是jpg,png')
    
            }
                file.percentage = 0;
                file.path = window.URL.createObjectURL(file)
                //console.log(file)
                this.$_file_$.push(file)
               // console.log(this.$_file_$)
        },
        // 移除
        handleRemove(index) {
            this.$_file_$.splice (index,1)
            this.showDashed = true
        },
        
        // 上传图片成功
        uploadSuccess(res, file, fileList) {
             for(let i =0; i<this.$_file_$.length; i++){
                    if(this.$_file_$[i].uid === file.uid){
                        let tar = this.$_file_$[i];
                        this.$set(this.$_file_$, i, {
                            uid:tar.uid,
                            name:tar.name,
                            path:res.data,
                            percentage:file.percentage
                        })
                         console.log(this.$_file_$)
                        break;
                        
                    }
                }
            
        },
        uploaded(event,file,fileList){
            for(let i =0; i<this.$_file_$.length; i++){
                    if(this.$_file_$[i].uid === file.uid){
                        let tar = this.$_file_$[i];
                        this.$set(this.$_file_$, i, {
                            uid:tar.uid,
                            name:tar.name,
                            path:tar.data,
                            percentage:file.percentage
                        })
                         this.showDashed = false
                      // console.log(this.$_file_$)
                        break;
                    }
                    //console.log(this.$_file_$)
                }
        },
        // 设置photo值
    //   fileChange(fileList) {
    //     let a={}
    //     if(fileList.length > 0){
    //       for(let i=0; i<fileList.length; i++){
    //         let temp_str = '';
    //         if(fileList[i].response){
    //           if(fileList[i].response.code === 0){
    //               temp_str += fileList[i].response.data;
    //               a=temp_str
    //               this.imageUrl =temp_str
    //              // console.log(this.imageUrl)
    //             }
    //         }
    //       }
    //     }
    //     this.$_file_$ = a
    //     this.showDashed = false
    //   },
    }
}
</script>


