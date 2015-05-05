chatApp.controller("listCtrl", ["$scope", "commonDataFactory", "$location","fireFactory",
function($scope, commonDataFactory,$location,fireFactory) {

	//var ref = new Firebase("https://testbat.firebaseio.com/");
	var remMsgList = [];
	
	$scope.userData=commonDataFactory.getUserData();
	localStorage.setItem("amigoUser",JSON.stringify($scope.userData));
	if($scope.userData.pic!=="undefined")
	angular.element('#localIcon').attr('src',$scope.userData.pic);
	
	$scope.messages = fireFactory.getListOfFriends($scope.userData);

	$scope.getChatHistory = function(message) {
		commonDataFactory.setGuestUserName(message.userName);
		commonDataFActory.setGuestUserNum(message.userNum);
		$location.path = '/friends';

	};
	$scope.getList = function() {

	};
	$scope.getNewContacts = function() {

	};
	$scope.getCommunities = function() {
	};
	$scope.changeUserList = function(e) {
		console.log($(e.target));
		switch(e.target.className) {
		case 'inList':
			$scope.getList();
			break;
		case 'newList':
			$scope.getNewContacts();
			break;

		case 'community':
			$scope.getCommunities();
			break;
		case 'Delete':
			$scope.deletePerson();
			break;
		default:
			alert('your finger is shaking,be tight');
		}
	};

	$scope.deletePerson = function() {
		a = [];
		$('.selected').parent().remove();
		for ( i = 0; i < remMsgList.length; i++) {
			$scope.messages.$remove(remMsgList[i]);
		}
	};
	//$scope.data = sync.$asObject();
	// download the data into a local object
	//var syncObject = sync.$asObject();
	// synchronize the object with a three-way data binding
	// click on `index.html` above to see it used in the DOM!
	//syncObject.$bindTo($scope, "data");

	$scope.addPerson = function(text) {
		$scope.newMessageText = '';
		$scope.messages.$add({
			userName : localStorage.getItem('userName'),
			userNum : localStorage.getItem('userNum'),
			text : text
		});

	};
}]);

