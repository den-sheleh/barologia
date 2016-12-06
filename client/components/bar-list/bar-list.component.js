import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './bar-list.routes';

export default angular.module('barologiaApp.main', [uiRouter])
  .component('barList', {
    template: require('./bar-list.html'),
    bindings: {
      bars: '<',
    },
    controllerAs: 'barListCtrl',
  })
  .config(routing)
  .name;
