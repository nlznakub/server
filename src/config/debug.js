const _debug = require('debug')('debugging:debug');
const _error = require('debug')('debugging:error');
import moment from 'moment-timezone';
import winston from 'winston';
import path from 'path';

export const debug = _debug;

export const err = (message, url) => {
    if (process.env.NODE_ENV === 'production') {
        const logger = winston.createLogger({
            level: 'error',
            format: winston.format.json(),
            transports: [
                new winston.transports.File({ filename: path.join(__dirname, '..', 'logs', `${moment().tz('Asia/Bangkok').format('YYYY-MM-DD')}-error.log`), level: 'error' })
            ]
        })

        return logger.error(`${moment().tz('Asia/Bangkok').format('HH:mm:ss')} ${url || ''} => ${message}`);
    } else {
        _error('error with message %o', message)
    }
};