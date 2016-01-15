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
	}));

	describe('isReady', function() {
		it('should return false if never initialized', function() {
			expect(twitterService.isReady()).toBeFalsy();
		});
	});
});
