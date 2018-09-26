(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;


	ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage()
	.then(user => {
		console.log('User: ', user);
	});


	// next: setInterval for checking for new post every 30/60 secs
	// newPost must have been posted within last 30/60 secs


})();