'use strict';

angular.module('myApp.setUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/setUser', {
    templateUrl: 'setUser/setUser.html',
    controller: 'ExampleController'
  });
}])


.controller('ExampleController', ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    Ramen.init.update({user: user});
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);

