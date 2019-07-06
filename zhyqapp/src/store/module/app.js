import deepcopy from 'deep-copy'
export default {
	state:{
		isWeixin: /MicroMessenger/i.test(window.navigator.userAgent),
		isMiniProgram: /miniprogram|wechatdevtools/i.test(window.navigator.userAgent),
		subRoute:{
			path:null,
			history:[],
			historyIndex:-1
		},
		zone:{
			list:[],
			current:null,
		}
	},
	getters:{
		currentSubRoute(state){
			if(state.subRoute.historyIndex>=0){
				return state.subRoute.history[state.subRoute.historyIndex]
			}
		},
		currentZone(state, rootGetters, rootState){
			if(state.zone.current) return state.zone.current;
			if(!rootState.user.info || !rootState.user.info.zoneId) return state.zone.list[0];
			for(let i=0; i < state.zone.list.length; i++){
				if(state.zone.list[i].id === rootState.user.info.zoneId){
					return state.zone.list[i];
				}
			}
			return state.zone.list[0];
		},
		currentZoneId(state, rootGetters, rootState){
			return (rootGetters.currentZone && rootGetters.currentZone.id) || (rootState.user.info && rootState.user.info.zoneId) || -1;
		}
	},
	mutations:{
		'router.push'(state, path){
			state.subRoute.historyIndex++;
			state.subRoute.history.splice(state.subRoute.historyIndex, state.subRoute.history.length - state.subRoute.historyIndex, deepcopy(path));
		},
		'router.go'(state, index=1){
			if(index>0){
				if(state.subRoute.historyIndex + index < state.subRoute.history.length){
					state.subRoute.historyIndex += index
				}else state.subRoute.historyIndex = state.subRoute.history.length-1
			}
		},
		'router.back'(state, index = 1){
			if(index>0){
				if(state.subRoute.historyIndex - index<0){
					state.subRoute.historyIndex = 0;
				}else state.subRoute.historyIndex -= index
			}
		},
		'zone.list'(state, list){
			state.zone.list = list;
		},
		'zone.current'(state, zone){
			state.zone.current = zone;
		}
	},
	actions:{
		routeBack({commit}, index=1){
			commit('router.back', index)
		},
		routeGo({commit}, index=1){
			commit('router.go', index)
		},
		routePush({commit}, path){
			commit('router.push', path)
			window.history.pushState(null, '','/'+path.slice(0, 3).join('/'))
		},
		setZoneList({commit}, list){
			commit('zone.list', list)
		},
		setCuttentZone({commit}, zone){
			commit('zone.current', zone)
		}
	}
}
