var Tools = (function(tools){

	//通过选择器获取第一个原生dom元素
	tools.$$ = function(selector){
		return document.querySelector(selector);
	}

	//取[a-b)区间随机数
	tools.getRandomAtoB = function(min, max){
		return Math.random() * (max - min) + min; 
	}










	return tools
})(Tools || {});