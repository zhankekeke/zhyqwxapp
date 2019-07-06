import axios from 'axios';
import iview from 'iview';
import config from '../config/config';
import $_BaseUrl_$ from '../config/api-server-host'

var $_SelSchenma_$;
var $_NologinNotice_$ = true;
export default {
    install: (Vue, options) => {
        Vue.mixin({
            data() {
                return {
                    $_BaseUrl_$: $_BaseUrl_$,
                    $_SelSchenma_$: ''
                }
            },
            methods: {
                $_fquery_$(fn) {
                    this.$_Api_$(this.$_querycfg_$).then(rsp => {
                        if (rsp.status == 200) {
                            if (rsp.data && rsp.data.status > 0) {
                                if (rsp.data.status == 2) {
                                    return this.$router.replace('/login');
                                } else {
                                    if(rsp.data.obj == '登录信息已过期'){
                                        if($_NologinNotice_$){
                                            $_NologinNotice_$ = false;
                                            this.$Notice.info({
                                                title: rsp.data.obj,
                                            });
                                            setTimeout(function () {
                                                $_NologinNotice_$ = true;
                                            },5000)
                                        }

                                    }else{
                                        this.$Notice.info({
                                            title: rsp.data.obj,
                                        });
                                    }

                                    return (typeof fn === 'function') && fn(rsp);
                                }
                            }
                            if (typeof fn === 'function') {
                                fn(rsp);
                            } else if (typeof this.$_receive_$ === 'function') {
                                this.$_receive_$(rsp);
                            }
                        }
                    }).catch(e=>{
	                    let rsp;
                        let errcode;
                        if(errcode = /status code (\d+)/.exec(e.message)){
                            rsp = {
                                status:Number(errcode[1]),
                                data:{
                                    status:1,
                                    obj:e.message
                                }
                            }
                        }else {
	                        rsp = {
		                        status:500,
		                        data:{
			                        status:1,
			                        obj:e.message
		                        }
	                        }
                        }
	                    if (typeof fn === 'function') {
		                    fn(rsp);
	                    } else if (typeof this.$_receive_$ === 'function') {
		                    this.$_receive_$(rsp);
	                    }
                    });
                }
            }
        })
        Vue.prototype.$_ChageSchenma_$ = (id) => {
            $_SelSchenma_$ = id;
        };
        Vue.prototype.$_GetSchenma_$ = (id) => {
            return $_SelSchenma_$;
        };
        Vue.prototype.$_ApiUrl_$ = (url='') => {
            return $_BaseUrl_$ + url;
        };

        Vue.prototype.$_Api_$ = function($_querycfg_$){
	        //iview.LoadingBar.start();
	        return new Promise((resolve, reject) => {
	            axios({
		            method: 'POST',
		            timeout: 15000,
		            withCredentials:true,
                    baseURL: $_BaseUrl_$,
                    url: `/${$_querycfg_$.mod}`,
		            headers: {"Authorization": this.$store.getters.token},
                    data: Object.assign($_querycfg_$.params, { schenma: $_SelSchenma_$ })
                }).then(({status, data}) => {
		            //iview.LoadingBar.finish();
		            if(data.status === 2 || status === 401){
		                this.$store.commit('loginout');
		                this.$router.replace('/login');
                    }else{
		                resolve({status, data});
                    }
                }).catch(e => {
		            //iview.LoadingBar.finish();
	                new Vue().$Notice.error({
                        title: '请求服务器失败'
                    });
	                reject(e);
                });
            });
        };

    },
    $_BaseUrl_$: $_BaseUrl_$
}
