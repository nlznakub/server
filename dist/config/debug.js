'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.err = exports.debug = undefined;

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _debug = require('debug')('debugging:debug');
var _error = require('debug')('debugging:error');
var debug = exports.debug = _debug;

var err = exports.err = function err(message, url) {
    if (process.env.NODE_ENV === 'production') {
        var logger = _winston2.default.createLogger({
            level: 'error',
            format: _winston2.default.format.json(),
            transports: [new _winston2.default.transports.File({ filename: _path2.default.join(__dirname, '..', 'logs', (0, _momentTimezone2.default)().tz('Asia/Bangkok').format('YYYY-MM-DD') + '-error.log'), level: 'error' })]
        });

        return logger.error((0, _momentTimezone2.default)().tz('Asia/Bangkok').format('HH:mm:ss') + ' ' + (url || '') + ' => ' + message);
    } else {
        _error('error with message %o', message);
    }
};