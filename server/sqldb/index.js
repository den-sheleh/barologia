/**
 * Sequelize initialization module
 */

'use strict';

import path from 'path';
import config from '../config/environment';
import Sequelize from 'sequelize';

const db = {
  Sequelize,
  sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Bar = db.sequelize.import('../api/bar/bar.model');
db.BarDetails = db.sequelize.import('../api/bar/bar-details.model');

module.exports = db;
