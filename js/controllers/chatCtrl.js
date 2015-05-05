
chatApp.controller("chatCtrl", ["$scope", "commonDataFactory","$firebase",
function($scope,commonDataFactory,$firebase) {
	//var ref = new Firebase("https://testbat.firebaseio.com/");
	var remMsgList = [];
	// create an AngularFire reference to the data
	var sync = $firebase(ref);
	$scope.messages = sync.$asArray();
	$scope.guestUserNum=commonDataFactory.getGuestUserNum();
    $scope.guestUserName=commonDataFactory.getGuestUserName();
	$scope.toggleSelected = function(e, message) {
		var index;
		console.log(e);
		if (angular.element(e.currentTarget).find('div').hasClass('selected')) {
			index = remMsgList.indexOf(message);
			remMsgList.splice(index, 1);
			angular.element(e.currentTarget).find('div').removeClass('selected');
		} else {
			remMsgList.push(message);
			angular.element(e.currentTarget).find('div').addClass('selected');
		}

	};
	$scope.deleteMessages = function() {
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
	
	$scope.addMessage = function(text) {
		$scope.newMessageText = '';
		$scope.messages.$add({
		
			userName : localStorage.getItem('userName'),
			userNum : localStorage.getItem('userNum'),
			text : text,
			guestName:$scope.guestUserName,
			guestNum:$scope.guestUserNum
			
		});

	};
}]);

