'use strict';

import angular from 'angular';

export class GooglePhotoController {
  constructor(PhotoService) {
    'ngInject';

    this.src = PhotoService.photoSrc(this.reference);
  }
}

export default angular.module('barologiaApp.googlephoto', [])
  .component('googlePhoto', {
    bindings: { reference: '<' },
    template: '<img class="gallery__list__image" ng-src="{{googlePhotoCtrl.src}}" />',
    controller: GooglePhotoController,
    controllerAs: 'googlePhotoCtrl'
  })
  .name;
