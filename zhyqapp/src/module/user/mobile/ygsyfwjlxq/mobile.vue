<style>
#ModuleContent{margin: 0!important;padding: 0!important;}
.MainContent{top:0!important;}
body{background: #fff;position: static;color:#666;font-size:14px;line-height:26px;}
</style>
<style scoped>
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.wrap{padding:50px 0px 0px 0;}
.footer  .active{color:#7599ff;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width:33.3%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}

.evaluation p{line-height:32px;}
</style>
<template>
   
    <div class="container" ref="aa">  
        <!-- 首页 -->
        <div class='header'><Icon @click="$_fwsl_$" type="ios-arrow-back" class="back"/>服务记录详情</div>
        <!-- 中间部分 -->
        <div class="wrap">
           <div style="margin:15px 10px;padding:10px;border:1px solid #ccc">
                <p>事项概况&nbsp;&nbsp;&nbsp;单号:&nbsp;&nbsp;&nbsp;{{$_dh_$}}<span style="float:right">状态:&nbsp;&nbsp;&nbsp;{{$_zt_$}}</span></p>
                <p>事项分类:&nbsp;&nbsp;{{$_sxfl_$}}</p>
                <p>事项名称:&nbsp;&nbsp;{{$_sxmc_$}}</p> 
                <p>事项描述:&nbsp;&nbsp;{{$_sxms_$}}</p>
                <Row>
                    <Col span="12"><p>用户名称:&nbsp;&nbsp;{{$_yhmc_$}}</p></Col>
                    <Col span="12"><p>单位:&nbsp;&nbsp;{{$_dw_$}}</p></Col>
                </Row> 
                <p>提交时间:&nbsp;&nbsp;{{$_tjsj_$}}</p>
           </div>
           <div>
                <div style="margin:10px;padding:20px 10px;background:#f2f2f2;">
                    <Row>
                        <Col align="right" span="20">
                            <p>(系统通知)管家小李:{{$_clsj_$}}</p>
                            <p>{{$_ddclzt_$}}</p>
                        </Col>
                        <Col span="4" align="right">
                            <img src="https://dxlfb468n8ekd.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/事项详情_处理/u373.png?token=99dbac4a7dd4a4aeff4294eda8e614fd" alt="">
                        </Col>
                    </Row>   
                </div>
           </div>
           <div>
                <div style="margin:10px;padding:20px 10px;background:#fafafa;">
                    <Row>
                        <Col span="4" align="left">
                            <img src="https://dxlfb468n8ekd.cloudfront.net/gsc/9LBRTN/1c/81/b2/1c81b276a4a0480abda6563f40d32d59/images/事项详情_处理/u373.png?token=99dbac4a7dd4a4aeff4294eda8e614fd" alt="">
                        </Col>
                        <Col align="left" span="20">
                            <p>{{$_name_$}}:{{$_clsj_$}}</p>
                            <p>处理方案:&nbsp;&nbsp;{{$_clfa_$}}</p>
                        </Col>
                    </Row>   
                </div>
           </div>   
           <div>
               <div style="margin:10px;padding:20px 10px;border:1px solid #ccc">
                   <p style="margin-bottom:10px;">问题处理:</p>
                   <Input style="margin-bottom:10px;" v-model="$_cont_$" type="textarea" :rows="6" />
                   <div>
                       <span style="float:left;">附件:&nbsp;&nbsp;</span>
                       <Upload
                            ref="upload"
                            :show-upload-list="true"
                            :default-file-list="$_defaultList_$"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            multiple
                            type="drag"
                            action=""
                            style="display: inline-block;width:58px;">
                            <div style="width: 58px;height:58px;line-height: 58px;">
                                <Icon type="ios-camera" size="20"></Icon>
                            </div>
                        </Upload>
                   </div>
                   <div style="text-align:center;padding:10px 0;">
                    <Button type="primary">提交</Button>
                   </div>
               </div>
           </div>
           <div style="margin:10px;padding:10px 10px;">
               问题是否解决:&nbsp;&nbsp;
               <RadioGroup v-model="$_solve_$">
                    <Radio label="apple">
                        <Icon type="logo-apple"></Icon>
                        <span>是</span>
                    </Radio>
                    <Radio label="android">
                        <Icon type="logo-android"></Icon>
                        <span>否</span>
                    </Radio>
                </RadioGroup>
           </div>
           <!-- 服务评价 -->
           <div class="evaluation" style="margin:10px;padding:15px 10px;border:1px solid #ccc;">
               <h3>服务评价</h3>
               <p>服务及时&nbsp;&nbsp;&nbsp;&nbsp;<Rate v-model="$_value1_$"/></p>
               <p>流畅高效&nbsp;&nbsp;&nbsp;&nbsp;<Rate v-model="$_value2_$"/></p>
               <p>专业可靠&nbsp;&nbsp;&nbsp;&nbsp;<Rate v-model="$_value3_$"/></p>
               <p>积极周到&nbsp;&nbsp;&nbsp;&nbsp;<Rate v-model="$_value4_$"/></p>
           </div>
           <div style="text-align:center;padding:20px 10px;">
                <Button type="primary">提交评价</Button>
            </div>
        </div>
        <!-- 底部 -->
    </div>
</template>

<script>
import controler from './controler.js';
export default {
    mixins: [controler],
    data() {
        return {
            $_value1_$:1,
            $_value2_$:2,
            $_value3_$:3,
            $_value4_$:4,
           $_dh_$:'8888',
           $_zt_$:'处理中',
           $_sxfl_$:'',
           $_sxmc_$:'',
           $_sxms_$:'',
           $_yhmc_$:'',
           $_dw_$:'',
           $_tjsj_$:'',
           $_name_$:'wanglele',
           $_clfa_$:'已安排师傅修缮',
           $_clsj_$:'2018-02-11 11:09:23',
           $_ddclzt_$:'您的订单已经开始处理',
           $_cont_$:'',
           $_solve_$:'',
           $_defaultList_$:[

           ]
        }
    },
    methods:{
        //处理
        $_fwjlxq_$(){
            this.$root.inparams.id
        },
        //服务受理
        $_fwsl_$(){
            this.$root.$_Route_$('user','mobile','ygsyfwsl',{id:1})
        }
    },
    mounted(){
         
    }
}
</script>