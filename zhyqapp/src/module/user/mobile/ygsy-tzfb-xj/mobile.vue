<style scoped>
.container{
    height:0!important;
}
    .containe {
        background:rgba(246,246,246,1);
        min-height:100vh;
    }

    .wrap {
    position:relative;
    }
 .wrap .form{
       margin-top:10px;
       background-color:#fff;
   }
    .fujian {
        overflow:hidden;
        padding: 25px 15px 0;
        font-size: 14px;
        color: rgb(136, 136, 136);
        background: #fff;
        border-top: 10px solid rgb(243, 243, 243);
    }

      >>> .ivu-input {
        border: none;
        border-radius: 0;
        font-size: 14px;
        background: none;
        margin-top:10px;
        padding-right:10px;
        color: #495060;
        text-align:right;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

    }
 >>>.ivu-input-group-append img{
       position:absolute;
       top:15px;
       right:-4px;
       width:19px;
       height:19px;
   }
>>> .ivu-form-item-error-tip{
    position: absolute;
    /* top: 93%; */
    text-align:right;
    top: 32px;
    right: 10px;
    line-height: 1;
    /* padding-top: 0.16rem; */
    color: #ed3f14;
}
    .ivu-input-wrapper {
        margin-left: 0;
    }
  
>>>.ivu-form .ivu-form-item-label{
    line-height:54px;
}
    >>>.ivu-form-item {
        border-bottom: 1px solid #ececec;
        margin-bottom:0;
        height:auto;
        line-height:54px;
        padding-right:16px;
        box-sizing:border-box;
    }

    >>> .ivu-form-item-label {
        font-size: 16px;
        color:#333333;
        font-family:'PingFangSC-Regular';
    }

    >>> .ivu-input-group-append {
        border: none;
        background: none;
    }
    >>> .ivu-input:focus{
      box-shadow:none;
  }
   .ivu-upload-drag:hover{
     border:none;
 }
>>>.ivu-form .ivu-form-item-label{
    padding:0!important;
}
 .footer{
     height:49px;
     line-height:49px;
     background-color:#fff;
     position:absolute;
     bottom:0;
     width:100%;
 }
 .footer span{
     border:none;
     height:49px;
     width:50%;
     float:left;
     border-radius:none;
    font-size:18px;
    border-bottom:none;
    text-align:center;


 }
 .footer span:first-child{
     background-color:#fff;
     color:#333333;
        border-radius:none!important;
    border:1px solid rgba(229,229,229,1);
    border-bottom:none!important;
 }
.footer span:last-child{
       border-radius:none!important;
    background:rgba(0,193,222,1);
    color:#fff;
}
    .modal-btn {
        line-height: 3;
        font-size: 16px;
    }
    .demo-upload-list{
        margin-left:45px;
        padding-bottom:20px;
    }
    .demo-upload-list .img{
     width: 85px;height: 105px;float:left;position:relative; margin-right:5px;margin-bottom:5px;
    }
    .demo-upload-list .img .imag{
        width:74px;
        height:74px;
    }
    .demo-upload-list .img img:last-child{
        position:absolute;top:0px;right:10px;width:16px;
    }
    .demo-upload-list .add{
       height: 74px; line-height:74px;text-align: center;
    }
.content{
       margin-top:10px;
       background-color:#fff;
       padding-left:16px;
       padding-top:16px;
       box-sizing:border-box;
   }
   .content p:first-child{
     font-size:16px;
     color:#333333;
     padding-left:10px;
      font-family:'PingFangSC-Medium'; 
      font-weight:550;
   }
