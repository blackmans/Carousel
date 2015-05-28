/**
 * 
 * @authors guoqun.zhang (guoqun.zhang@qunar.com)
 * @date    2015-05-26 17:20:34
 * @version 0.0.1
 */
/*
名称：图片轮播组件

参数：
	元素节点：node 类型：js Dom对象
	每次左右移动的距离：width
	每次上下移动的距离：height
	图片轮播的时间间隔：interval

方法：
	是否自动播放：autoPlay();
	
*/
function Carousel(opts){
	this.options = TOOLS.extend({
		node: null,
		imgNode: null,
		btnNode: null,
		imgEle: null,
		btnEle: null,
		interval: 3000
	}, opts || {});
}


Carousel.prototype = {
	constructor: Carousel,
	init: function(){},
	initDom: function(),
	render: function(){},
	initUI: function(){},
	bind: function(){}
}

var TOOLS = {
	extend: function(obj1, obj2){
		for(var key in obj2){
			obj1[key] = obj2[key];
		}
		return obj1;
	}
}
