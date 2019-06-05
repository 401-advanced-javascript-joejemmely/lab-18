'use strict';

require('dotenv').config();

/**
 * @module constant
 * @property PORT
 * @property SERVER_URL
 */
module.exports = {
  PORT: process.env.PORT || '3000',
  SERVER_URL: process.env.SERVER_URL || `http://localhost:${this.PORT}`,
};
