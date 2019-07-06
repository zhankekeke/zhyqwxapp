<template><div></div></template>
<script>
import {
	toRem,
    time2minute,
    minute2time,
	timeArrayToString,
    minute_px_ratio } from "./utils";
const time = /^(?:[01]?\d|2[0-3]):([0-5]?\d)$/;


export default {
	/**
	 * props
	 * @props Array use 当前已使用的时间段（不可被选的时间段）
     * @props Array value 已选择时间段，可以使用v-model进行双向绑定 数组长度必须为2，否则视为无效参数
     * @props Number advanceTime 相对当前时间的提前量
     * @props Number minValue 用户选择最小时间段(:分钟)
     * @props Number extraValue 额外需要占用的时间，如果有值，则最小时间段则应为 minValue + extraValue (:分钟)
     * @props Boolean today 选择时间段是否未当前日期（如果是当前日期，用户将不可）
     * @props Number step 每次滑动的步长值(:分钟)
     * @props TimeString min 刻度的最小值 (格式 01:00)
     * @props TimeString max 刻度的最大值 (格式 01:00)
	 * */
	props:{
		use:Array,
		value:Array,
		advanceTime:{
			type:Number,
            default:()=>30
        },
		extraValue:{
			type:Number,
            default:()=>15
        },
		minValue:{
			type:Number,
			default:()=>30
		},
        today:{
			type:Boolean,
            default:()=>true
        },
		step:{ // 步长（分钟）
			type:Number,
			default:()=>5
		},
		min:{
			default:()=>'00:00',
			validator:value=>time.test(value)
		},
		max:{
			default:()=>'23:59',
			validator:value=>time.test(value)
		}
    },
    /**
     * 计算属性
     * @computed Array rules 刻度尺刻度集合（时间格式）
     * @computed Number maxValue 刻度尺的最大值（分钟格式）
     * @computed Array(2) sliderValue 已选中的时间区间(时间格式，第一个值为开始时间，第二个未结束时间)
     * @computed Number sliderValueLen 已选中时间区间的长度(分钟)
     * @computed Array(2) minVailSection 最小有效区间,一般作为默认值使用。
     * @computed Array(2) todayDisableValue 已度过时间禁用的区间，仅today参数为true时有效（分钟）
     * @computed disableVAlue 禁用的区间，该区间内的值将不能被选中。当today为true时，会包含todayDisableValue的值。
     * */
    computed:{
		rules(){
			let start,
                rules = [],
                min = this.min.split(':').map(i=>parseInt(i)),
                max = this.max.split(':').map(i=>parseInt(i));
			if(min[1] % 15 === 0 || min[1] === 0){
				rules.push({
					showTime:true,
                    time:timeArrayToString(min),
                    length:0
                })
				start = min.map(i=>i)
			}else{
				start = min[1] < 45 ? [min[0], 15 * (parseInt(min[1] / 15) + 1 )] : [min[0]+1, 0];
				rules.push({
					time:timeArrayToString(start),
					length:this.time2rem(min, start)
				})
			}
			while (true){
				let endtime = start[1]<45 ? [start[0], start[1]+15] : [start[0]+1, 0];
				if(endtime[0]<max[0] || (endtime[0]===max[0] && endtime[1]<=max[1])){
					rules.push({
                        showTime:endtime[1]/15%2===0,
						time:timeArrayToString(endtime),
						length:this.time2rem(start, endtime)
					});
					start = endtime;
				}else break;
			}
			if(start[0] === max[0] && start[1]<max[1]){
				rules.push({
					txt:'',
					hidden:true,
					length:this.time2rem(start, max)
				})
			}
			return rules;
	    },
        maxValue(){
			return time2minute(this.min, this.max)
        },
	    sliderValue:{
			get(){
				if((this.section instanceof Array) && this.section.length === 2){
					return [time2minute(this.min, this.section[0]), time2minute(this.min, this.section[1])]
				}else{
					this.$nextTick(()=>{
						this.update(this.minVailSection)
					});
					return this.minVailSection
				}
            },
            set(value){
				this.update(value)
            }
        },
        sliderValueLen(){
			return this.sliderValue[1] - this.sliderValue[0]
        },
	    minVailSection(){
		    let startMinute;
		    if(this.disableValue && this.disableValue.length){
			    for(let i=0; i<=this.disableValue.length; i++){
				    let item = this.disableValue[i] || [this.maxValue];
				    let prevEndValue = (this.disableValue[i-1]||[this.minValue, this.minValue])[1];
				    if(prevEndValue % this.step > 0) prevEndValue  += this.step - prevEndValue % this.step
				    if(item[0] - prevEndValue>=this.minValue+this.extraValue){ //计算时，需要加上打扫时间才是预定后占用的时间
					    startMinute = prevEndValue;
					    break;
				    }
			    }
		    }else{
			    startMinute = 0;
		    }
		    return isNaN(startMinute)?[0,0]:[startMinute, startMinute+this.minValue];
	    },
        todayDisableValue(){
			if(this.today){
				let date = new Date(new Date().getTime() + this.advanceTime * 60 * 1000);
				let nowTime = `${date.getHours()}:${date.getMinutes()}`;
				if(nowTime>this.min){
					let nowValue = time2minute(this.min, nowTime);
					return [0, nowValue%5?nowValue+5-(nowValue%5):nowValue]
				}
            }
			return [0,0];
        },
	    disableValue(){
		    let tmp = this.use.map(item=>{
				return [time2minute(this.min, item.startTime), time2minute(this.min, item.finalTime)]
			}).sort((item1, item2)=>{
				return item1[0] > item2[0]
            });
		    if(this.todayDisableValue[1]>0){
	            tmp = tmp.filter(item=>{
		            return item[0]>this.todayDisableValue[1] || item[1]>this.todayDisableValue[1]
                });
	            tmp.unshift([0, this.todayDisableValue[1]])
            }
		    return tmp;
        }
    },
    data(){
		return {
			legend:[{
				type:'free',
                name:'可预约',
            }, {
				type:'inuse',
				name:'使用中',
			}, {
				type:'booked',
				name:'已预约',
			}, {
				type:'final',
				name:'打扫',
			}],
			section:this.value
        }
    },
    watch:{
		value(nv, ov){
			this.section = nv
        },
        use(){
	        this.$nextTick(()=>{
		        this.sliderValue = this.minVailSection
            })
        }
    },
    methods:{
	    time2minute,
		minute2time,
        minute2rem: m=>toRem(m * minute_px_ratio),
        time2rem: (min, max)=>toRem(time2minute(min, max) * minute_px_ratio),
        parseState(date, start, end){
	    	let dateNow = new Date();
	    	let timeString = timeArrayToString([dateNow.getHours(), dateNow.getMinutes()]);
	    	let dateString = timeArrayToString([dateNow.getFullYear(), dateNow.getMonth()+1, dateNow.getDay()], '-');
	        if(date === dateString){
		        if(timeString> start && timeString< end){
	    			return 'use'
                }
            }
	    	return 'booked'
        },
	    update(value){
		    this.$emit('input', this.section = [minute2time(this.min, value[0]), minute2time(this.min, value[1])])
	    },
    }
}
</script>
