'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('details', {
    url: '/bars/:barId',
    component: 'barDetails',
    resolve: {
      bar: (BarService, $stateParams) => BarService.getDetails($stateParams.barId),
    },
  });
}
