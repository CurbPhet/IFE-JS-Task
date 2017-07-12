<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 04</title>
    <style media="screen">
        #queue {
            margin-top: 20px;
        }
        div>span {
            color: white;
            background-color: pink;
            margin-left: 2px;
        }
        .btn {}
    </style>
</head>

<body>
    <p>我是一个队列</p>
    <p>请输入插入数字： <input id="input-num" type="text"></p>
    <div class="btn">
        <button id="left-in">左侧入</button>
        <button id="right-in">右侧入</button>
        <button id="left-out">左侧出</button>
        <button id="right-out">右侧出</button>
    </div>
    <div id="queue">
        <span>10</span>
        <span>3</span>
        <span>7</span>
        <span>12</span>
        <span>11</span>
        <span>30</span>
    </div>
    <script type="text/javascript">
        var queue = document.getElementById("queue")
        var inputNumber = document.getElementById("input-num")
            //考虑数字的合法性
        function inputNum(inputNumber) {
            if (inputNumber.value == "") {
                alert("请输入一个数字")
            } else if (!isNaN(inputNumber.value)) {
                return inputNumber.value
            } else {
                alert("格式不对，请重新输入一个数字！")
                return "-1"
            }
        }
        //点击不同的按钮实现在模拟队列中不同位置插入或移除数字
        function leftIn() {
            //左侧进入队列
            var value = inputNum(inputNumber)
            if (value !== "-1") {
                var insertedNode = document.createElement("span")
                insertedNode.innerText = value
                queue.insertBefore(insertedNode, queue.firstElementChild)
            }
        }
        function rightIn() {
            //右侧进入队列
            var value = inputNum(inputNumber)
            if (value !== "-1") {
                var insertedNode = document.createElement("span")
                insertedNode.innerText = value
                queue.appendChild(insertedNode)
            }
        }
        function leftOut() {
            //左侧出队列
            alert(queue.firstElementChild.innerText)
            queue.firstElementChild.remove()
        }
        function rightOut() {
            //右侧出队列
            alert(queue.lastElementChild.innerText)
            queue.lastElementChild.remove()
        }
        function init() {
            var btnLeftIn = document.getElementById("left-in")
            var btnRightIn = document.getElementById("right-in")
            var btnLeftOut = document.getElementById("left-out")
            var btnRightOut = document.getElementById("right-out")
            btnLeftIn.onclick = leftIn
            btnRightIn.onclick = rightIn
            btnLeftOut.onclick = leftOut
            btnRightOut.onclick = rightOut
        }
        init();
        //点击队列中任何一个元素，则钙元素被从队列中移除
        queue.addEventListener("click", function(e) {
            if (event.target.nodeName.toLowerCase() == "span") {
                queue.removeChild(event.target)
            }
        })
    </script>

</body>

</html>
