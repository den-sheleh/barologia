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

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import details from '../components/details/details.component';
import googlePhoto from '../components/google-photo/google-photo.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import BarService from '../services/bar.service';

import './app.scss';

angular.module('barologiaApp',
  [ngCookies, ngResource, ngSanitize, uiRouter, navbar, footer,
    details, main, constants, util, BarService, googlePhoto]
)
.config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['barologiaApp'], {
      strictDi: true
    });
  });
