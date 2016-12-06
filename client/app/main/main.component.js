import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {}

export default angular.module('barologiaApp.main', [uiRouter])
  .component('main', {
    template: require('./main.html'),
    bindings: {
      bars: '<',
    },
    controller: MainController
  })
  .config(routing)
  .name;
