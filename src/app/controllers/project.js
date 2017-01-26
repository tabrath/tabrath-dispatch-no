angular.module('tabrath').controller('ProjectController', ['$scope', '$routeParams', 'Projects', function($scope, $routeParams, Projects) {
    $scope.project = undefined;
    var projects = Projects.getProjects();
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].id === $routeParams.id) {
            $scope.project = projects[i];
            break;
        }
    }
}]);