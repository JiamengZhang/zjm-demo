/* 
 * @description 各种接口变量
===============================================================================================*/
var interfaces = {};

(function(interfaces, undefined) {
	//获取顶部相关Html
	interfaces.getTopbarHtml = '_topbar.html';
	
	//获取底部相关html
	interfaces.getSidebarHtml = '_sidebar.html';
	
	//获取table数据
	interfaces.getSimpleTable = 'table/json/simpleTable.json';
	
	//获取table数据jsonp
	interfaces.getSimpleTableJsonp = 'table/json/simpleTable.jsonp';
	
})(interfaces)

/* 
 * @description 控制侧边栏高度
===============================================================================================*/
function sidebarHeight(){
	var clientHeight = document.documentElement.clientHeight;//整个屏幕高度
	var topNavHeight = $("#topNav").height();//顶部高度
	var contentHeight = $(".main-content").height();//主内容高度
	var navHeight = $("#sidebar").height();
					
	if((clientHeight-topNavHeight) >= contentHeight){
		$(".sidebar").height(clientHeight-topNavHeight);
	}else{
		$(".sidebar").height(contentHeight);
	}	
}


/* 
 * @description 加载头部
===============================================================================================*/
function getTopbarHtml(){
	$.ajax({
		type: "get",
		url: interfaces.getTopbarHtml,
		success: function(data) {
			$('#topNav').html(data);
		}
	});
}

/* 
 * @description 加载侧导航栏
===============================================================================================*/
function getSidebarHtml(name,submenu){
	$.ajax({
		type: "get",
		url: interfaces.getSidebarHtml,
		success: function(data) {
			$('#sidebar').html(data);
			$("#sidebar").find(".nav > li").each(function(i,e){
				if($(this).attr("data-html")==name){
					$(this).addClass("active");
					if(submenu){
						$(this).addClass("open");
						$(this).attr("data-blean", "false");
						$(this).find('b').css({"-webkit-transform" : "rotateX(180deg)"})
						$(this).find(".submenu").css({"display":"block"});
						$(this).find(".submenu>li").each(function(){
							if($(this).attr("data-html")==submenu){
								$(this).addClass("active");
							}
						})
					}
				}
			});			
		}
	});
}

