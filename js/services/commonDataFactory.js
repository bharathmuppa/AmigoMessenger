chatApp.factory('commonDataFactory',[function($http){
	
	var commonDataFactory={};
	commonDataFactory.setUserData=function(data){
		commonDataFactory.userData=data;
		
	};
	commonDataFactory.getUserData=function(){
		return commonDataFactory.userData;
	};
	commonDataFactory.setGuestUserNum=function(num){
		commonDataFactory.guestUserNum=num;
	};
	commonDataFactory.getGuestUserNum=function(){
		return commonDataFactory.guestUserNum;
	};
	return commonDataFactory;
}]);
