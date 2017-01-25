angular.module('tabrath').controller('MultiformatsController', ['$scope', 'Multiformats', function($scope, Multiformats) {
    $scope.project = Multiformats.project;
    $scope.modules = Multiformats.modules;
}]);