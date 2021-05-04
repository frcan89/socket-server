import { Console } from 'node:console';
import Server from './classes/server';
import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
import bodyParse from 'body-parser';
import cors from 'cors';
import express from 'express';


const server = new Server();

server.app.use( express.urlencoded({ extended: true }));
server.app.use(express.json());

server.app.use( cors({ origin: true, credentials: true }));

server.app.use('/', router);

server.start( () => {
    console.log(`Servidor corriendo en el puerto ${ SERVER_PORT}`);
})