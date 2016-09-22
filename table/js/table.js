/*
 * @description table
 * @author JiaMeng.Zhang
 * @time 2016.06.27
 */

/*
 * simple table简单表格数据显示
 */
function getSimpleTable(){
	$.ajax({
		type: "get",
		url: interfaces.getSimpleTable,
		success: function(data) {
			console.log("表格的数据："+JSON.stringify(data));
			$("#simpleTable>tbody").html("");//将表格数据清空
			var simpleTable = '';
			var msg = data.results;
			for(var i = 0; i<msg.length; i++){
				var num = i+1; 
				var name = msg[i].name;//姓名
				var age = msg[i].age;//年龄
				var tel = msg[i].tel;//电话
				var birth = msg[i].birth;//生日
				var QQ = msg[i].QQ;//QQ
				var email = msg[i].email;//邮件
				simpleTable +='<tr>'
							+ '<th>'+num+'</th>'
							+ '<th>'+name+'</th>'
							+ '<th>'+age+'</th>'
							+ '<th>'+tel+'</th>'
							+ '<th>'+birth+'</th>'
							+ '<th>'+QQ+'</th>'
							+ '<th>'+email+'</th>'
							+ '<th>'
							+ '<span class="table-icon bg-delete">'
							+ '<i class="fa fa-trash"></i>'
							+ '</span>'
							+ '<span class="table-icon bg-edit">'
							+ '<i class="fa fa-edit"></i>'
							+ '</span>'												
							+ '</th>'
							+ '</tr>';
			}
			$("#simpleTable>tbody").append(simpleTable);
		}
	});
}

$("#simpleTable>tbody").on("click",".bg-delete",function(){
	var index = $(this).parents('tr').index();
	$(this).parents('tbody').children('tr').eq(index).remove();
})

$("#simpleTable>tbody").on("click",".bg-edit",function(){
	//alert('点击编辑');
})

/*
 * jquery dataTables表格数据显示
 */
function getdataTable(num){
	$.ajax({
		type: "get",
		url: interfaces.getSimpleTable,
		success: function(data) {
			console.log("表格的数据："+JSON.stringify(data));
			$("#dataTable>tbody").html("");//将表格数据清空
			var dataTable = '';
			var msg = data.results;
			if(num > msg.length){
				fordataTable(msg.length);
			}else{
				fordataTable(num);
			}
			function fordataTable(x){
				for(var i = 0; i<x; i++){
					var name = msg[i].name;//姓名
					var age = msg[i].age;//年龄
					var tel = msg[i].tel;//电话
					var birth = msg[i].birth;//生日
					var QQ = msg[i].QQ;//QQ
					var email = msg[i].email;//邮件
					dataTable +='<tr>'
								+ '<td><label><input type="checkbox" class="ace" /><div class="lbl"></div></label></td>'
								+ '<td>'+name+'</td>'
								+ '<td>'+age+'</td>'
								+ '<td>'+tel+'</td>'
								+ '<td>'+birth+'</td>'
								+ '<td>'+QQ+'</td>'
								+ '<td>'+email+'</td>'
								+ '<td>'
								+ '<span class="table-icon bg-delete">'
								+ '<i class="fa fa-trash"></i>'
								+ '</span>'
								+ '<span class="table-icon bg-edit">'
								+ '<i class="fa fa-edit"></i>'
								+ '</span>'												
								+ '</td>'
								+ '</tr>';
				}
			}
			
			$("#dataTable>tbody").append(dataTable);
		}
	});
}


