'use strict';

describe('Service: twitterService', function() {
	beforeEach(function() {
		spyOn(fullpage, 'initialize').and.callFake(function() {});
	});

	beforeEach(module('twitterBoardApp'));
	
	var twitterService;
	var $q;

	beforeEach(inject(function(_$q_, _twitterService_) {
		$q = _$q_;
		twitterService = _twitterService_;

		spyOn(OAuth, 'clearCache');
	}));

	describe('isReady', function() {
		it('should return false if never initialized', function() {
			expect(twitterService.isReady()).toBeFalsy();
		});
	});

	describe('clearCache', function() {
		it('should call OAuth to clear the user\'s cache', function() {
			twitterService.clearCache();

			expect(OAuth.clearCache).toHaveBeenCalledWith('twitter');
		});

		it('should reset authorizationResult', function() {
			twitterService.clearCache();

			expect(twitterService.isReady()).toBeFalsy();
		});
	});
});
