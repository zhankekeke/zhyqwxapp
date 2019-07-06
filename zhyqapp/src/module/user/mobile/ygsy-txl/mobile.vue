<style scoped>
    .container {
        font-size: 16px;
        min-height: 100vh;
        background-color: #f6f6f6;
    }

    .search {
        padding: 3px 20px;
        box-sizing: border-box;
    }

    >>> .ivu-input::-webkit-input-placeholder {
        color: #fff !important;
    }

    /*.searchbg {*/
    /*background: #00C1DE;*/
    /*width: 100%;*/
    /*height: 40px;*/
    /*!*margin: 0 16px*!*/
    /*}*/

    .comline {
        /*height: 66px;*/
        flex: 1;
        margin-top: 20px;
        line-height: 18px;
        padding-left: 16px;
    }

    .wrap {
        box-sizing: border-box;
        /*padding: 1px;*/
        font-size: 16px;
        color: #333;
        background: #f6f6f6;
    }

    .boxs {
        height: 82px;
        display: flex;
        margin-top: 10px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
    }

    .comnames {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 550;
        color: rgba(51, 51, 51, 1);
    }

    .box {
        margin-top: 10px;
        box-sizing: border-box;
        height: 66px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 15px 0px rgba(217, 226, 233, 0.5);
    }

    .comname {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        padding-left: 8px;
        float: left;
        /*height: 18px;*/
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 550;
        color: rgba(51, 51, 51, 1);
        line-height: 18px;
        margin-top: 24px;
    }

    .breadcrumb {
        font-size: 16px;
        /*margin-left: 64px;*/
        display: inline-block;

        margin-top: 8px;
        color: #333333
    }

    .breadcrumb span {
        color: #333333;
        font-weight: normal;
    }

    .coplogo {
        width: 40px;
        height: 40px;
        background-color: #f7f7f7;
        border-radius: 100%;
        float: left;
        margin-top: 13px;
        margin-left: 16px;
    }

    .coplogos {
        width: 10%;
        height: 40px;
        background-color: #f7f7f7;
        border-radius: 100%;
        float: left;
        margin-top: 20px;
        margin-left: 16px;
    }

    .list {
        margin-top: 10px;
        overflow: hidden;
        background: #fff;
        clear: both;
    }

    .list li {
        box-sizing: border-box;
        margin: 0 16px;
        height: 54px;
        line-height: 3.4;
    }

    .list li img {
        width: 38px;
        height: 38px;
        background-color: #f7f7f7;
        float: left;
        border-radius: 100%;
        margin-top: 8px;
    }

    .cylxr {
        padding-left: 16px;
        float: left;
        background: #ffffff;
        width: 100%;
        font-size: 18px;
        font-family: PingFangSC-Medium;
        font-weight: 550;
        color: rgba(51, 51, 51, 1);
        line-height: 3;
        margin-top: 10px;
    }

    .itemr {
        width: 100%;
        margin-left: 50px;
        border-bottom: 1px solid #ececec;
    }

    .itemb {
        padding: 0 16px;
        border-bottom: 1px solid #ececec;
    }

    .itemb:last-child {
        border-bottom: none;
    }

    .plug-container >>> .ivu-input-group-prepend .cicon-search {
        color: #fff !important;
        font-size: 0.426667rem;
    }
   .plug-container >>> .ivu-input{
    color:#fff!important;
   }
    >>> .ivu-breadcrumb > span:last-child {
        font-weight: 700;
        color: #495060;
        display: inline-block;
        width: 70px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: middle;
    }
</style>
<style scoped lang="less">
    @logo-size: 45px;
    .info {
        height: 66px;
        padding: 0 18px;
        flex-wrap: nowrap;
        align-items: center;
        background-color: #fff;

        .company-logo {
            min-width: @logo-size;
            min-height: @logo-size;
            max-width: @logo-size;
            max-height: @logo-size;
            width: @logo-size;
            height: @logo-size;
            overflow: hidden;

            img {
                width: inherit;
                height: inherit;
                border-radius: 50%;
            }
        }

        .txt {
            padding: 0 8px;

            .company-name {
                color: #333;
                font-size: 18px;
                font-weight: bold;
            }

            .level-path {
                font-size: 16px;

                .swiper-container {
                    .swiper-slide {
                        width: auto;
                        padding:2px 0;
                        line-height: 1em;
                        position: relative;
                        .item {
                            white-space: nowrap;

                            /deep/ .ivu-breadcrumb-item-link {
                                color: #57a3f3;
                            }

                            /deep/ .ivu-breadcrumb-item-separator {
                                font-size:12px;
                            }
                        }
                    }

                    .swiper-slide:last-child {
                        /deep/ .ivu-breadcrumb-item-link {
                            color: #333;
                        }

                        /deep/ .ivu-breadcrumb-item-separator {
                            display: none;
                        }
                    }
                }
            }
        }

    }
