<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>
  <label>请输入北京今天空气质量：<input id="aqi-input" type="text"></label>
  <input type=button  value="确认填写" onclick="change()">

  <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

<script type="text/javascript">

function change() {
  var x=document.getElementById("aqi-input");
  var y = x.value;
  document.getElementById("aqi-display").innerHTML=y;
};
</script>
</body>
</html>
