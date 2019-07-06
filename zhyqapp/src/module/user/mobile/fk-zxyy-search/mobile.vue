<style>
    #ModuleContent {
        margin: 0 !important;
        padding: 0 !important;
    }

    .MainContent {
        top: 0 !important;
    }

    body {
        position: static;
    }
    .ivu-select-selection{
        border:none!important;
    }
    .ivu-select-placeholder:focus{
        outline:none!important;
    }
    .ivu-select:focus{
        outline:none!important;
    }
</style>
<style scoped>
    .container {
        font-size: 16px;
        color: #000;
        font-weight: 400;
        background-color:#fff!important;
    }
    .header .back {
        width: 25px;
        position: absolute;
        top: 15px;
        left: 6px;
    }
.wrap{
    background-color:#f6f6f6;
}
.bottom{
    background-color:#fff;
}
    .wrap .top1{
        height:44px;
        background-color:#00C1DE;
        padding:10px 16px;
        box-sizing:border-box;
    }
.wrap .top1 input{
    width:85%;
    display:block;
    height:28px;
    line-height:28px;
    border-radius:18px;
    display:inline-block;
    outline:none;
    border:none;
    padding-left:10px;
    padding-right:10px;
    box-sizing:border-box;
    font-size:12px;
}
.wrap .top1 span{
    display:inline-block;
    margin-left:8px;
    color:#fff;
    font-size:12px;
}
.bottom{
    margin-top:10px;
}
.bottom ul li{
    border-bottom:1px solid #f6f6f6;
    padding:17px 16px;
    box-sizing:border-box;
    font-size:14px;
    font-weight:400;
    font-family:'PingFangSC-Regular';
}
.bottom ul li h2{
    font-size:18px;
    font-weight:550;
    color:#333333;
    font-family:'PingFangSC-Medium';
}
.bottom .people{
    padding:17px 16px;
    text-align:center;
    display:block;
    position:relative;
    color:#656D72;
    font-size:16px;
    font-family:'PingFangSC-Regular';
}
.bottom .history{
    padding-left:64px;
}
.bottom .people img{
    margin-top:-2px;
    margin-right:5px;
}
.bottom ul li img{
    position:absolute;
    vertical-align: middle;
    height: 38px;
    width: 38px;
    border-radius: 50%; 
    margin-right:10px;  
}
.bottomer{
    background-color:#fff;
}
.bottomer .phone{
    padding-left:64px;
}
.bottomer ul li{
    border-bottom:1px solid #f6f6f6;
    padding:17px 16px;
    box-sizing:border-box;
    position:relative;
    font-size:14px;
    font-weight:400;
    font-family:'PingFangSC-Regular';
}
.bottomer ul li img{
    position:absolute;
    vertical-align: middle;
    height: 38px;
    width: 38px;
    border-radius: 50%; 
    margin-right:10px;  
}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="top1">
              <input type="text" placeholder="请搜索..." v-model="searchVal" v-on:input="inputFunc" > <span @click="cancel()">取消</span>
            </div>
              <div class="bottomer">
            <ul>
                <li v-for="(item,index) in Items" :key="index" :value="item.value" v-show="serch_result_issue" @click="select(item)">
                <img style="vertical-align:middle;" v-if="item.faceUrl" :src="item.faceUrl | imgsrc">
              <img v-else class="img"  src="/static/hysyy/faceimg.svg"/>
               <div class="phone">
                <span>{{item.name}}&nbsp;{{item.phoneNumber}}</span>
                 <span style="display:block;">{{item.companyName}}</span>
               </div>

                </li>
            </ul>
         </div>
            <div class="bottom">
            <ul v-show="serch_result">
                <li><h2>历史搜索</h2></li>
                <li v-for="(item,index) in NewItems" :key="index" :value="item.value" @click="select(item)">
                <img style="vertical-align:middle;" v-if="item.faceUrl" :src="item.faceUrl | imgsrc">
                 <img v-else class="img"  src="/static/hysyy/faceimg.svg"/>
                 <div class="history">
                 <span>{{item.employeeName}}&nbsp;{{item.phoneNumber}}</span>
                 <span style="display:block;">{{item.companyName}}</span>
                 </div>

                </li>
                <span class="people" @click="clear()">
                <img  style="vertical-align:middle;" src="/static/fksf/lj.svg"><span>清空常用联系人</span></span>
            </ul>
            
         </div>
        </div>
        <!-- 底部 -->
    </div>
