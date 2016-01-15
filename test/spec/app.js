'use strict';

describe('Run', function() {
	beforeEach(function() {
		spyOn(fullpage, 'initialize').and.callFake(function() {});
	});

	beforeEach(module('twitterBoardApp'));

	var $location, $rootScope;

	beforeEach(inject(function(_$location_, _$rootScope_) {
		$location = _$location_;
		$rootScope = _$rootScope_;

		spyOn($location, 'path');
	}));

	it('should initialize fullpage.js', function() {
		expect(fullpage.initialize).toHaveBeenCalledWith('#fullpage');
	});

	describe('$rootScope.goToState', function() {
		it('should not call $location if a state is not provided', function() {
			$rootScope.goToState();

			expect($location.path).not.toHaveBeenCalled();
		});

		it('should call $location with state when passed', function() {
			$rootScope.goToState('some state');

			expect($location.path).toHaveBeenCalledWith('some state');
		});
	});
});
