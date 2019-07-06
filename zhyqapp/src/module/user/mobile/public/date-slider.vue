<style lang="less" scoped>
@FreeColor:#FFF;
@UseColor:#FED1D3;
@CleanColor:#E2E2E2;
@BookedColor:#B6D4FB;
.date-slider-main{
    height:50px;
    position:relative;
    margin:1px 35px 18px 10px;
    /deep/ .ivu-slider{
        z-index:2;
        width:100%;
        bottom:-23px;
        position:relative;
        .ivu-slider-wrap{
            margin:0;
            height:27px;
            border-radius:0;
            background-color:transparent;
            border-bottom:1px solid #BFBFBF;
            .ivu-slider-button{
                border-width:1px;
                border-color:#f1a829;
                width:10px; height:10px;
            }
            .ivu-slider-button:hover,.ivu-slider-button:focus,.ivu-slider-button-dragging{
                transform:scale(1);
            }
        }
        .ivu-slider-bar{
            bottom:0;
            height:27px;
            border-radius:0;
            position:relative;
            background-color:#fc0;
        }
        .ivu-slider-bar:after,.ivu-slider-bar:before{
            content:"";
            position:absolute;
            border-left:1px solid #f1a829;
            height:14px; bottom:0;
        }
        .ivu-slider-bar:after{
            right:0;
        }
        .ivu-slider-button-wrap{
            top:7px;
        }
    }
    .used-mask{
        z-index:1;
        bottom:0; left:0;
        position:absolute;
        flex-wrap: nowrap;
        pointer-events:none;
        width:100%; height:27px;
        .ivu-col{
            flex:1;
            height:100%;
            span{
                display:none;
            }
        }
        .ivu-col:last-child{
            max-width:1px;
        }
        .ivu-col:after{
            bottom:0;
            content:"";
            position:absolute;
        }
        .has-scale span{
            bottom:30px;
            display:block;
            padding-left:3px;
            position:absolute;
        }
        .has-scale:after{
            height:45px;
            border-left:1px solid #bfbfbf;
        }
        .has-half:after{
            height:19px;
            border-left:1px solid #bfbfbf;
        }
        .use{
            background-color:@UseColor
        }
        .clean{
            background-color:@CleanColor
        }
        .booked{
            background-color:@BookedColor
        }
    }
    .used-mask.copy{
        z-index:3;
        height:8px;
        bottom:19px;
        overflow:hidden;
        .has-scale span{
            display:none;
        }
        .free.has-scale:after,.has-half:after{
            display:none;
        }
    }
}
.date-slider-main.scroll{
    .ivu-slider{
        margin:0;
        bottom:0;
        position:absolute;
    }
    .used-mask .ivu-col{
        min-width:5px;
    }
}
.date-slider-show{
    .minute-minus{
        text-align:right;
    }
    .minute-text{
        text-align:center;
        .time-len{
            color:#333;
            font-size:15px;
        }
        .section{
            color:#666;
            font-size:12px;
        }
    }
    .ivu-btn{
        padding:0;
        color:#fff;
        width:23px;
        height:23px;
        margin:8px 0;
        border-radius:50%;
        background-color:#fc0;
    }
}
.date-slider-legend{
    text-align:center;
    padding:20px 30px 0;
    [data-status]:before{
        content:"";
        margin:0 5px;
        display:inline-block;
        box-sizing:border-box;
        vertical-align:middle;
        width:11px; height:11px;
    }
    [data-status]:after{
        color:#666;
        font-size:12px;
    }
    [data-status="free"]:before{
        border:1px solid #D2D2D2;
        background-color:@FreeColor;
    }
    [data-status="free"]:after{
        content:"可预约"
    }
    [data-status="use"]:before{
        background-color:@UseColor;
    }
    [data-status="use"]:after{
        content:"使用中"
    }
    [data-status="booked"]:before{
        background-color:@BookedColor;
    }
    [data-status="booked"]:after{
        content:"已预约"
    }
    [data-status="clean"]:before{
        background-color:@CleanColor;
    }
    [data-status="clean"]:after{
        content:"打扫中"
    }
}
</style>
<template>
    <div class="date-slider">
        <swiper v-if="scroll" :options="scrollOptions" style="">
            <swiper-slide class="date-slider-main scroll" :style="{minWidth:minWidth}">
                <Slider :value="section" :min="0" :step="1" :max="Min2Max.length-1" range @input="update" show-tip="never" @touchstart.native.stop @pointerdown.native.stop></Slider>
                <Row class="used-mask" type="flex" v-for="className in ['', 'copy']" :class="className" :key="className">
                    <i-col v-for="(time, index) in Min2Max" :class="maskClass(time, index)" :key="index">
                        <span>{{time}}</span>
                    </i-col>
                </Row>
            </swiper-slide>
        </swiper>
        <div v-else class="date-slider-main">
            <Slider :value="section" :min="0" :step="1" :max="Min2Max.length-1" range @input="update" show-tip="never"></Slider>
            <Row class="used-mask" type="flex" v-for="className in ['', 'copy']" :class="className" :key="className">
                <i-col v-for="(time, index) in Min2Max" :class="maskClass(time, index)" :key="index">
                    <span>{{time}}</span>
                </i-col>
            </Row>
        </div>
        <Row class="date-slider-show">
            <i-col class="minute-minus" span="8">
                <Button icon="minus-round" type="text" @click="stepMinus()"/>
            </i-col>
            <i-col span="8" class="minute-text">
                <p class="time-len">{{minute}}分钟</p>
                <p class="section">{{startTime}}&nbsp;-&nbsp;{{endTime}}</p>
            </i-col>
            <i-col span="8">
                <Button class="minute-plus" icon="plus-round" type="text" @click="stepPlus()"/>
            </i-col>
        </Row>
        <Row class="date-slider-legend">
            <i-col span="6" data-status="free"></i-col>
            <i-col span="6" data-status="use"></i-col>
            <i-col span="6" data-status="booked"></i-col>
            <i-col span="6" data-status="clean"></i-col>
        </Row>
    </div>
