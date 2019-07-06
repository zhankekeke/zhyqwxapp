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

    >>> .ivu-modal-body {
        line-height: 6;
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
</style>
<style scoped>
>>> body{
    overflow:none!important;
}
    .container {
       height:100vh;
       background: #f6f6f6;
    }

    .wrap {
        font-family: PingFangSC-Regular;
        font-weight: 400;
    }

    .headbg {
        height: 40px;
        color: rgb(101, 109, 114);
        font-size: 14px;
        line-height: 40px;
        padding-left: 16px;
        background: #ffffff;
    }

    .parkname p:nth-child(2) {
        color: #333333;
        padding-bottom: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 63%;
    }

    .aa5 {
        width: 95px;
    }

    .aa5 >>> .ivu-select-placeholder {
        font-size: 14px;
        text-align: left;
        /*color: #656D72;*/
    }

    >>> .ivu-select-selection {
        border: none;
    }

    >>> .ivu-icon-arrow-down-b:before {
        content: "\F123" !important;
    }

    .aa5 >>> .ivu-select-item {
        font-size: 14px !important;
        border-bottom: 1px solid #f6f6f6;
        padding: 10px 20px !important;
    }

    .aa5 >>> .ivu-select-item:nth-last-child(1) {
        border-bottom: 1px solid #fff;
    }

    .aa5 >>> .ivu-select-selected-value {
        font-size: 14px !important;
    }

    .aa5 >>> .ivu-select-dropdown {
        width: 100vw !important;
        left: -15px !important;
        max-height: none !important;
        border-radius: 0;
    }

    .aa5 >>> .ivu-select-item-focus {
        background-color: #fff;
        color: #00C1DE;
    }
    .aa5 >>> .ivu-select-item-focus:after {
        content: '';
        background: url(/static/fwsl/dui.png) no-repeat bottom;
        background-size: 16px;
        width: 16px;
        height: 16px;
        float: right;
        /*background-position: bottom;*/
    }

    >>> .ivu-btn {
        border: none;
    }

    .headButton {
        width: 72%;
        position: relative;
        text-align: left;
        background-color: #fff
    }

    .headButton img {
        position: absolute;
        right: 10px;
        top: 7px
    }

    .lists li {
        width: 375px;
        height: 147px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
        padding: 16px;
        margin-top: 10px;
        line-height: 1;
    }

    .lists .cancle {
        font-size: 12px;
        color: #00C1DE;
        text-align: center;
        width: 60px;
        height: 26px;
        border-radius: 14px;
        border: 1px solid #00C1DE;
        margin-top: 10px;
        float: right;
        line-height: 26px;
    }

    .lists p {
        font-size: 14px;
    }

    .lists img {
        width: 72px;
        height: 72px;
        border-radius: 3px;
        float: left;
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
>>>.ivu-select-visible .ivu-select-selection{
    box-shadow:none;
}
    .btn-ok {
        width: 50%;
        height: 45px;
        font-size: 16px;
        border-radius: 0 0 8px;
    }

    .btn-footer {
        font-size: 16px;
        border-top: 1px solid #f6f6f6;
        border-radius: 8px;
    }
      .divNoList {
        text-align: center;
    }
     .nolist {
        color: #B3B3B3;
        margin-top: 19px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: normal;
    }
    .lists .imgs{
      border-bottom: 1px solid #f6f6f6;height: 83px  
    }
  .lists .rows{
    width: 260px;float: left;margin-left: 10px;margin-top: 5px;
  }
  .btnDate {
        width: 100%;
        height: 37px;
        position: relative;
        background-color: #fff;
        line-height: 37px;
        border-radius: 4px;
        text-align: left;
        font-size: 14px;
        z-index: 99;
    }
    .rltb {
        position: absolute;
        right: 23px;
        top: 13px;
        z-index: 99;
    }
</style>

<template>

    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="预约记录"/>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="headbg">
            <Row>
                <Col span="7">
                    <Select class="aa5" v-model="carName" style="color:#495060;" placeholder="全部车辆" @on-change="$_searchOrder_$">
                        <Option :value="items">{{items}}</Option>
                        <Option v-for="item in carList" :value="item" :key="item">{{ item}}
                        </Option>
                    </Select>
                </Col>
                <Col span="8">
                    <div class="btnDate"
                             @click="calendarShow = true">
                            <span v-if="$_datetime_$" class="aa3">{{$_datetime_$}}</span>
                            <Icon v-if="$_datetime_$ == ''" type="ios-calendar-outline" size="20px"
                                  class="rltb"></Icon>
                        </div>
                    <calendar :show.sync="calendarShow" @change="$_Searchqx_$" :weekNames="weekNames"
                              @touchmove.native.stop.prevent/>
                 <Icon @click="$_Searchqxe_$()" v-if="$_datetime_$" type="ios-close-outline" size="16px"
                              class="rltb"></Icon>
                </Col>
                </Row>
            </div>
            <div class="lists" v-if="$_yyjlInfo_$.length>0" >
                <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleTopChange" :autoFill=false
                             ref="loadmore">
                    <ul>
                        <li v-for="(item,index) in $_yyjlInfo_$" :key="index" v-if="item">

                            <div class="imgs">
                                <img v-if="item.images" :src="item.images[0].imageUrl|imgsrc"/>
                                <Row class="rows" >
                                        <p style="font-family:'PingFangSC-Medium';font-weight:550;display:inline-block;">
                                            <span style="font-weight:bold;">编号：</span>{{item.serialNumber}}</p>
                                             <p style="font-family:'PingFangSC-Medium';font-weight:550; float:right;margin-left:0.533rem;"> {{item.createDate.substring(0,10)}}</p>
                                        <p style="font-size: 0.32rem;margin-top: 0.26rem">车牌号:{{item.plateNumber}}</p>
                                        <p style="font-size: 0.32rem;margin-top: 0.26rem;color: #656D72;line-height:15px;" >
                                            <img style="width:0.42rem;height:0.34666rem;" src="/static/tcc/dw.svg">{{item.parkingAddress}}
                                            {{item.parkingName}}</p>   
                                   
                                </Row>
                            </div>

                            <div style="clear: both;color:#00C1DE">
                                <p style="margin-top:0.4533rem;float: left">{{item.status | formatStatus}}</p>
                                <p v-if="item.status == 0" @click="cancel(item)"
                                   class="cancle">{{item.status | formatDate}}</p>
                            </div>
                        </li>
                    </ul>
                    <div slot="bottom" class="mint-loadmore-bottom">
                        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">上拉加载</span>
                        <span v-show="topStatus === 'loading'">Loading...</span>
                    </div>
                </mt-loadmore>
            </div>
            <div v-else class="divNoList" >
                <img style="margin-top: 50%" src="/static/fwsl/bfjl_nolist.svg"/>
                <div class="nolist">您还没有预约记录哦~</div>
            </div>
        </div>
         
        <Modal v-model="$_case2_$" :closable="false">
            <div style="text-align:center;">
                <a href="javascript:void(0)" style="font-size:0.4rem;color:rgb(51,51,51)">你确定要取消该停车场的预约？</a>
            </div>
            <div slot="footer" class="btn-footer">
                <Button @click="$_case2_$ = false" class="btn-cancle">取消</Button>
                <Button @click="cancelSure()" class="btn-ok" type="primary">确定</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    import controler from './controler.js';
    import {DatetimePicker} from 'mint-ui';
    import {Loadmore,Indicator} from 'mint-ui';
    import navigator from '../public/navigator';
    import 'mint-ui/lib/style.css';
    export default {
        mixins: [controler],
        components: {
            [DatetimePicker.name]: DatetimePicker,
            navigator,
            [Loadmore.name]: Loadmore,
             [Indicator.name]:Indicator

        },
        filters: {
            formatStatus(item) {
                if (item == 3) {
                    return '已取消'
                }
                if (item == 0) {
                    return '已预约'
                }
                if (item == 1) {
                    return '已完成'
                }
                if (item == 2) {
                    return '爽约'
                }
            },
            formatDate(item) {
                if (item == 0) {
                    return '取消'
                }
            },
            FormatDate(item) {
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
                topStatus: '',
                serial: '',
                parkId: 0,
                userInfo: '',
                cars:'',
                cartype:'',
                model4:'',
                items:'全部车辆',
                $_yyjlInfo_$: [],
                pageNum: 1,
                pageSize: 10,
                // pickerValue: new Date(),
                formatDate(date) {
                    const y = date.getFullYear()
                    let m = date.getMonth() + 1
                    m = m < 10 ? '0' + m : m
                    let d = date.getDate()
                    d = d < 10 ? ('0' + d) : d
                    return y + '-' + m + '-' + d
                },
                $_querycfg_$: {
                    mod: "",
                    params: {}
                },
                $_datetime_$: '',
                calendarShow: false,
                weekNames: ['一', '二', '三', '四', '五', '六', '日'],
                carList: [
                ],
                carName: '', //选择状态
                $_case2_$: false,

            }
        },
        created() {
             Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$_list_$()
            //this.$_datetime_$ = new Date().toLocaleDateString();
            this.carList = this.$root.inparams.carList;
            //console.log(this.carList)
        },
        methods: {
            showDate() {
                this.calendarShow = true;
            },
            $_Searchqx_$(date) {
               let datenum  = date.format('YYYY-MM-DD');
              this.$_datetime_$ = datenum
                this.$_querycfg_$.params = {};
                this.$_querycfg_$.params.startTime = this.$_datetime_$ + '  00:00:00';
                this.$_list_$();
                this.calendarShow = false;

            },

            $_searchOrder_$(value) {
                //console.log(value)
                this.carName = value
               if(this.carName == '全部车辆'){
                    Indicator.open({
                 text: '加载中...',
                spinnerType: 'fading-circle'
            });
                  // console.log(this.carName)
                  this.$_querycfg_$.params.plateNumber = ''

                   this.$_list_$()
                   Indicator.close();

               }else{
            //     if(this.carName != '全部'){
                  Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                  })
                    this.cars = this.carName.split('').slice(0,2).join('') + this.carName.split('').slice(3).join('')
                    this.$_querycfg_$.params.plateNumber = this.cars;
                     this.$_list_$()
                      Indicator.close();
                    //this.$_querycfg_$.params.plateNumber = ''
                }
            },
            $_back_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytcff', {id: 1})
            },
            //预约记录
            $_yyjl_$() {
                this.$root.inparams.id
                this.$_list_$()
            },
            //停车场
            $_tcff_$() {
                this.$root.$_Route_$('user', 'mobile', 'ygsytcff', {id: 1})
            },
            cancel(item) {
                this.$_case2_$ = true;
                this.serial = item.parkingId;
                this.parkId = item.serialNumber
            },
            cancelSure() {

                this.$_sendQuery_$({
                    method: "POST",
                    url: this.$_global_$.serverPath + `/zone/zone/${this.$store.getters.currentZoneId}/parkinglot/${this.serial}/cancel`,
                    data: {
                        serialNumber: this.parkId
                    },
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then((rsp) => {
                    //console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            this.$Message.success('取消成功');
                            this.$_case2_$ = false;
                             this.$_list_$()
                        }
                    }
                })
            },
            $_list_$() {
                this.$_querycfg_$.mod = 'zone/zone/parking/reserves';

                this.$_fquery_$((rsp) => {
                    // console.log(rsp)
                    if (rsp.status === 200) {
                        if (rsp.data.code === 0) {
                            //this.$_totalSize_$ = rsp.data.data.total
                            this.$_yyjlInfo_$ = rsp.data.data.records
                             Indicator.close();
                        }
                    }
                })
            },
            $_Searchqxe_$(){
                //this.$_datetime_$ = date.format('YYYY-MM-DD');
                 this.$_datetime_$ = ''
                // this.$_querycfg_$.params.startTime = this.$_datetime_$ + '  00:00:00';
                  this.$_querycfg_$.params.startTime=''
             // this.$_querycfg_$.params.startTime = {}
              this.$_list_$();

            },
            //点击确定按钮之后
            handleConfirm(datePicker, index) {
                this.pageNum = 1
                // 输出格式化后的时间
                let datenum = this.formatDate(this.$refs.datePicker.value)
                this.$_model_$ = datenum
                if (this.$_model_$) {
                    this.$_querycfg_$.params.startTime = this.$_model_$
                    this.$_list_$();
                }
                //console.log(this.$_model_$)
            },
            handleCancel() {
                //console.log(9999)
                this.$_model_$ = this.formatDate(this.$refs.datePicker.value)
                this.$_model_$ = ''
                this.$_list_$()
            },
            handleTopChange(status) {
                this.topStatus = status;
            },
            loadBottom() {
                setTimeout(() => {
                    this.pageNum++;
                    this.$_list_$();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            }
        }
    }
</script>