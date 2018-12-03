'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeorm = require('typeorm');

var _debug = require('../config/debug');

exports.default = async function () {
    try {
        await (0, _typeorm.createConnection)();
        (0, _debug.debug)('create table success');
    } catch (error) {
        (0, _debug.err)('create table fail', error.message);
    }
};