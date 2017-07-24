'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope, $http) {
  
   $scope.apiData = "Hello World";
  /**  $http.get('http://localhost:8080/hello').success(function(data) {
          $scope.apiData = data;
        });**/

  });
