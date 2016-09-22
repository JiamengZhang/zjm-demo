//angularjs
var m = angular.module('module', []);
m.controller('showname', function($scope){
	$scope.firstname = '';
	$scope.secondname = '';
});
			
m.controller('showprice', function($scope){
	$scope.price = '';
	$scope.num = '';
});

m.controller('validate', function($scope){
	$scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});

//显示表格数据
var msg;
m.controller('table', function($scope,$http){
	$http.get(interfaces.getSimpleTable).success(function(msg){
		$scope.tabledata = msg.results;
		$scope.delete = function(){
			var currentdata = msg.results;
			currentdata.splice(this.$index, 1);
			$scope.tabledata = currentdata;
			
			$.Dialog.Alert({ Width: 150, Height: 106, Content: '删除成功'});
			setTimeout(function(){
				$("#Dialog").remove();
			},1000)
		}
		$scope.edit = function(){
			$.Dialog.Alert({ Width: 150, Height: 106, Content: '编辑内容'});
			setTimeout(function(){
				$("#Dialog").remove();
			},1000)
		}
	})
	
});