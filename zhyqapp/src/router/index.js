import Vue from 'vue';
import iView from "iview";
import {Indicator} from 'mint-ui';
import VueRouter from 'vue-router';

import store from "../store";
import menus, {ACCESS_EMPLOYEE, ACCESS_SERVICE} from '../store/module/menus/menus'
Vue.use(VueRouter);
const index = '/ygindex';
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name:'login',
            path: '/login/:token?/:type?',
            component: (resolve) => require(['@/views/login.vue'], resolve),
        }, {
            name:'redirect',
            path: '/redirect/:code',
            component: (resolve) => require(['@/views/redirect.vue'], resolve),
        }, {
            name:'download',
            path: '/download',
            props: (route) => {
                let props = ['url', 'name', 'icon', 'type'].map(name=>{
                    if(route.query[name]){
                        return {[name]:route.query[name]}
                    }
                }).filter(v=>!!v);
                return props.length?Object.assign(...props):{}
            },
            component: (resolve) => require(['@/views/download.vue'], resolve),
        }, {
            path: '/',
            component: (resolve) => require(['@/views/index.vue'], resolve),
            children: [{
                props:true,
                path: ':name',
                component: (resolve) => require(['@/views/loader.vue'], resolve),
            }, {
                props:true,
                path: ':name/:action',
                component: (resolve) => require(['@/views/loader.vue'], resolve),
            }]
        }
    ]
})

router.beforeEach((to, from, next) => {
    Indicator.close()
    // iView.LoadingBar.start();
    if (/^\/login\/?/.test(to.fullPath) || to.path === index || /^\/redirect\//.test(to.path)) {
        next();
    } else {
        if(to.path === '/'){
            next({path:index})
        } else if (!store.getters.token) {
            next({path: '/login'})
        } else {
            let access = false;
            let hasMatchRoute = false;
            for(let i=0; i<menus.length; i++){
                let tRoute = menus[i];
                if(to.path.indexOf(tRoute.url[2]) === 1){
                    if(tRoute.access !== void 0){
                        if(!store.getters.token || !(tRoute.access & store.getters.role)){
                            // iView.LoadingBar.finish();
                            return iView.Message.error('当前无权限查看改内容');
                        }else{
                            access = true
                        }
                    }
                    hasMatchRoute = true
                }
            }
            if(access || (!hasMatchRoute && (store.getters.role & (ACCESS_EMPLOYEE | ACCESS_SERVICE)))){
                next()
            }else{
                // iView.LoadingBar.finish();
                iView.Message.error('当前无权限查看改内容');
            }
        }
    }
});

router.afterEach((to, from, next) => {
    // iView.LoadingBar.finish();

    window.scrollTo(0, 0);
});
export default router;
