<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    .el-textarea__inner {
        width: 100% !important;
        min-height: 47px !important;
        padding: 0 10px !important;
        font-size: 13px !important;
        color: rgb(153, 153, 153) !important;
        border: none !important;
        outline: none !important;
        background-color: #f6f6f6;
    }

    .mint-msgbox-confirm {
        color: #00C1DE;
    }
</style>
<style scoped>
   .container {
         background: #f6f6f6;
         min-height:100vh;
    }

    .wrap {
        font-family: "Microsoft YaHei";
        background: #f6f6f6;
    }

    .cardWrap {
        margin-top:15px;
        padding: 0 15px 0px;
        box-sizing: border-box;
        background: #f6f6f6;
    }

    .card {
        width: 100%;
        /*background: linear-gradient(#356ef1, #029bfa);*/
        background: url('/static/fwsl/fwslbg.png') no-repeat 100% 100%;
        border-radius: 8px;
        overflow: hidden;
     padding:10px 15px 10px;
     box-sizing:border-box;
        position: relative;
        color: #fff;
        line-height: 1;
        margin-bottom: 15px;
    }

    .card .number {
        font-size: 13px;
    }

    .card .name {
        margin-top: 14px;
        font-size: 13px;
        overflow: hidden;
    }

    .card .name .key {
         display: block;
        float: left;
        line-height: 16px;
         overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }

   .card .name .enterprise {
       font-size: 14px;
        float: left;
        width: 75%;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
        line-height: 16px;
    }
    .card .status {
        position: absolute;
        top: 15px;
        right: 0;
        width: 55px;
        height: 30px;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        background: url('/static/fwsl/status.png') no-repeat 100% 100%;
        overflow: hidden;
        line-height: 30px;
        text-align: center;
        color: #00C1DE;
        font-size: 12px;
    }

    .wrap .records {
        padding: 0 15px;
        box-sizing: border-box;
        background: #f6f6f6;
        height: auto;
    }

    .card2 {
        height: 410px;
        overflow: scroll;
    }

    .wrap ul .handler {
        margin-bottom: 29px;
        overflow: hidden;
    }

    .wrap ul .handler .img {
        float: right;
        width: 44px;
        height: 44px;
        margin-left: 10px;
    }

    .wrap ul .handler .img > img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

    .wrap ul .handler .left {
        /*padding: 10px 8px 12px;*/
        /*background: url('/static/fwsl/dhl.png') no-repeat 100% 50%;*/
        padding: 10px;
        box-sizing: border-box;
        background-color: #00C1DE;
        position: relative;
        float: right;
        max-width: 70%;
        min-width: 18%;
        border-radius: 20px;
    }

    .wrap ul .handler .left:after {
        content: '';
        position: absolute;
        right: -12px;
        top: 15px;
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        margin-bottom: -2px;
        border-left-width: 10px;
        border-left-color: currentColor;
        color: #00C1DE;
    }

    .wrap ul .handler .left .arrow {
        position: absolute;
        top: 20px;
        right: -7px;
        width: 7px;
    }

    .wrap ul .handler .left .hTime {
        font-size: 12px;
        color: #656D72;
        text-align: center;
        line-height: 1;
    }

    .wrap ul .handler .left .hCont {
        font-size: 14px;
        color: #fff;
        line-height: 1.3;
        width: 100%;
        height: auto;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }

    .wrap ul .commiter {
        margin-bottom: 29px;
        overflow: hidden;
    }

    .wrap ul .commiter .img {
        float: left;
        width: 44px;
        height: 44px;
        margin-right: 9px;
    }

    .wrap ul .commiter .img > img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

    .wrap ul .commiter .right {
        position: relative;
        box-sizing: border-box;
        background-color: #fff;
        float: left;
        max-width: 70%;
        min-width: 18%;
        border-radius: 20px;
        padding: 10px;
    }

    .wrap ul .commiter .right:after {
        content: '';
        position: absolute;
        left: -12px;
        top: 15px;
        width: 0;
        height: 0;
        border-width: 5px;
        border-style: solid;
        border-color: transparent;
        border-right-width: 10px;
        border-right-color: currentColor;
        color: #fff;
    }

    .wrap ul .commiter .right .cTime {
        font-size: 11px;
        color: rgb(136, 136, 136);
        text-align: left;
        line-height: 1;
    }

    .wrap ul .commiter .right .cCont {
        font-size: 14px;
        color: #0B0F26;
        text-align: left;
        line-height: 20px;
    }

    .wrap .repeat {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px 15px;
        background-color: #fff;
    }

    .wrap .repeat .name {
        line-height: 1;
        font-size: 14px;
        color: #333;
        margin-bottom: 18px;
    }

    .upload {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .submit {
        margin-top: 10px;
        float: right;
        width: 80px;
        border-radius: 25px;
        background: #00C1DE;
        color: #fff;
        text-align: center;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
    }

    .fileList {
        margin-top: 10px;
        padding: 0 !important;
        background-color: rgb(246, 246, 246);
    }

    .fileList li {
        line-height: 20px;
        font-size: 14px;
        background-color: rgb(246, 246, 246);
    }

    .fileList li img {
        height: 14px;
        width: auto;
    }

    .fileList li .cancel {
        float: right;
    }

    .fjj {
        z-index: 99999;
        margin-top: 15px;
        float: left;
        font-size: 14px;
    }

    .fjj2 {
        width: 15px;
        height: 13px;
        margin-right: 8px;
    }

    .timImg {
        margin-top: 10px;
        width: 150px;
        height: auto;
    }
    >>>.el-upload-list--text{
        margin-top: 20px;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="事项详情" @back="$_fwsl_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 卡片展示详情 -->
            <div class="cardWrap" @click="toDetail">
                <div class="card">
                    <p class="number">单号：{{item.orderNumber}}</p>
                    <div class="name">
                        
                            <span class="key">事项分类：</span>
                            <div class="enterprise">{{item.recordTypeCode | format}}</div>
                        </div>
                        <div class="name"> 
                            <span class="key">事项名称：</span>
                            <div class="enterprise">{{item.recordTitle}}</div>
                       
                    </div>
                    <div class="name">
                        <span class="key" style="width:89%;">事项描述：{{item.recordDesc}}</span>
                    </div>
                    <div class="name">
                        <span class="key">单位名称：</span>
                        <div class="enterprise">{{item.commiterEnterpriseName}}</div>
                    </div>
                    <div class="name">
                        <span class="key">提交时间：{{item.createDate | formatTime}}</span>
                    </div>
                    <p class="status">{{item.recordStatus | formatStatus}}</p>
                </div>
            </div>
            <!-- 对话记录 -->
            <div class="card2" id="mCard">
                <ul class="records" id="mList" :style="$_hight_$ > 0?'padding-bottom:150px':'padding-bottom:0px'">
                    <li v-for="(item,index) in list" :key="index">
                        <div v-if="item.itemRoler == 'h'  || item.itemRoler == 'handler'" class="handler">
                            <p class="hTime" style="text-align: center">{{item.createDate | formatTime}}</p>
                            <br>
                            <div class="img">
                                <img v-if="item.image" :src="$_global_$.ImgServer + item.image" alt="">
                                <img v-else src="/static/fwsl/mrIMG.png" alt="">
                            </div>
                            <div class="left">
                                <div class="dhbg">
                                    <p class="hCont">
                                        <span v-if="item.itemInfo != 'zpyqmm00aa'">{{item.itemInfo}}</span>
                                        <span v-if="item.itemAttachment">
                                        <br>
                                        <img class="timImg" v-gallery="'groupName'" :src="$_global_$.ImgServer + item.itemAttachment"/>
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="item.itemRoler == 'c'" class="commiter">
                            <p class="cTime" style="text-align: center">{{item.createDate | formatTime}}</p>
                            <br>
                            <div class="img">
                                <img v-if="item.image" :src="$_global_$.ImgServer + item.image" alt="">
                                <img v-else src="/static/fwsl/mrIMG.png" alt="">
                            </div>
                            <div class="right">
                                <p class="cCont">
                                    <span v-if="item.itemInfo != 'zpyqmm00aa'">{{item.itemInfo}}</span>
                                    <span v-if="item.itemAttachment">
                                        <br>
                                        <img class="timImg" v-gallery="'groupName'" :src="$_global_$.ImgServer + item.itemAttachment"/>
                                </span>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 问题提交 -->
            <div class="repeat" v-show="show">
                <el-form ref="editForm">
                    <el-form-item>
                        <el-input v-model="info" :rows="2" type="textarea" placeholder="请输入咨询内容"></el-input>
                    </el-form-item>
                    <el-form-item ref="file">
                        <div style="position:relative;overflow:hidden;">
                            <span class="fjj"><img class="fjj2" src="/static/fwsl/fjsc.png" alt="">附件</span>
                            <div class="submit" @click="submit()">发送</div>
                            <div class="upload">
                                <el-upload
                                        class="upload-demo"
                                        :action="$_global_$.uploadServerHost"
                                        :file-list="file"
                                        ref="editupload"
                                        :on-success="uploadSuccess" disabled>
                                </el-upload>
                            </div>
                        </div>
                        <ul class="fileList">
                            <li v-for="(item,index) in fileName" :key="index">
                                <img style="margin-right:5px;" src="/static/fwsl/fjtb.png">
                                {{item.name}}
                                <img class="cancel" src="/static/fwsl/fjshanchu.png" @click="remove(item)">
                            </li>
                        </ul>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import {Form, Upload, FormItem, Input, Button} from 'element-ui';
    import {Toast,Indicator} from 'mint-ui'

    export default {
        mixins: [controler],
        components: {
            navigator,
            [Form.name]: Form,
            [Upload.name]: Upload,
            [FormItem.name]: FormItem,
            [Input.name]: Input,
            [Button.name]: Button,
            [Toast.name]: Toast,
            [Indicator.name]: Indicator
        },
        data() {
            return {
                $_hight_$: 0,
                info: '',
                file: [],
                baseUrl: '',
                fileName: [],
                fileList: [],
                item: {},
                list: [],
                id: '',
                $_userInfo_$: '',
                show:true
            }
        },
        filters: {
            format(val) {
                if (val == 1) {
                    return '物业保修'
                }
                if (val == 2) {
                    return '投诉建议'
                }
                if (val == 3) {
                    return '企业服务咨询'
                }
                if (val == 4) {
                    return '留言'
                }
            },
            formatStatus(val) {
                if (val == 0) {
                    return '未受理'
                }
                if (val == 1) {
                    return '处理中'
                }
                if (val == 2) {
                    return '已解决'
                }
                if (val == 3) {
                    return '已完成'
                }
            },
            formatTime(sDate) {
                var date = new Date(sDate);
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
                //时
                if (hours >= 0 && hours <= 9) {
                    hours = "0" + hours;
                }
                //分
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                //秒
                if (seconds >= 0 && seconds <= 9) {
                    seconds = "0" + seconds;
                }
                //格式化后日期为：yyyy-MM-dd HH:mm:ss
                var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + hours + seperator2 + minutes + seperator2 + seconds;
                return currentdate;
            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
            this.$_cl_$()
            this.detail()
        },
        //页面DOM更新后回调
        updated: function () {
            this.$nextTick(function () {
                let div = document.getElementById('mCard');
                div.scrollTop = div.scrollHeight;
            })
            let hight = document.body.clientHeight;
            if (hight > 700) {
                this.$_hight_$ = 0;
            } else {
                this.$_hight_$ = 150;
            }
        },
        methods: {
            // 服务详情
            detail() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/steward/steward/queryRecordDetails`,
                    data: {recordId: this.id, role: 'h'},
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.list = rsp.data.data.ServiceItemList
                            this.item = rsp.data.data
                        }
                    }
                })
            },
            //处理
            $_cl_$() {
                if(this.$root.inparams.show){
                    console.log(this.$root.inparams.show)
                    this.show = this.$root.inparams.show == 1 ? false : true
                }
                this.id = this.$root.inparams.id
            },
            // 创建服务咨询
            submit() {
                if (this.file.length > 0) {
                     Indicator.open({
                        text: '提交中...',
                        spinnerType: 'fading-circle'
                       });
                    for (let i = 0; i < this.file.length; i++) {
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/steward/steward/createServiceItem`,
                            data: {
                                "recordId": this.id,
                                "itemRoler": "h",
                                "itemInfo": 'zpyqmm00aa',
                                "itemAttachment": this.file[i],
                                "image": this.$_userInfo_$.faceUrl
                            },
                            headers: {"Content-type": "application/json"}
                        }).then((rsp) => {
                            if (rsp.status === 200) {
                                if (rsp.data.code === 0) {
                                    Indicator.close();
                                    this.detail();
                                    this.info = '';
                                    this.fileName = [];
                                    this.file = []
                                }
                            }
                        })
                    }
                }

                if (this.info.trim()) {
                    Indicator.open({
                        text: '提交中...',
                        spinnerType: 'fading-circle'
                       });
                    this.$_sendQuery_$({
                        method: "POST",
                        url: `${this.$_global_$.serverPath}/steward/steward/createServiceItem`,
                        data: {
                            "recordId": this.id,
                            "itemRoler": "h",
                            "itemInfo": this.info.trim(),
                            "itemAttachment": '',
                            "image": this.$_userInfo_$.faceUrl
                        },
                        headers: {"Content-type": "application/json"}
                    }).then((rsp) => {
                        if (rsp.status === 200) {
                            if (rsp.data.code === 0) {
                                Indicator.close();
                                this.detail();
                                this.info = '';
                                this.fileName = [];
                            }
                        }
                    })
                }
            },
            //返回
            $_fwsl_$() {
                if(this.$root.inparams.type){
                    var type = this.$root.inparams.type
                     this.$root.$_Route_$('user', 'mobile', 'ygsy-xtxq', {type: type})
                }else{
                    this.$root.$_Route_$('user', 'mobile', 'ygsyfwsl', {id: 1})
                }
            },
            toDetail() {
                this.$root.$_Route_$('user', 'mobile', 'ygsy-fwcl-xq', {id: this.id})
            },
            remove(item) {
                this.fileRmove(this.fileList, item);
            },
            uploadSuccess(res, file, fileList) {
                this.fileChange(fileList);
                this.fileList = fileList;

            },
            fileChange(fileList) {
                let a = ''
                let b = {}
                if (fileList.length > 0) {
                    for (let i = 0; i < fileList.length; i++) {
                        let temp_str = '';
                        if (fileList[i].response) {
                            if (fileList[i].response.code === 0) {
                                temp_str += fileList[i].response.data;
                                a = this.baseUrl + temp_str
                                b = {name: fileList[i].name, url: a}
                            }
                        }
                    }
                }
                this.file.push(a)
                this.fileName.push(b)
            },
            // 移除设置photo值
            fileRmove(fileList, item) {
                let a = ''
                if (fileList.length > 0) {
                    for (let i = 0; i < fileList.length; i++) {
                        let temp_str = '';
                        temp_str += fileList[i].response.data;
                        a = this.baseUrl + temp_str
                        if (a == item.url) {
                            this.fileName.pop(item)
                            this.file.pop(item.url)
                        }
                    }
                }
            },
        }
    }
</script>