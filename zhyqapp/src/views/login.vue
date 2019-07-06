<style scoped lang="less">
.container{
    min-height: 100vh;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background:linear-gradient(131deg,rgba(0,193,222,1) 0%,rgba(78,174,254,1) 100%);
    &:before{
        height: 1px;
        content: "";
        display:block;
    }
    .login-box{
        border-radius:13px;
        margin:39px 16px 0;
        background-color:#fff;
        padding:43px 33px 30px;
        .logo{
            margin-bottom:45px;
            img{
                width:240px;
                height:64px;
                margin:0 auto;
                display:block;
            }
        }
        .ivu-form-item{
            margin-bottom:38px;
            /deep/.ivu-form-item-label{
                font-size: 14px;
                font-weight: 400;
            }
            /deep/.ivu-form-item-label:before{
                display:none;
            }
            /deep/.ivu-form-item-content{
                .ivu-input-group-append{
                    border:none;
                    color:#00C1DE;
                    min-width:46px;
                    text-align:center;
                    border-radius:4px;
                    padding-top:6px;
                    padding-right:10px;
                    background-color:#F5F5F5;
                    .loading-state, /deep/.loader{
                        width:1em; height:1em;
                    }
                }
                .ivu-input{
                    height:100%;
                    padding:12px;
                    font-weight: initial;
                }
                .ivu-input, .ivu-input:focus{
                    border:none;
                    box-shadow:none;
                    border-radius:4px;
                    background-color:#F5F5F5;
                }
            }
            .btn-login{
                padding:0;
                width:100%;
                height:45px;
                font-size:15px;
                line-height:45px;
                text-align: center;
                border-radius:45px;
            }
        }
    }
    .loading-mask{
        z-index: 3;
        position:absolute;
        background-color:rgba(0,0,0,.1);
        top:0; left:0; right:0; bottom:0;
        .loading-state{
            top:50%; left:0;
            position:absolute;
            margin-top: -15px;
        }
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <div class="container">
        <Form class="login-box" :model="form" :rules="rules" label-position="top" autocomplete="off" ref="form">
            <div class="logo">
                <img src="/static/login/logo@2x.png" alt="">
            </div>
            <FormItem prop="username">
                <span slot="label">手机号码</span>
                <Input type="text" v-model.trim="form.username" placeholder="请输入用户名"/>
            </FormItem>
            <FormItem prop="verifyCode" v-if="token || isWeixin">
                <span slot="label">验证码</span>
                <Input type="text" v-model.trim="form.verifyCode" placeholder="请输入验证码">
                    <loading slot="append" v-if="queryCodeTime>=60" style="height:1em; width:1em;"/>
                    <span slot="append" v-else-if="queryCodeTime>0" disabled>{{queryCodeTime}}秒</span>
                    <span slot="append" @click="queryCode" v-else>获取验证码</span>
                </Input>
            </FormItem>
            <FormItem prop="password" v-else>
                <span slot="label">密码</span>
                <Input type="password" v-model.trim="form.password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem :label-width="1">
                <Button class="btn-login" type="primary" @click.native.prevent.stop="login" :loading="logining">立即登录</Button>
            </FormItem>
        </Form>
        <transition name="fade">
            <div class="loading-mask" v-if="logining">
                <loading :center="true"/>
            </div>
        </transition>
    </div>
</template>
<script>
import loading from './loading'
import $_BaseUrl_$ from "../config/api-server-host";
import {mapState} from 'vuex'
export default {
	components:{loading},
	data(){
		return {
			logining:!1,
            tryBind:false,
            queryCodeTime:0,
			form:{username:'', password:''},
			token: this.$route.params.token,
		}
    },
    computed:{
		...mapState({
            isWeixin:s=>s.app.isWeixin,
            isMiniProgram:s=>s.app.isMiniProgram
		}),
        rules(){
			if(this.token){
				return {
					username: [{required: true, message:'手机号必须填写'},{pattern:/^1[3-9]\d{9}$/, message:'手机号格式不正确'}],
					verifyCode: [{required: true, message:'验证码必须填写'}],
				}
            }else{
				return {
					username: [{required: true, message:'用户名必须填写'}, {pattern:/^1[3-9]\d{9}$/, message:'手机号格式不正确'}],
					password: [{required: true, message:'密码必须填写'}],
				}
            }
        },
         queryOpts(){
	         return this.token?{  //公众号:未绑定的账户进行绑定
		         mod: 'user/login/bind',
		         params: {
			         code:this.token,
			         type:this.$route.params.type||'wx_oa',
			         phone:this.form.username,
			         captcha:this.form.verifyCode,
		         }
	         }:{ //账号密码登录
		         mod: 'user/login',
		         params: {...this.form}
	         }
        }
    },
    mounted(){
		if(this.isWeixin){
			if(this.token){
				this.logining = true;
				this.$root.$_try_login_$(this.token, false).then(data=>{
					this.logining = false;
					if(data===true) this.$router.replace('/ygindex')
                });
            }else{
				window.location = `${$_BaseUrl_$}/user/oa/jump?url=${encodeURIComponent(window.location.protocol+'//'+window.location.host+window.location.pathname)}`
			}
        }
    },
    methods:{
		login(){
            this.$refs.form.validate((validate)=>{
            	if(validate){
            		this.logining = true;
		            this.$_Api_$(this.queryOpts).then(({status, data}) => {
			            this.logining = false;
			            if(data.code === 0){
			            	this.$root.$_set_login_info_$(data.data).then(result=>{
			            		if(result === true){
			            			this.$router.replace('/ygindex')
                                }else this.$Message.error(result)
                            });
			            }else{
			            	this.$Message.error(data.message||'登录失败')
                        }
		            }).catch(e=>{
		            	this.logining = false;
			            this.$Message.error('登录失败')
                    })
                }
            })
		},
        queryCode(){
			if(!/^(\+86\s*)?1[3-9]\d{9}$/.test(this.form.username)){
				return this.$Message.error('手机号格式不正确！');
            }
			if(this.queryCodeTime>0){
				return this.$Message.error('您的操作过于频繁！');
            }
	        this.queryCodeTime = 60;
	        let timer = ()=>{
		        this.queryCodeTime -- ;
		        if(this.queryCodeTime>0){
			        setTimeout(timer, 1000)
		        }
	        };
			this.$_Api_$({
                mod:'user/captcha',
                params:{
                	type:'USER_REGISTER',
                	username:this.form.username
                }
            }).then(({data})=>{
            	if(data.code === 0){
		            setTimeout(timer, 1000);
                }else {
            		this.queryCodeTime = 0;
		            this.$Message.error(data.message||'验证码发送失败')
                }
			})
        }
    }
}
</script>
