<style scoped>
#ModuleContent {
    margin: 0!important;
    padding: 0!important;
}

.MainContent {
    top: 0!important;
}

body {
    position: static;
}
.mint-msgbox-content{border:none !important;}
.mint-msgbox-btn{background:rgb(246,246,246) !important;}
>>> .el-upload__input{visibility: hidden !important;outline:none !important;border:none !important;
width:100% !important;height:100% !important;}
>>> .el-upload__input:focus{outline:none !important;border:none !important;}
>>> .el-upload__input:hover{outline:none !important;border:none !important;}
>>> .input[type="hidden" i], .input[type="image" i], .input[type="file" i]:focus {
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
    margin-top:30px;
   padding-bottom:30px;
   background-color:#f6f6f6;
}
.wrap .wrapContent{
    overflow:hidden;
padding-bottom:15px;
padding-top:20px;
margin:0 16px;box-sizing:border-box;
background-color:#fff; 
color:rgba(76,76,76,1);
border-radius:8px;
}
.footer .active {
    color: #7599ff;
}
.right {
    float: right;
}
.header .back {
    width: 25px;
    position: absolute;
    top: 15px;
    left: 6px;
}
.num {
    box-sizing:border-box;
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    width: 75%;
    height:30px;
}
.select{
    float:left;
    margin-left:16px;
margin-right:36px;
position:relative;
width:35px;
height:27px;
font-size:14px;
color:rgba(0,193,222,1);
background:rgba(201,248,255,1);
text-align:center;
line-height:27px;
font-size:15px;
}
.san{
    bottom: 0;
    display: block;
    right: 0;
    position: absolute;
    border-bottom: 10px solid rgba(0,193,222,1);
    border-left: 10px solid transparent;
}
/* .select{float:left;width:60px;margin-left:36px;margin-right:16px;} */
.srk{float:left;width:150px;height:40px;border-bottom:1px solid #E5E5E5;
padding-left:10px;
box-sizing:border-box;}
.srk input{width:100%;outline:none;border:none;font-size:18px;color:#333333;font-weight:550;}
.brand{float:left;margin-left:16px;margin-right:16px;
font-family:'PingFangSC-Regular';
font-size:14px;color:rgba(76,76,76,1);line-height:30px;}
.img{width:157px;height:auto;margin:0 auto 31px;}
.img img{width:100%;height:auto;}
.brand1{font-family:'PingFangSC-Regular';font-size:14px;line-height:30px;}
.buttonWrap{padding:0 40px;box-sizing:border-box;margin-top:40px;}
.button{width:100%;height:44px;border-radius:25px;background:rgba(0,193,222,1);
line-height:44px;font-size:16px;text-align:center;color:#fff;
font-size:16px;
font-weight:550;
}
.confirm{color: #fff !important;background: rgb(2,155,250) !important;}
.cancel{border:none !important;}
.dashedContent1{width:100px;height:100px;position:relative;}
.dashedContent{
    position:absolute;
    top:0;left:0;
    border:1px dashed rgb(218,218,218);
    margin:0 auto;
    padding-top:27px;
box-sizing:border-box;
width:80px;
height:80px;
line-height:60px;
text-align:center;
color:rgb(153,153,153);
font-size:10px;
z-index: 0;}
.img .imag{
        width:74px;
        height:74px;
    }
.box{
      position:absolute;
      left:70px;
      top:18px;
    }
.dashedContent img{margin-bottom:14px;width:21px;height:auto;}
.img{width:262px;height:auto;margin:0 auto 31px;position:relative;}
.img .photo{width:50%;height:auto;}
>>> .el-progress-circle{
    width:25px!important;
    height:25px!important;
}
>>> .el-progress__text{
    top:150%;
    font-size:12px!important;
}
.img .cancel{
       text-align:right;
        position:absolute;
        top:4px;
        right:144px;
        width:15px;
        height:auto;
   }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="车辆编辑"/>
        <!-- 中间部分 -->
        <div class="wrap">
        <div class="wrapContent">
         <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">品牌车型</div>
                <div class="srk">
                    <input type="text" v-model="item.brand">
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="select">
                   <span class="san"></span>
                    {{item.province}}
                    <!-- <Select v-model="$_select_$">
                            <Option v-for="item in $_carList_$" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> -->
                </div>
                <div class="srk">
                    <input type="text" v-model="item.plateNumber" readonly>
                </div>
            </div>
            <div style="overflow:hidden;">
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
                            <el-progress style="font-size:0.32rem;" type="circle" v-show="item.percentage != 100" :percentage="Math.round(item.percentage.toFixed(0))"></el-progress>
                        </div>
                        <img class="imag" :src="item.path | imgsrc">
                        <img class="cancel" src="/static/tzfb/cancel.png" v-if="item" @click="handleRemove(index)">
                    </div>
                </div>
            </div>
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">车辆属性</div>
                <div class="brand1" v-if="item.carType ==2 ">{{item.carType | formatType}}&nbsp;
                    {{item.startTime.substring(0,10)}} - {{item.endTime.substring(0,10)}}</div>
                    <div class="brand1" v-if="item.carType !=2 ">{{item.carType | formatType}}&nbsp;
                    </div>
            </div>
            <div style="overflow:hidden;margin-bottom:0.5333rem;">
                <div class="brand">绑定时间</div>
                <div class="brand1">{{item.createDate.substring(0,16)}}</div>
            </div>
        </div>
         <div class="buttonWrap">
                <div class="button" @click="save()">保存</div>
            </div>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
import {MessageBox,Toast} from 'mint-ui';
import {Form,FormItem,Upload} from 'element-ui';
import navigator from '../public/navigator';
import {Progress} from 'element-ui';
export default {
    mixins: [controler],
    filters:{
        formatTime(sDate){
            var date = new Date(sDate);
            var seperator1 = ".";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            //月
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            //日
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            //格式化后日期为：yyyy-MM-dd
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        formatCreateTime(sDate){
            var date = new Date(sDate);
            var seperator1 = ".";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            //月
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            //日
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            //时
            if (hours >= 0 && hours <= 9) {
                hours = "0" + hours;
            }
            //分
            if (minutes >= 0 && minutes <= 9) {
                minutes = "0" + minutes;
            }
            //格式化后日期为：yyyy-MM-dd HH:mm:ss
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes;
            return currentdate;
        },
        formatType(val){
            if(val == 0){
                return '外来车辆'
            }if(val == 1){
                return '临时车辆'
            }if(val == 2){
                return '固定车辆'
            }
        }
    },
    components:{
        navigator,
        [MessageBox.name]: MessageBox,
        [Form.name]:Form,
        [FormItem.name]:FormItem,
        [Upload.name]:Upload,
        [Toast.name]:Toast,
         [Progress.name]:Progress  
    },
    data() {
        return {
            $_select_$: '',
             baseUrl: this.$_global_$.ImgServer,
            uploadServerHost:this.$_global_$.uploadServerHost,
            $_carList_$: [
                {
                    value: '京',
                    label: '京'
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
                    value: '津',
                    label: '津'
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
            item:{},
            $_addForm_$:{},
            $_file_$:[],
            // baseUrl: 'http://img.yhcode.com:88/',
            imageUrl:'',
            showDashed: false,
            file:[]
        }
    },
    created(){
        this.$_global_$.serverPath
        this.$_global_$.ImgServer
        this.edit()
    },
    methods: {
        //返回
        $_back_$() {
            this.$root.$_Route_$('user', 'mobile', 'ygsytccqb', { id: 1 })
        },
        // 车辆编辑
        edit() {
            this.$root.inparams.item
            this.item = this.$root.inparams.item
            if(this.item.imageUrl != ''){
                this.$_file_$ = this.item.imageUrl.split(',')
                for(var i=0;i<this.$_file_$.length;i++){
                    let ta = this.$_file_$[i]
                    this.$set(this.$_file_$,i,{
                        path:this.$_file_$[i]
                    })
                }
              
            }else{
                this.showDashed = true
            }
            this.$_select_$ = this.item.province
        },
        // 车辆编辑保存
        save(){
           for(var i=0;i<this.$_file_$.length;i++){
               let a = {}
               var temp = ''
               temp+=this.$_file_$[i].path
               a=temp
               this.file.push(a)
           }
           this.imageUrl = this.file.join(',')
            this.$_sendQuery_$({
                method:"POST",
                url:`${this.$_global_$.serverPath}/zone/car/update/${this.item.id}`,
                data:{
                    brand: this.item.brand.trim(),
                    imageUrl:this.imageUrl
                },
                headers:{"Content-type":"application/json"}
            }).then((rsp)=>{
                if(rsp.status === 200){
                    if(rsp.data.code === 0){
                        this.$root.$_Route_$('user', 'mobile', 'ygsytccqb', { id: 1 })
                    }else{
                        Toast(rsp.data.message)
                    }
                }
            })
        },
        // upload的自己上传
        beforeupload (file) {
         // console.log(file)
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

        },
        // 移除
        handleRemove(index) {
            this.$_file_$.splice (index,1)
            this.showDashed = true
            // console.log(this.$_file_$)
        },
        // 上传图片成功
        uploadSuccess(res, file, fileList) {
            console.log(fileList)
            // console.log(fileList)
              for(let i =0; i<this.$_file_$.length; i++){
                    if(this.$_file_$[i].uid === file.uid){
                        let tar = this.$_file_$[i];
                        this.$set(this.$_file_$, i, {
                            uid:tar.uid,
                            name:tar.name,
                            path:res.data,
                            percentage:file.percentage
                        })
                        
                        break;
                        
                    }
                }
           // this.fileChange(fileList);
        },
        uploaded(event,file,fileList){
        //     console.log(file)
           for(let i =0; i<this.$_file_$.length; i++){
                    if(this.$_file_$[i].uid === file.uid){
                        let tar = this.$_file_$[i];
                        this.$set(this.$_file_$, i, {
                            uid:tar.uid,
                            name:tar.name,
                            path:tar.data,
                            percentage:file.percentage
                        })
                      // console.log(this.$_file_$)
                      this.showDashed = false
                        break;
                    }
                }  
        }
        // 设置photo值
     
    }
}
</script>