'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './details.routes';

export class DetailsController {
  constructor(PhotoService) {
    'ngInject';

    this.photosCollection = angular.fromJson(this.bar.photos);
    this.schedule = angular.fromJson(this.bar.openingHours);

    this.slides = this.photosCollection.map(photo => ({
      src: PhotoService.photoSrc(photo.photo_reference),
      w: PhotoService.getMaxWidth(),
      h: PhotoService.getMaxHeight()
    }));
    this.opts = { index: 0 };
  }

  isActiveStar(rating, i) {
    return Math.round(rating) >= i;
  }

  showGallery(i) {
    if(angular.isDefined(i)) {
      this.opts.index = i;
    }
    this.galleryOpen = true;
  }

  closeGallery() {
    this.galleryOpen = false;
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
