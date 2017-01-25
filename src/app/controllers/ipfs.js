angular.module('tabrath').controller('IpfsController', ['$scope', 'IPFS', function($scope, IPFS) {
    $scope.project = IPFS.project;
    $scope.modules = IPFS.modules;
}]);