>>> .ql-toolbar.ql-snow{
    border:none!important;
   padding-top:0;
}
>>> .ql-container.ql-snow{
    border:none!important;
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
 .down{
        width: 16px;
        height: 16px;
        text-align:center;
        line-height:16px;
        display: block;
        margin-top: 9px;
    }
     .href{
     height:100px;width:1.9733rem;display:block;line-height:100px;
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
        <navigator title="新建"/>
        <contact :open.sync="isContactOpen" @input="onInput" :select.sync="select"></contact>
        <!-- 中间部分 -->
        <div class="wrap">
            <Form  class="form" ref="formValidate" :model="formValidate" :rules="ruleValidate" >
                <FormItem label="接收人:" prop="users"  :label-width="77">
                    <Input v-model="formValidate.users" disabled placeholder="请选择">
                        <img slot="append" @click="$_add_$()" src="/static/tzfb/tzfb_zf_add.svg"/>
                    </Input>
                </FormItem>
                <FormItem label="标 题:" prop="title"  :label-width="65">
                    <Input v-model="formValidate.title" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="摘 要:" prop="description" :label-width="65">
                    <Input v-model="formValidate.description" placeholder="请输入"></Input>
                </FormItem>
            </Form>
              <div class="content">
              <p>正文</p>
            <quill-editor class="edit" placeholder="请输入" ref="editValidate"
                          v-model="formValidate.content"
                          :options="editorOption">
                <div id="toolbar" slot="toolbar"></div>

            </quill-editor>

           </div>
            <div class="fujian">
               <p style="float: left"> 附件:&nbsp;&nbsp;</p>
                <div class="demo-upload-list">
                <div v-for="(item, index) in $_file_$" :key="index" class="images">
                    <div  class="img" v-if="formImg(item)">
                        <div class="box">
                            <el-progress v-show="item.percentage != 100" type="circle" :percentage="Math.round(item.percentage.toFixed(0))"></el-progress>
                        </div>
                        <img class="imag"  style="height:1.9733rem;width:1.9733rem;" :src="item.path | imgsrc ">
                        <img  src="/static/tzfb/cancel.png" v-if="item" @click="remove(index)">
                    </div>
                    <div  class="img" v-else>
                        <div class="box">
                            <el-progress v-show="item.percentage != 100" type="circle" :percentage="Math.round(item.percentage.toFixed(0))"></el-progress>
                        </div>
                      <a class="href" style="height:1.9733rem;width:1.9733rem;display:block;line-height:1.9733rem;"
                       @click="pop(item.path)">复制链接</a>
                        <img  src="/static/tzfb/cancel.png" v-if="item" @click="remove(index)">
                    </div>
                </div>
                
              <Upload ref="upload"
                    :show-upload-list="false"
                    :on-success="uploadSuccess"
                    :before-upload="beforeupload"
                     multiple
                     disabled
                     type="drag"
                    :action='uploadServerHost'
                    :on-progress='uploaded'
                    style="display: inline-block;
                     width: 74px;">
                <div class="add">
                    <img style="width: 20px" src="/static/tzfb/tzfb_zf_fj.svg"/>
                </div>
            </Upload>
             </div>
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


        <!-- 底部 -->
        <div class="footer"  v-show="isOriginHei">
             <span @click="$_cancle_$">取消</span>
             <span @click="$_confirm_$">发布 </span>
         </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
     import {quillEditor} from 'vue-quill-editor'
    import navigator from '../public/navigator';
    import contact from '../public/employee-selector';
    import {Progress} from 'element-ui';
    
    export default {
        components: {
            navigator,
            contact,
            quillEditor,
            [Progress.name]:Progress
           
        },
        filters:{
            formatFile(val){
                return val.substring(val.lastIndexOf('/')+1,val.length)
            }
        },
        data() {
            const validatetime = (rule, value, callback) => {
                let regEn = /[`~!@#$%^&*_+<>:{}.\/'[\]]/im;
                let regCn = /[#￥ |]/im;
                if (regEn.test(value) || regCn.test(value)) {
                    callback('输入包含非法字符');
                } else {
                    callback();
                }
            };
            const validaReceiver = (rule, value, callback) => {
                if (this.formValidate.users.length == 0) {
                    callback('请选择接收人');
                } else {
                    callback()
                }
            };
            return {
                 select:[], // 选择参会人员
                modalShow: false,
                isContactOpen: false,
                popTip:false,
                editorOption: {
                    placeholder:'请输入...',
                    modules: {toolbar: '#toolbar'}
                },
                uid:null,
                formValidate: {
                    description: '',
                    title: '',
                    content: '',
                    type: 0,
                    users: '',
                    files:'',
                },
                //解决安卓键盘顶起问题
                //  docmHeight:0,  //默认屏幕高度
                //  showHeight:0,  //实时屏幕高度
                //  hidshow:true,  //显示或者隐藏footer,
                // isResize:false, //默认屏幕高度是否已获取
                isOriginHei: true,
                screenHeight: document.documentElement.clientHeight,        //此处也可能是其他获取方法
                originHeight: document.documentElement.clientHeight,


                 //
                id:0,
                ids:'',
                uploadServerHost: this.$_global_$.uploadServerHost,
                userInfo: '',
                uploadList: [],
                ruleValidate: {
                    users: [
                        {required: true, validator: validaReceiver, trigger: 'change'}
                    ],
                    title: [
                        {required: true, message: '请输入通知标题', trigger: 'change'},
                        //长度验证
                        {type: 'string', max: 100, message: '不能超过100字', trigger: 'change'},
                        //特殊字符验证
                        {validator: validatetime, trigger: 'change'}
                    ],
                    description: [
                        //长度验证
                        {type: 'string', max: 500, message: '不能超过500字', trigger: 'change'},

                    ],
                    content: [
                        //长度验证
                        {required: true, message: '请输入正文内容', trigger: 'change'},

                        {type: 'string', max: 500, message: '不能超过500字', trigger: 'change'},
                    ]
                },
                users: [],
                baseUrl: this.$_global_$.ImgServer,
                $_file_$:[],
                file:[],
                urlList:'',
                imgType:'',
                popUrl:'',

            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            this.id = this.$root.inparams.id
            //console.log(this.id)
            this.ids = this.$root.inparams.ids
              this.$_global_$.ImgServer
            this.formValidate.zoneId = this.userInfo.zoneId;
            this.formValidate.enterpriseId = this.userInfo.enterpriseId;
        },
        //解决软键盘
        mounted(){
           var oHeight = $(document).height();
              window.onresize=function(){

               // console.log(oHeight)
                if($(document).height() < oHeight){
                    $(".footer").css("position","static");
                }else{
                    $(".footer").css("position","absolute"); //adsolute或fixed，看你布局
                }
            }; 
       },
       destroyed() {
           window.onresize = void 0;
       },
       methods: {
            // 收件箱
            $_sjx_$(){
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb', {})
            },
            form(url){
               
            },
            pop(item){
             this.popUrl =  this.$_global_$.ImgServer + item
             this.popTip = true
            },
            // 发送记录
            fsjl(){
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-fsjl', {})
            },
            $_back_$() {
                if(this.id){
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-fsjl', {id:1})
                }else if(this.ids){
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb', {id:1})
                }
            },
           $_cancle_$() {
                this.modalShow = true;
                this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb', {})
            },
            $_confirm_$() {
              // console.log(this.$_file_$)
                for(var i=0;i<this.$_file_$.length;i++){
                     let a={}
                    var temp = ''
                    temp += this.$_file_$[i].path
                    a = temp
                    //console.log(a)
                     this.file.push(a)
                 }
                this.$refs.formValidate.validate((valid) => {
                    if (valid) {
                        this.formValidate.files = this.file.join(",");
                        
                       // this.formValidate.users = JSON.stringify(this.users)
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/company/notice`,
                            data: {
                             files:this.formValidate.files,
                              content:this.formValidate.content,
                              users:JSON.stringify(this.users),
                              title:this.formValidate.title,
                              type:0,
                              description:this.formValidate.description 
                            }
                        }).then(res => {
                           // console.log(res)
                            if (res.status === 200) {
                                if (res.data.code === 0) {
                                    Toast('发布成功!');

                                    this.$root.$_Route_$('user', 'mobile', 'ygsy-tzfb-fsjl', {})
                                }
                            }
                        })
                    } else {
                    }
                })

            },
             onCopy () {
                this.$Message.success('复制成功!')
                },
           onError () {
                this.$Message.error('请重新复制')
           },
            $_add_$() {
                this.isContactOpen = true;
            },
            formImg(item){
              var testmsg =item.path.substring(item.path.lastIndexOf('.') + 1)
              var ImgType=["gif", "jpeg", "jpg", "bmp", "png"];
              if(RegExp("\(" + ImgType.join("|") + ")$").test(testmsg)){
                return true
               }else{
                  return false
              }
            },
            beforeupload(file){
              // console.log(file.type)
                if(file.size > 1024*1024*10){
                    return !! void this.$Message.error('上传大小不能超过10MB');
                }
                file.percentage = 0;
                file.path = window.URL.createObjectURL(file)
                this.$_file_$.push(file)
                

            },
            uploadSuccess(res, file, fileList){
               // this.fileChange(fileList);
                this.uid = 1
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
                    //console.log(this.$_file_$)
                }
            },
            uploaded(event,file,fileList){
                for(let i =0; i<this.$_file_$.length; i++){
                   // console.log(this.$_file_$)
                    if(this.$_file_$[i].uid === file.uid){
                        let tar = this.$_file_$[i];
                        this.$set(this.$_file_$, i, {
                            uid:tar.uid,
                            name:tar.name,
                            path:tar.path,
                            percentage:file.percentage
                        })
                        //console.log(this.$_file_$)
                        break;
                    }
                }
            },
              // 设置photo值
            remove(index){
              this.$_file_$.splice(index,1)

            },

            onInput(value) {
                // this.isContactOpen = false;
                this.formValidate.users = '';
                this.users = [];

                for (let i = 0; i < value.length; i++) {
                    this.users.push({uid: value[i].id, read: 0, name: value[i].name});
                     //console.log(this.users)
                    if (!this.formValidate.users) {
                        this.formValidate.users = value[i].name;
                    } else {
                        this.formValidate.users = this.formValidate.users + "、" + value[i].name;
                    }
                }
            },
            handleView(name) {
                this.imgName = name;
                this.visible = file.url
            },
            handleRemove(file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleBeforeUpload() {
                const check = this.uploadList.length < 20
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 5 张图片。'
                    })
                }
                return check
            }
        }
    }
</script>