
chatApp.controller("SampleCtrl", ["$scope", "$firebase",
function($scope, $firebase) {
	var ref = new Firebase("https://testbat.firebaseio.com/");
	var remMsgList = [];
	// create an AngularFire reference to the data
	var sync = $firebase(ref);
	$scope.messages = sync.$asArray();
	if (localStorage.getItem('userName') == null) {
		$scope.userName = window.prompt('What is your name?');
		$scope.phoneNum = window.prompt('What is your phone number?');
		// download the data into a local object
		localStorage.setItem('userName', $scope.userName);
		localStorage.setItem('userNum', $scope.phoneNum);

	} else {
		$scope.userName = localStorage.getItem('userName');
		$scope.phoneNum = localStorage.getItem('userNum');
	}

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
			text : text
		});

	};
}]);

