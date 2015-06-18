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
		node: '',
		imgNode: '',
		btnNode: '',
		imgEle: 'li',
		btnEle: 'li',
		isArrow: false,
		next: '',
		previous: '',
		interval: 3000
	}, opts || {});
}


Carousel.prototype = {
	constructor: Carousel,
	init: function(){
		var self = this;

		self.initDom();
		self.move();
	},
	initDom: function(){
		var self = this;

		self.nodeContainer = document.getElementById(self.options.node);
		self.imgContainter = TOOLS.getClass(self.nodeContainer, self.options.imgNode)[0];
		self.btnContainter = TOOLS.getClass(self.nodeContainer, self.options.btnNode)[0];
		self.imgs = self.imgContainter.getElementsByTagName(self.options.imgEle);
		self.btns = self.btnContainter.getElementsByTagName(self.options.btnEle);
		self.next = self.options.isArrow ? TOOLS.getClass(self.nodeContainer, self.options.next) : null;
		self.previous = self.options.isArrow ? TOOLS.getClass(self.nodeContainer, self.options.previous) : null;

		self.singleWidth = TOOLS.css(self.imgs[0], 'width');
		self.singleHeight = TOOLS.css(self.imgs[0], 'height');;
		self.totalWidth = parseInt(self.singleWidth) * self.imgs.length;
	},
	move: function(){
		var self = this;

		var index = 0;

		self.imgContainter.style.width = self.totalWidth + 'px';
		function(){}
		setTimeout(function(){
			index++;
			self.imgContainter.style.left = -index * parseInt(self.singleWidth) + 'px';
		}, 2000);
		
		console.log(self.totalWidth);
	},
	bind: function(){}
}

var TOOLS = {
	//合并对象
	extend: function(obj1, obj2){
		for(var key in obj2){
			obj1[key] = obj2[key];
		}
		return obj1;
	},
	//获取页面元素的class
	getClass: function(parent, cls){
		var eles = (parent || document).getElementsByTagName('*'),
			clsArr = [],
			re = new RegExp('\\b' + cls + '\\b');

		for(var i=0, elesLen=eles.length; i<elesLen; i++){
			if(re.test(eles[i].className)){
				clsArr.push(eles[i]);
			}
		}
		return clsArr;
	},
	//获取计算后的css
	css: function(ele, attribute){
		if(window.getComputedStyle){
			return getComputedStyle(ele, null)[attribute];
		}else{
			return ele.currentStyle[attribute];
		}
	}
}
