'use strict';

import angular from 'angular';

const PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo';
const MAX_WIDTH = 1280;
const MAX_HEIGHT = 1024;

export class GooglePhotoController {
  constructor(Util, appConfig) {
    'ngInject';

    this.src = Util.buildUrl(PHOTO_URL, {
      photoreference: this.reference,
      maxwidth: MAX_WIDTH,
      maxheight: MAX_HEIGHT,
      key: appConfig.googleMap.apiKey,
    });
  }
}

export default angular.module('barologiaApp.googlephoto', [])
  .component('googlePhoto', {
    bindings: { reference: '<' },
    template: '<img ng-src="{{googlePhotoCtrl.src}}" />',
    controller: GooglePhotoController,
    controllerAs: 'googlePhotoCtrl'
  })
  .name;
