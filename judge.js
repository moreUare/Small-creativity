/**
   *judge 1.0.0
   *写在prototype中，可以链式调用的
   **/
var J = (element,returnType,success,error) => {
	"use strict";
	//判断一个数组
	if(Array.isArray(element)){
		success();
		return true;
	}else{
		error();
		return false;
	}
}
var Judge = J;