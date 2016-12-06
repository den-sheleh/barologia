'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: console.log,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  // Seed database on startup
  seedDB: false,

  googleMap: {
    apiKey: 'AIzaSyAqMwQqrpPyQc-uviylu9dl2nzqJPrv_fk',
  },

};
