jRemoteValidate
===============

jQuery 插件 jRemoteValidate提供远程验证, 通过将指定ID的文本框值作为参数请求到指定的服务器方法，并在回调函数中返回任意格式的结果，任何处理可在回调函数中完成。



demo: http://demo.it175.cn:8080/jValidate/test.html

代码示例:
===============
html代码

```html
<html>
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="jRemoteValidate.js"></script>
	
	<style type="text/css">
		.container {width:600px;margin-top:20px;}
	</style>
</head>
<body>
	<div id="cardContainer" class="container">
		<label for="mobile" style="float:left;">test：</label>
		<input type="text" id="mobile" />
	</div>
<body>
</html>
```

javascript代码调用
===============

 loadImgURL 为可选项, 你可以在 jRemoteValidate.js文件中直接配置你的加载图片路径<br>
 successHandle 函数是调用成功后的回调函数,
 你可以在这个回调函数中自定义你的显示结果.
```javascript


$('#mobile').jRemoteValidate({
    url: 'json1.html',
    field: 'mobile', //获取id为mobile的文本框值
    renderTo: '#cardContainer', //渲染到某个元素中
    loadImgURL: 'loading_small.gif', //加载图片
    success: successHandle
});
	
// 自定义返回成功后的内容
function successHandle(rs) {
	var html = '';
	if(rs.state == 1) {
		html = '<p class="msg">name:<font color=#4682B4>'+rs.data.name+
		'</font>,balance:$<font color=red>'+rs.data.balance+'</font></p>';
	}
	if(rs.state == 2) html = '<p class="msg"><font color=red>卡号不存在!</font></p>';
	if(rs.state == 3) html = '<p class="msg"><font color=red>服务器错误! </font></p>';
	
	
	return html;
}

```
