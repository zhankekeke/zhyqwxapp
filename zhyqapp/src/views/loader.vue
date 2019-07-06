<template>
    <div id="container" ref="container">
        <div class="async-render"></div>
    </div>
</template>
<script>
import Vue from 'vue';
import store from '../store'
import router from '../router'
import stringify from 'json-stringify-safe'
export default {
	props:['name', 'action'],
    mounted() {
	    this.$nextTick(()=>{
		    this.$loader();
        })
    },
    methods:{
		$loader:(()=>{
			let app;
			return function(){
				let $loader = this;
				let el = this.$refs.container.firstChild
				if(app) app.$destroy();
				require.ensure([], function (require) {
					app = new Vue({
                        el, store, router,
                        data:()=>({prop_keys:[]}),
						template:'<container v-bind="props" ref="container"/>',
                        components:{
                        	container(resolve){
                        		try{
			                        require(`@m/${$loader.name}/${$loader.action||'mobile'}.vue`);
			                        require([`@m/${$loader.name}/${$loader.action||'mobile'}.vue`], vm=>{
			                        	if(typeof vm.default.props === 'object'){
					                        app.prop_keys = (vm.default.props instanceof Array)?vm.default.props:Object.keys(vm.default.props)
                                        }
				                        resolve(vm.default)
                                    })
                                }catch(e){
			                        resolve({template:'<div></div>'});
			                        $loader.$Message.error({
                                        content:'页面不存在',
                                        onClose:()=>$loader.$router.back()
                                    })
		                        }
                            }
                        },
                        computed:{
	                        props(){
		                        return this.prop_keys.length?Object.assign(...this.prop_keys.map(key=>{
			                        return {[key]:this.$route.query[key]}
		                        })):{}
	                        },
	                        inparams(){
	                        	try{
			                        return typeof this.$route.query.params === 'object'
					                        ? this.$route.query.params
					                        : JSON.parse(this.$route.query.params || '{}')
                                }catch (e) {
                                    return {}
		                        }
                            }
                        },
                        updated(){
	                        this.done = true
                        },
                        methods:{
                        	$_Route_$(a, b, name, params, title = '') {
		                        this.$router.push({
                                    path:`/${name}`,
		                        	query:{params:params?stringify(params):void 0},
			                        title
                                })
	                        },
                            $_refresh_user_info_$(){
                        		return $loader.$root.refreshUserInfo()
                            },
	                        $_try_login_$(...args){
                        		return $loader.$root.$_try_login_$(...args)
                            },
	                        $_set_login_info_$(...args){
                        		return $loader.$root.$_set_login_info_$(...args)
                            }
                        }
                    })
				})
            }
        })()
    },
    watch:{
		name:'$loader',
		action:'$loader'
    }
}
</script>
