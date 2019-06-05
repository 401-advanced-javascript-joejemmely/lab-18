'use strict';

const constants = require('../utils/constant.js');
const events = require('../utils/events.js');

const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const io = require('socket.io-client');

const socket = io.connect(`${constants.SERVER_URL}:${constants.PORT}`);

socket.on('connect', () => {
  console.log(`Client ${socket.id} on ${socket.io.uri}`);
  alterFile(file);
});

const alterFile = async file => {
  try {
    const buffer = await readFileAsync(file);
    const upperCasedContent = buffer.toString().toUpperCase();
    await writeFileAsync(file, Buffer.from(upperCasedContent));
    await socket.emit(events.SAVE, 'The file was saved');
    await socket.close();
  } catch (error) {
    socket.emit(events.ERROR, 'Something went horribly wrong');
    socket.close();
  }
};

let file = process.argv.slice(2).shift();
