(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;
	var socketId = null;

	// connect to socket
	var socket = io('http://localhost:1337');
	socket.on('connect', function() {
		// socketId = socket.id;
		console.log('Socket ID: ', socket.id);
		ceUtilFuncs.storeSocketIdInLocalStorage(socket.id)
		.then(response => {
			return ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage();
		}).then(user => {
			console.log('User: ', user);
			ceUtilFuncs.newPostChecker();
		});
	});
	
	socket.on('new post to like', function(post) {
	    console.log('new post to like HIT: ', post);
	});

	// START: Post some test posts
	// BUGS: OwnerSocket is wrong sometimes in backend (i think it happens when I restart the server...)
	// BUGS: Sometimes I get the error that post is already in DB when really it is not - not sure why this is


})();