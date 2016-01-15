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
					var prefix = tweet.text.substring(0, url.indices[0]);
					var suffix = tweet.text.substring(url.indices[1], tweet.text.length);
					console.log(prefix);
					console.log(suffix);
				}
			}

			$scope.timelineTweets = data;
			console.log('Timeline received');
			console.log($scope.timelineTweets[0]);
		});
	};
});
