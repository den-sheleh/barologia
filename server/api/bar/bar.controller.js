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

const barHelper = new BarHelper();

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Bars
export function index(req, res) {
  return barHelper.getBars()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets bar details
export function show(req, res) {
  return barHelper.getDetails(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
