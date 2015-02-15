chatApp.factory('commonDataFactory',[function($http){
	
	var commonDataFactory={};
	commonDataFactory.setGuestUserName=function(name){
		commonDataFactory.guestUserName=name;
	};
	commonDataFactory.getGuestUserName=function(){
		return commonDataFactory.guestUserName;
	};
	commonDataFactory.setGuestUserNum=function(num){
		commonDataFactory.guestUserNum=num;
	};
	commonDataFactory.getGuestUserNum=function(){
		return commonDataFactory.guestUserNum;
	};
	return commonDataFactory;
}]);
