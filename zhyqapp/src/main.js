import 'babel-polyfill'
import 'lib-flexible/flexible'
import './libs/filters'
import $_MVue_$ from 'vue';
import store from './store';
import { mapState } from 'vuex'
import $_iView_$ from 'iview';
import router from './router/index';
import $_Util_$ from './libs/util';
import $_Api_$ from './libs/api';
import $_App_$ from './app.vue';
import $_echarts_$ from 'echarts'
import $_global_$ from './libs/global'
import $_httpPlugin_$ from './libs/http';
import NewCalendar from 'vue-mobile-calendar'
import gallery from 'img-vuer'

const {unloadAsks: $_unload_ask_$} = require('./config/config').default;

// import 'iview/dist/styles/iview.css';
import './css/ft.css';
import './css/gtype.css';
import './css/public.css';
import 'vue-plyr/dist/vue-plyr.css';
import  './css/theme.less';
// require styles 引入编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css';


import VueClipboard from 'vue-clipboard2'
$_MVue_$.use(VueClipboard)
$_MVue_$.prototype.$echarts = $_echarts_$;
$_MVue_$.prototype.$_global_$ = $_global_$;
$_MVue_$.use(NewCalendar);
$_MVue_$.use($_httpPlugin_$);
$_MVue_$.use($_Util_$);
$_MVue_$.use($_Api_$);
$_MVue_$.use(gallery, {
  swipeThreshold: 150, // 滑动阈值，默认值 100
});
$_MVue_$.use($_iView_$);
$_MVue_$.prototype.$_getCookie_$ = function (cname) {
    if(cname === 'm-sjwdnnaiowm'){
        let userInfo = JSON.stringify(this.$store.state.user.info);
        return userInfo?userInfo:"";
    }
    // let name = cname + "=";
    // let ca = document.cookie.split(';');
    // for (let i = 0; i < ca.length; i++) {
    //     let c = ca[i].trim();
    //     if (c.indexOf(name) == 0) {
    //         return c.substring(name.length, c.length);
    //     }
    // }
    // return "";
};
$_MVue_$.prototype.$_validatestr_$ = (rule, value, callback) => {
    let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    let regCn = /[·！#￥（——）：；“”‘、， |《。》？、【】[\]]/im;
    if (regEn.test(value) || regCn.test(value)) {
        callback('包含非法字符');
    } else {
        callback();
    }
};
let app = new $_MVue_$({
    store,
    router,
    el: '#app',
    computed:mapState({
        isWeixin:s=>s.app.isWeixin,
        isMiniProgram:s=>s.app.isMiniProgram
    }),
    render: h => h($_App_$),
    methods: {
        refreshUserInfo(){
            return new Promise(resolve => {
                this.$_sendQuery_$({
                    method:'GET',
                    url:`/user/user/info`,
                }).then(({data})=>{
                    if(data.code === 0){
                        this.$store.commit('info', data.data);
                    }
                    resolve(data.data)
                })
            })
        },
        $_try_login_$(token, useMiniProgram=true){
            let MiniProgram = { //小程序:code登录
                mod: 'user/login/mp',
                params: {code:token}
            };
            let WeiXin = {
                mod: 'user/login/oa',//公众号:首次尝试探测是否已经绑定
                params: {openId:token}
            };
            return new Promise((resolve, reject)=>{
                if(!token) return reject('缺少必要参数:token。');
                if(!this.isWeixin) return reject('非微信环境下无法使用自动登录！')
                this.$_Api_$(this.isMiniProgram && useMiniProgram? MiniProgram: WeiXin).then(({data})=>{
                    if(data.code === 0){
                        this.$_set_login_info_$(data.data)
                            .then(result=>resolve(result))
                    }else resolve(data.message||'登录失败')
                })
            })
        },
        $_set_login_info_$(data){
            this.$store.commit('info', data.user);
            this.$store.commit('token', data.token);
            return this.$_sendQuery_$({
                url:`/user/user/resources`
            }).then(({data})=>{
                this.$store.commit('resources', data.data);
                return true
            });
        }
    }
});
