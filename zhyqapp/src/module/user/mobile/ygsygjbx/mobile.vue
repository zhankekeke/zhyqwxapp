
<style lang="less" scoped>
    @backgroundColor: #f6f6f6;
    @textColor: #333;
    .container{
        position: relative;
        height: 100vh;
        .wraper {
            position:fixed;
            bottom: 0;
            width: 100%;
            height: 50px;
            left: 0;
            text-align: center;
            background-color: #00C1DE;
            font-size: 18px;
            line-height: 50px;
            color: #fff;
        }
    }
    .header {
        height: 50px;
        width: 100%;
        line-height: 50px;
        left: 0;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 10px 0;
    }

    .header .tishi {
        width: 25px;
        position: absolute;
        top: 10px;
        right: 20px;
    }

    .dashedContent1 {
        width: 74px;
        height: 74px;
        position: relative;
        border: 2px dashed #D9E2E9;
        z-index: 99;
    }

    .jia {
        position: absolute;
        top: 40%;
        left: 40%;
        img {
            width: 16px;
            height: 16px;
        }
        z-index: 0;
    }

    /deep/ .el-upload__input {
        width: 74px !important;
        height: 74px !important;
    }

    /deep/ .el-upload.el-upload--picture-card {
        width: 100px !important;
        border: none !important;
        opacity: 0.01;
        height: 100% !important;
    }

    .dashedContent {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px dashed rgb(218, 218, 218);
        margin: 0 auto;
        padding-top: 27px;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        text-align: center;
        color: rgb(153, 153, 153);
        font-size: 10px;
        z-index: 0;
    }

    .dashedContent img {
        margin-bottom: 14px;
        width: 21px;
        height: auto;
    }

    .wrap .my {
        background-color: #fff;
        box-sizing: border-box;
        border-top: 8px solid #f6f6f6;
    }

    .list {
        position: relative;
        float: left;

    }

    .list {
        list-style: none;
    }

    .list .photo {
        width: 100px;
        height: 100px;
    }

    .list .photo:first-child {
        margin-left: 10px;
    }

    .mlist {
        height: 50px;
        border-bottom: 1px solid @backgroundColor;
        line-height: 50px;
        .padd {
            padding: 0 15px;
            .xuanze {
                color: #999;
                font-size: 14px;
                text-align: right;
                width: 100px;
                display: block;
                float: right;
            }
            .mlist1 {
                font-weight: bold;
                font-size: 16px;
            }
            .input1 {
                float: right;
            }
            /deep/ .ivu-input {
                color: @textColor !important;
                border: none !important;
                text-align: right !important;
                padding: 0 !important;
                font-size: 14px !important;
            }
            .textarea /deep/ .ivu-input {
                padding: 15px !important;;
                background-color: @backgroundColor;
            }
            /deep/ .ivu-input:focus {
                box-shadow: none;
            }
        }
    }

    .mlist2 {
        .mlist;
        height: 100px !important;
        border-top: 8px solid @backgroundColor;
        .padd {
            /deep/ .ivu-input {
                text-align: left !important;
            }
        }

    }

    .fujian {
        overflow: hidden;
        padding: 25px 15px 80px;
        font-size: 14px;
        color: rgb(136, 136, 136);
        background: #fff;
    }

    /deep/ .ivu-upload-drag:hover {
        border: 1px dashed #D9E2E9 !important;
    }

    .tpsc {
        overflow: hidden;
        margin-top: 50px;
        background: #fff;
        padding: 15px 0;
        box-sizing: border-box;
        .tpsc_list {
            width: 74px;
            height: 74px;
            float: left;
            position: relative;
            margin-right: 10px;
            margin-bottom: 5px;
            .imag{
                width:74px;
                height:74px;
            }
            .cancel{
                position: absolute;
                top: 3px;
                right: 4px;
                width: 15px;
                height: auto;
            }
        }
        .listx {
            position: absolute;
            top: 0px;
            right: 0px;
            width: 16px;
        }
    }
.box{
      position:absolute;
      left:24px;
      top:18px;
  }
