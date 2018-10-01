(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;
	var socketId = null;

	// connect to socket
	var socket = io('http://localhost:1337');
	socket.on('connect', function() {
		socketId = socket.id;
		console.log('Socket ID: ', socketId);

		// retrieve all chrome and instagram data and store it
		ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage()
		.then(user => {
			console.log('User: ', user);
			ceUtilFuncs.newPostChecker(socketId);
		});
	});
	
	socket.on('new post to like', function(post) {
	    console.log('new post to like HIT: ', post);
	});

	// START: use google alert instead of setInterval
	// START: send out newPost via sockets


})();