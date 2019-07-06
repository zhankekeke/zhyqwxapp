export const ACCESS_VISITOR = 0x1;
export const ACCESS_EMPLOYEE = 0x2;
export const ACCESS_SERVICE = 0x4;
export const ACCESS_HYSYD = 0x8;
const menus = [{
	id:0,
	name:'员工首页',
	showIndex:false,
	url:['user', 'mobile', 'ygindex'],
	access:ACCESS_VISITOR|ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:1,
	name:'访客预约',
	url:['user', 'mobile', 'fk-yy-bflb'],
	icon:'/static/ygindex/icons/fangkeyuyue@2x.png',
	fixedIcon:'/static/ygindex/icons/fangkeyuyue-bai@2x.png',
	access:ACCESS_VISITOR|ACCESS_SERVICE,
}, {
	id:3,
	name:'系统消息',
	showIndex:false,
	url:['user', 'mobile', 'ygsy-xtxx-list'],
	access:ACCESS_VISITOR|ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:4,
	name:'个人中心',
	showIndex:false,
	url:['user', 'mobile', 'grzx'],
	access:ACCESS_VISITOR|ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:5,
	name:'通讯录',
	url:['user', 'mobile', 'ygsy-txl'],
	icon:'/static/ygindex/icons/tongxunlu@2x.png',
	fixedIcon:'/static/ygindex/icons/tongxunlu-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:6,
	name:'通知发布',
	url:['user', 'mobile', 'ygsy-tzfb'],
	icon:'/static/ygindex/icons/tongzhifabu@2x.png',
	fixedIcon:'/static/ygindex/icons/tongzhifabu-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:7,
	name:'出入记录',
	url:['user', 'mobile', 'ygsykqjl'],
	icon:'/static/ygindex/icons/kaoqin@2x.png',
	fixedIcon:'/static/ygindex/icons/kaoqin-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:8,
	name:'会议室预约',
	url:['user', 'mobile', 'ygsyhysyy'],
	icon:'/static/ygindex/icons/huiyishiyuyue@2x.png',
	fixedIcon:'/static/ygindex/icons/huiyishiyuyue-bai@2x.png',
	access: ACCESS_HYSYD,
}, {
	id:9,
	name:'访客管理',
	url:['user', 'mobile', 'ygsyfkgl'],
	icon:'/static/ygindex/icons/fangkeguanli@2x.png',
	fixedIcon:'/static/ygindex/icons/fangkeguanli-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:10,
	name:'园区活动',
	url:['user', 'mobile', 'ygsyyqhd'],
	icon:'/static/ygindex/icons/yuanquhuodong@2x.png',
	fixedIcon:'/static/ygindex/icons/yuanquhuodong-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:11,
	name:'餐厅实况',
	url:['user', 'mobile', 'ygsyctsk'],
	icon:'/static/ygindex/icons/canting@2x.png',
	fixedIcon:'/static/ygindex/icons/canting-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:12,
	name:'停车服务',
	url:['user', 'mobile', 'ygsytcff'],
	icon:'/static/ygindex/icons/tingchechang@2x.png',
	fixedIcon:'/static/ygindex/icons/tingchechang-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:13,
	name:'积分商城',
	url:['user', 'mobile', 'ygsyjfsc'],
	icon:'/static/ygindex/icons/jifenshangcheng@2x.png',
	fixedIcon:'/static/ygindex/icons/jifenshangcheng-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:14,
	name:'管家服务',
	url:['user', 'mobile', 'ygsygjfw'],
	icon:'/static/ygindex/icons/guanjiafuwu@2x.png',
	fixedIcon:'/static/ygindex/icons/guanjiafuwu-bai@2x.png',
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:15,
	name:'企业服务',
	showIndex:false,
	url:['user', 'mobile', 'qyfw'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:16,
	name:'服务受理',
	url:['user', 'mobile', 'ygsyfwsl'],
	icon:'/static/ygindex/icons/fuwushouli@2x.png',
	fixedIcon:'/static/ygindex/icons/fuwushouli-bai@2x.png',
	access:ACCESS_SERVICE,
}, {
	id:17,
	name:'车辆绑定',
	showIndex:false,
	url:['user', 'mobile', 'ygsytccqb'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:18,
	name:'在线预约',
	showIndex:false,
	url:['user', 'mobile', 'fk-zxyy'],
	access:ACCESS_VISITOR,
}, {
	id:19,
	name:'新增车辆',
	showIndex:false,
	url:['user', 'mobile', 'ygsyxzcl'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:20,
	name:'访客详情',
	showIndex:false,
	url:['user', 'mobile', 'fk-yyxq'],
	access:ACCESS_VISITOR,
}, {
	id:21,
	name:'邀请信息',
	showIndex:false,
	url:['user', 'mobile', 'fk-yyjj'],
	access:ACCESS_VISITOR,
}, {
	id:22,
	name:'邀请-主动邀请',
	showIndex:false,
	url:['user', 'mobile', 'fkyyewm'],
	access:ACCESS_VISITOR,
}, {
	id:23,
	name:'邀请通过',
	showIndex:false,
	url:['user', 'mobile', 'fk-yy-pass'],
	access:ACCESS_VISITOR,
}, {
	id:24,
	name:'预约记录',
	showIndex:false,
	url:['user', 'mobile', 'ygsytccyyjl'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:25,
	name:'缴费记录',
	showIndex:false,
	url:['user', 'mobile', 'ygsytccjfjl'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:26,
	name:'编辑车辆',
	showIndex:false,
	url:['user', 'mobile', 'ygsyclbj'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:27,
	name:'解绑车辆',
	showIndex:false,
	url:['user', 'mobile', 'ygsyclxq'],
	access:ACCESS_EMPLOYEE|ACCESS_SERVICE|ACCESS_VISITOR,
}, {
	id:28,
	name:'系统通知',
	showIndex:false,
	url:['user', 'mobile', 'ygsy-xtxx-inform'],
	access:ACCESS_VISITOR|ACCESS_EMPLOYEE|ACCESS_SERVICE,
}, {
	id:29,
	name:'系统详情',
	showIndex:false,
	url:['user', 'mobile', 'ygsy-xtxq'],
	access:ACCESS_VISITOR|ACCESS_EMPLOYEE|ACCESS_SERVICE,
}];
export default menus;
export const visitorMenus = menus.filter(item=>[1,12].indexOf(item.id)!==-1)
export function checkVisitor(menu) {
	return menu.access & ACCESS_VISITOR > 0
}
export function checkService(menu) {
	return menu.access & ACCESS_SERVICE > 0
}
export function checkEmployee(menu) {
	return menu.access & ACCESS_EMPLOYEE > 0
}
