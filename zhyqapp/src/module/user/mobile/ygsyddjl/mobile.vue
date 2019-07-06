<style scoped>
.header{z-index:99;height: 50px;width:100%;line-height: 50px;left:0;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;}
.footer{position: fixed;bottom: 0;left: 0;width: 100%;background: #fff;padding: 10px 0;}
.footer  .active{color:#7599ff;}
.footer ul{overflow: hidden;}
.footer ul li{float: left;width: 50%;text-align: center;}
.footer ul li img{width: 25px;height: 25px;}
.footer ul li p{height: auto;}
.header .back{width: 25px;position: absolute;top:15px;left: 5px;font-size:20px;}
.wrap{padding:50px 0px 75px 0;}
.search{background:#e4e4e4;padding:5px 10px;margin-bottom:10px;}
.clear:before,.clear:after{content: '';display: block;clear: both;}
.clear{zoom: 1;}
.list{padding:0 10px; box-sizing: border-box;}
.list .card{margin-bottom: 10px;}
.itemtop{line-height: 25px;}
.number{float: left;}
.time{float: right; text-align: right;}
.img{float: left; width: 50px;height: 50px; background: #7599ff;margin-right: 10px;}
.text{float: left;}
.text .name{font-size: 15px;line-height: 30px;}
.text .num{font-size: 12px;line-height: 20px;}
.status{line-height: 50px;float: right; color: #7599ff;text-align: right;}
</style>
<template>
    <div class="lm" ref="aa">
        <!-- 首页 -->
        <div class='header'><Icon type="ios-arrow-back" @click="$_back_$" class="back"/>兑换记录</div>
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索 -->
            <div class="search">
               <Row>
                    <Col span="20">
                        <Input v-model="$_searchName_$" placeholder="搜索" clearable style="width:98%"/>
                    </Col>
                    <Col span="4">
                        <Button type="primary" @click="$_Search_$" style="width:100%">搜索</Button>
                    </Col>
                </Row>
           </div>
           <!-- 列表 -->
           <div class="list">
                <Card class="card" dis-hover  v-for="(item, index) in list" :key="index">
                    <div @click="$_ddxq_$(index)" class="item">
                        <div class="itemtop clear">
                            <p class="number">订单编号：{{item.number}}</p>
                            <p class="time">兑换时间：{{item.time}}</p>
                        </div>
                        <div class="itembottom clear">
                            <div class="img"></div>
                            <div class="text">
                                <p class="name">{{item.name}}</p>
                                <p class="num">{{item.price}}*{{item.num}}</p>
                            </div>
                            <div class="status">已完成</div>
                        </div>
                    </div>
                </Card>
           </div>
           <!-- 底部 -->
            <div class='footer'>
                <ul class="">
                    <li>
                        <p><img class="" src="../../../../imgs/mobile/shouye.png" alt=""></p>
                        <p>商城首页</p>
                    </li>
                    <li @click="$_gmjl_$">
                        <p><img class="" src="../../../../imgs/mobile/fuwu.png" alt=""></p>
                        <p class="active">购买记录</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import controler from './controler.js';
export default {
    mixins: [controler],
    data() {
        return {
            $_searchName_$: '', // 搜索名称
            list: [
                {
                    number:1234567,
                    time: '2018-09-01 09:23',
                    name: '投影仪',
                    num: 2,
                    price: 260
                },{
                    number:1234567,
                    time: '2018-09-01 09:23',
                    name: '投影仪',
                    num: 2,
                    price: 260
                },{
                    number:1234567,
                    time: '2018-09-01 09:23',
                    name: '投影仪',
                    num: 2,
                    price: 260
                }
            ]
        }
    },
    methods: {
        // 返回
         $_back_$(){
            this.$root.$_Route_$('user','mobile','ygsyjfsc',{})
        },
        // 搜索
        $_Search_$() {},
        // 购买记录
        $_gmjl_$() {},
        // 订单详情
        $_ddxq_$(index) {
            this.$root.$_Route_$('user','mobile','ygsyddxq',{id: index})
        },
        $_ddjl_$(){
          this.$root.inparams.id
        },
    }
}
</script>