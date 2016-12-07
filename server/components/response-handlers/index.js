'use strict';

const _ = require('lodash');

export function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

export function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity || _.isEmpty(entity)) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

export function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}
