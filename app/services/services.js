(function() {
    'use strict';

    angular
        .module('admitOne.services', [])
        .factory('LoginService', LoginService)
        .factory('LogoutService', LogoutService)
        .factory('AuthenticationService', AuthenticationService)
        .factory('SearchService', SearchService);

    var api = "http://localhost:8080/admitone-backend";

    function LoginService($http, AuthenticationService) {
        var service = {};
        service.login = function (username, password, callback) {
            AuthenticationService.setUser({username: username, password: password});
            $http.get(api+'/api/admin/login/',{params: {username: username, password:password}})
                .then(function (response) {
                    callback(response);
                })
                .catch(function(){
                    AuthenticationService.clearCredentials();
                    callback({data:{success:false,result:"Authentication Error"}});
                });
        };
        return service;
    }

    function LogoutService(AuthenticationService) {
        var service = {};
        service.logout = function (callback) {
            AuthenticationService.clearCredentials();
            callback({success:true})
        };
        return service;
    }

    function SearchService($http) {
        var service = {};
        service.search = function (fromEventId,toEventId,callback) {
            $http.get(api+'/api/admin/tickets/overview/', {params:{startEventId: fromEventId, endEventId:toEventId}})
                .then(function (response) {
                    callback(response);
                })
        };
        return service;
    }

    function AuthenticationService($rootScope,localStorageService) {
        return {
            setUser: function (user) {
                $rootScope.globals = {
                    currentUser: user
                };
                localStorageService.set('globals', $rootScope.globals);
            },
            getUser: function () {
                return $rootScope.globals.currentUser;
            },
            clearCredentials: function () {
                $rootScope.globals = {};
                localStorageService.remove('globals');
            }
        }
    }

})();