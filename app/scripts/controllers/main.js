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
  
  // $scope.apiData = "Hello World";
 
   $http.get('/api/hello').
        then(function(response) {
            $scope.apiData = response.data;
        });

  });
