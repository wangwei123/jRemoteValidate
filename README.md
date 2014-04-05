jRemoteValidate
===============

jRemoteValidate is a jquery plugin, using to ajax request server and response message to client. the message is support custom.



code example:
  html  
-------
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

-------
```javascript


$('#mobile').jRemoteValidate({
    url: 'json1.html',
    field: 'mobile', // send param mobile=$('#mobile').val() to server
    renderTo: '#cardContainer', //container
    loadImgURL: 'loading_small.gif', //loading image path
    success: successHandle
});
	
// custom you want show's message format
function successHandle(rs) {
	var html = '';
	if(rs.state == 1) {
		html = '<p class="msg">name:<font color=#4682B4>'+rs.data.name+
		'</font>,balance:$<font color=red>'+rs.data.balance+'</font></p>';
	}
	if(rs.state == 2) html = '<p class="msg"><font color=red>card is not exists!</font></p>';
	if(rs.state == 3) html = '<p class="msg"><font color=red>server error! </font></p>';
	
	
	return html;
}

```
