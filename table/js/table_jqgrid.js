/*
 * @description table (jqgrid.js)
 * @author JiaMeng.Zhang
 * @time 2016.07.04
 */


	var grid_selector = "#grid-table";
	var pager_selector = "#grid-pager";
	
	//动态设置表格的宽度
	$(window).on('resize.jqGrid', function () {
		$(grid_selector).jqGrid( 'setGridWidth', $(".jqgridContainer").width());
	})
	
	var parent_column = $(grid_selector).closest('[class*="col-"]');
	$(document).on('settings.ace.jqGrid' , function(ev, event_name, collapsed) {
		if( event_name === 'sidebar_collapsed' || event_name === 'main_container_fixed' ) {
			//setTimeout is for webkit only to give time for DOM changes and then redraw!!!
			setTimeout(function() {
				$(grid_selector).jqGrid( 'setGridWidth', parent_column.width() );
			}, 0);
		}
	})
	
	var grid_data = 
			[ 
				{id:"1",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"2",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"3",name:"selina",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"4",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"5",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"6",name:"selina",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"7",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"8",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"9",name:"selina",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"11",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"12",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"13",name:"selina",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"14",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"15",name:"Andy",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"},
				{id:"16",name:"selina",age:"23",telephone:"13532327189",birthday:"1992-12-12",QQ:"871096972",email:"871096972@qq.com"}
			];
	
	
	
	$(grid_selector).jqGrid({
//		url: '../json/jqgrid.json',
//      mtype: "GET",
//		datatype: "json",
		data: grid_data,
		datatype: "local",
        colNames:['编号','姓名','年龄','手机','生日','QQ','邮件','操作'],
        colModel:[       	
     		{name:'id',index:'',width:50, fixed:true,ortable:false,align:'center'},
			{name:'name',index:'name',sortable:true,align:'center'},
			{name:'age',index:'age',sortable:false,align:'center'},
			{name:'telephone',index:'telephone',sortable:false,align:'center'},
			{name:'birthday',index:'birthday',sortable:false,align:'center'},
			{name:'QQ',index:'QQ',sortable:false,align:'center'},
			{name:'email',index:'email',sortable:false,align:'center'},
			{name:'ACTION',index:'', width:120, fixed:true, sortable:false, resize:false,align:'center',
//				formatter:'actions', 
//				formatoptions:{ 
//					keys:true,
//					//delbutton: false,//disable delete button
//					delOptions:{recreateForm: true},
//					//editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
//				}
			},
		],
		viewrecords: true,//显示总记录数
		width: $(".jqgridContainer").width()-40,
		height: 400,
    	rowNum: 10,//显示记录条数
    	rowList:[10,20,30],//一个下拉选择框，用来改变显示记录数，当选择时，会覆盖rowNum参数传递到后台
  		pager: pager_selector,//定义翻页用的导航栏，必须是有效的html元素
  		altRows: true,//设置zebra-striped值
  		autoWidth: true,
  		multiselect: true,//定义是否可以多选，显示选择框
  		multiboxonly: true,//只有当multiselect为true起作用，当multiboxonly为true时只有选择checkbox才起作用
  		loadComplete : function() {
			var table = this;
			setTimeout(function(){
				styleCheckbox(table); //修改checkbox样式
//				updateActionIcons(table);
				updatePagerIcons(table); //修改page图标
//				enableTooltips(table);
			}, 0);
			var ids = $(grid_selector).jqGrid('getDataIDs');
			for (var i = 0; i < ids.length; i++) {
				var ret = $(grid_selector).jqGrid('getRowData',ids[i]);								
				$(grid_selector).jqGrid('setRowData', ids[i], {								
					ACTION: "<button class='btn btn-xs btn-warning' onclick='f1()' title='查看详情'><i class='ace-icon fa fa-flag bigger-120' ></i>  </button> <button class='btn btn-xs btn-danger' onclick='deleteMessage()' title='删除'> <i class='ace-icon fa fa-trash-o bigger-120'></i>  </button> <button class='btn btn-xs btn-info' onclick='editMessage()' onclick='编辑'><i class='ace-icon fa fa-pencil bigger-120'></i></button>"
				});
			}
		},
			
	});
	
	$(window).triggerHandler('resize.jqGrid');


//checkbox样式修改
function styleCheckbox(table) {
	$(table).find('input:checkbox').addClass('ace')
		.wrap('<label />')
		.after('<span class="lbl align-top" />')
	$('.ui-jqgrid-labels th[id*="_cb"]:first-child')
		.find('input.cbox[type=checkbox]').addClass('ace')
		.wrap('<label />').after('<span class="lbl align-top" />');
}
//page部分图标修改
function updatePagerIcons(table) {
	var replacement = 
		{
			'ui-icon-seek-first' : 'fa fa-angle-double-left',
			'ui-icon-seek-prev' : 'fa fa-angle-left',
			'ui-icon-seek-next' : 'fa fa-angle-right',
			'ui-icon-seek-end' : 'fa fa-angle-double-right'
		};
	$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
		var icon = $(this);
		var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
						
		if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
	});
}

