import { debug, err } from '../config/debug';
var config = require('../knexfile');
var env = 'development'; // actually_use development
var knex = require('knex')(config[env]);


/**
 * ฟังก์ชั่นเรียก Migrate Knex
 */
async function migrate() {
    try {
        await knex.migrate.latest([config]);
        debug('!!! knex success !!!')
    } catch (error) {
        err('xxx knex fail xxx', error.message)
    }
}
debug('!!! knex !!!')
migrate();
export default knex;