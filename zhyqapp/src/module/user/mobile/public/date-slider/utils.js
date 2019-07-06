import px_rem_ratio from '@/config/rem'
export const minute_px_ratio = 1.067;
export const toRem = px=>`${px/px_rem_ratio}rem`;
export const timeArrayToString = (time, fx=":")=>time.map(i=>i<10?'0'+i:i).join(fx);
export const time2minute = (basetime, time)=>{
	time = (time instanceof Array)?time:time.split(':');
	basetime = (basetime instanceof Array)?basetime:basetime.split(':');
	return (time[0]-basetime[0]) * 60 + (time[1] -  basetime[1])
};
export const minute2time = (basetime, minute)=>{
	let sminute = minute%60;
	basetime = (basetime instanceof Array?basetime:basetime.split(':')).map(i=>parseInt(i));
	basetime[0] += (minute - sminute)/60;
	if(basetime[1] + sminute>=60){
		basetime[0]+= +1;
		basetime[1] = basetime[1] + sminute - 60;
	}else{
		basetime[1] = basetime[1] + sminute;
	}
	return timeArrayToString(basetime);
}

