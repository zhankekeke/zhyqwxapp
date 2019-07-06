import localStorage from 'localstorage'
import {
	ACCESS_VISITOR,
	ACCESS_EMPLOYEE,
	ACCESS_SERVICE,
	ACCESS_HYSYD
} from './menus/menus'
export const info = 'info';
export const token = 'token';
export const resources = 'resources';
function cookie(name, value, expire){
	if(typeof value === 'object') value = JSON.stringify(value);
	document.cookie = `${name}=${value}; expire=${new Date(expire).toUTCString()}`
}
const store = new localStorage('user');

cookie('m-sjwdnnaiowm', store.get(info)[1]);
cookie('m-cjdiirppoem', store.get(token)[1]);
export default {
	state:{
		info:store.get(info)[1],
		token:store.get(token)[1],
		resources:store.get(resources)[1],
	},
	getters:{
		role:(state, rootGetters)=>{
			//当前用户无绑定园区信息或绑定园区信息与用户信息不符时，判定用户在当前园区为访客
			if(rootGetters.currentZone &&  (rootGetters.currentZone.id !== state.info.zoneId ) || !state.info || !state.info.zoneId){
				return ACCESS_VISITOR;
			}
			if(state.info.zoneId){
				// debugger;
				let other = 0x0;
				if (state.resources && state.resources.company && state.resources.company.some(item => item.value === 'HYS_QY')) {
					other = ACCESS_HYSYD;
				}
				if(state.resources && state.resources.steward ){
					return state.resources.steward.some(item => item.value === 'FW') ? ACCESS_SERVICE | other : ACCESS_EMPLOYEE | other
				}else{
					return ACCESS_EMPLOYEE|other
				}
			}
			return ACCESS_VISITOR
		},
		token:state=>{
			if(state.token && new Date().getTime()< state.token.expire){
				return state.token.value
			}else{
				return ''
			}
		}
	},
	mutations:{
		info(state, value){
			cookie('m-sjwdnnaiowm',value);
			store.put(info, state.info = value);
		},
		token(state, value){
			let expire = new Date().getTime() + 7200 * 1000;
			cookie('m-cjdiirppoem', value, expire);
			store.put(token, state.token = {value, expire});
		},
		resources(state, value){
			store.put(resources, state.resources = value)
		},
		loginOut(state){
			store.del(info);
			store.del(token);
			state.info = void 0;
			state.token = void 0;
		}
	}
}
