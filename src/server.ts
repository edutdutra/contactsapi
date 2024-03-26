import {app} from './app'
import db from "./db";

const DB = db;

// host: # IP #
app
    .listen({
        port: 3333,
    })
    .then(() => {
        console.log('HTTP Server Running!')
    })
