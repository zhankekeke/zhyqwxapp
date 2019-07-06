<style scoped>
    .main-container{
        -webkit-overflow-scrolling: touch;
    }
    .MainContent {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        z-index: 88;
    }

    .MainContent ul {
        max-width: 200px;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    body {
        background: #e9e9e9;
        position: static;
    }

    #ModuleContent {
        position: relative;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        margin-top: 16px;
    }

    #Content {
        margin: 0 !important;
        padding: 0 !important;
    }

    .Main {
        top: 0 !important;
    }

    .rightbox {
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .rightbox .desc {
        font-size: 10px;
        margin-left: 5px;
        color: #b7b7b7;
    }

    .rightbox .title {
        padding: 10px 10px 10px 20px;
        height: 50px;
        -moz-box-shadow: 0px 3px 5px #efefef;
        -webkit-box-shadow: 0px 3px 5px #efefef;
        box-shadow: 0px 3px 5px #efefef;
    }

    .ivu-breadcrumb {
        margin-top: 5px;
    }

    .rightbox span {
        font-size: 12px;
    }

    .ivu-breadcrumb a {
        color: #989898
    }

    .breadcrumb {
        padding: 0;
    }

    .hideleft {
        position: absolute;
        bottom: 20px;
        left: 0px;
        width: 100%;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
    }

    .shouye {
        color: #d4d4d4;
        padding-top: 20px;
        padding-left: 46px;
        font-size: 14px;
        cursor: pointer;
    }

    .shouye:hover {
        color: #fff;
    }

    .rightbox {
        padding-left: 16px;
        margin-right: 50px;
    }


</style>
<template>
    <div class="main-container">
        <div class="MainContent">
            <div id="ModuleContent" ref="subvm"><div></div></div>
        </div>
    </div>
</template>
<script>
import $_Vue_$ from 'vue';
import store from '@/store'
import {mapActions, mapGetters} from 'vuex';
import menus, {
	ACCESS_VISITOR, ACCESS_SERVICE, ACCESS_EMPLOYEE
} from '../store/module/menus/menus'

export default {
    data() {
        return {
            //临时参数
            $_mobil_$: true,
            $_Content_$: {},
            $_History_$: [],
            $_left_width_$: 200,
            // Title: '应用名称',
            // Desc: '描述',
            $_Accordion_$: true,
            $_ActiveName_$: '',
            $_OpenName_$: [''],
            $_CatalogName_$: [''],
            $_HelpNode_$: '',
            $_MenuGroup_$: [],
            $_IsMobile_$: false,
            $_IsSuperAdmin_$: true,
        };
    },
    created() {
        this.$_IsMobile_$ = this.$_isMobile_$();
	    this.$nextTick(()=>{
	    	this.$_LoadAction_$('user', this.$route.params.group||'mobile', this.$route.params.action || 'ygindex')
        })
    },
    computed:{
    	...mapGetters(['currentSubRoute'])
    },
    methods: {
        ...mapActions(['routePush','routeGo', 'routeBack']),
        $_Index_$() {
            this.$_LoadAction_$('user', 'mobile', 'ygindex')
        },
        $_HideLeft_$() {
            this.$_left_width_$ = this.$_left_width_$ > 50 ? 30 : 200;
        },
        $_LoadAction_$(cname, gname, name, params = {}) {
        	let access = false;
        	let route = [cname, gname, name, params];
        	for(let i=0; i<menus.length; i++){
        		let tRoute = menus[i];
        		let tRoutePath = tRoute.url
		        if(route.toString().indexOf(tRoutePath.toString()) === 0){
			        if(tRoute.access !== void 0){
			        	if(!this.$store.getters.token || !(tRoute.access & this.$store.getters.role)){
			        		return this.$Message.error('当前无权限查看改内容');
                        }
                    }
			        access = true
		        }
            }
	        if (access || this.$store.getters.token) {
                let me = this;
                this.$_HelpNode_$ = `${cname}/${gname}/${name}`;
                require.ensure([], function (require) {
                    require(`../module/${cname}/${gname}/${name}/mobile.vue`);
                    if (me.$_Content_$.$destroy) {
                        me.$_Content_$.$destroy();
                    }
                    me.$root.$emit('$_router_load_$', `/${cname}/${gname}/${name}`);
                    me.routePush([cname, gname, name, params]);
	                me.$_Content_$ = new $_Vue_$({
                        el: me.$refs.subvm.firstChild,
                        store,
                        data() {
                            return {
                                inparams: params,
                                modname: me.Title
                            }
                        },
                        methods: {
                            $_Route_$(scname, sgname, sname, sparams, title) {
                                me.$_History_$.push({
                                    title: me.Title,
                                    cname: cname,
                                    gname: gname,
                                    name: name,
                                    params: params
                                });
                                if (title !== '') {
                                    me.Title += " - " + title;
                                }
                                me.$_LoadAction_$(scname, sgname, sname, sparams);
                            },
                            $_GoToPage_$(path, blank) {
                                if (blank) {
                                    !(a => {
                                        a.target = '_blank';
                                        a.href = path;
                                        a.click();
                                    })(document.createElement('a'));
                                } else {
                                    this.$router.push(path);
                                }
                            },
                            $_GoBack_$() {
                                let p = me.$_History_$.pop();
                                me.Title = p.title;
                                me.$_LoadAction_$(p.gname, p.name, p.params);
                            },
                            $_SetStore_$(key, info) {
                                me.$store.commit(key, info);
                            },
                            $_GetStore_$(key) {
                                return me.$store.state[key];
                            }
                        },
                        render: h => h((resolve) => {
	                        require([`../module/${cname}/${gname}/${name}/mobile.vue`], resolve);
                        })
                    });
                });
            } else {
                window.location.href = '/login';
            }
        },
        $_InitMenuStatus_$() {
            let params = this.$route.params;
            let name = params.menu;
            if (!this.$parent.$_MenuStatus_$[name]) {
                let Md = MenuData[name];
                let nextname = '';
                for (let key in Md[0]) {
                    nextname = key;
                    break;
                }
                Md = Md[0][nextname];
                let Ac = {};
                if (params.group && params.action) {
                    Ac = {
                        Code: params.action,
                        $_CatalogName_$: [nextname],
                        $_OpenName_$: params.group,
                        $_ActiveName_$: params.group + '.' + params.action
                    };
                } else {
                    Ac = {
                        Code: Md[0].SubMenus[0].Code,
                        $_CatalogName_$: [Md[0].Pcode],
                        $_OpenName_$: [Md[0].Code],
                        $_ActiveName_$: Md[0].Code + '.' + Md[0].SubMenus[0].Code
                    };
                }
                this.$parent.$_MenuStatus_$[name] = Ac;
                this.Title = Md[0].Name + " - " + Md[0].SubMenus[0].Name;
                this.Desc = Md[0].SubMenus[0].Desc;
            }
            if (params.group && params.action) {
                this.$parent.$_MenuStatus_$[name] = {
                    Code: params.action,
                    $_CatalogName_$: params.menu.slice(0, -1),
                    $_OpenName_$: params.group,
                    $_ActiveName_$: params.group + '.' + params.action
                };
            }
            return this.$parent.$_MenuStatus_$[name];
        },
        $_MenuSelect_$(e) {
            let item = this.$_FindMenu_$(e);
            this.Title = item.title;
            this.Desc = item.desc;
            this.$parent.$_MenuStatus_$[this.$route.params.menu].Code = item.action;
            this.$parent.$_MenuStatus_$[this.$route.params.menu].$_ActiveName_$ = e;
            this.$_LoadAction_$(item.Catalog, item.group, item.action);
        },
        $_OnChange_$(e) {
            this.$parent.$_MenuStatus_$[this.$route.params.menu].$_OpenName_$ = [e];
        },
        $_FindMenu_$(code) {
            for (let c in MenuData) {
                for (let key in MenuData[c]) {
                    for (let g in MenuData[c][key]) {
                        for (let item in MenuData[c][key][g]) {
                            let group = MenuData[c][key][g][item];
                            for (let subitem in group.SubMenus) {
                                let action = group.SubMenus[subitem];
                                let nodecode = group.Code + '.' + action.Code;
                                if (nodecode == code) {
                                    return {
                                        Catalog: group.Pcode,
                                        group: group.Code,
                                        action: action.Code,
                                        title: group.Name + " - " + action.Name,
                                        desc: action.Desc
                                    };
                                }
                            }
                        }
                    }
                }
            }
        },
        $_Breadcrumb_$(e) {
            switch (e) {
                case 'service':
                    this.$Message.success('打开客服');
                    break;
                case 'help':
                    this.$Message.success(this.$_HelpNode_$);
                    break;
            }
        },
        $_Recdata_$(data) {
            let newdata = '';
            for (let c in data) {
                for (let g in data[c]) {
                    newdata += JSON.stringify(data[c][g][0]) + ',';
                }
            }
            newdata = newdata.slice(0, -1);
            newdata = '[' + newdata + ']';
            return JSON.parse(newdata);
        },
        $_getCookie_$(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    },
    watch: {
        $route(...args){
	        console.log(this.$route);
	        console.log(this.$router);
	        this.$_FetchData_$(...args)
        },
    }
};
</script>
