app.controller('LandingController', function ($scope, LandingFactory) {
	console.log('Landing ctrl loaded.');
	let currentUser = {};

	chromep.identity.getProfileUserInfo()
	.then(userInfo => {
		console.log('userInfo', userInfo)
		currentUser = userInfo;
		currentUser.igUsername = 'SOME.RANDO.123';
		currentUser.chromeId = currentUser.id;
		return LandingFactory.findOrCreateUser(currentUser);
	}).then(user => {
		console.log('USER: ', user);
	});
});


