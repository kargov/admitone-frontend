'use strict';

// Declare app level module which depends on views, and components
angular.module('admitOne', [
  'ngRoute',
  'ngMaterial',
  'ngTable',
  'LocalStorageModule',
  'admitOne.interceptors',
  'admitOne.services',
  'adminOne.dashboard',
  'admitOne.header',
  'admitOne.login',
  'admitOne.search',
  'admitOne.overview'
])
  .config(
      ['$locationProvider', '$routeProvider','$httpProvider','localStorageServiceProvider',
          function($locationProvider, $routeProvider, $httpProvider,localStorageServiceProvider) {
              $routeProvider
                  .when('/login',{
                      controller: 'LoginCtrl',
                      templateUrl: 'views/login/login.html'
                  })
                  .when('/dashboard',{
                      controller: 'DashboardCtrl',
                      templateUrl: 'views/dashboard/dashboard.html'
                  })
                  .otherwise({ redirectTo: '/login'});

              localStorageServiceProvider.setPrefix('admitOne');
              localStorageServiceProvider.setStorageType('sessionStorage');
              localStorageServiceProvider.setDefaultToCookie(false);
              localStorageServiceProvider.setStorageCookie(45, '/', false);
              localStorageServiceProvider.setStorageCookieDomain('localhost');

              $httpProvider.interceptors.push('AuthInterceptor');
              $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
          }
      ]
  )

  .run(['$rootScope', '$location','localStorageService', 'AuthenticationService', function ($rootScope, $location, localStorageService, AuthenticationService) {
      $rootScope.globals = localStorageService.get('globals') || {};
      $rootScope.$on('$routeChangeStart', function (event) {
          if (!AuthenticationService.getUser()) {
              $location.path('/login');
          }
          else {
              $location.path('/dashboard');
          }
      });
  }]);

