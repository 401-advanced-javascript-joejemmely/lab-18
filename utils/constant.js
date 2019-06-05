'use strict';

require('dotenv').config();

/**
 * @module constant
 */
module.exports = {
  PORT: process.env.PORT || '3000',
  SERVER_URL: process.env.SERVER_URL || `http://localhost:${this.PORT}`,
};
