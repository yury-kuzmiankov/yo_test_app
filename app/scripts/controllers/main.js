'use strict';

/**
 * @ngdoc function
 * @name yeomanTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTestAppApp
 */
angular.module('yeomanTestAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
