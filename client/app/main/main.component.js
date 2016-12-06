import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  bars = [];
  newBar = '';

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    return this.$http.get('/api/bars')
      .then(response => {
        this.bars = response.data;
      });
  }

  addThing() {
    if(this.newBar) {
      this.$http.post('/api/bars', {
        name: this.newBar
      });
      this.newBar = '';
    }
  }

  deleteThing(bar) {
    this.$http.delete(`/api/bars/${bar._id}`);
  }
}

export default angular.module('barologiaApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
