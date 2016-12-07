'use strict';

import angular from 'angular';

const STATIC_MAP_URL = 'https://maps.googleapis.com/maps/api/staticmap';
const MAX_WIDTH = 380;
const MAX_HEIGHT = 250;
const MAP_TYPE = 'roadmap';

export class GooglePhotoController {
  constructor(Util, appConfig) {
    'ngInject';

    this.src = Util.buildUrl(STATIC_MAP_URL, {
      size: `${MAX_WIDTH}x${MAX_HEIGHT}`,
      maptype: MAP_TYPE,
      key: appConfig.googleMap.apiKey,
      markers: `color:red|${this.lat},${this.lng}`
    });
  }
}

export default angular.module('barologiaApp.googlestaticmap', [])
  .component('googleStaticMap', {
    bindings: {
      lat: '<',
      lng: '<'
    },
    template: '<img class="card__map__image" ng-src="{{googleStaticMapCtrl.src}}" />',
    controller: GooglePhotoController,
    controllerAs: 'googleStaticMapCtrl'
  })
  .name;
