'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './details.routes';

export class DetailsController {
  constructor() {
    this.photosCollection = angular.fromJson(this.bar.photos);
    this.schedule = angular.fromJson(this.bar.openingHours);
  }

  isActiveStar(rating, i) {
    return Math.round(rating) >= i;
  }
}

export default angular.module('barologiaApp.details', [uiRouter])
  .config(routing)
  .component('barDetails', {
    bindings: { bar: '<' },
    template: require('./details.html'),
    controller: DetailsController,
    controllerAs: 'detailsCtrl'
  })
  .name;
