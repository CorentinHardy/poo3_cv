'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('testApp')
  .controller('MenuCtrl',  function($scope) {
    $scope.homeClass = 'active';
    $scope.aboutClass = '';
    $scope.homePressed = function() {
      $scope.homeClass = 'active';
      $scope.aboutClass = '';
    };
    $scope.aboutPressed = function() {
      $scope.homeClass = '';
      $scope.aboutClass = 'active';
    };

  });
