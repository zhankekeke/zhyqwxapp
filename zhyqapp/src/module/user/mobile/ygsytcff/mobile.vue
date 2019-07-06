<style scoped>
    >>> .ivu-modal-footer {
        border-top: none !important;
        padding: 0 !important;
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    >>> .ivu-modal-header {
        border-bottom: none !important;
        padding-top: 24px;
        box-sizing: border-box;
    }

    >>> .ivu-modal-content {
        width: 315px;
        height: 168px;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        opacity: 0.9948999999999999;
    }

    >>> .ivu-modal {
        margin: 100px 30px;
    }

    >>> .ivu-btn-primary {
        color: #fff;
        background: linear-gradient(136deg, rgba(0, 193, 222, 1) 0%, rgba(78, 174, 254, 1) 100%);
    }
    .container {
        font-size: 16px;
        color: #333333;
        font-weight: 400;
        background-color: rgb(246, 246, 246);
        height: 100vh;
    }

    .wrap {
        font-size: 14px;
        color: #333333;
        background: #f6f6f6;
    }

    .select {
        font-size: 16px;
        font-family: "PingFang-SC-Medium";
    }

    .touxiang {
        overflow: hidden;
    }

    .touxiang img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        float: left;
    }

    .touxiang span {
        float: left;
        display: block;
        line-height: 70px;
        font-size: 16px;
        margin-left: 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 45%;
    }

    .record {
        font-size: 14px;
        color: #00C1DE;
        line-height: 70px;
    }

    .record span:nth-child(2) {
        padding: 0 5px;
    }

    .che {
        border-bottom: 1px solid #E5E5E5;
        padding-bottom: 15px;
    }

    .pai {
        padding-top: 15px;
    }

    .pai p {
        font-size: 13px;
    }

    .pai p span:first-child {
        display: inline-block;
        text-align: center;
        line-height: 18px;
        font-size: 10px;
        width: 80px;
        height: 18px;
        background: rgba(93, 181, 246, 1);
        border-radius: 4px;
        color: #ffffff;
    }

    .pai p span:nth-child(2) {
        font-weight: 500;
        margin-left:10px;
    }

    .sure {
        font-size: 18px;
        padding-bottom: 19px;
        color: rgb(51, 51, 51);
    }

    .pai .icon {
        float: right;
        height: 14px;
        width: 7px;
        line-height: 22px;
    }

    .add-car {
        text-align: center;
        line-height: 1;
        font-size: 14px;
        padding-top: 16px;
    }

    .box1 {
        background: #fff;
        box-sizing: border-box;
        padding: 20px;
        font-size: 12px;
    }

    .box1 button {
        border: 1px solid #797979;
        background: #fff;
        padding: 0 10px;
        border-radius: 5px;
    }

    .box1 p {
       font-size:14px;
    }

    .item {
        width: 343px;
        height: 232px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
        border-radius: 4px;
        padding: 6px;
        margin-top: 10px;
    }
    .item:first-child{
        margin-top:0;
    }

    .item img {
        width: 330px;
        height: 151px;
        border-radius: 4px;
    }

    .yuyue {
        width: 76px;
        height: 28px;
        background: rgba(0, 193, 222, 1);
        border-radius: 14px;
        color: #ffffff;
        text-align: center;
        line-height: 28px;
        float: right;
        font-size: 12px;
        margin-top: 10px;
    }

    .btn-footer {
        font-size: 16px;
        border-top: 1px solid #f6f6f6;
        border-radius: 8px;
    }

    .btn-cancle {
        float: left;
        width: 46%;
        background-color: #fff;
        border: none !important;
        height: 45px;
        font-size: 16px;
        border-radius: 0 0 0 8px;

    }

    .btn-ok {
        width: 50%;
        height: 45px;
        font-size: 16px;
        border-radius: 0 0 8px;
    }

    .aa5 {
        width: 95px;
    }

    .aa5 >>> .ivu-select-placeholder {
        font-size: 14px;
        text-align: left;
        color: #00C1DE;
    }

    >>> .ivu-select-selection {
        border: none;
    }

    .aa5 >>> .ivu-select-selected-value {
        color: #00C1DE;
        padding-left: 0;
        font-size: 15px;
        width:105px;
    }
   >>> .ivu-icon.ivu-icon-plus{
     width:16px;
     height:16px;
     font-size:18px;
}
    .aa5 >>> .ivu-select-arrow {
        color: #00C1DE;
        right:0!important;
    }

    >>> .ivu-icon-arrow-down-b:before {
        content: "\F123" !important;
    }

    .nocar >>> .ivu-modal-body {
        line-height: 6;
    }
    >>> .ivu-select-visible .ivu-select-selection{
        box-shadow:none;
    }
    >>>.ivu-select-item-selected{
     background:none!important;
     color:rgba(0,193,222,1);
    }
    >>> .ivu-select-item{
        color:rgba(0,193,222,1);
    }
    .hysrule{
        padding:0 16px 0 17px;
        box-sizing:border-box;
        background:rgba(246,246,246,1) url('/static/hysyy/rule.svg') 0 10px no-repeat;
        font-size:12px;
        font-family:'PingFangSC-Regular';
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:35px;
        height:35px;
    }
    /*弹出层*/
    .CustomPopup {
        height: 100%;
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .CustomPopupContent {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s ease;
        transform: translateY(100%);
        z-index: 300;
        background: #ffffff;
        padding: 16px;
        height: 440px;
        border-radius: 8px 8px 0px 0px;
    }
    .CustomPopupContentShow {
        transform: translateY(0);
    }
    .CustomPopupContent .popupTitle{
        text-align: center;
        font-size: 14px;
        font-weight: 500;
    }
    .CustomPopupContent .popupContent{
        margin: 15px 0;
        height: 310px;
        overflow-y: scroll;
        font-size:12px;
    }
    .popup-window .sure {
        bottom: 20px;
        position: absolute;
        width: 296px;
        height: 44px;
        line-height:30px;
    color:#fff;
    font-weight:550;
        left: 40px;
        font-size: 16px;
    }
</style>
<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="停车场" @back="$_back_$"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <Row class="che">
                    <Col span='12'>
                        <div class="touxiang">
                            <img v-if="this.$_userInfo_$.faceUrl " :src="this.$_userInfo_$.faceUrl | imgsrc" alt="">
                             <img v-else src="/static/hysyy/faceimg.svg">
                            <!--<img :src="this.$_userInfo_$.faceUrl" alt="">-->
                            <span>{{this.$_userInfo_$.name}}</span>
                        </div>
                    </Col>
                    <Col span='12'>
                        <div style="float:right" class="record">
                            <span @click="$_yyjl_$">预约记录</span>
                            <span>|</span>
                            <span @click="$_jfjl_$">缴费记录</span>
                        </div>
                    </Col>
                </Row>
                <Row class="pai" v-if="cars">
                    <Col span='24'>
                        <p v-if="cars.carType == 2 && !cartype" style="display:inline;">
                            <span>{{car}}</span>
                            <span>固定车辆：{{cars.startTime.substring(0,10)}}~{{cars.endTime.substring(0,10)}}</span>
                        </p>
                        <span @click="$_qb_$" class="icon">
                            <Icon type="chevron-right"></Icon>
                         </span>
                        <p v-if="cars.carType ==1 && !cartype">
                            <span>{{car}}</span>
                            <span>临时车辆：标准收费</span>
                        </p>
                        <p v-if="cars.carType == 0 || cartype">
                            <span>{{car}}</span>
                            <span>外来车辆：标准收费</span>
                        </p>
                    </Col>
                </Row>
                <Row v-if="!cars" class="add-car">
                    <Icon type="plus"></Icon>
                    <p @click="go">添加爱车</p>
                </Row>
            </div>

        </div>
        <div style="background: #f6f6f6;padding: 0 0.432rem 0.45rem">
         <div class="hysrule" @click="showCustomPopupClick">停车场预约规则 》</div>
            <ul v-if="$_List_$.length != 0">
                <li class="item" v-for='item in $_List_$'>
                    <div>
                        <img v-if="item.images && item.images.length>0" :src="item.images[0].imageUrl | imgsrc">
                        <Row style="font-size: 0.378rem;line-height: 1;margin-top: 0.11rem">
                            <Col span="12">
                                <p style="font-size: 0.486rem;font-weight:550;display:inline-block;white-space:nowrap;width:3.7333rem;overflow:hidden;text-overflow:ellipsis;">{{item.name}}</p>
                                <p style="font-size: 0.324rem;margin-top: 0.18rem"> 剩余车位:<span 
                                        style="font-size: 0.54rem;font-family:'DINAlternate-Bold';font-weight:bold;margin-left:0.133rem;">{{item.placeNumber}}</span>
                                </p>

                            </Col>
                            <Col span="12" style="text-align: right">
                                <p v-if="item.parkingLotConfig" style="color: #FF8E58">
                                    <span v-if="vister != visters ">{{item.parkingLotConfig.tempDesc}}</span>
                                    <span v-else>{{item.parkingLotConfig.externalDesc}}</span></p>
                                <p v-else style="color: #FF8E58">0元/时</p>

                                <p v-if="item.placeNumber==0">已满</p>
                                <p v-else class="yuyue" @click="$_yuyue_$(item.id)">预约</p>
                            </Col>
                        </Row>
                    </div>
                </li>
            </ul>
        </div>

        <Modal v-model="$_case1_$" :closable="false"
               style="text-align:center;font-size:0.4rem;">
            <h2 class="sure">你确定要预约该停车场吗？</h2>
            <div :model="case1Form" ref="case1Form">
                <div prop="cl">
                    <span class="select" >选择已有车辆:</span>
                    <Select class="aa5" v-model="case1Form.cl" @on-change="select" >
                        <Option v-if="itemes" v-for="(itemes,index) in carList"  :value="itemes.id" :key="itemes.id">{{ itemes.label }}
                        </Option>
                    </Select>
                </div>
            </div>
            <div slot="footer" class="btn-footer">
                <Button @click="$_case1_$ = false" class="btn-cancle">
                    取消
                </Button>
                <Button type="primary" @click="$_submit_$" class="btn-ok">预约
                </Button>
            </div>
        </Modal>
        <Modal class="nocar" v-model="$_case2_$" :closable="false">
            <div style="text-align:center;">
                <a href="javascript:void(0)" style="font-size:0.4rem;color:rgb(51,51,51)">您还没有爱车,请先绑定您的爱车</a>
            </div>
            <div slot="footer" class="btn-footer">
                <Button @click="$_case2_$ = false" class="btn-cancle">取消</Button>
                <Button @click="$_bangding_$()" class="btn-ok" type="primary">去绑定</Button>
            </div>
        </Modal>
         <div class="popup-window">
            <!-- 弹出层 -->
            <div :class="{'CustomPopup':showCustomPopup}" @click="maskClick"></div>
            <div class="CustomPopupContent " :class="{'CustomPopupContentShow':showCustomPopup}">
                <div class="popupTitle">停车场预约规则</div>
                <div class="popupContent" v-html="parkRule"></div>
                <Button class="sure" shape="circle" type="primary" long @click="maskClick">确定</Button>
            </div>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import navigator from '../public/navigator';
    import {ACCESS_VISITOR} from '../../../../store/module/menus/menus'
    import {Indicator} from 'mint-ui';

    export default {
        mixins: [controler],
        components: {
            navigator,
            [Indicator.name]:Indicator
        },
        filters: {
            FormatImages(item) {
                //console.log(item)
                if (item && item.length > 0) {
                    return item[0].imageUrl
                }
                return
            },
            formatDate(item) {
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
                $_cph_$: '京8888',
                $_case1_$: false,
                $_case2_$: false,
                $_search_$: '',
                iteme: {
                    config: ''
                },
                vister: 0,
                cars: {},
                data: {},
                casedorm:0,
                car: '',
                configTime: '',
                $_userInfo_$: '',
                yyjlid: 0,
                visters: 0,
                zoneId: 0,
                cartype: false,
                carList: [],
                carer:[],
                case1Form: {  // 预约模态框
                    cl: 0
                },
                parkRule:'',
                showCustomPopup: false,
                $_List_$: [],

            }
        },
        created() {
            let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
            this.$_userInfo_$ = JSON.parse(cookie);
            // console.log(this.$_userInfo_$)
            //身份判定
            this.vister = ACCESS_VISITOR
            this.visters = this.$store.getters.role
            this.$store.getters.currentZoneId
            //外来车辆
            if (!this.$_userInfo_$.enterpriseId || (this.$_userInfo_$.enterpriseId && this.$_userInfo_$.zoneId != this.$store.getters.currentZoneId)) {
                //this.$_list_$()
                this.cartype = true
            }
            this.$_global_$.serverPath
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
		
            this.$_list_$()
            this.$_tcc_$()
            // this.$_config_$()
        },
        methods: {
            //弹框规则
            showCustomPopupClick() {
                this.showCustomPopup = true;
                this.getMeetingRule()
            },
            maskClick(){
              this.showCustomPopup = false;
            },
            //个人拥有的车辆
            $_list_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + '/zone/car/employee/list',
                    data: {},
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    //  console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            Indicator.close();
                            this.cars = rsp.data.data.records[0]
                            this.data = rsp.data.data.records
                            // this.zoneId = rsp.data.data.records[0].zoneId
                            var arr = rsp.data.data.records
                            for (let i = 0; i < arr.length; i++) {
                                var sr = arr[i].plateNumber.split('').slice(0,1).join()+'·'
                               var temp = arr[i].plateNumber.split('').slice(1).join('')
                               var province = arr[i].province
                               var srs = province+sr + temp
                                var temps={}
                                temps ={
                                    id:arr[i].id,
                                    label:srs
                                }
                                this.carList.push(temps)
                                this.carer.push(srs)
                                 
                            }
                            this.car = this.carList[0].label
                           // console.log(this.car)
                           // console.log(this.carList)
                            //console.log(this.cars)
                        } else {
                            this.$Message.error('数据获取失败!');
                        }
                    }
                })
            },
            go() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytccqb', {id: 1})
            },

            //停车场信息
            $_tcc_$() {
                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/zone/zone/${this.$store.getters.currentZoneId}/parkinglot/search`,
                    data: {
                        status: 1
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    //
                    // console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if (rsp.data.data.records.length != 0) {
                                this.$_List_$ = rsp.data.data.records
                               // console.log(this.$_List_$)

                            } else {
                                this.$Message.success('暂无停车场信息')
                            }
                        }
                    }
                })
            },

            $_yuyue_$(id) {
                this.case1Form.cl = '';
                this.yyjlid = id;
                if (this.cars) {
                    this.$_case1_$ = true
                } else {
                    this.$_case2_$ = true
                }

            },
            select(value){
                //console.log(value)
             this.case1Form.cl = value
             //console.log(this.case1Form.cl)

           
            },
            //可预约车辆提交
            $_submit_$() {
                
                if (this.case1Form.cl != 0) {
                    this.$_sendQuery_$({
                        method: "POST",
                        url: this.$_global_$.serverPath + `/zone/zone/${this.$store.getters.currentZoneId}/parkinglot/` + this.yyjlid + `/reserve`,
                        data: {
                            carId: this.case1Form.cl
                        },
                        headers: {
                            "Content-type": "application/json"
                        }
                    }).then((rsp) => {
                        //console.log(rsp)
                        if (rsp.status === 200) {
                            if (rsp.data.code === 0) {
                                $('body').css({overflow:'initial'})
                                this.$Message.success('预约成功!');
                                this.$_tcc_$()
                                this.$_case1_$ = false;
                                this.$root.$_Route_$('user', 'mobile', 'ygsytccyyjl', {id: this.yyjlid,carList: this.carer})
                            } else {
                                this.$Message.error(rsp.data.message);
                            }
                        }
                    })
                } else {

                }

            },
            //停车场规则
            getMeetingRule(){
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/zone/zone/${this.$store.getters.currentZoneId}/parking/rule`,
                    headers: {"Content-type": "application/json"}
                }).then((rsp) => {
                    //console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            if(rsp.data.data){
                                this.parkRule = rsp.data.data.reserveRule;
                            }
                        } else {
                            this.$Message.error('获取停车场规则失败!');
                        }
                    }
                })
            },
            $_bangding_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsyxzcl', {id: 1})
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygindex', {id: 1})
            },
            $_qb_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytccqb', {id: 1})
            },
            //预约记录
            $_yyjl_$() {
                //console.log(this.carer)
                this.$root.$_Route_$('user', 'mobile', 'ygsytccyyjl', {id: 1, carList: this.carer})
            },
            //预约记录
            $_jfjl_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytccjfjl', {id: 1, carList: this.carer})
            },
            //停车场
            $_tcff_$() {
                this.$root.inparams.id
            },
            $_ok_$() {
                this.$Message.info('Clicked ok');
            },
            $_cancel_$() {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>