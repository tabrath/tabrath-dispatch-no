angular.module('tabrath').controller('LibP2PController', ['$scope', 'LibP2P', function($scope, LibP2P) {
    $scope.project = LibP2P.project;
    $scope.modules = LibP2P.modules;
}]);