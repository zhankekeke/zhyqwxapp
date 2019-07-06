<style>
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
</style>
<style scoped>
.container {
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-weight: 400;
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
.wrap {
    box-sizing: border-box;
   border-top:1px solid rgb(236,236,236);
   padding-top:29px;
}
.num {
    box-sizing:border-box;
    line-height: 30px;
    border-bottom: 1px solid #cccccc;
    width: 75%;
    height:30px;
}
.select{float:left;width:60px;margin-left:36px;margin-right:16px;text-align:center;color:#333;line-height:30px;
font-size:15px;}
/* .select{float:left;width:60px;margin-left:36px;margin-right:16px;} */
.srk{float:left;width:150px;height:30px;border-bottom:0.5px solid rgb(153,153,153);
padding-left:10px;box-sizing:border-box;}
.srk input{outline:none;border:none;font-family:"Microsoft YaHei";font-size:15px;color:#333333;}
.brand{float:left;margin-left:39px;margin-right:16px;font-family:"Microsoft YaHei";
font-size:14px;color:rgb(153,153,153);line-height:30px;}
.img{width:262px;height:auto;margin:0 auto 31px;}
.img img{width:100%;height:auto;}
.brand1{font-family:"Microsoft YaHei";font-size:15px;color:#333333;line-height:30px;}
.buttonWrap{padding:0 15px;box-sizing:border-box;}
.button{width:100%;height:50px;border-radius:25px;background:rgb(2,155,250);line-height:50px;font-size:15px;
color:#fff;text-align:center;}
.confirm{color: #fff !important;background: rgb(2,155,250) !important;}
.cancel{color: rgb(51,51,51) !important;background: rgb(246,246,246) !important;border:none !important;}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <navigator title="车辆详情" @back="$_back_$" />
        <!-- 中间部分 -->
        <div class="wrap">
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="select">
                    {{item.province}}
                    <!-- <Select v-model="$_select_$" disabled>
                            <Option v-for="item in $_carList_$" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select> -->
                </div>
                <div class="srk">
                    <input type="text" v-model="item.plateNumber" readonly>
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="brand">品牌车型</div>
                <div class="srk">
                    <input type="text" v-model="item.brand" readonly>
                </div>
            </div>
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="brand">车辆图片</div>
            </div>
            <div class="img">
                <img src="@/imgs/mobile/wdcl_car.png" alt="" srcset="">
                <!-- <img :src="item.imageUrl" alt="" srcset=""> -->
            </div>
            <div style="overflow:hidden;margin-bottom:25px;">
                <div class="brand" style="margin-left:29px;">车辆属性</div>
                <div class="brand1">固定车位&nbsp;&nbsp;
                    {{item.startTime | formatTime}} - {{item.endTime | formatTime}}</div>
            </div>
            <div style="overflow:hidden;margin-bottom:50px;">
                <div class="brand" style="margin-left:29px;">绑定时间</div>
                <div class="brand1">{{item.createDate | formatCreateTime}}</div>
            </div>
            <div class="buttonWrap">
                <div class="button" @click="unBind()">解除绑定</div>
            </div>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
import {MessageBox} from 'mint-ui';
import navigator from '../public/navigator';
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
        }
    },
    components:{
        navigator,
            [MessageBox.name]: MessageBox
    },
    data() {
        return {
            $_select_$: '',
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
            item:{}
        }
    },
    created(){
        this.$_global_$.serverPath
        this.$_clxq_$()
    },
    methods: {
        //返回
        $_back_$() {
            this.$root.$_Route_$('user', 'mobile', 'fksytccqb', { id: 1 })
        },
        // 车辆详情
        $_clxq_$() {
            this.$root.inparams.item
            this.item = this.$root.inparams.item
        },
        // 解除绑定
        unBind(){
            const html2 = `<p style="font-size:15px;color:#33333 !important;line-height:1;margin:39px 0 34px;">您确定要解除
            <span style="font-size:16px;color:rgb(2,155,250);"> ${this.item.province}
            ${this.item.plateNumber} </span>的绑定吗？</p>`
            MessageBox({
                title: '',
                message: html2,
                confirmButtonText: '确定',
                confirmButtonClass: 'confirm',
                showCancelButton: true,
                cancelButtonText: '取消',
                cancelButtonClass: 'cancel'
            }).then(action => {
                if(action == 'confirm'){
                    this.$_sendQuery_$({
                        method:"POST",
                        url:`${this.$_global_$.serverPath}/zone/car/remove/${this.item.id}`,
                        data:{},
                        headers:{"Content-type":"application/json"}
                    }).then((rsp)=>{
                        if(rsp.status === 200){
                            if(rsp.data.code === 0){
                                const mess = this.item.province+this.item.plateNumber
                                this.$root.$_Route_$('user', 'mobile', 'fksytccqb', { mess:mess })
                            }else{
                                const ht = rsp.data.message
                                MessageBox.alert({
                                    title: '提示',
                                    message: ht,
                                    confirmButtonText: '确定'
                                })
                            }
                        }
                    })
                }else{

                }
            });   
        }
    },
}
</script>