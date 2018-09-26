'use strict';

window.app = angular.module('LikerApp', []);
app.controller('LandingController', function ($scope, LandingFactory) {// let igUserData = {};
  // let chromeUserData = {};
  // let instagramId = null;
  // // Check local storage for currentUser first
  // // If no currentUser in local storage then go thru all this \/
  // LandingFactory.getInstagramIdFromCookies()
  // .then(id => {
  // 	instagramId = id;
  // 	return LandingFactory.getInstagramUserData(id);
  // })
  // .then(IGuserInfo => {
  // 	igUserData = IGuserInfo;
  // 	return LandingFactory.getChromeUserData();
  // }).then(userData => {
  // 	chromeUserData = userData;
  // 	console.log('igUserData', igUserData);
  // 	console.log('chromeUserData', chromeUserData);
  // 	const user = {
  // 		instagramUsername: igUserData.username,
  // 		instagramId: instagramId,
  // 		profilePic: igUserData.profile_pic_url,
  // 		chromeId: chromeUserData.id,
  // 		email: chromeUserData.email
  // 	};
  // 	return LandingFactory.findOrCreateUser(user);
  // }).then(user => {
  // 	console.log('User from DB: ', user);
  // 	// put user in local storage so can access from background script
  // });
});
app.factory('LandingFactory', function ($http) {
  var LandingFactory = {}; // var base = 'http://192.168.1.3:1337';
  // LandingFactory.fetchAllUsers = function() {
  //        return $http.get(base +'/api/users')
  //        .then(users => users.data);
  // };
  // LandingFactory.findOrCreateUser = function(userData) {
  //        return $http.post(base +'/api/users/find-or-create', userData)
  //        .then(users => users.data);
  // };
  // LandingFactory.getInstagramIdFromCookies = function() {
  // 	return chromep.cookies.getAll({domain: "instagram.com"})
  // 	.then(cookies => {
  // 		let correctId = null;
  // 		cookies.forEach(cookie => {
  // 			if (cookie.name === "ds_user_id") correctId = cookie.value;
  // 		});
  // 		return correctId;
  // 	});
  // };
  // LandingFactory.getInstagramUserData = function(instagramId) {
  // 	return $http.get(`https://i.instagram.com/api/v1/users/${instagramId}/info/`)
  // 	.then(response => response.data.user);
  // };
  // LandingFactory.getChromeUserData = function() {
  // 	return chromep.identity.getProfileUserInfo();
  // };

  return LandingFactory;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImxhbmRpbmcvbGFuZGluZy5jb250cm9sbGVyLmpzIiwibGFuZGluZy9sYW5kaW5nLmZhY3RvcnkuanMiXSwibmFtZXMiOlsid2luZG93IiwiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJMYW5kaW5nRmFjdG9yeSIsImZhY3RvcnkiLCIkaHR0cCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE1BQUEsQ0FBQUMsR0FBQSxHQUFBQyxPQUFBLENBQUFDLE1BQUEsQ0FBQSxVQUFBLEVBQUEsRUFBQSxDQUFBO0FDREFGLEdBQUEsQ0FBQUcsVUFBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQUMsTUFBQSxFQUFBQyxjQUFBLEVBQUEsQ0FDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsQ0FuQ0E7QUNBQUwsR0FBQSxDQUFBTSxPQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBQyxLQUFBLEVBQUE7QUFDQSxNQUFBRixjQUFBLEdBQUEsRUFBQSxDQURBLENBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFHQSxTQUFBQSxjQUFBO0FBQ0EsQ0FyQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbndpbmRvdy5hcHAgPSBhbmd1bGFyLm1vZHVsZSgnTGlrZXJBcHAnLCBbXSk7XG5cblxuIiwiYXBwLmNvbnRyb2xsZXIoJ0xhbmRpbmdDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgTGFuZGluZ0ZhY3RvcnkpIHtcblx0Ly8gbGV0IGlnVXNlckRhdGEgPSB7fTtcblx0Ly8gbGV0IGNocm9tZVVzZXJEYXRhID0ge307XG5cdC8vIGxldCBpbnN0YWdyYW1JZCA9IG51bGw7XG5cblx0Ly8gLy8gQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgY3VycmVudFVzZXIgZmlyc3Rcblx0Ly8gLy8gSWYgbm8gY3VycmVudFVzZXIgaW4gbG9jYWwgc3RvcmFnZSB0aGVuIGdvIHRocnUgYWxsIHRoaXMgXFwvXG5cblx0Ly8gTGFuZGluZ0ZhY3RvcnkuZ2V0SW5zdGFncmFtSWRGcm9tQ29va2llcygpXG5cdC8vIC50aGVuKGlkID0+IHtcblx0Ly8gXHRpbnN0YWdyYW1JZCA9IGlkO1xuXHQvLyBcdHJldHVybiBMYW5kaW5nRmFjdG9yeS5nZXRJbnN0YWdyYW1Vc2VyRGF0YShpZCk7XG5cdC8vIH0pXG5cdC8vIC50aGVuKElHdXNlckluZm8gPT4ge1xuXHQvLyBcdGlnVXNlckRhdGEgPSBJR3VzZXJJbmZvO1xuXHQvLyBcdHJldHVybiBMYW5kaW5nRmFjdG9yeS5nZXRDaHJvbWVVc2VyRGF0YSgpO1xuXHQvLyB9KS50aGVuKHVzZXJEYXRhID0+IHtcblx0Ly8gXHRjaHJvbWVVc2VyRGF0YSA9IHVzZXJEYXRhO1xuXHQvLyBcdGNvbnNvbGUubG9nKCdpZ1VzZXJEYXRhJywgaWdVc2VyRGF0YSk7XG5cdC8vIFx0Y29uc29sZS5sb2coJ2Nocm9tZVVzZXJEYXRhJywgY2hyb21lVXNlckRhdGEpO1xuXHQvLyBcdGNvbnN0IHVzZXIgPSB7XG5cdC8vIFx0XHRpbnN0YWdyYW1Vc2VybmFtZTogaWdVc2VyRGF0YS51c2VybmFtZSxcblx0Ly8gXHRcdGluc3RhZ3JhbUlkOiBpbnN0YWdyYW1JZCxcblx0Ly8gXHRcdHByb2ZpbGVQaWM6IGlnVXNlckRhdGEucHJvZmlsZV9waWNfdXJsLFxuXHQvLyBcdFx0Y2hyb21lSWQ6IGNocm9tZVVzZXJEYXRhLmlkLFxuXHQvLyBcdFx0ZW1haWw6IGNocm9tZVVzZXJEYXRhLmVtYWlsXG5cdC8vIFx0fTtcblx0Ly8gXHRyZXR1cm4gTGFuZGluZ0ZhY3RvcnkuZmluZE9yQ3JlYXRlVXNlcih1c2VyKTtcblx0Ly8gfSkudGhlbih1c2VyID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnVXNlciBmcm9tIERCOiAnLCB1c2VyKTtcblx0Ly8gXHQvLyBwdXQgdXNlciBpbiBsb2NhbCBzdG9yYWdlIHNvIGNhbiBhY2Nlc3MgZnJvbSBiYWNrZ3JvdW5kIHNjcmlwdFxuXHQvLyB9KTtcblxuXG5cbn0pO1xuXG5cbiIsImFwcC5mYWN0b3J5KCdMYW5kaW5nRmFjdG9yeScsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgTGFuZGluZ0ZhY3RvcnkgPSB7fVxuXG5cdCAvLyB2YXIgYmFzZSA9ICdodHRwOi8vMTkyLjE2OC4xLjM6MTMzNyc7XG5cblx0Ly8gTGFuZGluZ0ZhY3RvcnkuZmV0Y2hBbGxVc2VycyA9IGZ1bmN0aW9uKCkge1xuIC8vICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KGJhc2UgKycvYXBpL3VzZXJzJylcbiAvLyAgICAgICAgLnRoZW4odXNlcnMgPT4gdXNlcnMuZGF0YSk7XG5cdC8vIH07XG5cblx0Ly8gTGFuZGluZ0ZhY3RvcnkuZmluZE9yQ3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJEYXRhKSB7XG4gLy8gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGJhc2UgKycvYXBpL3VzZXJzL2ZpbmQtb3ItY3JlYXRlJywgdXNlckRhdGEpXG4gLy8gICAgICAgIC50aGVuKHVzZXJzID0+IHVzZXJzLmRhdGEpO1xuXHQvLyB9O1xuXG5cdC8vIExhbmRpbmdGYWN0b3J5LmdldEluc3RhZ3JhbUlkRnJvbUNvb2tpZXMgPSBmdW5jdGlvbigpIHtcblx0Ly8gXHRyZXR1cm4gY2hyb21lcC5jb29raWVzLmdldEFsbCh7ZG9tYWluOiBcImluc3RhZ3JhbS5jb21cIn0pXG5cdC8vIFx0LnRoZW4oY29va2llcyA9PiB7XG5cdC8vIFx0XHRsZXQgY29ycmVjdElkID0gbnVsbDtcblx0Ly8gXHRcdGNvb2tpZXMuZm9yRWFjaChjb29raWUgPT4ge1xuXHQvLyBcdFx0XHRpZiAoY29va2llLm5hbWUgPT09IFwiZHNfdXNlcl9pZFwiKSBjb3JyZWN0SWQgPSBjb29raWUudmFsdWU7XG5cdC8vIFx0XHR9KTtcblx0Ly8gXHRcdHJldHVybiBjb3JyZWN0SWQ7XG5cdC8vIFx0fSk7XG5cdC8vIH07XG5cblx0Ly8gTGFuZGluZ0ZhY3RvcnkuZ2V0SW5zdGFncmFtVXNlckRhdGEgPSBmdW5jdGlvbihpbnN0YWdyYW1JZCkge1xuXHQvLyBcdHJldHVybiAkaHR0cC5nZXQoYGh0dHBzOi8vaS5pbnN0YWdyYW0uY29tL2FwaS92MS91c2Vycy8ke2luc3RhZ3JhbUlkfS9pbmZvL2ApXG5cdC8vIFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuZGF0YS51c2VyKTtcblx0Ly8gfTtcblxuXHQvLyBMYW5kaW5nRmFjdG9yeS5nZXRDaHJvbWVVc2VyRGF0YSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBcdHJldHVybiBjaHJvbWVwLmlkZW50aXR5LmdldFByb2ZpbGVVc2VySW5mbygpO1xuXHQvLyB9O1xuXG5cblx0cmV0dXJuIExhbmRpbmdGYWN0b3J5O1xufSk7XG5cblxuIl19
