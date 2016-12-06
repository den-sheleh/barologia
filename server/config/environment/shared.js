'use strict';

exports = module.exports = {
  // List of user roles
  userRoles: ['guest', 'user', 'admin'],
  googleMap: {
    apiKey: process.env.GOOGLE_API_KEY || '',
  },
};
