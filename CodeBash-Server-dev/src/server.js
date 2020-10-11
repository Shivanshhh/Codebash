import socketHandler from './sockets/socketHandler';

const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('../router');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

socketHandler(io);

server.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});
