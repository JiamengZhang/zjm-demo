/*无动画效果的弹出层*/
function windowShow($target){
	var $window = $target.find(".window");
	$target.attr("active","");	
}
function windowHide($target){
	var $window = $target.find(".window");
	$target.removeAttr("active","");	
}
$(function(){
	$("body").on("click",">[class^='window']",function(){
		windowHide($(this));
	});//点击面板任意位置关闭面板
	$("body>[class^='window']").on("click",".window",function(e){
			e.stopPropagation();
	});//组织面板内部点击事件 冒泡
	$("body>[class^='window']").on("click",".btn-close",function(){
		windowHide($(this).parents("[class^='window']"));		
	});
})

function tabSys($tabSys_tab,$tabSys_content,activeIndex){//通用型标签切换程序
	if(!activeIndex>=0)	activeIndex=0;
	$tabSys_tab.children().eq(activeIndex).attr("active","");
	$tabSys_content.children().css("display","none");
	$tabSys_content.children().eq(activeIndex).fadeIn(100);
	
	$tabSys_tab.children().on("click",this,function(){
		if($(this).attr("active")==undefined){
			$tabSys_content.children().eq($tabSys_tab.find("[active]").removeAttr("active").index()).fadeOut(100,function(){
				$tabSys_content.children().eq($tabSys_tab.find("[active]").index()).fadeIn(100);
			});
			$(this).attr("active","");	
			}
		});
}
function tabClose($tabClose_tab,$tabClose_content,activeIndex){//通用型标签关闭
	$tabClose_tab.children().on("click",".tab-close",function(e){
		e.stopPropagation();
	});
	if(!activeIndex>=0)	activeIndex=0;
	$tabClose_tab.children().on("click", ".tab-close",function(){
		var n = $(this).parent().index()
		$tabClose_tab.children().eq(n).remove();
		$tabClose_tab.children().removeAttr("active","");
		$tabClose_tab.children().eq(activeIndex).attr("active","");
		$tabClose_content.children().eq(n).remove();
		$tabClose_content.children().eq(activeIndex).fadeIn(100);	
	})
}
