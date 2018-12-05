'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _debug = require('../config/debug');

var config = require('../knexfile');
var env = 'development'; // actually_use development
var knex = require('knex')(config[env]);

/**
 * ฟังก์ชั่นเรียก Migrate Knex
 */
async function migrate() {
    try {
        await knex.migrate.latest([config]);
        (0, _debug.debug)('!!! knex success !!!');
    } catch (error) {
        (0, _debug.err)('xxx knex fail xxx', error.message);
    }
}

migrate();
exports.default = knex;