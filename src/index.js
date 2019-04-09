
import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import cookie from 'cookie-session';
import ratelimit from 'express-rate-limit';
import helmet from 'helmet';
import { createApi } from './api';
import { debug } from './config/debug';


require('dotenv').config();
require('./knex'); // use knex

const app = express();
const version = '/api/v1';

/*####################### SETTING #######################*/
// use helmet
app.use(helmet());

const whitelist = [
    `http://localhost:3000`,
    undefined
]
// const corsOption = {
//     origin: (origin, cb) => {
//         debug('origin %o', origin);
//         if (whitelist.indexOf(origin) !== -1) {
//             cb(null, true)
//         } else {
//             cb(new Error('Not allows by Cors'))
//         }
//     },
//     optionsSuccessStatus: 200,
//     preflightContinue: true,
//     credentials: true
// }

// app.use(cors(corsOption));
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyparser.json({ limit: '50mb' }))

app.use(cookie({
    name: 'knex-session',
    keys: ['knext'],
    maxAge: 8 * 60 * 60 * 1000,
    cookie: {
        httpOnly: true,
        secure: true
    }
}))

const limiter = ratelimit({
    windowsMs: 60 * 1000,
    max: 200
})

app.use(limiter)

/*####################### DEBUG #######################*/
app.use((req, res, next) => {
    debug(`origin %o`, req.originalUrl);
    next();
})

/*####################### API #######################*/
createApi(app, version);

app.listen(process.env.PORT, () => {
    debug(`Server is running port focus: ${process.env.PORT}`)
})