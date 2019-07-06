<template>
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>
<script>
import {EventBus} from '@/libs/eventbus';
export default {
    data() {
        return {
            $_TopMenuGroup_$: require('../data/top.json'),
            $_MenuStatus_$: [],
            $_querycfg_$: {
                mod: 'login',
                params: {
                    cmd: '1',
                }
            },
            $_ThisSchenma_$: [],
            $_Schenma_$: [],
            $_IsMobile_$: false
        };
    },
    computed: {
        $_UserName_$() {
            return this.$store.state.$_user_$ && this.$store.state.$_user_$.name
        }
    },
    created() {
        let menu = this.$route.params.menu;
        let menuindex = '';
        for (let g in this.$_TopMenuGroup_$) {
            menuindex++;
            for (let item in this.$_TopMenuGroup_$[g]) {
                if (menu == this.$_TopMenuGroup_$[g][item]) {
                    this.itemIndex = menuindex - 1;
                }
            }
        }
        this.$_IsMobile_$ = this.$_isMobile_$();
        if (!this.$route.params.menu) {
            //跳转页面
           // this.$_GoPage_$('/ygindex');
        }
        this.$_GetSchenma_$();
        EventBus.$on('$_RefreshScheme_$', this.$_GetSchenma_$);
    },
    beforeDestroy() {
        EventBus.$off('$_RefreshScheme_$', this.$_GetSchenma_$);
    },
    watch: {
        $_ThisSchenma_$(val) {
            this.$_ChageSchenma_$(val[0]);
            EventBus.$emit('$_RefreshPage_$');
        }
    },
    methods: {
        $_GetActionGroup_$() {
            return this.$route.params.menu ? this.$route.params.menu : 'home';
        },
        $_ChooseFunc_$(val) {
            if (val == 'info') {
                this.$_GoPage_$('/myinfo');
            } else if (val == 'pass') {
                this.$_GoPage_$('/mypass');
            } else {
                this.$Modal.confirm({
                    title: '操作提示',
                    content: '您真的要退出吗?',
                    onOk: () => {
                        this.$_fquery_$();
                    },
                    onCancel: () => {
                    }
                });
            }
        },
        $_GetSchenma_$() {},
        $_ChangeStyle_$(index) {
            this.itemIndex = index;
        }
    }
};
</script>
