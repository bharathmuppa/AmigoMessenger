
	
	var app = angular.module("sampleApp", ["firebase"]);
	app.controller("SampleCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {
    var ref = new Firebase("https://testbat.firebaseio.com/");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    if(localStorage.getItem('userName')==null){
 $scope.userName = window.prompt('What is your name?');
 $scope.phoneNum= window.prompt('What is your phone number?'); // download the data into a local object
 localStorage.setItem('userName',$scope.userName);
 localStorage.setItem('userNum',$scope.phoneNum);
   
    }else{
    	 $scope.userName = localStorage.getItem('userName');
 $scope.phoneNum= localStorage.getItem('userNum');
    }
    
    
    $scope.toggleSelected=function(e){
    	console.log(e);
    	if(angular.element(e.path[0]).hasClass('selected')){
    		angular.element(e.path[0]).removeClass('selected');
    	}
    	else{
    	angular.element(e.path[0]).addClass('selected');
    	}
    
    };
    
    //$scope.data = sync.$asObject();
      // download the data into a local object
  //var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "data");
  $scope.messages = sync.$asArray();
  $scope.addMessage = function(text) {
  	$scope.newMessageText='';
    $scope.messages.$add({userName:localStorage.getItem('userName'),userNum:localStorage.getItem('userNum'),text: text});

  };
  }
]);


	
