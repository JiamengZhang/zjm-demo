/*  
 * 日期选择器  
 */
$("#datepicker").datepicker();

/*
 * 工具提示框
 */
$("#datepicker").tooltip();
				
/*  
 * 菜单  
 */
$("#menu").menu();
				
/*
 * accordion折叠面板
 */
$("#accordion").accordion();
$(".accordion").accordion();
				
/*
 * tabs标签页
 */
$("#tabs").tabs();
				
/*
 * dialogs对话框
 */
$("#create-user").click(function() {
	$("#dialog-form").dialog("open");
});    

/*
 * 对话框提示
 */
function updateTips(t) {
	$(".validateTips").text(t).addClass("ui-state-highlight");
    setTimeout(function(){
		$(".validateTips").removeClass("ui-state-highlight",1500);
	}, 500 );
}

/*
 * 检验对话框input输入长度
 */
function checkLength(o,n,min,max) {
	if(o.val().length > max || o.val().length < min) {
        o.addClass("ui-state-error");
        updateTips("" + n + " 的长度必须在 " + min + " 和 " + max + " 之间。" );
        return false;
	} else {
        return true;
	}
}
 
/*
 * 检验对话框input是否符合正则表达式
 */
function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ) ) ) {
		o.addClass( "ui-state-error" );
        updateTips( n );
        return false;
    } else {
        return true;
    }
}


/*
 * spinner旋转器
 * 1、切换禁用/启动
 * 2、切换部件
 * 3、获取值
 * 4、设置值为5
 */
$("#spinner").spinner();
$("#disable").click(function() {
    if($("#spinner").spinner("option","disabled")){
		$("#spinner").spinner("enable");
	}else{
        $("#spinner").spinner("disable");
	}
});
$("#destroy").click(function() {
	if($("#spinner").data("ui-spinner")){
        $("#spinner").spinner("destroy").addClass("spinnerInputItem");
	}else{
        $("#spinner").spinner().removeClass("spinnerInputItem");
	}
});	
$("#getvalue").click(function() {
	alert($("#spinner").spinner("value"));
});
$("#setvalue").click(function() {
	$("#spinner").spinner("value",5);
});




