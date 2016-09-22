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
	})
	
});