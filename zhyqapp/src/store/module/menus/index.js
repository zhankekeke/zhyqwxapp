import localStore from 'localstorage';
import list from './menus';
const STORE_FIXED_NAME = 'fixed';
const STORE_COMMON_NAME = 'common';
const store = new localStore('menu');
const keyMapList = Object.assign(...list.map(item=>({[item.id]:item})));

let fixedMenuLocalOpts = (store.get(STORE_FIXED_NAME)[1] || [5,6,7]).filter(id=>keyMapList[id]);
let commonMenuLocalOpts = (store.get(STORE_COMMON_NAME)[1] || [8,11,10,12,13,16,9]).filter(id=>keyMapList[id]);
export default {
	state:{
		list,
		fixedMenu:fixedMenuLocalOpts.map(id=>keyMapList[id]),
		commonMenu:commonMenuLocalOpts.map(id=>keyMapList[id])
	},
	getters:{
		unallocatedMenu:state=>{
			return state.list.filter(item=>{
				return state.fixedMenu.indexOf(item) === -1
					&& state.commonMenu.indexOf(item) === -1
					&& (item.showIndex === true || item.showIndex === void 0)
			})
		},
		fixedMenuIsMax:state=>state.fixedMenu.length>=3,
		commonMenuIsMax:state=>state.commonMenu.length>=8
	},
	mutations:{
		addToCommonMenu(state, menu){
			if(state.commonMenu.indexOf(menu) === -1 && state.fixedMenu.indexOf(menu) === -1 && state.commonMenu.length<8){
				state.commonMenu.push(menu);
				commonMenuLocalOpts.push(menu.id);
				store.put(STORE_COMMON_NAME, commonMenuLocalOpts);
			}
		},
		addToFixedMenu(state, menu){
			if(state.commonMenu.indexOf(menu) === -1 && state.fixedMenu.indexOf(menu) === -1 && state.fixedMenu.length<3){
				state.fixedMenu.push(menu);
				fixedMenuLocalOpts.push(menu.id);
				store.put(STORE_FIXED_NAME, fixedMenuLocalOpts);
			}
		},
		deleteCommonMenu(state, menu){
			let index = state.commonMenu.indexOf(menu);
			if(index>-1){
				state.commonMenu.splice(index, 1);
				commonMenuLocalOpts.splice(commonMenuLocalOpts.indexOf(menu.id), 1);
				store.put(STORE_COMMON_NAME, commonMenuLocalOpts);
			}
		},
		deleteFixedMenu(state, menu){
			let index = state.fixedMenu.indexOf(menu);
			if(index>-1){
				state.fixedMenu.splice(index, 1);
				fixedMenuLocalOpts.splice(fixedMenuLocalOpts.indexOf(menu.id), 1);
				store.put(STORE_FIXED_NAME, fixedMenuLocalOpts);
			}
		}
	},
	actions:{
		deleteCommonMenu(context, menu){
			context.commit('deleteCommonMenu', menu)
		},
		deleteFixedMenu(context, menu){
			context.commit('deleteFixedMenu', menu)
		},
		addToCommonMenu(context, menu){
			context.commit('addToCommonMenu', menu)
		},
		addToFixedMenu(context, menu){
			context.commit('addToFixedMenu', menu)
		}
	}
}
