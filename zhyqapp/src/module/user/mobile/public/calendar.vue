<script>
import Vue from 'vue'
import dayjs from 'dayjs';
import baseInlineCalendar from 'vue-mobile-calendar/lib/inlineCalendar'
const inlineCalendar  = {
	extends: baseInlineCalendar,
    methods:{
	    getDate(thisDate) {
		    let date = [];
		    let disableBefore = this.$parent.disableBefore
		    const today = dayjs(typeof disableBefore === 'boolean' ? new Date(): disableBefore).startOf('day');
		    const prevDate = thisDate.subtract(1, 'month');
		    const nextDate = thisDate.add(1, 'month');
		    const firstDayOfWeek = thisDate.day() || 7;
		    const dayCountOfThisMonth = thisDate.daysInMonth();
		    const dayCountOfPrevMonth = prevDate.daysInMonth();
		    const prevIndexOfThisMonth = firstDayOfWeek - 1;
		    const NextIndexOfThisMonth = firstDayOfWeek + dayCountOfThisMonth - 2;
		    const disabledDate = this.disabledDate.map((item) => dayjs(item).startOf('day'));
		    for (let i = 0; i < 7 * 6; i++) {
			    // 上月
			    if (i < prevIndexOfThisMonth) {
				    const value = dayCountOfPrevMonth - (firstDayOfWeek - i - 2);
				    const dateTime = prevDate.date(value);
				    date[i] = {
					    value,
					    dateTime,
					    isGrey: true,
					    isToday: dateTime.isSame(dayjs().startOf('day')),
					    isSelect: this.isSelect(dateTime),
					    isDisable: this.mode !== 'during' && (disableBefore && dateTime.isBefore(today) && !dateTime.isSame(today) || disabledDate.some((item) => item.isSame(dateTime))),
					    isDuring: this.isBetting(dateTime),
				    };
			    }
			    // 当月
			    if (
					    i >= prevIndexOfThisMonth &&
					    i <= NextIndexOfThisMonth
			    ) {
				    const value = i - firstDayOfWeek + 2;
				    const dateTime = thisDate.date(value);

				    date[i] = {
					    value,
					    dateTime,
					    isGrey: false,
					    isToday: dateTime.isSame(dayjs().startOf('day')),
					    isSelect: this.isSelect(dateTime),
					    isDisable: this.mode !== 'during' && (disableBefore && dateTime.isBefore(today) && !dateTime.isSame(today)  || disabledDate.some((item) => item.isSame(dateTime))),
					    isDuring: this.isBetting(dateTime),
				    };
			    }
			    // 下月
			    if (i > NextIndexOfThisMonth) {
				    const value = i - firstDayOfWeek - dayCountOfThisMonth + 2;
				    const dateTime = nextDate.date(value);

				    date[i] = {
					    value,
					    dateTime,
					    isGrey: true,
					    isToday: dateTime.isSame(dayjs().startOf('day')),
					    isSelect: this.isSelect(dateTime),
					    isDisable: this.mode !== 'during' && (disableBefore && dateTime.isBefore(today) && !dateTime.isSame(today) || disabledDate.some((item) => item.isSame(dateTime))),
					    isDuring: this.isBetting(dateTime),
				    };
			    }
		    }
		    const fullDate = [];
		    for (let i = 0; i < 6; i++) {
			    fullDate.push(date.slice(i * 7, (i + 1) * 7));
		    }
		    return {
			    fullDate,
		    };
	    }
    }
}
export default {
	props:{
		disableBefore:{
			type:[Boolean, String],
			validator(value){
				return (typeof value === 'boolean') || /^\d{4}-[01]?\d-[0-3]?\d$/.test(value)
			},
			default(){
				return false
			}
		}
	},
	components:{inlineCalendar},
	extends:Vue.component('calendar'),
}
</script>
