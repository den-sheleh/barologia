'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $stateProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

  $stateProvider.state('notFound', {
    url: '/404.html',
    templateUrl: '../views/404.html'
  });
}
