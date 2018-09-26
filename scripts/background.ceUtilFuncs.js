(function() {
	let ceUtilFuncs = {};
	const chromep = new ChromePromise();
	let base = 'http://192.168.1.3:1337';

	ceUtilFuncs.getCookies = function() {
		return chromep.cookies.getAll({domain: "instagram.com"});
	};

	ceUtilFuncs.getHeadersObjFromCookies = function(cookies) {
		let cookiesArray = cookies.filter(elem => elem.domain === '.instagram.com');
		let cookiesObj = {};
		cookiesArray.forEach(cookie => { cookiesObj[cookie.name] = cookie.value; });
		let cookiesString = `mid=${cookiesObj['mid']};`;
		cookiesString = `${cookiesString} mcd=${cookiesObj['mcd']};`;
		cookiesString = `${cookiesString} rur=${cookiesObj['rur']};`;
		cookiesString = `${cookiesString} csrftoken=${cookiesObj['csrftoken']};`;
		cookiesString = `${cookiesString} shbid=${cookiesObj['shbid']};`;
		cookiesString = `${cookiesString} ds_user_id=${cookiesObj['ds_user_id']};`;
		cookiesString = `${cookiesString} sessionid=${cookiesObj['sessionid']};`;
		cookiesString = `${cookiesString} csrftoken=${cookiesObj['csrftoken']};`;
		cookiesString = `${cookiesString} shbts=${cookiesObj['shbts']};`;
		cookiesString = `${cookiesString} urlgen=${cookiesObj['urlgen']}`;

		let headersObj = {
			"accept": "*/*",
			"accept-encoding": "gzip, deflate, br",
			"accept-language": "en-US,en;q=0.9",
			"cache-control": "no-cache",
			"content-length": 0,
			"content-type": "application/x-www-form-urlencoded",
			"origin": "https://www.instagram.com",
			"pragma": "no-cache",
			"referer": "https://www.instagram.com/",
			"x-instagram-ajax": "1",  // everliker sets this to 1
			"x-requested-with": "XMLHttpRequest",
			"x-csrftoken": null,
			"cookie": cookiesString,
			"x-csrftoken": cookiesObj['csrftoken']
		};

		return headersObj;
	};

	ceUtilFuncs.getInstagramIdFromCookies = function() {
		return chromep.cookies.getAll({domain: "instagram.com"})
		.then(cookies => {
			let correctId = null;
			cookies.forEach(cookie => {
				if (cookie.name === "ds_user_id") correctId = cookie.value;
			});
			return correctId;
		});
	};

	ceUtilFuncs.getInstagramUserData = function(instagramId) {
		return $.get(`https://i.instagram.com/api/v1/users/${instagramId}/info/`)
		.then(response => response.user);
	};

	ceUtilFuncs.getChromeUserData = function() {
		return chromep.identity.getProfileUserInfo();
	};

	ceUtilFuncs.findOrCreateUser = function(userData) {
        return $.post(base +'/api/users/find-or-create', userData)
        .then(users => users);
	};

	ceUtilFuncs.getMostRecentPost = function(username) {
		return $.get('http://allorigins.me/get?url=' + encodeURIComponent(`https://www.instagram.com/${username}/`))
		.then(response => {
		  	rawPosts = JSON.parse(response.contents.split('window._sharedData = ')[1].split('\;\<\/script>')[0]).entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
			let mostRecentPost = {};
			if (rawPosts[0]) {
				mostRecentPost['raw'] = rawPosts[0].node,
				mostRecentPost['image'] = rawPosts[0].node.display_url,
				mostRecentPost['dimensions'] = rawPosts[0].node.dimensions,
				mostRecentPost['likes'] = rawPosts[0].node.edge_liked_by.count,
				mostRecentPost['caption'] = rawPosts[0].node.edge_media_to_caption.edges[0].node.text,
				mostRecentPost['comments'] = rawPosts[0].node.edge_media_to_comment.count,
				mostRecentPost['video'] = rawPosts[0].node.is_video,
				mostRecentPost['code'] = rawPosts[0].node.shortcode,
				mostRecentPost['url'] = `https://www.instagram.com/p/${rawPosts[0].node.shortcode}/`,
				mostRecentPost['timestamp'] = rawPosts[0].node.taken_at_timestamp,
				mostRecentPost['thumbnails'] = {
				    150: rawPosts[0].node.thumbnail_resources[0].src,
				    240: rawPosts[0].node.thumbnail_resources[1].src,
				    320: rawPosts[0].node.thumbnail_resources[2].src,
				    480: rawPosts[0].node.thumbnail_resources[3].src,
				    640: rawPosts[0].node.thumbnail_resources[4].src
			  	}
			}
			return mostRecentPost.timestamp ? mostRecentPost : { timestamp: 0 };
		});
	};

	ceUtilFuncs.storeUserDataInLocalStorage = function(userData) {
		return chromep.storage.local.set({ceOmegaPodUser: userData});
	};

	ceUtilFuncs.retrieveAllUserDataAndPutInLocalStorage = function() {
		let igUserData = {};
		let chromeUserData = {};
		let instagramId = null;
		let userFromDB = {};

		return ceUtilFuncs.getInstagramIdFromCookies()
		.then(id => {
			instagramId = id;
			return ceUtilFuncs.getInstagramUserData(id);
		})
		.then(IGuserInfo => {
			igUserData = IGuserInfo;
			return ceUtilFuncs.getChromeUserData();
		}).then(userData => {
			chromeUserData = userData;
			console.log('igUserData', igUserData);
			// console.log('chromeUserData', chromeUserData);
			const user = {
				instagramUsername: igUserData.username,
				instagramId: instagramId,
				profilePic: igUserData.profile_pic_url,
				chromeId: chromeUserData.id,
				email: chromeUserData.email,
				privateInstagram: igUserData.is_private
			};
			return ceUtilFuncs.findOrCreateUser(user);
		}).then(user => {
			userFromDB = user;
			return ceUtilFuncs.storeUserDataInLocalStorage(user.user);
		}).then(result => {
			return userFromDB;
		});
	};



	window.ceUtilFuncs = ceUtilFuncs;
})();