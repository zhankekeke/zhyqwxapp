<style scoped>
.header {
    height: 50px;
    width: 100%;
    line-height: 50px;
    left: 0;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
}
.header .back {
    width: 25px;
    position: absolute;
    top: 15px;
    left: 5px;
    font-size: 20px;
}
.wrap {
    padding: 50px 10px  0;
}
    .search {
        background: #e4e4e4;
        padding: 10px 10px;
        box-sizing: border-box;
    }
    .smallTitle{
        font-size: 13px;
        line-height: 40px;
    }
    .name{
        line-height: 25px;
    }
    .number{
        line-height: 30px;
        font-weight: bold;
    }
    .item{
        border-bottom: 1px solid #f7f7f7;
    }
</style>
<template>
   
    <div class="lm" ref="aa">  
        <!-- 首页 -->
        <div class='header'>
            <Icon @click="$_back_$" type="ios-arrow-back" class="back" />添加
        </div>
        <!-- 中间部分 -->
        <div class="wrap">
            <div class="box1">
                <div class="search">
                    <Row>
                        <Col span="20">
                            <Input v-model="$_search_$" placeholder="搜索" clearable style="width:98%"/>
                        </Col>
                        <Col span="4">
                            <Button type="primary" @click="$_Search_$">搜索</Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <p class="smallTitle">最近联系人</p>
            <div>
                <Row class="item" v-for="(item, index) in $_list_$" :key="index">
                    <Col span="2" style="line-height:50px;"><Checkbox :v-model="index"></Checkbox></Col>
                    <Col span="22">
                        <p class="name">{{item.name}}</p>
                        <p class="number">{{item.number}}</p>
                    </Col>
                </Row>
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
            $_search_$:'',
            $_list_$: [
                {
                    name: '王乐乐',
                    number: '12345681234'
                },
                {
                    name: '王乐乐',
                    number: '12345681234'
                },
                {
                    name: '王乐乐',
                    number: '12345681234'
                }
            ]
        }
    },
    methods: {
        $_back_$() {
            this.$root.$_Route_$('user','mobile','ygsy-tzfb-zf',{})
        },
        $_Search_$() {},
    }
}
</script>