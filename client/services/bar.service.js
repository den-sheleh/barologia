'use strict';

import angular from 'angular';

export class BarService {
  constructor($http) {
    'ngInject';

    this._$http = $http;
  }

  getAll() {
    return this._$http.get('/api/bars').then(result => result.data);
  }

  getDetails(barId) {
    return this._$http.get(`/api/bars/${encodeURIComponent(barId)}`).then(result => result.data);
  }
}

export default angular.module('barologia.services', [])
  .service('BarService', BarService)
  .name;
