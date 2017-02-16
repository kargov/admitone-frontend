angular.module('admitOne.header',[])

.controller('HeaderCtrl',['$scope','$location','LogoutService', function($scope, $location, LogoutService){
    $scope.logout = function () {
        LogoutService.logout(function(response){
            if (response && response.success) {
                $location.path('/login');
            }
        });
    }
}]);