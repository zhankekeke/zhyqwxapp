<style scoped>
      >>> .ivu-input {
        border:none!important;
        outline:none!important;
        box-shadow:none!important;
        text-align:right;
        overflow:hidden;
        resize:none;
    }
    >>> .ivu-form-item-error-tip{
        top:70%;
        right:0!important;
        left:none!important;
        text-align:right;
    }
    >>> .ivu-input[disabled]{
        background-color:#fff!important;
    }
    >>> .ivu-form .ivu-form-item-label{
       font-size:14px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:#333333;
        padding-right:10px;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background-color:#ececec;
    }

    .header {
        height: 50px;
        left: 0;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        position: fixed;
        top: 0;
        width: 100%;
        background: #fff;
        z-index: 99;
    }

    .wrap {
        background:rgba(246,246,246,1);
        padding-bottom:60px;
    }

     .footer .active {
        color: #7599ff;
        padding-top:2px;
    }
    .footer ul {
        overflow: hidden;
    }

    .footer ul li {
        float: left;
        width: 49%;
        height:49px;
        line-height:49px;
        text-align: center;
        padding-left:56px;
    }

    .footer ul li img {
        width: 20px;
        height: 21px;
        margin-top:14px;
        float:left;
    }

    .footer ul li p {
        height: auto;
        float:left;
        margin-left:8px;
        font-size:12px;
        padding-top:1px;
        color:#B3B3B3;
    }

    .footer {
        font-size: 14px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
     box-shadow: 0 0 0.32rem 0 rgba(232,232,232,0.9);
    }
  .footer ul span{
    border-left: 1px solid #E1E3EC;
     height:20px;
     margin-top: 15px; 
     float: left;
     line-height:20px;

}
    .wrap img {
        width: 100%;
    }
    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }


    .top1 {
        color: #333;
        font-size: 12px;
        box-sizing: border-box;
        padding: 10px 10px 0 10px;
    }

    .list {
        overflow: hidden;
        background: #fff;
    }

    .list li {
        border-bottom: 1px solid #E5E5E5;
        box-sizing: border-box;
        margin:15px;
        line-height: 25px;
        padding-bottom:10px;
        font-size: 16px;
        color: #333;
    }
    .mul2{
        background-color:#fff;
        margin-top:10px;
    }
    .mul2 li {
        padding: 10px 16px 5px 16px;
        border-bottom: 1px solid #E5E5E5;
        height: 55px;
        font-size:16px;
    }

 .ivu-input-group-prepend {
        background-color: #fff !important;
    }

 .ivu-input {
        background-color: #fff !important;
        border:none!important;
        outline:none!important;
        

    }
    .mul2 .visiter{
     padding-top:18px;
     /* padding-bottom:18px; */
     box-sizing:border-box;
    border-bottom:none!important;
    line-height:1;
    height:auto;
    }
    .mul2 .visiter span{
        font-size:18px;
        font-family:'PingFangSC-Medium';
        font-weight:550;
        color:rgba(51,51,51,1);
    }
    .button{
        margin-top:35px;
        text-align:center;
        margin-bottom:20px;
    }
    .button button{
        width:44%;
        height:44px;
        font-size:16px;
        font-weight:400;
        font-family:'PingFangSC-Regular';
        border-radius: 25px;
    }
    .button button:first-child{
        margin-right: 10px;
        background-color: #fff;
        color: #00C1DE;
    }
    .button button:last-child{
        font-weight:500;
        font-family:'PingFangSC-Medium';
    }
    .search span{
    line-height: 33px;
    display: block;
    height: 33px;
    margin-left: 15px;
    font-size: 14px;
    color: rgb(2,155,250);
    }
    .mul2 .visiters{
        display:inline-block;
        width:100%;
        color:#9999;
        padding-right:10px;
        text-align:right;
    }
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
            <navigator title="在线预约" @back="$_back_$"/>
        <div  class="wrap">
            <Form label-position="left" ref="$_formValidate_$" :model="$_formValidate_$" :rules="$_ruleValidate_$"
                  :label-width="100">
               <!--访客信息-->
                <ul class="mul2">
                    <li class="visiter">
                        <span>拜访员工信息</span>
                    </li>
                    <li style="padding-left:0.7rem" @click="next()" >
                        <FormItem label="姓名：" >
                            <Input v-model="item.employeeName || item.name"  disabled placeholder="请选择" style="outline:none;"></Input>
                        </FormItem>
                    </li>
                    <li style="padding-left:0.7rem"  @click="next()">
                        <FormItem label="电话：">
                            <Input v-model="item.phoneNumber" disabled  placeholder="请选择" number></Input>
                        </FormItem>
                    </li>
                    <li style="padding-left:0.7rem"  @click="next()">
                        <FormItem label=" 单位：">
                            <Input v-model="item.companyName" disabled placeholder="请选择"></Input>
                        </FormItem>
                    </li>
                </ul>
                <!--邀请信息-->
                <ul class="mul2">
                    <li class="visiter">
                        <span >拜访信息</span>
                    </li>
                    <li>
                        <FormItem label="拜访时间" prop="$_Stime_$">
                            <span class="visiters"  style="color:#9999;" @click="calendarShow = true">{{model2||'请选择'}}</span>
                            <calendar   :show.sync="calendarShow"  @change="handleConfirm" :weekNames="weekNames" disable-before/>
                        </FormItem>
                    </li>
                      <li>
                        <FormItem label="访客姓名：" prop="$_name_$">
                            <Input v-model="$_formValidate_$.$_name_$" placeholder="请输入" style="outline:none;"></Input>
                        </FormItem>
                    </li>
                    <li>
                        <FormItem label="访客电话：" prop="$_phone_$">
                            <Input v-model="$_formValidate_$.$_phone_$" placeholder="请输入" number></Input>
                        </FormItem>
                    </li>
                    <li style="padding-left:0.7rem">
                        <FormItem label=" 公司名称：" prop="$_reason_$">
                            <Input v-model="$_formValidate_$.$_company_$" placeholder="请输入"></Input>
                        </FormItem>
                    </li>
                      <li style="padding-left:0.7rem;height:2.13333rem;">
                        <FormItem label=" 拜访事由：" prop="$_reason_$">
                            <Input v-model="$_formValidate_$.$_reason_$" placeholder="请输入" type="textarea" ></Input>
                        </FormItem>
                    </li>
                    
                </ul>
                 <div class="button">
                        <Button  @click="$_reset_$()" type="primary" >重置</Button>
                        <Button  @click="$_save_$()" type="primary">提交预约</Button>
                    </div>
            </Form>
        </div>
        <!-- 底部 -->
        <!-- 底部 -->
        <div  class='footer'>
            <ul class="">
                 <li @click=" $_show_$()">
                    <img class="" src="/static/fksf/bf-z.svg" alt="">
                    <p >拜访记录</p>
                </li>
                <span ></span>
                 <li>
                    <img class="" src="/static/fksf/zx-z.svg" alt="">
                    <p class="active" style="color:#00C1DE;">在线预约</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {DatetimePicker} from 'mint-ui';
    import {Loadmore,Indicator} from 'mint-ui';
    import {Field} from 'mint-ui';
    import controler from './controler.js';
    import {Search} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import search from '../public/search';
    import {Toast} from 'mint-ui';
     import {mapGetters} from 'vuex';
     import navigator from '../public/navigator';
     import calendar from '../public/calendar'

    export default {
        mixins: [controler],
        components: {
            search,
            calendar,
            navigator,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [Search.name]: Search,
            [Field.name]: Field,
            [Indicator.name]: Indicator
        },
        data() {
            const validatephone = (rule, value, callback) => {
                if (!(/^1[23456789]\d{9}$/.test(value))) {
                    callback('请输入正确的手机号');
                } else {
                    callback();
                }
            };
           const validateStime = (rule, value, callback) => {
                if (!this.model2) {
                    callback('请选择来访时间');
                } else {
                    //当天日期
                    let date3 = new Date();
                    let nowDay = date3.getFullYear() + "-" + ((date3.getMonth() + 1)<10?"0"+ (date3.getMonth() + 1):(date3.getMonth() + 1))+ "-" + (date3.getDate() < 10 ? "0" + date3.getDate() : date3.getDate());
                    let oDate1 = new Date(this.model2);//选择时间
                    let oDate2 = new Date(nowDay);//现在时间
                    if(oDate1.getTime() < oDate2.getTime()){
                        callback('需大于当前时间');
                    }
                    this.$_formValidate_$.$_Stime_$ = this.model2;
                    callback();
                }
            };
            const validateEtime = (rule, value, callback) => {
                if (!this.model3) {
                    callback('请选择来访结束时间');
                } else {
                    this.$_formValidate_$.$_Etime_$ = this.model3;
                    if (this.model2 > this.model3) {
                        callback('结束时间需大于开始时间');
                    } else {
                        callback();
                    }
                }
            };
            return {
                 weekNames:['一', '二', '三', '四', '五', '六', '日'],
                $_ygInfo_$: '',
                topStatus: '',
                $_isshow_$: 1,
                calendarShow:false,
                model2:'',
                pickerValue: new Date(),
                pickerValue1: new Date(),
                pickerValue2: new Date(),
                formatDate(date) {
                    const y = date.getFullYear()
                    let m = date.getMonth() + 1
                    m = m < 10 ? '0' + m : m
                    let d = date.getDate()
                    d = d < 10 ? ('0' + d) : d;
                    let h = date.getHours()
                    h = h < 10 ? '0' + h : h
                    let f = date.getMinutes()
                    f = f < 10 ? '0' + f : f
                    let s = date.getSeconds()
                    s = s < 10 ? '0' + s : s
                    return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
                },
                $_name_$: '',
                item:{},
                $_formValidate_$: {
                    $_name_$: '',
                    $_phone_$: '',
                    $_company_$: '',
                    $_bumen_$: '',
                    $_reason_$: '',
                    $_Stime_$: '',
                    $_Etime_$: '',
                    $_hys_$: '',
                    $_xzhys_$: ''
                },
                $_ruleValidate_$: {
                    $_name_$: [
                        //非空验证
                        {required: true, type: 'string', message: '请填写姓名', trigger: 'change'},
                        //长度验证
                        {type: 'string', max: 50, message: '姓名不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_phone_$: [
                        {required: true, type: 'number', message: '请输入正确格式手机号', trigger: 'change'},
                        //特殊字符验证
                        {validator: validatephone, trigger: 'change'}
                    ],
                    $_company_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '单位名称不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_bumen_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '部门名称不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_reason_$: [
                        //长度验证
                        {type: 'string', max: 50, message: '事由不能超过50字', trigger: 'change'},
                        //特殊字符验证
                        {validator: this.$_validatestr_$, trigger: 'change'}
                    ],
                    $_Stime_$: [
                        //特殊字符验证
                        {required: true, validator: validateStime, trigger: 'change'},
                    ],
                    $_Etime_$: [
                        //特殊字符验证
                        {required: true, validator: validateEtime, trigger: 'change'},
                    ],
                },
                $_type_$: [
                    {
                        value: '全部',
                        label: '全部'
                    }, {
                        value: '被邀请',
                        label: '被邀请'
                    }, {
                        value: '预约',
                        label: '预约'
                    }
                ],
                hysList: [],
                model1: '',
                model2: '',
                model3: '',
                model4: '',
                $_List_$: [],
                pageSize: 10,//每页条数
                pageNum: 1,//当前第几页
                isShow: false,
                searchname: '',
                searchtype: '',
                searchdate: '',

            }
        },
         computed: {
            ...mapGetters(['currentZone', 'currentZoneId']),
        },
        created() {
            this.currentZoneId
            this.$_fkList_$();
           this.$_select_$()

            //this.$_Search_$();
        },
         mounted(){
           var oHeight = $(document).height();
           window.onresize=function(){
                if($(document).height() < oHeight){
                    $(".footer").css("position","static");
                }else{
                    $(".footer").css("position","fixed"); //adsolute或fixed，看你布局
                }
            }; 
       },
        destroyed() {
           window.onresize = void 0;
        },
        methods: {
        
            //可预约会议室
            //访客记录列表
            $_fkList_$(searchtype) {
                let data = {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                };
                if (searchtype) {
                    if (searchtype == '预约') {
                        data.visitorType = 0;
                    }
                    if (searchtype == '被邀请') {
                        data.visitorType = 1;
                    }
                }
                if (searchtype && this.pageNum === 1) {
                    this.$_List_$ = [];
                }
                let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                let userInfo = JSON.parse(cookie);
                this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/visitor/visitor/records`,
                    data: data,
                     headers:{"Content-type":"application/json"}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            for (let i = 0; i < res.data.data.records.length; i++) {
                                this.$_List_$.push(res.data.data.records[i]);
                            }
                        }
                    }
                })
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            next(){
               this.$root.$_Route_$('user', 'mobile', 'fk-zxyy-search', {id: 1})
            },
             $_select_$(){
             // console.log()
             //赋值前判断
                    if(this.$root.inparams.item){
                        this.item = this.$root.inparams.item
                        console.log(this.item)
                    }else{
                        this.item = { }
                    }
            // this.itemer = this.item
            },
            $_show_$(){
                // /console.log(9999)
              this.$root.$_Route_$('user', 'mobile', 'fk-yy-bflb', {id: 1})
            },
            $_nextPage_$(item) {
                if (item.auditStatus === 0) {
                    this.$root.$_Route_$('user', 'mobile', 'fk-yyxq', {data: item})//预约未审核
                }
                else if (item.auditStatus === 2) {
                    this.$root.$_Route_$('user', 'mobile', 'fk-yyjj', {data: item})//预约不通过
                }
                if (item.auditStatus === 1) {
                    this.$root.$_Route_$('user', 'mobile', 'fkyyewm', {data: item})//预约通过详情
                }
            },
            $_reset_$(){
             for(var k in this.$_formValidate_$){
                this.$_formValidate_$[k] = ''
             }
             this.item = {}
              this.model3 =''
              this.model2 = ''
            },
           handleConfirm(date) {
                // 输出格式化后的时间
                this.model2 = date.format('YYYY-MM-DD');
                this.calendarShow = false;
            },
            $_save_$() {
                this.$refs.$_formValidate_$.validate((valid) => {
                    if (valid) {
                       Indicator.open({
                        text: '提交中...',
                        spinnerType: 'fading-circle'
                       });
                        //console.log(valid)
                        let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
                        let userInfo = JSON.parse(cookie);
                        //请求部门下员工
                        let data = {
                            visitorName: this.$_formValidate_$.$_name_$,
                            visitorMobile: this.$_formValidate_$.$_phone_$,
                            visitorCompany: this.$_formValidate_$.$_company_$,
                            visitReason: this.$_formValidate_$.$_reason_$,
                            visitDate:this.$_formValidate_$.$_Stime_$.substr(0, 10),
                            startTime:this.$_formValidate_$.$_Stime_$.substr(0, 10),
                            endTime: this.$_formValidate_$.$_Etime_$.substr(0, 10),
                           employeeMobile:this.item.phoneNumber
                        };
                        this.$_sendQuery_$({
                            method: "POST",
                            url: `${this.$_global_$.serverPath}/company/visitor/visitor/create`,
                            data: data,
                            headers: {
                                "Content-type": "application/json"
                            }
                        }).then(res => {
                          // console.log(res)
                            if (res.status === 200) {
                                if (res.data.code === 0) {
                                   Indicator.close();
                                  this.$root.$_Route_$('user', 'mobile', 'fk-yy-bflb', {id:1})
                                }else{
                                     this.$Message.error('请选择拜访员工信息!');
                                }
                            }
                        })
                    }
                });
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.$_fkList_$(this.searchtype);
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>