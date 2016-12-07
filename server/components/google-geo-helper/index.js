'use strict';

import config from '../../config/environment';
import GoogleLocation from 'node-googleplaces';
import _ from 'lodash';

const geoPoint = [50.061769, 19.937247];
const radius = 2000;
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
    this.bars = [];
  }

  getBars() {
    return this._serchBars();
  }

  getBarDetails(placeId) {
    return this.locationHelper.details({ placeid: placeId })
    .then(response => response.body.result);
  }

  _serchBars(nextPageToken) {
    const self = this;

    let params = Object.assign({}, defaultOptions);
    if(nextPageToken) {
      params = { pagetoken: nextPageToken };
    }

    return this.locationHelper.nearbySearch(params)
    .then(response => {
      if(response.body.status === 'OK' && response.body.results.length > 0) {
        self.bars = _.uniqBy(self.bars.concat(response.body.results), 'place_id');
      }

      if(response.body.next_page_token) {
        return self._serchBars(response.body.next_page_token);
      } else {
        return self.bars;
      }
    });
  }
}

module.exports = GoogleGeoHelper;
