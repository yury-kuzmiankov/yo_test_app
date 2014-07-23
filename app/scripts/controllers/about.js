'use strict';

/**
 * @ngdoc function
 * @name yeomanTestAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTestAppApp
 */
angular.module('yeomanTestAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
