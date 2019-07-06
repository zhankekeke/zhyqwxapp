<style scoped>
.header{height: 50px;left:0;line-height: 50px;text-align: center;font-size: 20px;font-weight: 500;position: fixed;top:0;width: 100%;background: #fff;z-index: 99;}
.wrap{padding:50px 0px 0;}
 .lm {
        background: #f6f6f6;
        min-height:100vh;
    }
.header .back{width: 25px;position: absolute;top:15px;left: 6px;}
.box1 {box-sizing: border-box;padding: 10px;}
.search {background: #e4e4e4;padding: 10px 10px;box-sizing: border-box;}
.box {margin-bottom: 10px;box-sizing: border-box;padding: 10px 20px;line-height: 47px;}
.list {overflow: hidden;background: #fff;border-top: 1px solid #e4e4e4;}
.list li {border-bottom: 1px solid #e4e4e4;box-sizing: border-box;padding: 15px 20px;}
.list img {width: 30px;height: 100%;background-color: #ccc;}
</style>
<template>
   
    <div class="lm" ref="aa">  
        <!-- 首页 -->
       <navigator title="通讯录"  />
        <!-- 中间部分 -->
        <div class="wrap">
            <!-- 搜索 -->
            <div class="box1">
                <div class="search">
                    <Row>
                        <Col span="20">
                            <Input v-model="$_search_$" placeholder="搜索" clearable style="width:98%"/>
                        </Col>
                        <Col span="4">
                            <Button type="primary">搜索</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <!-- 标题 -->
            <div class="box">
                <Row>
                    <Col span='24' style="font-size:14px;">北京飞天经纬科技股份有限公司>市场一中心>华东大区</Col>
                </Row>
            </div>
            <!-- 列表 -->
            <ul class="list">
                <li v-for='item in $_List1_$' @click="$_nextPage_$(item.id)">
                    <Row>
                        <Col span='18'><img src="">&nbsp;&nbsp;<span>{{item.name}}</span></Col>
                        <Col span='6' style='text-align: right;color:#ccc;'>
                            <Icon type="chevron-right"></Icon>
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
export default {
    mixins: [controler],
    components:{
           navigator,
        },
    data() {
        return {
            $_search_$: '',
            $_List1_$: [
                    {
                        id: 1,
                        name: '小李',
                        num: this.$root.inparams.id
                    }, {
                        id: 2,
                        name: '小李',
                        num: 5
                    }, {
                        id: 3,
                        name: '小李',
                        num: 16
                    }
            ],
        }
    },
    methods: {
         $_back_$(){
            this.$root.$_Route_$('user','mobile','ygsy-txl-bm',{})
        },
        $_nextPage_$(){
            this.$root.$_Route_$('user','mobile','ygsy-txl-gr',{})
        }
    }
}
</script>