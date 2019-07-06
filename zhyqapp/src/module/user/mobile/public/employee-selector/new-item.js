/**
 * 列表节点重新封装，便于选择和复原原始数据
 * @author Y.Heng
 * @param node 当前节点
 * @param defaultSelecteds 原始的已加载的数据
 * */

import deepcopy from 'deep-copy'
export default class mapItem {
	constructor(node, defaultSelecteds=[], watcher, constState = {}, istop=true){
		this.istop      = istop;
		this.watcher    = watcher;
		this.node       = (node instanceof Array)? {child:node}: node;
		this.constValue = constState.hasOwnProperty(this.node.employeeId)?!!constState[this.node.employeeId]:void 0;
		this.child      = (this.node.child || this.node.employeeList || []).map(item=>new mapItem(item, defaultSelecteds, watcher, constState, false))
		if(!this.isDepartment){
			this.defaultState = defaultSelecteds.indexOf(this.node.employeeId) !== -1;
		}
	}
	/**
	 * 当前节点是否为部门节点
	* */
	get isDepartment(){
		return this.node.hasOwnProperty('child')
	}

	/**
	 * 当前节点是否未最后一级部门节点 或最后一级节点
	 * */
	get isLastNode(){
		return !this.node.child
	}

	/**
	 * 当前节点是否已经被选中
	 * */
	get isSelected(){
		if(this.isDepartment){
			return this.employeeCount === this.values.length && this.values.length !== 0
		}else{
			return this.constValue === void 0
					? (this.$state === void 0
						? this.defaultState
						: this.$state)
					: this.constValue;
		}
	}
	/**
	 * 改变当前节点的选中状态
	 * */
	set isSelected(state){
		if(this.constValue ===  void 0) this.setState(state)
	}

	/**
	 * 子节点是否有选中且未全部选中的状态
	 * */
	get isIndeterminate(){
		return this.isDepartment
				? this.values.length>0 && !this.isSelected
				: false
	}

	/**
	 * 取得当前节点中已选中的员工列表
	 * */
	get values(){
		if(this.isDepartment){
			return this.isLastNode
					? this.child.filter(item=>item.isSelected).map(item=>item.values)
					: [].concat(...this.child.map(item=>item.values))
		}else{
			return this.isSelected ? deepcopy(this.node): null
		}
	}

	/**
	 * 获取该节点下所有员工列表
	 * */
	get employees(){
		if(this.isDepartment){
			return [].concat(...this.child.map(item=>item.employees))
		}else return [deepcopy(this.node)]
	}
	/**
	 * 获取该节点下所有员工的人数
	 * */
	get employeeCount(){
		return this.employees.length
	}

	setState(state, first=true){
		if(this.isDepartment) this.child.forEach(item=>{
			item.setState(state)
		});
		else this.$state = state;
		first && typeof this.watcher === 'function' && this.watcher()
	}
	setStateById(id, state){
		if(this.isDepartment){
			if(this.employees.map(item=>item.employeeId).indexOf(id)!==-1){
				return this.child.some(item=>item.setStateById(id, state))
			}
		}else{
			if(this.node.employeeId === id){
				this.$state = state;
				typeof this.watcher === 'function' && this.watcher();
				return true
			}
		}
	}
	/**
	 * 重置该节点的选中状态
	 * */
	resetState(defaultSelecteds = [], first=true){
		if(this.isDepartment){
			this.child.map(item=>item.resetState(defaultSelecteds, false));
		}else {
			this.$state = void 0;
			this.defaultState = defaultSelecteds.indexOf(this.node.employeeId) !== -1
		}
		first && typeof this.watcher === 'function' && this.watcher()
	}
}
