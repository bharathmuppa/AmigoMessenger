chatApp.controller("loginCtrl", ["$scope", "$firebase", "commonDataFactory", "$http",
function($scope, $firebase, commonDataFactory, $http) {
	$scope.loginDataFlag = true;
	$scope.goToNext = function() {
		$scope.picDiv = true;
	};
	$scope.checkDetails = function(key) {
		alert('asda');
		if ($scope.userName != null && $scope.userNum != null) {
			$scope.loginDataFlag = false;
		} else {
			$scope.loginDataFlag = true;
		}

	};
	$scope.changePicCode = function() {
		var file = $('#userPic');
		console.log(file);
	};
	

	
	$('input[type=file]').change(function(e){
    var file = e.currentTarget.files[0];
var contentAsBase64EncodedString;
		var FR = new FileReader();

		FR.onload = function(encodedFile) {
			console.log(encodedFile);
			alert("onload is called.");
		};

		FR.onloadend = function(encodedFile) {
			var src = encodedFile.target.result;
			src = src.split("base64,");

			// This is the base64 encoded string of that media file which you will be interested to store in the database(post to the server
			contentAsBase64EncodedString = src[1];
			console.log(contentAsBase64EncodedString);
		};
		g=FR.readAsDataURL(file);

});
	
}]); 