/deep/ .el-progress-circle{
      width: 25px!important;
      height: 25px!important;
  }
 /deep/ .el-progress__text{
      top:150%;
      font-size:12px;
    }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="联系管家"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="my">
                <row class="mlist">
                    <div class="padd">
                        <span class="mlist1">我的管家</span>
                        <span class="xuanze" style="color: #333">{{$_userName_$}}</span>
                    </div>
                </row>
                <row class="mlist">
                    <div class="padd">
                        <span class="mlist1">问题分类</span>
                        <span class="xuanze" @click="sheetVisible = true">
                            <span v-if="!typeName">请选择类别&nbsp;&nbsp;></span>
                            <span v-else>{{typeName}}</span>
                        </span>
                        <!--<Select v-model="$_model_$" style="width:75%;height:34px;" placeholder="请选择"-->
                        <!--@on-change="selected">-->
                        <!--<Option v-for="item in $_cityList_$" :value="item.value" :key="item.value">{{ item.label }}-->
                        <!--</Option>-->
                        <!--</Select>-->
                    </div>
                    <mt-actionsheet
                            :actions="$_cityList_$"
                            v-model="sheetVisible">
                    </mt-actionsheet>
                </row>
                <row class="mlist">
                    <div class="padd">
                        <span class="mlist1">问题名称</span>
                        <span class="input1">
                            <Input v-model.trim="$_questionName_$" :maxlength="20" placeholder="请输入"/>
                        </span>
                    </div>
                </row>
                <row class="mlist2">
                    <div class="padd">
                        <span class="mlist1">问题描述</span><br/>
                        <Input class="textarea" v-model.trim="$_wtIntro_$" :maxlength="100" type="textarea" :rows="4"
                               placeholder="准确描述问题，以便更快解决问题" style="width:100%"/>
                    </div>
                </row>
            </div>
            <div class="tpsc">
                <div class="fujian">
                    <div class="demo-upload-list">
                        <div v-for="(item, index) in $_file_$" :key="index">
                            <div class="tpsc_list">
                                <div class="box">
                                 <el-progress v-show="item.percentage != 100" type="circle" :percentage="Math.round(item.percentage.toFixed(0))"></el-progress>
                              </div>
                                <img  class="imag" style="height:1.973rem;width:1.97rem;" :src="item.path | imgsrc">
                                <img class="cancel" src="/static/tzfb/cancel.png" v-if="item" @click="remove(index)">
                          </div>
                        </div>

                        <Upload ref="upload"
                                :show-upload-list="false"
                                :on-success="uploadSuccess"
                                :before-upload="beforeupload"
                                multiple
                                type="drag"
                                :on-progress='uploaded'
                                :action="$_global_$.uploadServerHost"
                                style="display: inline-block;width: 74px;">
                            <div style="width:74px;height: 74px;text-align: center;">
                                <img style="width: 20px;height: auto;margin-top: 35%" src="/static/tcc/+.png"/>
                            </div>
                        </Upload>
                    </div>
                </div>
            </div>
            <div class="wraper" @click="submit">提交</div>
        </div>
    </div>
</template>

