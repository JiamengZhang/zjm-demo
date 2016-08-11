	//jquery DataTables
	$("#table_id").DataTable({
		"lengthChange": true,//允许用户选择每页显示的数量
		"ordering": true,//是否允许列进行排序
		"paging": true,//是否开启本地分页，可以使用select选择显示条数
		//下面两行表示分页，显示条数是直接控制的
//		"bPaginate": true,//显示分页
//		"iDisplayLength": 2,//一页显示条数
		"searching": true,//是否开启本地搜索

		"ajax": 'table/json/dataTable.json',//加载数据
		"columns":[
			{"data": ""},
			{"data":"name"},
			{"data":"age"},
			{"data":"tel"},
			{"data":"birth"},
			{"data":"QQ"},
			{"data":"email"},
			{"data":""}
		],
		"columnDefs": [
			{
				"targets": [0],//复选框显示列
				"data": "data",
				"width": "30px",
				"searchable": false,
				"orderable": false,
				"render": function(data,type,row){
					return '<label><input type="checkbox" class="ace" /><div class="lbl"></div></label>';
				}
			},{
				"targets": [7],//复选框显示列
				"data": "data",
				"searchable": false,
				"orderable": false,
				"render": function(data,type,row){
					return '<span class="table-icon bg-delete"><i class="fa fa-trash"></i></span><span class="table-icon bg-edit"><i class="fa fa-edit"></i></span>';
				}
			}
		]
									
	});
		
	//样式修改
	$(".dataTableBox .jqdataTable .dataTables_length >label>select").addClass("form-control input-sm");
	$(".dataTableBox .jqdataTable .dataTables_filter >label>input").addClass("form-control input-sm");
	$("#table_id thead tr th:first-child").removeClass("sorting_asc");


	//全选
	$("#table_id>thead label>input").on("click",function(){
		var that = this;
		$(this).closest('table').find('tbody label>input').each(function(i,e){
			this.checked = that.checked;				
		})
	});
				
	$("#table_id>tbody").on("change","label>input:checkbox",function(e){
		var checklist = $("#table_id>tbody").find("label>input:checkbox").length;
		$(this).closest('table').find('tbody label>input:checkbox').each(function(i,k){
			if($("#table_id>tbody label>input:checked").size() == checklist){
				$("#table_id>thead label>input").prop("checked",true);
			}else{
				$("#table_id>thead label>input").prop("checked",false);
			}
		});
	})
	
	//加载侧边栏高度
	$(".jqdataTable .dataTables_length select").on("change",function(){
		sidebarHeight();
	});