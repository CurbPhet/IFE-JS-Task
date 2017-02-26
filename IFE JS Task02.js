<!DOCTYPE html>
<html>
  <head>
	<meta charset="utf-8">
	<title>IFE JavaScript Task 01</title>
  </head>
<body>

  <h3>污染城市列表</h3>
  <ul id="aqi-list">
<!--
	<li>第一名：福州（样例），10</li>
	  <li>第二名：福州（样例），10</li> -->
  </ul>

<script type="text/javascript">
var aqiData = [
	["北京", 90],
	["上海", 50],
	["福州", 10],
	["广州", 50],
	["成都", 90],
	["西安", 100]
];
/*
将阿拉伯数字替换为汉字
*/
function _convert(str){
	var arr = ["零","一","二","三","四","五","六","七","八","九"];
	for (var i = 0; i < arr.length; i++) {
		str = str.replace(new RegExp( i , "g"), arr[i]);
	}
	return str;
}
(function () {
  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
  aqiData.sort(function(a,b){
	return b[1] - a[1];
  });
  var counter=1;//计数器
  for(var i=0;i<aqiData.length;i++){
	if(aqiData[i][1]>60){//筛选大于60的城市
	  var list=document.createElement("LI");//创建新li
	  var text="第" + counter++ +"名：" ;
	  text=_convert(text);
	  text=text+ aqiData[i][0] + "，" + aqiData[i][1];
	  list.innerHTML=text;
	  document.getElementById("aqi-list").appendChild(list);//将li添加到aqq-list中
	}
  }
})();
</script>
</body>
</html>
