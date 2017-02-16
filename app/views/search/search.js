angular.module('admitOne.search', [])

.controller('SearchCtrl',
    ['$rootScope','$scope','SearchService',
        function($rootScope,$scope,SearchService) {
           $scope.search = function() {
               SearchService.search($scope.startEventId,$scope.endEventId, function (response) {
                   $scope.startEventId = null;
                   $scope.endEventId = null;
                   if (response.data.success) {
                       $rootScope.$broadcast('overviewResult',{ data: response.data.results } );
                   }
               });
           }
        }
    ]
);