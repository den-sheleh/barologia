'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import uiRouter from 'angular-ui-router';

import {
  routeConfig
} from './app.config';

import footer from '../components/footer/footer.component';
import barList from '../components/bar-list/bar-list.component';
import details from '../components/details/details.component';
import googlePhoto from '../components/google-photo/google-photo.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import BarService from '../services/bar.service';

import './app.scss';

angular.module('barologiaApp',
  [ngCookies, ngResource, ngSanitize, uiRouter, footer,
    details, barList, constants, util, BarService, googlePhoto]
)
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['barologiaApp'], {
      strictDi: true
    });
  });
