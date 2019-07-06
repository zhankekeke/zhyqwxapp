import Vue from 'vue'
import Vuex from 'vuex'

import menus from './module/menus';
import user from './module/user'
import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		menus,
		user,
		app
	}
})
