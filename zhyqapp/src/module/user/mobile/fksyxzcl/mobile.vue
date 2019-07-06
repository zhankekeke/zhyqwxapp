<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
.el-upload__input{visibility: hidden !important;outline:none !important;border:none !important;
width:100% !important;height:100% !important;}
.el-upload__input:focus{outline:none !important;border:none !important;}
.el-upload__input:hover{outline:none !important;border:none !important;}
.input[type="hidden" i], .input[type="image" i], .input[type="file" i]:focus {
outline: none!important;}

.el-upload.el-upload--picture-card{
    border:none !important;
    opacity:0.01;
    width:100% !important;height:100% !important;
}
.el-upload-list.el-upload-list--picture-card{
    display:none;
    
}
</style>
<style scoped>
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.wrap {
    box-sizing: border-box;
   border-top:1px solid rgb(236,236,236);
   padding-top:29px;
}
.select{float:left;width:60px;margin-left:36px;margin-right:16px;}
.srk{float:left;width:150px;height:30px;border-bottom:0.5px solid rgb(153,153,153);
padding-left:10px;box-sizing:border-box;}
.brand{float:left;margin-left:39px;margin-right:16px;font-family:"Microsoft YaHei";
font-size:14px;color:rgb(153,153,153);line-height:30px;}
.brand1{font-family:"Microsoft YaHei";font-size:15px;color:#333333;line-height:30px;}
.srk input{width:100%;outline:none;border:none;font-family:"Microsoft YaHei";font-size:15px;color:#333333;}
.buttonWrap{padding:0 15px;box-sizing:border-box;}
.button{width:100%;height:50px;border-radius:25px;background:rgb(2,155,250);line-height:50px;font-size:15px;
color:#fff;text-align:center;}
.dashedContent1{width:100px;height:100px;position:relative;}
.dashedContent{position:absolute;top:0;left:0;border:1px dashed rgb(218,218,218);margin:0 auto;padding-top:27px;
box-sizing:border-box;width:100px;height:100px;text-align:center;color:rgb(153,153,153);font-size:10px;
z-index: 0;}
.dashedContent img{margin-bottom:14px;width:21px;height:auto;}
.img{width:262px;height:auto;margin:0 auto 31px;position:relative;}
.img .photo{width:100%;height:auto;}
.img .cancel{position:absolute;top:0;right:0;width:15px;height:auto;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
         <navigator title="车辆绑定" @back="$_back_$" />
        <div class="wrap">
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="select">
                    <Select v-model="$_select_$">
                            <Option v-for="item in $_carList_$" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="srk">
                    <input type="text" v-model="item.plateNumber" placeholder="请输入">
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="brand">品牌车型</div>
                <div class="srk">
                    <input type="text" v-model="item.brand" placeholder="请输入">
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="brand">车辆图片</div>
                <el-form ref="addForm" :model="$_addForm_$" style="
                    width: 100px !important;display: block !important;float: left !important;">
                    <el-form-item>
                        <div v-if="showDashed" class="dashedContent1">
                            <el-upload
                                style="position:absolute!important;top:0 !important;left:0 !important;
                                z-index:999;width:100% !important;height:100% !important;"
                                class="avatar-uploader"
                                action="http://api.yhcode.com:88/oss/file/upload/form"
                                list-type="picture-card"
                                :limit="1"
                                ref="uploadxls"
                                :show-file-list="true" 
                                :before-upload="beforeupload" 
                                :on-remove="handleRemove" 
                                :on-success="uploadSuccess"
                                accept="image/png,image/gif,image/jpg,image/jpeg">
                            </el-upload>
                            <div class="dashedContent">
                                    <img src="@/imgs/mobile/wdcl_xinzeng.png" alt="">
                                    <p style="line-height:1;">新增车辆</p>
                            </div>
                        </div>
                    
                    </el-form-item>
                </el-form>
                <!-- <div class="brand">车辆图片</div> -->
            </div>
            <div  v-if="!showDashed" class="img">
                <!-- <img class="photo" src="@/imgs/mobile/wdcl_car.png" alt="" srcset=""> -->
                <img class="photo" :src="imageUrl" alt="" srcset="">
                <img class="cancel" src="@/imgs/mobile/wdcl_cancel.png" alt="" srcset="" 
                @click="handleRemove()">
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
import axios from 'axios';
import navigator from '../public/navigator';
export default {
    mixins: [controler],
    components:{
        [Toast.name]:Toast,
        [Form.name]:Form,
        [FormItem.name]:FormItem,
        [Upload.name]:Upload,
         navigator,
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
            $_file_$: '',
            baseUrl: 'http://img.yhcode.com:88/',
            imageUrl:'',
            showDashed: true,
            userInfo:{}
        }
    },
    created(){
        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
        this.userInfo = JSON.parse(cookie);
        this.$_global_$.serverPath
    },
    methods:{
        $_xzcl_$(){
            this.$root.inparamas.id
        },
        $_qb_$() {
            this.$root.$_Route_$('user', 'mobile', 'fksytccqb', { id: 1 }) 
        },
        upload(){
            this.$refs.uploadxls.click()
        },
        $_back_$(){
           this.$root.$_Route_$('user', 'mobile', 'fksytcff', { id: 1 }) 
        },
        bind(){
             var reg = /^[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
                if(this.item.plateNumber.trim() !== "" && this.item.plateNumber.trim() !== undefined 
                && reg.test(this.item.plateNumber.trim()) && this.item.brand.trim() !== "" && this.item.brand.trim() !== undefined){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/zone/car/bind`,
                        data:{
                            province: this.$_select_$,
                            plateNumber: this.item.plateNumber.trim(),
                            brand: this.item.brand.trim(),
                            imageUrl: this.$_file_$
                        },
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                       // console.log(rsp)
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                this.$root.$_Route_$('user', 'mobile', 'fksytccqb', { id: 1 }) 
                            }
                        }
                    })
                }else{
                   Toast("请正确输入车辆信息!") 
                } 
        },
        $_back_$(){
          this.$root.$_Route_$('user', 'mobile', 'fksytccqb', { id: 1 }) 
        },
        // upload的自己上传
        beforeupload (file) {},
        // 移除
        handleRemove() {
            this.$_file_$ = ''
            this.showDashed = true
            console.log(this.$_file_$)
        },
        // 上传图片成功
        uploadSuccess(res, file, fileList) {
            this.fileChange(fileList);
        },
        // 设置photo值
      fileChange(fileList) {
        let a={}
        if(fileList.length > 0){
          for(let i=0; i<fileList.length; i++){
            let temp_str = '';
            if(fileList[i].response){
              if(fileList[i].response.code === 0){
                  temp_str += fileList[i].response.data;
                  a=temp_str
                  console.log(a)
                  this.imageUrl = this.baseUrl + temp_str
                }
            }
          }
        }
        this.$_file_$ = a
        this.showDashed = false
        console.log(this.$_file_$)
      },
    }
}
</script>


