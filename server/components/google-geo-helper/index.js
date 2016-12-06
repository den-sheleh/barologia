'use strict';

import config from '../../config/environment';
import GoogleLocation from 'node-googleplaces';
require('module')

const geoPoint = [50.061769, 19.937247];
const radius = 2500;
const searchedType = 'bar';

const defaultOptions = {
  radius,
  location: geoPoint.join(','),
  language: 'en',
  rankby: 'prominence',
  type: searchedType,
};

class GoogleGeoHelper {
  constructor() {
    this.locationHelper = new GoogleLocation(config.googleMap.apiKey);
  }

  getBars() {
    return this.locationHelper.nearbySearch(defaultOptions)
    .then(response => response.body.results);
  }

  getBarDetails(placeId) {
    return this.locationHelper.details({ placeid: placeId })
    .then(response => response.body.result);
  }
}

module.exports = GoogleGeoHelper;
