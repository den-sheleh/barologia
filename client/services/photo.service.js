'use strict';

import angular from 'angular';

const PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo';
const MAX_WIDTH = 1280;
const MAX_HEIGHT = 1024;

export class PhotoService {
  constructor(Util, appConfig) {
    'ngInject';

    this._util = Util;
    this._appConfig = appConfig;
  }

  photoSrc(reference) {
    return this._util.buildUrl(PHOTO_URL, {
      photoreference: reference,
      maxwidth: MAX_WIDTH,
      maxheight: MAX_HEIGHT,
      key: this._appConfig.googleMap.apiKey,
    });
  }

  getMaxWidth() {
    return MAX_WIDTH;
  }

  getMaxHeight() {
    return MAX_HEIGHT;
  }
}

export default angular.module('barologia.photoservice', [])
  .service('PhotoService', PhotoService)
  .name;
