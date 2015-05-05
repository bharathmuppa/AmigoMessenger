chatApp.factory('fireFactory', ["commonDataFactory", "$location", "$firebaseArray",
function(commonDataFactory, $location, $firebaseArray) {
	console.log("-----------firebase object--------------");
	console.log($firebaseArray(new Firebase("https://zingbang.firebaseio.com/users")));
	//instantiating the required tables in firebase
	var usersDetails = $firebaseArray(new Firebase("https://zingbang.firebaseio.com/users"));
	var chatMessages = $firebaseArray(new Firebase("https://zingbang.firebaseio.com/chats"));
	var allContacts = $firebaseArray(new Firebase("https://zingbang.firebaseio.com/allContacts"));

	var fireFactory = {};
	//object for returning while this factory is called

	var chatHistoryData = [];

	//to add a new user toi firebase
	fireFactory.addUser = function(user) {
		user.$id=user.number;
		console.log("submit user:");
		console.log(user);
		usersDetails.$add(user).then(function(ref) {
			commonDataFactory.setUserData(user);
			$location.path("/home");
		},function(){
			
			alert("server busy try agian");
		});
		allContacts.$add(user.number);

	};

	//to edit a user details
	fireFactory.editUserData = function(user) {
		usersDetails.$save(user);
	};
	//to check whether a user exists or not
	fireFactory.checkUser = function(userData) {
      var usersDetails = $firebaseArray(new Firebase("https://zingbang.firebaseio.com/users"));
		if (usersDetails.$getRecord(userData)!=null) {
			$location.path("/home");
		} else {
			return "false";
		}

	};
	//getChat data of two users
	fireFactory.getChatData = function(user1, user2) {
		var chatHistory1 = new Firebase("https://zingbang.firebaseio.com/chats/" + user1 + "-" + user2);
		var chatHistory2 = new Firebase("https://zingbang.firebaseio.com/chats/" + user2 + "-" + user1);
		var chatHistoryData = $firebase(chatHistory1);
		console.log(chatHistoryData);
		return chatHistoryData;
	};

	//getList of friends
	fireFactory.getListOfFriends = function(users) {
		return allContacts;
	};

	//add messages to chat history
	fireFactory.addMessage = function(user1, user2, msg) {
		chatHistoryData.$add(msg);
	};

	//remove msg list from chat history
	fireFactory.removeMessage = function(msgList) {
		chatHistoryData.$remove(msg);
	};

	return fireFactory;
}]);

