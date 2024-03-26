import {app} from './app'
import db from "./db";

const DB = db;

app
    .listen({
        port: 3333,
        host: '0.0.0.0' // no local usar o seu IP
    })
    .then(() => {
        console.log('HTTP Server Running!')
    })
