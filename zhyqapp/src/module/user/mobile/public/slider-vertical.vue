<style scoped lang="less">
.ivu-slider{
    width:4px;
    height:100%;
    padding:0 0 0;

    .ivu-slider-wrap{
        height:100%;
        width:4px;
        margin:0;

        .ivu-slider-bar{
            width:100%;
        }
        .ivu-slider-button-wrap{
            left:50%;
            margin-top:-6px;
            .ivu-slider-button{
            }
        }
    }
}
</style>
<template>
    <div :class="classes">
        <Input-number
                v-if="!range && showInput"
                :min="min"
                :size="inputSize"
                :max="max"
                :step="step"
                :value="exportValue[0]"
                :disabled="disabled"
                @on-change="handleInputChange"></Input-number>
        <div
                :class="[prefixCls + '-wrap']"
                ref="slider" @click.self="sliderClick"
        >
            <input type="hidden" :name="name" :value="exportValue">
            <template v-if="showStops">
                <div
                        :class="[prefixCls + '-stop']"
                        v-for="item in stops"
                        :style="{ 'top': item + '%' }"
                        @click.self="sliderClick"
                ></div>
            </template>
            <div
                    :class="[prefixCls + '-bar']"
                    :style="barStyle"
                    @click.self="sliderClick"></div>
            <div
                    :class="[prefixCls + '-button-wrap']"
                    :style="{top: minPosition + '%'}"
                    @touchstart="onPointerDown($event, 'min')"
                    @mousedown="onPointerDown($event, 'min')">
                <Tooltip
                        :controlled="pointerDown === 'min'"
                        placement="top"
                        :content="tipFormat(exportValue[0])"
                        :disabled="tipDisabled"
                        :always="showTip === 'always'"
                        ref="minTooltip"
                >
                    <div
                            :class="minButtonClasses"
                            tabindex="0"
                            @focus="handleFocus('min')"
                            @blur="handleBlur('min')"
                            @keydown.left="onKeyLeft($event, 'min')"
                            @keydown.down="onKeyLeft($event, 'min')"
                            @keydown.right="onKeyRight($event, 'min')"
                            @keydown.up="onKeyRight($event, 'min')"
                    ></div>
                </Tooltip>
            </div>
            <div v-if="range"
                 :class="[prefixCls + '-button-wrap']"
                 :style="{top: maxPosition + '%'}"
                 @touchstart="onPointerDown($event, 'max')"
                 @mousedown="onPointerDown($event, 'max')">
                <Tooltip
                        :controlled="pointerDown === 'max'"
                        placement="top"
                        :content="tipFormat(exportValue[1])"
                        :disabled="tipDisabled"
                        :always="showTip === 'always'"
                        ref="maxTooltip"
                >
                    <div
                            :class="maxButtonClasses"
                            tabindex="0"
                            @focus="handleFocus('max')"
                            @blur="handleBlur('max')"
                            @keydown.left="onKeyLeft($event, 'max')"
                            @keydown.down="onKeyLeft($event, 'max')"
                            @keydown.right="onKeyRight($event, 'max')"
                            @keydown.up="onKeyRight($event, 'max')"
                    ></div>
                </Tooltip>
            </div>
        </div>
    </div>
