<style scoped>

    .lm {
        height: 100vh;
        background: #00C1DE;
    }

    .wrap {
        width: 335px;
        height: 393px;
        margin: 40px 20px;

        background: no-repeat url('/static/grzx/ewmbj.svg');
        background-size: 100%;
    }

    .wrap p {
        font-size: 14px;
        /* margin: 0 auto; */
        /* padding-top:38px; */
        text-align: center;
        /* width:320px; */
        /* border-top:1px dashed #e5e5e5; */
    }

    .wrap img {
        width: 166px;
        height: 166px;
        margin: 62px 85px 0px;
    }
    .line{
        width: 310px;
        margin:60px auto 38px;
        height: 1px;
        border:none;
        border-bottom:1px dashed #e5e5e5;
        /* background-image: linear-gradient(to right, #e5e5e5 0%, #e5e5e5 50%, transparent 50%);
        background-size: 8px 1px;
        background-repeat: repeat-x; */
    }


</style>
<template>
    <div class="lm" ref="aa">
        <navigator title="二维码" @back="$_goback_$"/>
        <!-- 内容 -->
        <div class="wrap">
            <img :src="ewmUrl"/>
            <p class="line"></p>
            <p>切勿泄露此二维码</p>
        </div>
    </div>
</template>

<script>
    import controler from './controler.js';
    import {Header} from 'mint-ui';
    import 'mint-ui/lib/style.css'
    import navigator from '../public/navigator';

    export default {
        mixins: [controler],
        components: {
            [Header.name]: Header,
            navigator,
        },
        data() {
            return {
                ewmUrl: ''
            }
        },
        created() {
            this.$_getEwm_$();
        },
        methods: {
            $_ewm_$() {
                this.$root.inparams.id
            },
            // 返回上一级
            $_goback_$() {
                this.$root.$_Route_$('user', 'mobile', 'grzx', {})
            },

            $_getEwm_$() {
                this.$_sendQuery_$({
                    method: "GET",
                    url: `${this.$_global_$.serverPath}/company/attendance/employee/qrCode`,
                    data: {}
                }).then(res => {
                    if (res.status === 200) {
                        if (res.data.code === 0) {
                            this.ewmUrl = "data:image/jpeg;base64," + res.data.data
                        }
                    }
                })
            }
        }
    }
</script>