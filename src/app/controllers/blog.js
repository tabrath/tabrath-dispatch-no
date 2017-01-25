angular.module('tabrath').controller('BlogController', ['$scope', 'Blog', function($scope, Blog) {
    $scope.posts = Blog.posts;
}]);