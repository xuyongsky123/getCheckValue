//获得选择框(复选框/单选框)选中单元的值
//参数 nameStr 求值元素的name属性
//参数 fatherObj 需要在哪个DOM元素下执行 如果没有传递则使用document
function Js_getCheckValue(nameStr, fatherObj){
	var Checkers;
	if (!fatherObj || typeof(fatherObj)!= "object"){
		Checkers = document.getElementsByTagName("input");
	}else{
		Checkers = fatherObj.getElementsByTagName("input");
	}
	if (!Checkers) return false;
	var valueStr = [];
	for (var i=0;i<Checkers.length;i++){
		if (Checkers[i].name==nameStr && Checkers[i].checked==true){
			valueStr.push(Checkers[i].value);
		}
	}
	return valueStr;
}