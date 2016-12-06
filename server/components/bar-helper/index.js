'use strict';

import {Bar, BarDetails} from '../../sqldb';
import GoogleGeoHelper from '../google-geo-helper';
import moment from 'moment';

const expiringPeriod = 3;

export default class BarHelper {
  constructor() {
    this.geoHelper = new GoogleGeoHelper();
  }

  getBars() {
    const self = this;

    return Bar.findAll()
    .then(bars => {
      let result = Promise.resolve(bars);

      if(bars.length === 0 || moment.utc().diff(moment.utc(bars[0].createdAt), 'hours', true) > expiringPeriod) {
        let barAttributes;

        result = self.geoHelper.getBars()
        .then(function(response) {
          barAttributes = response.map(self._parsePlaceResponse);

          return Bar.destroy({
            truncate: true,
            restartIdentity: true,
          });
        })
        .then(() => Bar.bulkCreate(barAttributes))
        .then(() => barAttributes);
      }

      return result;
    });
  }

  getDetails(barId) {
    const self = this;

    return BarDetails.findById(barId)
    .then(barDetails => {
      let result = Promise.resolve(barDetails);

      if(!barDetails || moment.utc().diff(moment.utc(barDetails.updatedAt), 'hours', true) > expiringPeriod) {
        let barDetailsAttributes = {};

        result = self.geoHelper.getBarDetails(barId)
        .then(function(response) {
          if(response) {
            barDetailsAttributes = self._parseDetailsResponse(response);
            return BarDetails.upsert(barDetailsAttributes);
          }

          return;
        })
        .then(() => barDetailsAttributes);
      }

      return result;
    });
  }

  _parsePlaceResponse(entity) {
    return {
      _id: entity.place_id,
      name: entity.name || 'Unknown',
      latitude: entity.geometry.location.lat,
      longitude: entity.geometry.location.lng,
      formattedAddress: entity.vicinity,
      rating: entity.rating,
      photoAttributes: entity.photos,
    };
  }

  _parseDetailsResponse(entity) {
    return {
      _id: entity.place_id,
      name: entity.name || 'Unknown',
      latitude: entity.geometry.location.lat,
      longitude: entity.geometry.location.lng,
      formattedAddress: entity.formatted_address,
      phoneNumber: entity.international_phone_number,
      website: entity.website,
      rating: entity.rating,
      openingHours: entity.opening_hours.weekday_text,
      photos: entity.photos,
      googleUrl: entity.url,
      updatedAt: moment.utc(),
    };
  }
}
