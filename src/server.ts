import {app} from './app'
import db from "./db";

const DB = db;

app
    .listen({
        port: 3333,
        // host: # IP #
    })
    .then(() => {
        console.log('HTTP Server Running!')
    })
