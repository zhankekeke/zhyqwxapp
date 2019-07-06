<template>
    <div class="layout">
        <transition name="fade" mode="out-in" >
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    data() {
        return {
            linkOpen:false,
        };
    },
    computed:{
    	$_user_$(){
    		return this.$store.state.user.info
        },
        token(){
    		return this.$store.getters.token;
        }
    },
    mounted() {
	    Vue.mixin({
            methods: {
                $_GoPage_$(e) {
                    this.$router.push(e);
                }
            }
        });
    },
    watch:{
    	token(new_token){
		    if(!new_token) this.$router.replace('/login')
	    }
    }
};
</script>
