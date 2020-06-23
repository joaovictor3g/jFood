import express from 'express'; 
import path from 'path';
import http from 'http';
import socketio from 'socket.io';

import routes from './routes';


const app = express();
const server = http.createServer(app);
const sockets = socketio(server);

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp')));

server.listen(3333, () => {
    console.log('>Listening on port:3000');
});