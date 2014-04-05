(function($) {
    $.fn.jRemoteValidate = function(config) {

        if (this.size() != 1)
            $.error('请为这个插件提供一个唯一的编号');
        
        var c = {
        	lastValue : '',
        	renderTo : '',
        	loadImgURL : 'resources/assets/img/loading_small.gif',
        	success : function(rs){
        		//外面重写这个方法，返回html，也可以不返回
        	}
        };
        
        return this.each(function() {
        	if (config) $.extend(c, config);
        	
            var $this = $(this);
            var render = $(c.renderTo);
            
            $this.blur(function(){
        		var value = $(this).val();
        		if(value.length > 0 && value != c.lastValue) {
        			render.find('img.imgLoading').remove();
        			render.find('p.msg').remove();
        			render.append('<img class="imgLoading" src="'+c.loadImgURL+'" />');
        			
        			ajaxResult(value);
        			
        			$(this).css('float','left');
        			
        			$img = render.find('img.imgLoading');
        			$img.css('height', $this.css('height')).css('float','left');
        			
        	    	c.lastValue = value;
        		}
        	});
            
            function ajaxResult(value) {
            	var data = {};
            	if(c.field) data[c.field] = value;
            	
            	//$.get(c.url, data).done(success);
            	
            	$.ajax({
            		url:c.url,
            		data:data,
            		dataType:'json',
            		success:successHandle,
            		error:function(jqXHR, textStatus, errorThrown){
            			alert(textStatus + ' : ' + errorThrown);
            		}
            	});
            }
            
            function successHandle(result){
        		var html = c.success(result);
        		
        		
        		setTimeout(function(){
        			render.find('img').remove();
        			render.append(html);
            		
            		var height = render.height();
            		var top = render.offset().top;
            		$('p.msg').css('color','#BFBFBF').css('font-weight','bold');
            		$('p.msg').css('height', $this.css('height'));//.css('float','left')
            		
            		render.offset().top = top;
            		render.height(height);
            		
        		}, 1000);
        		
        		
        	}
        });
    };
})(jQuery);