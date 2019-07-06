/*
export default class Date extends window.Date{
	constructor(time){
		if(time === void 0){
			super();
		}else if(time === null){
			super(null)
		}else{
			super(typeof time === 'string' && isNaN(time)?time.replace(/-/g, '/'):time)
		}
	}
}
*/
const origin = window.Date;
function mydate (time){
	if(time === void 0){
		return new origin();
	}else if(time === null){
		return new origin(null)
	}else{
		return new origin(typeof time === 'string' && isNaN(time)?time.replace(/-/g, '/').replace(/(\d)T(\d)/i,'$1 $2'):time)
	}
}
mydate.now = (...args)=>{
	return origin.now(...args)
}
mydate.UTC = (...args)=>{
	return origin.UTC(...args)
}
mydate.parse = (...args)=>{
	return origin.parse(...args)
}
module.exports = mydate
