import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './bar-list.routes';

export class BarListController {
  isActiveStar(rating, i) {
    return Math.round(rating) >= i;
  }
}

export default angular.module('barologiaApp.main', [uiRouter])
  .component('barList', {
    template: require('./bar-list.html'),
    bindings: {
      bars: '<',
    },
    controller: BarListController,
    controllerAs: 'barListCtrl',
  })
  .config(routing)
  .name;
