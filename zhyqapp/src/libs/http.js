import Vue from 'vue';
import axios from 'axios';
import store from '@/store'
import router from '../router';
import $_BaseUrl_$ from '../config/api-server-host'
const http = axios.create({
    baseURL: $_BaseUrl_$
});

http.interceptors.request.use(function (config) {
    if(!store.getters.token){
        router.replace('/login')
    }else{
        if (!/^\/login\//.test(config.url)) {
            config.headers['Authorization'] = store.getters.token;
        }
    }
    return config
}, function (error) {
    return Promise.reject(error)
});
http.interceptors.response.use(function(response){
    let {status, data} = response;
    if(status === 200 && data && data.code === 106){
        router.replace('/login')
    }else return response;
}, function(error){
    return Promise.reject(error)
})

export default {
    install(){
        Vue.prototype.$_sendQuery_$ = http
    }
};
