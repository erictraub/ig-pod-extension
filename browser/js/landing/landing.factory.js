app.factory('LandingFactory', function ($http) {
	var LandingFactory = {}

	 var base = 'http://192.168.1.3:1337';

	LandingFactory.fetchAllUsers = function() {
        return $http.get(base +'/api/users')
        .then(users => users.data);
	};

	LandingFactory.findOrCreateUser = function(userData) {
        return $http.post(base +'/api/users/find-or-create', userData)
        .then(users => users.data);
	};

	LandingFactory.getInstagramIdFromCookies = function() {
		return chromep.cookies.getAll({domain: "instagram.com"})
		.then(cookies => {
			let correctId = null;
			cookies.forEach(cookie => {
				if (cookie.name === "ds_user_id") correctId = cookie.value;
			});
			return correctId;
		});
	};

	LandingFactory.getInstagramUserData = function(instagramId) {
		return $http.get(`https://i.instagram.com/api/v1/users/${instagramId}/info/`)
		.then(response => response.data.user);
	};

	LandingFactory.getChromeUserData = function() {
		return chromep.identity.getProfileUserInfo();
	};


	return LandingFactory;
});