</template>

<script>
    import {DatetimePicker} from 'mint-ui';
    import {Loadmore} from 'mint-ui';
    import controler from './controler.js';
    import {Search} from 'mint-ui';
    import 'mint-ui/lib/style.css';
    import search from '../public/search';
    import {Toast} from 'mint-ui';
    import {mapGetters} from 'vuex';
    import {Indicator} from 'mint-ui';
    export default {
        mixins: [controler],
        components: {
            search,
            [DatetimePicker.name]: DatetimePicker,
            [Loadmore.name]: Loadmore,
            [Search.name]: Search,
            [Indicator.name]:Indicator
        },
        data() {
            return {
             searchVal:'',
             serch_result_issue:false,
             serch_result:true,
             //serch_result:true,
               NewItems:[
               ],
               Items:[

               ]
              
              
            
          }
        },
         computed: {
            ...mapGetters(['currentZone', 'currentZoneId']),
        },
        created() {
          this.$_global_$.serverPath
          this.currentZoneId
           Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
           });
            this.$_history_$()
            //this.$_historySearch_$()

        },
      methods: {
          inputFunc:(()=>{
              var timeoutId = 0
              return function(){
                let searchVal = this.searchVal;
           // console.log(searchVal)
            if(searchVal){
               // console.log(this.searchVal)
                this.serch_result_issue = true;
                this.serch_result = false
                clearTimeout(timeoutId)
               // console.log(this.searchVal, /^\s*$/.test(this.searchVal))
                if(/^\s*$/.test(searchVal)) return ;
                timeoutId = setTimeout(()=>{
                    this.$_sendQuery_$({
                        method: "GET",
                        url: `${this.$_global_$.serverPath}/company/company/${this.currentZoneId}/employee/name/${searchVal}`,
                        data: {  
                        }
                    }).then(res => {
                    //console.log(res)
                        if (res.status === 200) {
                            if (res.data.code === 0) {
                            if(res.data.data.length != ''){
                                    this.Items = res.data.data
                                
                              }
                            }
                        }
                    })
                },300)
            }else{
               this.serch_result_issue = false
               this.serch_result = true
               this.Items = []
             }
            }
          })(),
            //历史记录搜索

            //历史列表展示
             $_history_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/visitor/${this.currentZoneId}/search/history`,
                    data: {  
                       
                    }
                }).then(res => {
                   // console.log(res)
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                             Indicator.close();
                           this.NewItems = res.data.data
                        }
                       
                    }
                })
            },
            //员工搜索
            cancel(){
              this.searchVal =''
              this.serch_result_issue = false
              this.serch_result = true
              this.Items = []
              this.$router.back()
             // this.$_history_$()
            },
            //添加历史记录
            select(item){
                //console.log(item)
                  this.$root.$_Route_$('user','mobile','fk-zxyy',{item:item})
                 this.$_sendQuery_$({
                    method: "POST",
                    url: `${this.$_global_$.serverPath}/company/visitor/${this.currentZoneId}/search/history`,
                    data: {
                        "employeeId":item.employeeId,
                        "employeeName":item.name,
                        "phoneNumber":item.phoneNumber,
                        "companyName":item.companyName,
                        "faceUrl":item.faceUrl
                        }
                }).then(res => {
                   // console.log(res)
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                        }
                       
                    }
                })
            },
            //清空历史记录
            clear(){
                //console.log(item)
                this.$_sendQuery_$({
                    method: "DELETE",
                    url: `${this.$_global_$.serverPath}/company/visitor/search/history`,
                    data: {
                        }
                }).then(res => {
                   //console.log(res)
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                           //this.NewItems = res.data.data
                           this.$_history_$()
                          //this.$root.$_Route_$('user','mobile','fk-zxyy',{id:item})
                        }
                       
                    }
                })
            }

        }
    }
</script>