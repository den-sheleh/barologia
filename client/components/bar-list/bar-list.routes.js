'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('index', {
    url: '/',
    component: 'barList',
    resolve: {
      bars: BarService => BarService.getAll(),
    },
  });
}
