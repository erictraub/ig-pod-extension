(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;


	ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage()
	.then(user => {
		console.log('User: ', user);
		ceUtilFuncs.newPostChecker();
	});

	var socket = io('http://localhost:1337');
	
	socket.on('new post to like', function(post) {
	    console.log('new post to like HIT: ', post);
	});

	// START: use google alert instead of setInterval
	// START: send out newPost via sockets


})();