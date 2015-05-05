chatApp.controller("loginCtrl", ["$scope", "commonDataFactory", "$http", '$compile', "$location", "fireFactory",
function($scope, commonDataFactory, $http, $compile, $location, fireFactory) {
	$scope.loginDataFlag = true;
	angular.element('#innerContainer1').hide();
	angular.element('#innerContainer2').hide();

	//checking for whether amigouser is stored in local server or not
	if (localStorage.getItem("amigoUser") === null || localStorage.getItem("amigoUser") === "undefined")
		$scope.registeredUser = false;
	else {
		fireFactory.checkUser(JSON.parse(localStorage.getItem('amigoUser')));
		//$location.path("/home");
	}

	

	//on click on register glowing button
	$scope.registerUser = function() {
		$scope.registeredUser = true;
		angular.element('#innerContainer1').show();
		angular.element('#innerContainer2').hide();

	};

	//on click on login glowing button
	$scope.loginUser = function() {
		$scope.registeredUser = true;
		angular.element('#innerContainer1').hide();
		angular.element('#innerContainer2').show();

	};
	
	//on click on submit button of  user login page(in container2)
	$scope.submitUser = function() {
		var data = {
			'name' : $scope.userName,
			'number' : $scope.userNum
		};
		
		fireFactory.checkUser(data);
	};
	
	//inner container1(on click on registered button)
	$scope.goToNext = function() {
		//on click of next text this if executes
		if (angular.element('#picPart').text().trim() === "next") {
			$scope.picDiv = true;
			$compile(angular.element('#innerContainer1').html('<img id="userPic" src="./images/oldUser.png" ng-click="clickButton()"><input type="file" id="userPicButton" style="display:none" ng-model="userPic" accept="image/*" onchange="angular.element(this).scope().uploadImage()"></input><img><button ng-click="goToNext()" id="picPart" ng-disabled="loginDataFlag" value="next" >next</button>'))($scope);
			angular.element('#picPart').text('create account');
		}
		//on click of create account text after uploading image
		 else {
			var data = {
				'name' : $scope.userName,
				'number' : $scope.userNum,
				'pic' : $scope.src
			};
			console.log("----------------------registerd data----------------");
			console.log(data);
			fireFactory.addUser(data);
		}
	};

	$scope.clickButton = function() {
		$("#userPicButton").trigger('click');
	};
	
//validations for user details 	
	$scope.checkDetails = function(key) {
		if ($scope.userName != null && $scope.userNum != null) {
			$scope.loginDataFlag = false;
		} else {
			$scope.loginDataFlag = true;
		}

	};
	

//on change of image new base64 format should be emitted
	$scope.uploadImage = function() {
		var file = event.currentTarget.files[0];
		mimeType = file.type;
		console.log(mimeType);
		if (mimeType.substr(0, 5) == 'image') {
			var contentAsBase64EncodedString;
			var FR = new FileReader();

			//this is callback for readAsDataURL(file)
			FR.onload = function(encodedFile) {
				$scope.src = encodedFile.target.result;
				//src1 = src.split("base64,");

				// This is the base64 encoded string of that media file which you will be interested to store in the database(post to the server
				//contentAsBase64EncodedString = src1[1];
				//console.log(contentAsBase64EncodedString);
				angular.element('#userPic').attr("src", $scope.src);

			};

			FR.onloadend = function(encodedFile) {

			};
			g = FR.readAsDataURL(file);
		} else {
			$('input[type=file]').val('');
		}
	};

}]);