//操作图标
//function enableTooltips(table) {
//	$('.navtable .ui-pg-button').tooltip({container:'body'});
//	$(table).find('.ui-pg-div').tooltip({container:'body'});
//}

//打开弹窗,信息展示页面
function f1(){
	windowShow($(".window-edit-parameter"));
	$(".chosen-container").css({'width':'100%'});
	//修改弹窗内容
	$(".window-edit-parameter").find(".title").html("信息展示");
	var infroshow = '<table class="infroshow">'
						+'<tbody>'
							+'<tr>'
								+'<td class="tr" width="25%">姓名：</td>'
								+'<td width="25%">Andy</td>'
								+'<td class="tr" width="25%">年龄：</td>'
								+'<td width="25%">23</td>'
							+'</tr>'
							+'<tr>'
								+'<td class="tr" width="25%">手机号码：</td>'
								+'<td width="25%">13532327189</td>'
								+'<td class="tr" width="25%">生日：</td>'
								+'<td width="25%">1992-12-12</td>'
							+'</tr>'
							+'<tr>'
								+'<td class="tr" width="25%">QQ：</td>'
								+'<td width="25%">871096972</td>'
								+'<td class="tr" width="25%">邮箱：</td>'
								+'<td width="25%">871096972@qq.com</td>'
							+'</tr>'
						+'</tbody>'
					+'</table>';
	$(".window-edit-parameter").find(".tableadd").html(infroshow);
}


//删除操作
function deleteMessage(){
	window.alert("是否确定删除？");
}

//编辑操作
function editMessage(){
	windowShow($(".window-edit-parameter"));
	$(".chosen-container").css({'width':'100%'});
	//修改弹窗内容
	$(".window-edit-parameter").find(".title").html("修改信息");
	var infrochange = '<table class="infroshow infrochange">'
						+'<tbody>'
							+'<tr>'
								+'<td class="tr" width="25%">姓名：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="Andy" /></td>'
								+'<td class="tr" width="25%">年龄：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="23" /></td>'
							+'</tr>'
							+'<tr>'
								+'<td class="tr" width="25%">手机号码：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="13532327189" /></td>'
								+'<td class="tr" width="25%">生日：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="1992-12-12" /></td>'
							+'</tr>'
							+'<tr>'
								+'<td class="tr" width="25%">QQ：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="871096972" /></td>'
								+'<td class="tr" width="25%">邮箱：</td>'
								+'<td width="25%"><input class="form-control" type="text" value="871096972@qq.com" /></td>'
							+'</tr>'
						+'</tbody>'
					+'</table>'
					+'<div class="btnbox">'
						+'<button class="popbtn okbtn">确定</button><button class="popbtn delbtn">取消</button>'
					+'</div>';
	$(".window-edit-parameter").find(".tableadd").html(infrochange);
	
	//确定按钮触发事件
	$("body>[class^='window']").on("click",".okbtn",function(){
		window.alert("修改数据");
		windowHide($(this).parents("[class^='window']"));		
	});
	//删除按钮触发事件
	$("body>[class^='window']").on("click",".delbtn",function(){
		windowHide($(this).parents("[class^='window']"));		
	});
}
