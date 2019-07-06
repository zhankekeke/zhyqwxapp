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
</style>
<style scoped>
.container {
    font-size: 16px;
    color: #000;
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
}

.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 10px 0;
}

.wrap {
    padding: 50px 0px 75px 0;
}

.footer .active {
    color: #7599ff;
}

.wrap img {
    width: 100%;
}

.right {
    float: right;
}

.box {
    background: #fff;
    margin: 10px 0;
    box-sizing: border-box;
    padding: 15px;
}

.bangong {
    overflow: hidden;
    margin-top: 10px;
}

.bangong li img {
    width: 35px;
    height: 35px;
}

.bangong li {
    float: left;
    width: 33.33%;
    text-align: center;
    color: #717171;
    margin: 10px 0;
    line-height: 30px;
}

.bangong li span {
    display: inline-block;
    padding: 10px 10px 4px 10px;
    background: #fff;
    box-shadow: 0 0 10px #c5baba;
    border-radius: 5px;
}

.footer ul {
    overflow: hidden;
}

.footer ul li {
    float: left;
    width: 50%;
    text-align: center;
}

.footer ul li img {
    width: 25px;
    height: 25px;
}

.footer ul li p {
    height: auto;
}

.header .tishi {
    width: 25px;
    position: absolute;
    top: 10px;
    right: 20px;
}

.bianji {
    border: 1px solid #169BD5;
    padding: 0 5px;
    font-size: 14px;
    color: #169BD5;
}

.demo-carousel {}

.mycarousel {
    width: 100%;
}
</style>
<template>
    <div class="container" ref="aa">
        <!-- 首页 -->
        <div class='header'>首页<img class="tishi" src="@/imgs/mobile/tishi.png" alt=""></div>
        <!-- 中间部分 -->
        <div class="wrap">
            <div>
                <img style='vertical-align: middle;' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542780119548&di=ec391bd48e1341ddf938e2c7af24d656&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d1d257747cce0000012e7e28e6ef.jpg%402o.jpg" alt="">
            </div>
            <div class="box">
                <Row style="font-size:14px;">
                    <Col span='4'>通知：</Col>
                    <Col span='20'>
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide"><span>不忘初心再出发 牢记使命谋发展</span><span class='right'>11-20</span></div>
                            <div class="swiper-slide"><span>不忘初心再出发 牢记使命谋发展</span><span class='right'>11-20</span></div>
                            <div class="swiper-slide"><span>不忘初心再出发 牢记使命谋发展</span><span class='right'>11-20</span></div>
                        </div>

                    </div>
                    </Col>
                </Row>
            </div>
            <div class="box">
                <p>
                    <span>常用</span>
                </p>
                <ul class="bangong">
                    <li @click="$_fkyy_$">
                        <p>
                            <span><img class="phone" src="../../../../imgs/mobile/phone.png" alt=""></span>
                        </p>
                        <p>访客预约</p>
                    </li>
                    <li @click="$_carManage_$">
                        <p>
                            <span><img class="" src="../../../../imgs/mobile/tongzhi.png" alt=""></span>
                        </p>
                        <p>车辆管理</p>
                    </li>

                </ul>
            </div>
        </div>
        <!-- 底部 -->
        <div class='footer'>
            <ul class="">
                <li>
                    <p><img class="" src="../../../../imgs/mobile/shouye.png" alt=""></p>
                    <p class="active">首页</p>
                </li>

                <li>
                    <p><img class="" src="../../../../imgs/mobile/wode.png" alt=""></p>
                    <p>我的</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
//import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import controler from './controler.js';
import {mapGetters} from 'vuex'
import {ACCESS_VISITOR, ACCESS_EMPLOYEE, ACCESS_SERVICE} from '@/store/module/menus/menus'
export default {
    mixins: [controler],
    data() {
        return {

            value2: 0,
            $_swiperitem_$: [
                {
                    word: 'http://cdn.qcacg.com//img/Illustration/11_02.jpg'
                },
                {
                    word: 'http://cdn.qcacg.com//img/Illustration/11_03.jpg'
                },
                {
                    word: 'http://cdn.qcacg.com//img/Illustration/11_02.jpg'
                }
            ],
        }
    },
    components:{
        ...mapGetters(['role'])
    },
    methods: {
         $_back_$(){
             //this.role === ACCESS_SERVICE
           // this.$store.getters.role === ACCESS_SERVICE
           this.$root.inparams.id
        },
        $_toFk_$() {
            this.$root.inparams.id
        },
        $_fkyy_$() {
            this.$root.$_Route_$('user', 'mobile', 'fk-zxyy', { id: 1 })
        },
        $_carManage_$(){
             this.$root.$_Route_$('user', 'mobile', 'fkclgl', { id: 1 })
        }


    },
    mounted() {
        var that = this;
        that.$nextTick(function() {
            var mySwiper = new Swiper(".swiper-container", {
                loop: true,//形成环路（即：可以从最后一张图跳转到第一张图 ,
                autoplay: {
                    disableOnInteraction: false,
                },/*每隔3秒自动播放*/
            });
        })
       

    }
}
</script>