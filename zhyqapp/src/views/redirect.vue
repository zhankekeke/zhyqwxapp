<template>
    <div style="display:flex; justify-content: center; align-items: center; width:100%; height:100vh;">
        <div v-if="error">{{error}}</div>
        <div v-else>请稍后</div>
    </div>
</template>
<script>
export default {
	data(){
		return {
			error:''
        }
    },
	mounted() {
		if(this.$route.query.path){
			if(this.$route.params.code){
				let path = decodeURIComponent(this.$route.query.path);
				let query = Object.assign(...Object.keys(this.$route.query).filter(n=>['path'].indexOf(n)===-1).map(n=>({[n]:decodeURIComponent(this.$route.query[n])})));
				this.$root.$_try_login_$(this.$route.params.code).then(result=>{
					if(result === true) this.$router.replace({path, query})
                    else this.error = '权限验证失败！'
				})
			}
        }else this.error = '地址参数不正确！'
	}
}
</script>

