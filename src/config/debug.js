const _debug = require('debug')('express:debug');
const _error = require('debug')('express:error');

exports.debug = _debug;
exports.err = message => _error('error with message %o', message);