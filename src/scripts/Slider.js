/**
 * 
 * @authors guoqun.zhang (guoqun.zhang@qunar.com)
 * @date    2015-05-26 17:20:34
 * @version 0.0.1
 */
/*
参数：
	元素节点：node
方法：
	是否自动播放：autoPlay();
	
*/
function Slider(opts){
	this.options = TOOLS.extend({
		node: ''
	}, opts);
}


Slider.prototype = {
	constructor: Slider,
	init: function(){},
	initDom: function(),
	render: function(){}
}

var TOOLS = {
	extend: function(obj1, obj2){
		for(var key in obj2){
			obj1[key] = obj2[key];
		}
		return obj1;
	}
}
