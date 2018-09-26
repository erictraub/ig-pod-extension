console.log('Content Script Ran.');


// chrome.webRequest.onHeadersReceived.addListener(
//     function(info) {
//         var headers = info.responseHeaders;
//         for (var i=headers.length-1; i>=0; --i) {
//             var header = headers[i].name.toLowerCase();
//             if (header == 'x-frame-options' || header == 'frame-options') {
//                 headers.splice(i, 1); // Remove header
//             }
//         }
//         return {responseHeaders: headers};
//     },
//     {
//         urls: [ '*://*/*' ], // Pattern to match all http(s) pages
//         types: [ 'sub_frame' ]
//     },
//     ['blocking', 'responseHeaders']
// );

// setTimeout(function() {
// 	console.log('APPENDING NOW')
// 	$("body").append(`<iframe src="https://www.instagram.com/p/BoJy0vPlfbT"></iframe>`);
// }, 3000);