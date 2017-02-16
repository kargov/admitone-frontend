angular.module('admitOne.interceptors',[])
    .factory('AuthInterceptor',
        ['AuthenticationService',
            function(AuthenticationService) {
                return {
                    'request': function(config) {
                        config.headers = config.headers || {};
                        var user = AuthenticationService.getUser();
                        if(user) {
                            var encodedString = btoa(user.username+":"+user.password);
                            config.headers.Authorization = 'Basic '+encodedString;
                        }
                        return config;
                    }
                };
            }
        ]
    );