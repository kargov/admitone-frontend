angular.module('admitOne.login', [])

.controller('LoginCtrl',
    ['$scope','$location','$timeout','LoginService',
        function($scope,$location,$timeout,LoginService) {
            $scope.login = function () {
                LoginService.login($scope.username, $scope.password, function (response) {
                    if (response.data.success) {
                        $location.path('/dashboard');
                    } else {
                        $scope.showError = true;
                        $timeout(function() {
                            $scope.showError = false;
                        }, 5000);
                        $scope.error = response.data.result;
                    }
                });
            };
        }
    ]
);