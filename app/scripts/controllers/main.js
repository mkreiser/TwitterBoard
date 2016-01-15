'use strict';

angular.module('twitterBoardApp')

.controller('mainCtrl', function($scope, twitterService) {
	twitterService.initialize();

	twitterService.connectTwitter().then(function() {
		if (twitterService.isReady()) {
			refreshTimeline();
		}
	});

	var refreshTimeline = function(count) {
		count = count || 20;

		twitterService.getLatestTweets().then(function(data) {

			for (var i = 0; i < data.length; i++) {
				var tweet = data[i];

				if (tweet.entities.urls && tweet.entities.urls.length > 0) {
					var url = tweet.entities.urls[0];
					tweet.text = tweet.text.substring(0, url.indices[0]);

					tweet.url_link = url.url;
				}
			}

			$scope.timelineTweets = data;
			console.log('Timeline received');
			console.log($scope.timelineTweets[0]);
		});
	};
});
