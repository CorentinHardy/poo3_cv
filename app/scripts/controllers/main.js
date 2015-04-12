'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope, $http) {
    // fonction pour recuperer un json:
    $http.get("data/CV.json").success(function(data){
      $scope.CV = data;
    });
    $scope.orderFormation = 'annee_fin';
    $scope.orderRealisation = 'annee';

    $scope.vide = {
      value: ""
    };
    $scope.minimumFYear = {
      value: 2009
    };
    $scope.maximumFYear = {
      value: 2015
    };
    $scope.minimumfixeFYear = {
      value: 2009
    };
    $scope.maximumfixeFYear = {
      value: 2015
    };
    $scope.RYear = {
      value: null
    };
    $scope.minimumRYear = {
      value: 2012
    };
    $scope.maximumRYear = {
      value: 2015
    };
  });
