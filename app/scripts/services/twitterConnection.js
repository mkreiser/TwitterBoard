'use strict';

angular.module('twitterBoardApp')

.factory('twitterService', function($q) {

	var authorizationResult = false;

	return {
		initialize: function() {
			OAuth.initialize('Da53g-GnHWp8tu4pWAwMYwZxxIs', {
				cache: true
			});

			authorizationResult = OAuth.create('twitter');
		},
		isReady: function() {
			return (authorizationResult);
		},
		connectTwitter: function() {
			var deferred = $q.defer();

			OAuth.popup('twitter', {
					cache: true
				}, function(error, result) {
					if (!error) {
						authorizationResult = result;
						deferred.resolve();
					} else {

					}
				}
			);

			return deferred.promise();
		},
		clearCache: function() {
			OAuth.clearCache('twitter');
			authorizationResult = false;
		},
		getLatestTweets: function(count) {
			var deferred = $q.defer();
			var url = '1.1/statuses/home_timeline.json';

			if (count) {
				url += '?count=' + count;
			}

			var promise = authorizationResult.get(url).done(function(data) {
				deferred.resolve(data);
			}).fail(function(err) {
				deferred.reject(err);
			});

			return deferred.promise();
		}
	};
});