</template>
<script>
let time = /^\d{2}:\d{2}$/;
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{swiper, swiperSlide},
    props:{
        use:String,
        value:Array,
        scroll:{
            type:Boolean,
            default(){
                return false
            }
        },
        step:{
            type:Number,
            default(){
                return 5;
            }
        },
        min:{
            validator:(value)=>{
                return time.test(value) && value >= '00:00' && value.split(':')[0] < 60
            },
            default(){
                return '00:00'
            }
        },
        max:{
            validator:(value)=>{
                return time.test(value) && value <= '24:00' && value.split(':')[0] < 60
            },
            default(){
                return '24:00'
            }
        }
    },
    data(){
        return {
            SectionValue:null,
            scrollOptions:{
                direction: 'horizontal',
                slidesPerView: 'auto',
                mousewheel: true,
                freeMode: true
            }
        }
    },
    computed:{
    	minWidth(){
    		return this.Min2Max.length * this.step - this.step + 'px'
        },
        Min2Max(){
            let list = [];
            let min = this.min.split(':').map(v=>Number(v));
            let max = this.max.split(':').map(v=>Number(v));
            do {
                list.push(min.map(v=> v<10? ('0'+v): v).join(':'));
                if(min[1]+this.step>=60){
                    min[0]++;
                    min[1] = min[1]+this.step - 60
                }else{
                    min[1]+=this.step;
                }
            }while (min[0]<max[0] || (max[0]===min[0] && min[1]<=max[1]));
            return list;
        },
        useArray(){
            if(this.use){
                let use = this.use.split('');
                if(use.length > this.Min2Max.length){
                    use = use.slice(0, this.Min2Max.length-1)
                }else if(use.length < this.Min2Max.length){
                    use = use.concat(new Array(this.Min2Max.length - use.length).fill('0'))
                }
                return use;
            }else{
                return new Array(this.Min2Max.length).fill('0')
            }
        },
        useTimeSection(){
            let prevState = this.useArray[0];
            let useTimeSection = [{
                start:this.Min2Max[0],
                end: void 0,
                state:prevState
            }];
            for(let i = 0; i<this.useArray.length; i++){
                if(prevState === this.useArray[i]){
                    useTimeSection[useTimeSection.length-1].end = this.Min2Max[i]
                }else{
                    useTimeSection.push({
                        start:this.Min2Max[i],
                        end:this.Min2Max[i+1],
                        state:this.useArray[i]
                    })
                }
                prevState = this.useArray[i]
            }
            return useTimeSection;
        },
        minute(){
            return (this.section[1] - this.section[0]) * this.step
        },
        startTime(){
            return this.Min2Max[this.section[0]] || '未选择'
        },
        endTime(){
            return this.Min2Max[this.section[1]] || '未选择'
        },
        section(){
            let section = [0, this.Min2Max.length-1];
            if(this.SectionValue){
                return this.SectionValue
            }else{
                if(this.value && this.value.length === 2){
                    return this.SectionValue = this.value.map((val, index)=>{
                        if(this.Min2Max.indexOf(val) === -1) return index?this.Min2Max.length-1:0
                        else return this.Min2Max.indexOf(val)
                    });
                }
            }
            return section
        }
    },
    methods:{
        stepPlus(){
            if(this.section[1]<this.Min2Max.length-1){
                this.$set(this.section, 1, this.section[1]+1)
            }
        },
        stepMinus() {
            if(this.section[1]>0){
                this.$set(this.section, 1, this.section[1]-1)
            }
        },
        update:(()=>{
            let timer;
            return function(value){
                clearTimeout(timer);
                this.SectionValue = value;
                let n_start = this.Min2Max[value[0]];
                let n_end = this.Min2Max[value[1]];
                for(let i=0;i<this.useTimeSection.length; i++){
                    let UseSection = this.useTimeSection[i];
                    if(UseSection.state>0){
                        let t_start = UseSection.start;
                        let t_end = UseSection.end;
                        /**
                         * 时间段是否被占用判断
                         * n_start>t_start && n_start<t_end 已选择的起点在使用区间中
                         * n_end>t_start && n_end<t_end 已选择的终点在使用区间中
                         * t_start>n_start && t_start<n_end 使用区间的起点在已选择的区间
                         * t_end>n_start && t_end<n_end 使用区间的终点在已选择的区间
                         * */
                        if((n_start>t_start && n_start<t_end) || (n_end>t_start && n_end<t_end) || (t_start>n_start && t_start<n_end) || (t_end>n_start && t_end<n_end)){
                            timer = setTimeout(()=>{
                                this.$emit('error', {
                                    section:[this.startTime, this.endTime],
                                    conflict:UseSection
                                })
                            }, 300);
                            return;
                        }
                    }
                }
	            this.$emit('input', [this.startTime, this.endTime])
            }
        })(),
        maskClass(item, index){
            let defined = ['free', 'use', 'clean', 'booked'];
            let className = [defined[this.useArray[index]]];
            if(/:00$/.test(item)){
                className.push('has-scale')
            }else if(/:30$/.test(item)){
                className.push('has-half');
            }
            return className
        }
    },
    watch:{
    	use(){
    		this.update(this.section)
        }
    }
}
</script>
