chatApp.controller("loginCtrl", ["$scope", "$firebase", "commonDataFactory", "$http",
function($scope, $firebase, commonDataFactory, $http) {
	$scope.loginDataFlag=true;
	$scope.goToNext=function(){
		$scope.picDiv=true;
	};
	$scope.checkDetails=function(key){
		alert('asda');
			if($scope.userName!=null&&$scope.userNum!=null ){
			$scope.loginDataFlag=false;
			}
			else{
				$scope.loginDataFlag=true;
			}
		
	};
	
}]);