</template>
<script>
import slider from 'iview/src/components/slider'
import {getStyle, oneOf} from 'iview/src/utils/assist'
export default {
	props:{
		disableStartValue:{
			type:Number,
            default:()=>0
        },
		disableEndValue:{
			type:Number,
			default:()=>0
		},
		disableValues:{
			type:Array,
            default(){
				return []
            }
        },
        minValue:{
			type:Number,
            default(){
				return 0
            }
        }
    },
	extends:slider,
    computed:{
	    sliderWidth () {
		    return parseInt(getStyle(this.$refs.slider, 'height'), 10);
	    },
	    barStyle () {
		    const style = {
			    height: (this.currentValue[0] - this.min) / this.valueRange * 100 + '%'
		    };

		    if (this.range) {
			    style.top = (this.currentValue[0] - this.min) / this.valueRange * 100 + '%';
			    style.height = (this.currentValue[1] - this.currentValue[0]) / this.valueRange * 100 + '%';
		    }

		    return style;
	    },
	    firstPosition: function() {
		    return this.currentValue[0]
	    },
	    secondPosition: function() {
		    return this.currentValue[1]
	    }
    },
    methods:{
	    getPointerX (e) {
		    return e.type.indexOf('touch') !== -1 ? e.touches[0].clientY : e.clientY;
	    },
        changeButtonPosition (newPos, forceType) {
		    const type = forceType || this.pointerDown;
		    const index = type === 'min' ? 0 : 1;
		    if (type === 'min') newPos = this.checkLimits([newPos, this.max])[0];
		    else newPos = this.checkLimits([this.min, newPos])[1];
	        const valueArea = [...this.currentValue];
		    const modulus = this.handleDecimal(newPos,this.step);

		    if(!(this.disableValues instanceof Array)){
		    	this.disableValues = this.disableValues === void 0?[]:[this.disableValues]
            }
	        valueArea[index] = newPos - modulus;
	        if(valueArea[1] - valueArea[0]<this.minValue){
		        valueArea[1-index] = valueArea[1-index] + (index?-1:1) * (this.minValue - (valueArea[1] - valueArea[0]))
            }
	        let vMin = valueArea[0] - this.disableStartValue;
	        let vMax = valueArea[1] + this.disableEndValue;
	        if(valueArea[0]>=this.disableStartValue && valueArea[1] <=this.max - this.disableEndValue){
	        	if(!this.disableValues.some(disableArea=>{
	        		let dMin = disableArea[0] + this.disableStartValue;
	        		let dMax = disableArea[1] - this.disableEndValue;
			        return valueArea.some(value=>(dMin<value && dMax>value))
                        || disableArea.some(disable=>disable<vMax && disable>vMin)
		        })){
			        this.currentValue = [...valueArea];
			        if (!this.dragging) {
				        if (this.currentValue[index] !== this.oldValue[index]) {
					        this.emitChange();
					        this.oldValue[index] = this.currentValue[index];
				        }
			        }
                }else if(forceType){ //旧的值与当前点击的位置跨过一个或多个禁止点击区域时
			        for(let i=0; i<=this.disableValues.length; i++){
			        	let range = this.disableValues[i] || [this.max];
			        	let prevRange = this.disableValues[i-1] || [this.min, this.min];
			        	if(range[0] - prevRange[1]>=this.minValue && valueArea[index]<=range[0] && valueArea[index]>=prevRange[1]){
					        let newValue = [valueArea[index], valueArea[index]+this.minValue];
					        if(range[0] < newValue[1]){
						        newValue = [newValue[0] - (newValue[1] - range[0]), range[0]]
                            }
					        this.currentValue = [...newValue];
					        if (!this.dragging) {
						        if (this.currentValue[index] !== this.oldValue[index]) {
							        this.emitChange();
							        this.oldValue[index] = this.currentValue[index];
						        }
					        }
					        break;
                        }
			        }
		        }
            }
	    },
	    sliderClick (event) {
		    if (this.disabled) return;
		    const currentX = this.getPointerX(event);
		    const sliderOffsetTop = this.$refs.slider.getBoundingClientRect().top;
		    let newValue = ((currentX - sliderOffsetTop) / this.sliderWidth * this.valueRange) + this.min;
		    let newPos = newValue / this.valueRange * 100;

		    if (!this.range || newPos <= this.minPosition) this.changeButtonPosition(newValue, 'min');
		    else if (newPos >= this.maxPosition) this.changeButtonPosition(newValue, 'max');
		    else this.changeButtonPosition(newValue, ((newValue - this.firstPosition) <= (this.secondPosition - newValue)) ? 'min' : 'max');
	    },
    }
}
</script>
