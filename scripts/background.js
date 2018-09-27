(function() {
	// access utility functions
	var ceUtilFuncs = window.ceUtilFuncs;


	ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage()
	.then(user => {
		console.log('User: ', user);
		ceUtilFuncs.newPostChecker(user.user);
	});

	// START: handle duplicate key error.  Just run this with jim logged in and create a post.
	// will throw an error on the round after post added to db.  Handle this error and send message to FE
	// saying post has already been liked.
	// This happens becase we do not update the mostRecentPost property on the owner.  So update that
	// property and push this new post into the owners postsToLike array.


})();