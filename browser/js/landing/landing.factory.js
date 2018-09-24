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


	return LandingFactory;
});


