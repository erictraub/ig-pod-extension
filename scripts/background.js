(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;


	ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage()
	.then(user => {
		console.log('User: ', user);
		ceUtilFuncs.newPostChecker();
	});

	// START: use google alert instead of setInterval
	// START: send out newPost via sockets


})();