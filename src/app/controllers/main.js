angular.module('tabrath').controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.links = [
        { title: 'blog', href: '/blog' },
        { title: 'projects', href: '/projects' },
        { title: 'about', href: '/about' },
        { title: 'skills', href: '/skills' },
    ];
    
    function isActive(lnk) {
        return $location.path().startsWith(lnk.href);
    };

    $scope.isActive = isActive;

    function getActive() {
        for (var i = 0; i < $scope.links.length; i++) {
            if (isActive($scope.links[i])) {
                return $scope.links[i];
            }
        }
        return null;
    };
    
    $scope.getActive = getActive;
}]);