</style>
<template>
    <div class="container" ref="aa">
        <navigator title="通讯录" @back="$_back_$"/>
        <div class="wrap">
            <search v-model="searchValue" @on-search="$_Search_$"/>
            <div v-if="showCompany">
                <Row class="card info" type="flex">
                    <i-col class="company-logo">
                        <img src="/static/icons/company@3x.png" :alt="companyName">
                    </i-col>
                    <i-col class="txt flex-hide">
                        <p class="company-name text-ellipsis" @click="$_back_$(0)">{{companyName}}</p>
                        <div class="level-path one-line">
                            <breadcrumb separator=">">
                                <swiper :options="scrollOptions" ref="slevel">
                                    <swiper-slide v-for="(item, index) in bumenList" :key="index">
                                        <breadcrumb-item class="item" @click.native.stop.prevent="queryAgentMember(item)">
                                            <span class="text-ellipsis" style="display:inline-block; max-width:10em;">{{item.name | subName}}</span>
                                            <i slot="separator" class="cicon-go"></i>
                                        </breadcrumb-item>
                                    </swiper-slide>
                                </swiper>
                            </breadcrumb>
                        </div>
                    </i-col>
                </Row>
            </div>
            <ul class="list" v-if="isEmployee && $_List_$.length>0 ">
                <li v-for='item in $_List_$' @click="onNext(item)">
                    <img v-if="item.faceUrl" style="float: left" :src="$_global_$.ImgServer + item.faceUrl">
                    <img v-else src="/static/hysyy/faceimg.svg"/>

                    <div class="itemr"><p>{{item.name | subName}}</p>
                    </div>
                </li>
            </ul>
            <ul class="list" v-else>
                <li v-for='item in $_List_$' @click="onNext(item)" style="margin: 0">
                    <div class="itemb">
                        <div style="float: left;clear:both">
                            <p>
                                <span>{{item.name | subName}}</span>
                                <span v-if="item.count" style="color:#888888;"> ( {{item.count}} )</span>
                            </p>
                        </div>
                        <div style='text-align: right;color:#656D72; font-size:15px; font-weight:500;'>
                            <i class="cicon-go"></i>
                        </div>
                    </div>
                </li>
            </ul>

            <div v-if="$_PrevList_$.length==0 && companyer == true">
                <p class="cylxr">常用联系人</p>
                <ul class="list" style="margin-top: 0">
                    <li v-for='item in ccList' @click="enterXQ(item)">
                        <div style="float: left">
                            <img v-if="item.faceUrl" :src="$_global_$.ImgServer + item.faceUrl">
                            <img v-else src="/static/hysyy/faceimg.svg"/>
                        </div>
                        <div class="itemr">
                            <p>{{item.name}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import 'swiper/dist/css/swiper.css'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import search from '../public/search';
	import navigator from '../public/navigator';
	import loading from '@/views/loading'
	import {Indicator} from 'mint-ui';

	export default {
		components: {
			search,
			navigator,
			swiper,
			swiperSlide,
			loading,
			[Indicator.name]: Indicator
		},
		filters: {
			subName(key) {
				if (key.length > 7) {
					return key.substr(0, 7)
				}
				return key
			}
		},
		data() {
			return {
				userInfo: '',
				showCompany: true,
				isEmployee: false,
				departmentName: '',
				bumenList: [],
				$_PrevList_$: [],
                companyer:true,
				searchValue: '',
				$_List_$: [],
				ccList: [],
				$_SaveList_$: [],
				companyName: '',
				companyLogo: '',
				scrollOptions: {
					freeMode: true,
					observer: true,
					mousewheel: false,
					observeParents: true,
					slidesPerView: 'auto'
				}

			}
		},
		created() {
			let cookie = this.$_getCookie_$('m-sjwdnnaiowm');
			this.userInfo = JSON.parse(cookie);
			this.$_getBumen_$();
			this.getCCList();
		},
		methods: {
			$_back_$(len = -1) {
				if(len>0) return ;
				if (this.$_PrevList_$.length > 0) {
					this.isEmployee = false;
					this.bumenList.splice(len);
					this.$_List_$ = this.deepcopy(this.$_PrevList_$.splice(len)[0])
				} else {
					this.$router.back()
				}
			},
			enterXQ(item) {
				this.$root.$_Route_$('user', 'mobile', 'ygsy-txl-gr', {
					data: item,
					enterpriseId: this.userInfo.enterpriseId
				})

			},
			// 面包屑导航点击查询实时变更函数
			queryAgentMember(item) {
				let end = this.bumenList.indexOf(item); // 定义一个变量等于传入的账号的下标
				console.log(end);
				this.$_back_$(-(this.bumenList.length - end - 1))
			},
			onNext(item) {
				this.bumenList.push(item)
				if (item.child) {
					this.$_PrevList_$.push(this.deepcopy(this.$_List_$))
					this.$_List_$ = item.child;
					this.isEmployee = false;
				} else if (item.loginName) {
					item.company = this.companyName;
					if (!item.departmentName) {
						item.departmentName = this.departmentName;
					}
					this.enterXQ(item)
				} else {
					Indicator.open({
						text: '加载中...',
						spinnerType: 'fading-circle'
					});
					//请求部门下员工
					this.isEmployee = true;
					this.departmentName = item.name;
					this.$_PrevList_$.push(this.deepcopy(this.$_List_$));
					this.$_List_$ = [];
					this.$_sendQuery_$({
						method: "POST",
						url: `${this.$_global_$.serverPath}/company/company/${this.userInfo.enterpriseId}/department/${item.id | 0}/employee`,
						data: {}
					}).then(res => {
						Indicator.close();
						if (res.status === 200) {
							if (res.data.code === 0) {
								if (res.data.data.records) {
									this.$_List_$ = res.data.data.records;
								} else {
									Toast('部门下暂无员工');
								}
							}
						}
					});
				}
				this.$_SaveList_$ = this.deepcopy(this.$_List_$);
			},
			$_getBumen_$() {
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
				this.isEmployee = false;
				//请求公司名称
				this.$_sendQuery_$({
					method: "GET",
					url: `${this.$_global_$.serverPath}/zone/zone/${this.userInfo.zoneId}/enterprise/${this.userInfo.enterpriseId}`,
				}).then(res => {
					Indicator.close()
					// console.log(res)
					if (res.status === 200) {
						if (res.data.code === 0) {
							if (res.data.data) {
								this.companyName = res.data.data.name;

								this.companyLogo = res.data.data.businessLicense;

							}
						}
					}
				});

				//请求部门列表
				this.$_sendQuery_$({
					method: "GET",
					url: `${this.$_global_$.serverPath}/company/company/${this.userInfo.enterpriseId}/department`,
				}).then(res => {
					if (res.status === 200) {
						if (res.data.code === 0) {
							if (res.data.data) {
								this.$_List_$ = res.data.data;
								this.$_SaveList_$ = this.$_List_$;
							}
						}
					}
				});
			},
			$_Search_$() {
				if (this.searchValue == '') {
					Toast('请输入要查询的内容');
					return
				}
				if (this.validateValue(this.searchValue)) {
					Toast('输入包含非法字符');
					return
				}
				if (this.searchValue.length > 50) {
					this.searchValue = this.searchValue.substring(0, 50)
				}

				this.showCompany = false;
				this.$_List_$ = [];
				this.isEmployee = true;

				let datas = {};
				if ((/^1[34578]\d{9}$/.test(this.searchValue))) {
					datas.phoneNum = this.searchValue;
				} else {
					datas.name = this.searchValue;
				}

				this.$_sendQuery_$({
					method: "POST",
					url: this.$_global_$.serverPath + `/company/company/${this.userInfo.enterpriseId}/employee/search`,
					data: datas,
					headers: {
						"Content-type": "application/json"
					}
				}).then(rsp => {
					if (rsp.status === 200) {
						if (rsp.data.code === 0) {
                             this.companyer = false
							if (rsp.data.data == null) {
                               
								Toast('暂无数据')
							} else {
								this.$_List_$ = rsp.data.data.records;
                                
							}
						}
					}
				});
			},
			//常用联系人
			getCCList() {
				this.$_sendQuery_$({
					method: "POST",
					url: `${this.$_global_$.serverPath}/company/company/employee/recent/list`,
					data: {}
				}).then(res => {
					if (res.status === 200) {
						if (res.data.code === 0) {
							if (res.data.data) {
								this.ccList = res.data.data;
							}
						}
					}
				});
			},
			validateValue(value) {
				let regEn = /[`~!@#$%^&*_+<>:{}.\/'[\]]/im;
				let regCn = /[#￥ |]/im;
				if (regEn.test(value) || regCn.test(value)) {
					return true;
				} else {
					return false;
				}
			},
			deepcopy(object) {
				return JSON.parse(JSON.stringify(object))
			}
		}
	}
</script>