<script>
    import {Radio} from 'mint-ui';
    import 'mint-ui/lib/style.css'
    import {Checklist} from 'mint-ui';
    import {Form, FormItem, Upload} from 'element-ui';
    import navigator from '../public/navigator';
    import controler from './controler.js';
    import {Actionsheet} from 'mint-ui';
    import {Toast} from 'mint-ui';
    import {Progress} from 'element-ui';
    export default {
        mixins: [controler],
        components: {
            [Checklist.name]: Checklist,
            [Form.name]: Form,
            [FormItem.name]: FormItem,
            [Upload.name]: Upload,
            navigator,
            [Actionsheet.name]: Actionsheet,
            [Progress.name]:Progress
        },
        data() {
            return {
                typeName: '',
                sheetVisible: false,
                images: [],
                $_userName_$: '',
                $_questionName_$: '',
                file: [],
                stewardId: 0,
                $_image_$: '',
                $_wtName_$: '',
                $_question_$: '',
                userInfo: '',
                $_wtIntro_$: '',
                $_checkBox_$: [],
                $_model_$: '',
                $_housekeeper_$: [],
                $_file_$: [],
                baseUrl: '',
                imageUrl: '',
                title: '',
                $_addForm_$: {},
                showDashed: false,
                $_cityList_$: [
                    {
                        value: 1,
                        name: '物业报修',
                        method: this.$_xzType_$
                    },
                    {
                        value: 2,
                        name: '投诉建议',
                        method: this.$_xzType_$
                    },
                    {
                        value: 3,
                        name: '企业服务咨询',
                        method: this.$_xzType_$
                    },
                    {
                        value: 4,
                        name: '留言',
                        method: this.$_xzType_$
                    }
                ]
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.userInfo = JSON.parse(cookie);
            let type = this.$root.inparams.id;
            if (type == 3) {
                this.$_model_$ = type;
            }
            this.gjxx()
        },
        methods: {
            $_xzType_$(data) {
                this.$_model_$ = data.value;
                this.typeName = data.name;
            },
            remove(index) {
                this.$_file_$.splice(index, 1)
            },
            selected(value) {
                this.$_model_$ = value
            },
            gjxx() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/enterprise/queryAssignedEnterpriseByCondition`,
                    data: {
                        enterprise_id: this.userInfo.enterpriseId,
                        zone_id: this.userInfo.zoneId
                    },
                    headers: {"Content-type": "application/json"}

                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data.length == 0) {
                                this.$Message.success('该企业尚未分配管家')
                            } else {
                                this.$_housekeeper_$ = rsp.data.data
                                this.$_userName_$ = this.$_housekeeper_$[0].stewardName
                            }
                        }
                    }
                })
            },
            submit() {
                for(var i=0;i<this.$_file_$.length;i++){
                    var temp = {}
                     let a=''
                    a += this.$_file_$[i].path
            
                  temp =a
                    this.file.push(temp)

                }
                //console.log(this.file)
                this.$_image_$ = this.file.join(',')
               // console.log(this.$_image_$)
                if (!this.$_model_$) {
                    Toast('问题分类不能为空');
                    return
                }
                if (!this.$_questionName_$) {
                    Toast('问题名称不能为空');
                    return
                } else {
                    // if (!this.testSpecial(this.$_questionName_$)) {
                    //     Toast('名称包含非法字符');
                    //     return
                    // }
                }
                if (!this.$_wtIntro_$) {
                    Toast('问题描述不能为空');
                    return
                } else {
                    // if (!this.testSpecial(this.$_wtIntro_$)) {
                    //     Toast('描述包含非法字符');
                    //     return
                    // }
                }
                let data = {
                    commiterId: this.userInfo.id,
                    recordTitle: this.$_questionName_$,
                    commiterName: this.userInfo.name,
                    recordDesc: this.$_wtIntro_$,
                    zoneId: this.userInfo.zoneId,
                    recordTypeCode: this.$_model_$,
                    recordAttachment: this.$_image_$,
                };
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/createServiceRecord`,
                    data: data,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            let tishi = this.$Message.success('提交成功');
                            this.$root.$_Route_$('user', 'mobile', 'ygsyfwjl', {name: tishi})
                        } else {
                            this.$Message.error(rsp.data.message);
                        }
                    }
                })
            },
            //特殊字符
            testSpecial(value) {
                let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
                let regCn = /[·！#￥（——）：；“”‘、， |《。》？、【】[\]]/im;
                if (regEn.test(value) || regCn.test(value)) {
                    return false
                } else {
                    return true
                }
            },
            //返回首页
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsygjfw', {id: 1})
            },
            beforeupload(file) {
               // console.log(file)
                if(file.size > 1024*1024*10){
                    return !! void this.$Message.error('上传图片大小不能超过10MB');
                }
               var testmsg = file.name.substring(file.name.lastIndexOf('.')+1)
               const extension = testmsg === 'jpg'
               const extension2 = testmsg === 'png'
                const extension3 = testmsg === 'jpeg'
               if(!extension && !extension2 && !extension3){
                   return !! void this.$Message.error('上传图片格式只能是jpg,png')
               }
                file.percentage = 0;
                file.path = window.URL.createObjectURL(file)
                this.$_file_$.push(file)
            },
            // 移除
            handleRemove() {
                this.fileRmove(this.file);
            },
            // 移除设置photo值
            fileRmove(fileList) {
                let a = {}
                if (fileList.length > 0) {
                    for (let i = 0; i < fileList.length; i++) {
                        let temp_str = '';
                        if (fileList[i].response) {
                            if (fileList[i].response.code === 0) {
                                temp_str += fileList[i].response.data;
                                a = temp_str
                                var imageUrl = this.baseUrl + temp_str
                            }
                        }
                    }
                }
                this.$_file_$.pop(a)
                this.images.pop(imageUrl)

            },
            // 上传图片成功
            uploadSuccess(res, file, fileList) {
               for(var i=0;i<this.$_file_$.length;i++){
                   if(this.$_file_$[i].uid === file.uid){
                       let tar = this.$_file_$[i];
                       this.$set(this.$_file_$,i,{
                           uid:tar.uid,
                           name:tar.name,
                           path:res.data,
                           percentage:file.percentage
                       })
                       break
                   }
               }
               // this.fileChange(fileList);
            },
            uploaded(res, file, fileList){
                 for(var i=0;i<this.$_file_$.length;i++){
                   if(this.$_file_$[i].uid === file.uid){
                       let tar = this.$_file_$[i];
                       this.$set(this.$_file_$,i,{
                           uid:tar.uid,
                           name:tar.name,
                           path:tar.path,
                           percentage:file.percentage
                       })
                       break
                   }
               }
            },
            // 设置photo值
            // fileChange(fileList) {
            //     this.file = fileList
            //     let a = {}
            //     if (fileList.length > 0) {
            //         for (let i = 0; i < fileList.length; i++) {
            //             let temp_str = '';
            //             if (fileList[i].response) {
            //                 if (fileList[i].response.code === 0) {
            //                     temp_str += fileList[i].response.data;
            //                     a = temp_str
            //                     this.imageUrl = this.baseUrl + temp_str
            //                 }
            //             }
            //         }
            //     }
            //     this.$_file_$.push(a)
            //     this.images.push(this.imageUrl)
            //     this.$_image_$ = this.images.join(',')

            // },
        }
    }
</script>