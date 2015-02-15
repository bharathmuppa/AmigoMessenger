chatApp.controller("loginCtrl", ["$scope", "$firebase", "commonDataFactory", "$http",'$compile',
function($scope, $firebase, commonDataFactory, $http,$compile) {
	$scope.loginDataFlag = true;
	
	$scope.goToNext = function() {

		$scope.picDiv = true;
		$compile(angular.element('#innerContainer').html('<img id="userPic" src="./images/cloud.jpg" ng-click="clickButton()"><input type="file" id="userPicButton" style="display:none" ng-model="userPic" accept="image/*" onchange="angular.element(this).scope().uploadImage()"></input><img>'))($scope);

	};
	$scope.clickButton=function(){
		$("#userPicButton").trigger('click');
	};
	$scope.checkDetails = function(key) {

		if($scope.userName != null && $scope.userNum != null) {

			$scope.loginDataFlag = false;
		} else {
			$scope.loginDataFlag = true;
		}

	};
	$scope.changePicCode = function() {
		var file = $('#userPic');
		console.log(file);
	};

$scope.uploadImage=function(){
	var file = event.currentTarget.files[0];
		mimeType = file.type;
		console.log(mimeType);
		if(mimeType.substr(0, 5) == 'image') {
			var contentAsBase64EncodedString;
			var FR = new FileReader();

			//this is callback for readAsDataURL(file)
			FR.onload = function(encodedFile) {
				var src = encodedFile.target.result;
				src1 = src.split("base64,");

				// This is the base64 encoded string of that media file which you will be interested to store in the database(post to the server
				contentAsBase64EncodedString = src1[1];
				console.log(contentAsBase64EncodedString);
				angular.element('#userPic').attr("src",src);

			};

			FR.onloadend = function(encodedFile) {
				/*
				 var src = encodedFile.target.result;
				 src = src.split("base64,");

				 // This is the base64 encoded string of that media file which you will be interested to store in the database(post to the server
				 contentAsBase64EncodedString = src[1];
				 console.log(contentAsBase64EncodedString);*/

			};
			g = FR.readAsDataURL(file);
		} else {
			$('input[type=file]').val('');
		}
};

	
}]);
