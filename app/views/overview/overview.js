angular.module('admitOne.overview', [])

.controller('OverviewCtrl',
    ['$scope','NgTableParams',
        function($scope,NgTableParams) {
            $scope.$on('overviewResult', function(name,args) {
                $scope.tableParams = new NgTableParams({  page: 1, count: 10, sorting:{eventId:"asc"}}, { dataset: args.data});
            });
        }
    ]
);