'use strict';

const constants = require('../utils/constant.js');
const events = require('../utils/events.js');

const io = require('socket.io')(constants.PORT);

io.on('connection', socket => {
  console.log('New connection:', socket.id);

  socket.on(events.SAVE, message => {
    socket.broadcast.emit(events.SAVE, message);
  });

  socket.on(events.ERROR, message => {
    socket.broadcast.emit(events.ERROR, message);
  });
});
