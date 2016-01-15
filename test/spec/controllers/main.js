'use strict';

describe('Controller: mainCtrl', function() {
	beforeEach(function() {
		spyOn(fullpage, 'initialize').and.callFake(function() {});
	});

	beforeEach(module('twitterBoardApp'));

	var controller, deferred, deferredTwo, scope, twitterService;
	var $rootScope;

	beforeEach(inject(function($controller, $q, _$rootScope_, _twitterService_) {
		$rootScope = _$rootScope_;
		twitterService = _twitterService_;

		scope = $rootScope.$new();

		deferred = $q.defer();
		deferredTwo = $q.defer();

		spyOn(twitterService, 'isReady').and.returnValue(true);
		spyOn(twitterService, 'initialize');
		spyOn(twitterService, 'connectTwitter').and.returnValue(deferred.promise);
		spyOn(twitterService, 'getLatestTweets').and.returnValue(deferredTwo.promise);

		controller = $controller('mainCtrl', {
			$scope: scope
		});
	}));

	it('should initialize twitterService', function() {
		expect(twitterService.initialize).toHaveBeenCalled();
	});

	it('should connect to Twitter via OAuth', function() {
		expect(twitterService.connectTwitter).toHaveBeenCalled();
	});

	describe('after connectTwitter promise resolution', function() {
		it('should check if the twitterService is ready', function() {
			deferred.resolve();
			scope.$digest();

			expect(twitterService.isReady).toHaveBeenCalled();
		});
	});
});
