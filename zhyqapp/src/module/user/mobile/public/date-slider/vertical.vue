<style scoped lang="less">
@use-color:#FA541C; /*使用中*/
@free-color:#D9D9D9; /*空闲*/
@final-color:#FFD666; /*打扫中*/
@booked-color:#5DB5F6; /*已预约*/
@section-color:#00C1DE;
@slider-width:7px; /*滑块宽度*/
.container{
    color:#333;
    font-size:12px;
    background-color:#fff;
    .legend{
        padding:18px 13px 18px 16px;
        border-bottom:1px solid #E5E5E5;
        .title{
            flex:1;
        }
        .list{
            div[data-type]{
                padding:0 9px 0  12px;
                position:relative;
            }
            div[data-type]:before{
                content:'';
                width:8px;
                height:8px;
                left:0; top:6px;
                position:absolute;
                border-radius:50%;
            }
            div[data-type="free"]:before{
                background-color:@free-color
            }
            div[data-type="inuse"]:before{
                background-color:@use-color
            }
            div[data-type="final"]:before{
                background-color:@final-color
            }
            div[data-type="booked"]:before{
                background-color:@booked-color
            }
        }
    }
    .slider{
        padding:29px 16px 29px 40px;
        .ruler{
            width: 53px;
            >div{
                position: relative;
                span{
                    font-size:12px;
                    position:absolute;
                    bottom:-1px; left:0;
                    transform:translateY(50%);
                }
            }
            >div:after{
                content:'';
                width:6px;
                position:absolute;
                bottom:-3px; right:13px;
                border-bottom:2px solid #656D72;
            }
            >div.hide:after, >div.hide span{
                display:none;
            }
        }
        .ivu-slider{
            width:@slider-width;
            /deep/.ivu-slider-wrap{
                width:100%;
                .ivu-slider-bar{
                    background-color:@section-color;
                }
                .ivu-slider-button-wrap{
                    z-index:1;
                    left:100%;
                    transform:scale(1.5) translateX(-50%);
                    .ivu-tooltip{
                        transform:scale(.69);
                    }
                    .ivu-slider-button{
                        width:16px;
                        height:16px;
                        border-width:2px;
                        position:relative;
                        border-color:@section-color;
                        box-shadow:-1px 1px 8px 0 #666;
                    }
                    .ivu-slider-button:after{
                        content:"";
                        z-index:1;
                        position:absolute;
                        width:0; height:0;
                        left:-8px; top:1px;
                        pointer-events:none;
                        border-top:5px solid transparent;
                        border-bottom:5px solid transparent;
                        border-right:7px solid @section-color;
                    }
                    .ivu-slider-button:hover,.ivu-slider-button:focus,.ivu-slider-button-dragging{
                        transform: scale(1);
                    }
                }
            }
        }
        .use-view{
            flex:1;
            >div{
                width:100%;
                padding-left:10px;
                display:flex;
                position:absolute;
                align-items:center;
                .state-line{
                    height:100%;
                    left:0; top:0;
                    position:absolute;
                    width:@slider-width;
                    transform:translateX(-100%);
                    .state-line_final{
                        width:100%;
                        bottom:0; left:0;
                        position:absolute;
                        background-color:@final-color;
                    }
                }
                .state-line[data-state="use"]{
                    background-color:@use-color;
                }
                .state-line[data-state="booked"]{
                    background-color:@booked-color;
                }
                .company-info{
                    width:100%;
                    height:100%;
                    align-items: center;
                    border-top:1px solid #E5E5E5;
                    border-bottom:1px solid #E5E5E5;
                    .icon{
                        width:50px;
                        img{
                            width:30px;
                            height:30px;
                            margin:0 auto;
                            display:block;
                            border-radius:50%;
                        }
                    }
                    .flex-col{
                        font-size:12px;
                        .name{
                            font-size:14px;
                            font-weight:500;
                        }
                        .timezone{
                            line-height:1.4em;
                        }
                    }
                }
            }
            .value-show .company-info{
                padding-left:10px;
            }
        }
    }
}
</style>
<template>
    <div class="container">
        <Row class="legend" type="flex">
            <i-col class="title"><slot name="title"></slot></i-col>
            <i-col class="list">
                <Row type="flex">
                    <i-col v-for="(item, index) in legend" :key="index">
                        <div :data-type="item.type">{{item.name}}</div>
                    </i-col>
                </Row>
            </i-col>
        </Row>
        <Row class="slider" type="flex">
            <i-col class="ruler">
                <div v-for="item in rules"
                     :key="item.time"
                     :class="{hide:item.hidden}"
                     :style="{height: item.length}"><span v-show="item.showTime">{{item.time}}</span></div>
            </i-col>
            <i-col class="input">
                <slider range show-tip="never" :min="0" :max="maxValue" v-model="sliderValue" :step="step" :disable-values="disableValue" :min-value="minValue" :disable-end-value="extraValue"/>
            </i-col>
            <i-col class="use-view">
                <div v-for="(item, index) in use" :key="index" :style="viewStyle(item)">
                    <div class="state-line" :data-state="parseState(item.reserveDate, item.startTime, item.endTime)">
                        <div class="state-line_final" :style="{height:time2rem(item.endTime, item.finalTime)}"></div>
                    </div>
                    <Row class="company-info" type="flex">
                        <i-col class="icon">
                            <img src="/static/icons/company@3x.png" alt="">
                        </i-col>
                        <i-col class="flex-col">
                            <div>
                                <p class="name">{{item.companyName}}</p>
                                <p class="timezone">{{item.startTime}}-{{item.endTime}}</p>
                            </div>
                        </i-col>
                    </Row>
                </div>
                <div v-if="sliderValueLen>0" :style="{top:minute2rem(sliderValue[0]), height:minute2rem(sliderValueLen+extraValue)}" class="value-show">
                    <div class="state-line">
                        <div class="state-line_final" :style="{height:minute2rem(extraValue)}"></div>
                    </div>
                    <Row class="company-info" type="flex">
                        <i-col class="flex-col">
                            <div>
                                <p class="name" style="color:#333; font-size:14px;">
                                    <span>{{sliderValueLen}}分钟</span>
                                    <!--<span style="opacity: .7; font-size:.7em;">(打扫时间:{{extraValue}}分钟)</span>-->
                                </p>
                                <p class="timezone">{{minute2time(min, sliderValue[0])}}-{{minute2time(min, sliderValue[1])}}</p>
                            </div>
                        </i-col>
                    </Row>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>

import base from './base';
import slider from '../slider-vertical';
export default {
	extends:base,
    components:{slider},
    methods:{
		viewStyle(item){
			return {
				height:this.time2rem(item.startTime, item.finalTime),
                top:this.time2rem(this.min, item.startTime)
			}
        }
    }
}
</script>
