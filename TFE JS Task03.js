<!DOCTYPE html>
<html>
  <head>
	<meta charset="utf-8">
	<title>IFE JavaScript Task 01</title>
  </head>
<body>

  <ul id="source">
	<li>北京空气质量：<b>90</b></li>
	<li>上海空气质量：<b>70</b></li>
	<li>天津空气质量：<b>80</b></li>
	<li>广州空气质量：<b>50</b></li>
	<li>深圳空气质量：<b>40</b></li>
	<li>福州空气质量：<b>32</b></li>
	<li>成都空气质量：<b>90</b></li>
  </ul>

  <ul id="(resort)">
	<!--
	<li>第一名：北京空气质量：<b>90</b></li>
	<li>第二名：北京空气质量：<b>90</b></li>
	<li>第三名：北京空气质量：<b>90</b></li>
	 -->

  </ul>

  <button id="sort-btn">排序</button>

<script type="text/javascript">
/*
convert方法
将阿拉伯数字替换为汉字
*/
function convert(str){
	var arr = ["零","一","二","三","四","五","六","七","八","九"];
	for (var i = 0; i < arr.length; i++) {
		str = str.replace(new RegExp( i , "g"), arr[i]);
	}
	return str;
}
/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
	var list=document.getElementById("source").getElementsByTagName("li");  //获取source列表内容
	var data=new Array() ;
	var upData;
	for(var i = 0 ; i < list.length ; i++){
		upData=new Array(2);
		upData[0]=list[i].innerHTML.substring(0,2);//通过substring取到城市名
		upData[1]=list[i].innerHTML.match(/\d/g).join("");//通过正则表达式取得污染指数
		data.push(upData);
	}
	return data;
  /*
  data = [
	["北京", 90],
	["北京", 90]
  ]
  */
}
/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  	data.sort(function(a,b){
		return b[1] - a[1];
  	});
  	return data;
}
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
	var counter = 1 ;//计数器
	for(var i = 0 ; i < data.length ; i++){
		var list = document.createElement("li");//创建新的li
		var text="第" + counter++ +"名：" ;
		text=convert(text);
		list.innerHTML=text+ data[i][0] + "空气质量：<b>" + data[i][1] + "</b>";
		document.getElementById("(resort)").appendChild(list);//将li添加到resort中
	}
}
function btnHandle() {
 	var aqiData = getData();
 	aqiData = sortAqiData(aqiData);
 	render(aqiData);
}
function init() {
  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  	document.getElementById("sort-btn").addEventListener("click", btnHandle);
}
init();
</script>
</body>
</html>
