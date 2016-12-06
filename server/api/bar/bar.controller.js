/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/bars              ->  index
 * POST    /api/bars              ->  create
 * GET     /api/bars/:id          ->  show
 * PUT     /api/bars/:id          ->  upsert
 * PATCH   /api/bars/:id          ->  patch
 * DELETE  /api/bars/:id          ->  destroy
 */

'use strict';

import BarHelper from '../../components/bar-helper';
import * as handlers from '../../components/response-handlers';

const barHelper = new BarHelper();

// Gets a list of Bars
export function index(req, res) {
  return barHelper.getBars()
    .then(handlers.respondWithResult(res))
    .catch(handlers.handleError(res));
}

// Gets bar details
export function show(req, res) {
  return barHelper.getDetails(req.params.id)
    .then(handlers.handleEntityNotFound(res))
    .then(handlers.respondWithResult(res))
    .catch(handlers.handleError(res));
}
