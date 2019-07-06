<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
.ivu-btn.ivu-btn-primary{
    border-radius:none!important;
}
body{position: static;}
.ivu-modal-footer{
    border-top:none!important;
    padding:0!important;}
.ivu-form .ivu-form-item-label{
  font-size:15px;
  color:rgb(136,136,136);

}
.ivu-modal{
    margin:34px;
}
.ivu-modal-header{
    border-bottom:none!important;
    padding-top:24px;
    padding-bottom:17px;
    box-sizing:border-box;
}
.ivu-modal-content{
    height:188px;
}
.ivu-modal-mask{
    background-color:rgb(51,51,51,.04)
}

.ivu-modal-body{
    line-height:122px;
}
</style>
<style scoped>
.container{font-size:16px;color:#000;font-weight: 400;font-weight: 400;}
.header{height: 50px;left:0;line-height: 50px;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;z-index: 99;}
.footer .active{color:#7599ff;}
.footer button{
    font-size:15px;
}
.wrap img{width: 100%;}
.wrap{border-top:1px solid rgb(236,236,236)}
.right{float: right;}
.header .back{width: 25px;position: absolute;top:15px;left: 6px;}
.wrap {font-size: 14px;color: #333;background:#f6f6f6;}
.list{overflow: hidden;padding: 15px;box-sizing: border-box;background-color:#fff;}
.list li{
    position:relative;
    background: #333;
    overflow: hidden;
    box-sizing: border-box;margin-bottom: 20px;padding-top:25px;font-size: 12px;color:#fff;
    height:150px;
    border-radius:5px;
    }
    .list li>img{
        position:absolute;
        left:0;
        top:-1px;
        opacity:0.27;

    }
.circle{
height: 80px;
text-align:left;
line-height: 100px;
color: #fff;
font-weight: bold;
font-size: 15px;
padding-left:15px;
box-sizing:border-box;
}
.touxiang{
    overflow:hidden;
}
.touxiang img{width: 35%;border-radius:50%;height:50px;float:left;}
.touxiang span{
    float:left;
    display:block;
    float:left;
    line-height:48px;
    font-size:16px;
    margin-left:10px;
}
.record{
    line-height:50px;
}
.record span:first-child{
    font-size:15px;
    color:rgb(2,155,250);
    padding-right:5px;
}
.record span:nth-child(3){
     font-size:15px;
    color:rgb(2,155,250);
    padding-left:5px;
    }
.record span:nth-child(2){
    color:rgb(51,51,51)
}
.che{
  border-bottom:1px dashed #ccc;  
  padding-bottom:15px;

}
.pai{
    padding-top:15px;
}
.pai p{
    font-size:13px;
}
.pai p span:first-child{
   color: rgb(2,155,250);
    display: inline-block;
    background-color:#d5efff;
    height: 26px;
    width: 23%;
    line-height: 26px;
    text-align: center;
    border-radius: 5%;
    font-size:13px;
    margin-right:10px;
}
.pai .icon{
    float:right;
    height:14px;
    width:7px;
    line-height:40px;
}
.pai p span:nth-child(2){
    font-weight:500;
}
.bangding{
    text-align:center;
    line-height:35px;
    padding-top:15px;
    font-size:15px;
}
.box1{background: #fff;margin:1px 0px 10px 0;box-sizing: border-box;padding:16px 15px;font-size: 12px;}
.box1 button{border:1px solid #797979;background:#fff;padding: 0 10px;border-radius: 5px;}
.box1 p{margin:5px 0;}
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
       <navigator title="停车场" @back="$_back_$" />
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <Row class="che">
                    <Col span='12' >
                        <div class="touxiang">
                            <img :src="this.$_userInfo_$.faceUrl | imgsrc" alt="">
                            <span>{{this.$_userInfo_$.name}}</span>
                        </div>
                    </Col>
                    <Col span='12' >
                        <div style="float:right" class="record">
                            <span @click="$_yyjl_$">预约记录</span>
                            <span>|</span>
                            <span @click="$_jfjl_$">缴费记录</span>
                        </div>
                    </Col>
                </Row>
                <Row class="pai" v-if="item">
                    <col span='18'>
                        <p v-if="item.carType == 2" style="display:inline;">
                            <span>{{car}}</span>
                            <span>固定车辆：
                           {{item.startTime}}-{{item.endTime}}
                            </span>
                        </p>
                         <span @click="$_qb_$" class="icon">
                         <img src="@/imgs/mobile/qianjin.png">
                         </span>
                        <p v-if="item.carType ==0">
                            <span>{{car}}</span>
                            <span>外来车辆：{{configTime.tempDesc}}</span>
                        </p>
                     </col>
                </Row>
                <Row v-if="!item">
                 <div class="bangding" @click="go">暂无车辆绑定,去绑定</div>
                </Row>
               
            </div>
           <ul class="list">
               <li v-for='item in $_List_$'>
                <img :src="item.images | FormatImages">
                    <Row>
                        <Col span='8'>
                            <div class="circle">{{item.name}}</div>
                        </Col>
                       <Col span='8' style="text-align:center;font-size:18px;">
                            <p style="font-size:15px;">剩余车位</p>
                            <p style="padding-top:10px;font-size:30px;">{{item.placeNumber}}</p>
                            <p style="padding-top:10px;font-size:15px;" @click="$_yuyue_$(item.id)">点击可预约</p>
                        </Col>
                        <Col span='8' style="text-align:right;font-size:16px;">
                            <p style="line-height:108px;margin-right:12px;">{{iteme.config}}</p>
                            <Modal v-model="$_case1_$" title="确定要预约该停车场吗?"
                            :closable="false"
                            style="text-align:center;font-size:15px;"
                            >
                            <Form :model="case1Form" ref="case1Form">
                                <FormItem label="选择已有车辆" prop="cl">
                                    <Select v-model="case1Form.cl" style="width:110px;text-align:center;">
                                        <Option v-for="item in carList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                </FormItem>
                            </Form>
                            <div slot="footer" style="font-size:15px;">
                                 <Button type="primary" @click="$_submit_$" style="height:34px;float:left;width:50%;border:none!important;font-size:15px;">预约</Button>
                                 <Button @click="$_case1_$ = false" style="width:46%;background-color:#fff;border:none!important;font-size:15px;">取消</Button>
                            </div>
                        </Modal>
                           
                            <Modal v-model="$_case2_$"
                             :closable="false"
                             >
                                <div style="text-align:center;">
                                    <a href="javascript:void(0)" style="font-size:15px;color:rgb(51,51,51)">你还没有添加车辆,去绑定</a>
                                </div>
                                 <div slot="footer" style="font-size:15px;">
                                 <Button type="primary" @click="$_bangding_$()" style="height:34px;float:left;width:50%;border:none!important;border-radius:none!important;font-size:15px;">去绑定</Button>
                                 <Button @click="$_case2_$ = false" style="border-radius:none!important;width:46%;background-color:#fff;border:none!important;font-size:15px;">取消</Button>
                            </div>
                            </Modal>
                        </Col>
                    </Row>
               </li>
           </ul>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
import navigator from '../public/navigator';
import {mapGetters} from 'vuex';
export default {
    mixins: [controler],
     components: {
        navigator

    },
   filters:{
    FormatImages(image){
     var i = image
    // console.log(i)
     if(i.length>0){
         return i[0].imageUrl
     }else{
       return ''
     }
   
     } 
   },
    data() {
        return {
            $_cph_$:'京8888',
            $_case1_$:false,
            $_case2_$:false,
            $_search_$:'',
            item:{
                config:''
            },
             iteme:{
                config:''
            },
            data:{},
            car:'',
            configTime:'',
            $_userInfo_$:'',
            yyjlid:0,
            carList:[],
            case1Form: {  // 预约模态框
              cl: 0
            },
            $_List_$:[
                {
                   
                }
            ],
            
        }
    },
    computed:{
     ...mapGetters(['currentZone', 'currentZoneId']),
    },
     created() {
     this.currentZoneId
      let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
      this.$_userInfo_$ = JSON.parse(cookie);
      console.log(this.$_userInfo_$)
      this.$_global_$.serverPath
      this.$_list_$()
      this.$_tcc_$()
      this.$_config_$()
  },
    methods:{
        //个人拥有的车辆
     $_list_$(){
        this.$_sendQuery_$({
            method:"POST",
            url:this.$_global_$.serverPath+'/zone/car/employee/list',
            data:{},
            headers:{
              "Content-type":"application/json"
            }
          }).then((rsp)=>{
           // console.log(rsp)
            if(rsp.status === 200){
              if(rsp.data.code === 0){
                this.item = rsp.data.data.records[0]
               // console.log(this.item)
                this.data = rsp.data.data.records
               // this.zoneId = rsp.data.data.records[0].zoneId
                var arr =  rsp.data.data.records
                for(let i = 0; i < arr.length; i++){
                    var temp = {}
                    var carNum = arr[i].province+'.' + arr[i].plateNumber
                    this.car = carNum
                   // console.log(this.car)
                   temp = {value: arr[i].id, label: carNum}
                   this.carList.push(temp)
                 
                }
              }else{
                this.$Message.error('数据获取失败!');
              }
            }
          })
    },
    go(){
     this.$root.$_Route_$('user','mobile','fksytccqb',{id:1}) 
    },
    //停车场信息
     $_tcc_$(){
        this.$_sendQuery_$({
            method:"POST",
            url:this.$_global_$.serverPath+`/zone/zone/${this.currentZoneId}/parkinglot/search`,
            data:{
                status:1
            },
            headers:{
            "Content-type":"application/json"
            }
        }).then((rsp)=>{
          //  console.log(rsp)
            if(rsp.status === 200){
                if(rsp.data.code === 0){
                    // this.$_List_$=rsp.data.data.records
                     if(rsp.data.data.records.length!=0){
                      this.$_List_$=rsp.data.data.records
                     }else{
                         this.$Message.success('暂无停车场信息')
                     }
                }
            }
        })
    },
    $_config_$(){
      this.$_sendQuery_$({
          method:"GET",
            url:this.$_global_$.serverPath+`/zone/zone/${this.currentZoneId}/parkinglot/config`,
            data:{
            },
            headers:{
            "Content-type":"application/json"
            }
      }).then((rsp)=>{
         console.log(rsp)
          if(rsp.status === 200){
              if(rsp.data.code === 0){
                //   this.configTime = rsp.data.data
                //   this.iteme.config = rsp.data.data.externalDesc
                if(rsp.data.data == null){
                   this.$Message.success('暂无车辆配置信息')
                }else{
                       this.configTime = rsp.data.data
                  this.iteme.config = rsp.data.data.externalDesc
                }
              }
          }
      })
    },
        $_yuyue_$(id){
          this.case1Form.cl = ''
          this.yyjlid = id
          if(this.data){
              this.$_case1_$ = true
          }else{
              this.$_case2_$ = true
          }
         
        },
        //可预约车辆提交
        $_submit_$(){
          if(this.case1Form.cl != 0){
             this.$_sendQuery_$({
                method:"POST",
                url:this.$_global_$.serverPath+`/zone/zone/${this.currentZoneId}/parkinglot/`+this.yyjlid+`/reserve`,
                data:{
                    carId: this.case1Form.cl
                },
                headers:{
                "Content-type":"application/json"
                }
            }).then((rsp)=>{
                //console.log(rsp)
                if(rsp.status === 200){
                if(rsp.data.code === 0){
                    this.$Message.success('预约成功!');
                    this.$_tcc_$()
                   // this.$_case1_$ = false;
                    this.$root.$_Route_$('user','mobile','fksytccyyjl',{id:this.yyjlid})
                }else{
                    this.$Message.error('预约失败!');
                }
                }
            })
          }else{

          }
          
        },
      $_carManage_$(){
       this.$root.inparams.id
      },
        $_bangding_$(){
            this.$root.$_Route_$('user','mobile','fksyxzcl',{id:1}) 
        },
        $_back_$(){
            this.$root.$_Route_$('user','mobile','ygindex',{id:1})
        },
        $_qb_$(){
            this.$root.$_Route_$('user','mobile','fksytccqb',{id:1}) 
        },
        //预约记录
        $_yyjl_$(){
            this.$root.$_Route_$('user','mobile','fksytccyyjl',{id:1}) 
        },
        //预约记录
        $_jfjl_$(){
            this.$root.$_Route_$('user','mobile','fksytccjfjl',{id:1}) 
        },
        $_ok_$(){
            this.$Message.info('Clicked ok');
        },
        $_cancel_$(){
            this.$Message.info('Clicked cancel');
        }
    }
}
</script>