'use strict';

const constants = require('../utils/constant.js');
const events = require('../utils/events.js');

const io = require('socket.io-client');

const socket = io.connect(`${constants.SERVER_URL}:${constants.PORT}`);

/**
 * Listen for events emitted by the server
 */

socket.on('connect', () => {
  console.log(`Listening on ${socket.io.uri}`);
});

socket.on(events.SAVE, message => {
  console.log(`🤓  ${message}`);
});

socket.on(events.ERROR, message => {
  console.log(`😱  ${message}`);
});
