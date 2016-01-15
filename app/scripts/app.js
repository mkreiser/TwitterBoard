'use strict';

/**
 * @ngdoc overview
 * @name twitterBoardApp
 * @description
 * # twitterBoardApp
 *
 * Main module of the application.
 */
angular
  .module('twitterBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($location, $rootScope) {
    fullpage.initialize('#fullpage');

    $rootScope.goToState = function(state) {
      if (state) {
        $location.path(state);
      }
    };
  });
