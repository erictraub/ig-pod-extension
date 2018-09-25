app.controller('LandingController', function ($scope, LandingFactory) {
	let igUserData = {};
	let chromeUserData = {};
	let instagramId = null;

	// Check local storage for currentUser first
	// If no currentUser in local storage then go thru all this \/

	LandingFactory.getInstagramIdFromCookies()
	.then(id => {
		instagramId = id;
		return LandingFactory.getInstagramUserData(id);
	})
	.then(IGuserInfo => {
		igUserData = IGuserInfo;
		return LandingFactory.getChromeUserData();
	}).then(userData => {
		chromeUserData = userData;
		console.log('igUserData', igUserData);
		console.log('chromeUserData', chromeUserData);
		const user = {
			instagramUsername: igUserData.username,
			instagramId: instagramId,
			profilePic: igUserData.profile_pic_url,
			chromeId: chromeUserData.id,
			email: chromeUserData.email
		};
		return LandingFactory.findOrCreateUser(user);
	}).then(user => {
		console.log('User from DB: ', user);
		// put user in local storage so can access from background script
	});



});


