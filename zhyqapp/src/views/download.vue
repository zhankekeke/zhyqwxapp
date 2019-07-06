<template>
    <div></div>
</template>
<script>
const miniProgram = window.wx.miniProgram;
export default {
	props:['url', 'name', 'icon', 'type'],
    mounted() {
		if(!this.url) {
			this.$Message.error({
                content:'缺少下载地址！',
                onClose:()=>{
	                this.$router.back()
                }
            });
        }else{
			miniProgram.navigateTo({
				url:`/pages/index/download?url=${encodeURIComponent(this.url)}`,
				success:()=>this.$router.back(),
				fail:messsage=>{
					this.$Message.error('下载失败')
				}
			});
        }
    }
}
</script>
