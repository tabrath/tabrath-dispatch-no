angular.module('tabrath').controller('ProjectListController', ['$scope', 'Projects', function($scope, Projects) {
    $scope.projects = Projects.getProjects();
}]);