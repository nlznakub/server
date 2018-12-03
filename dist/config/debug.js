'use strict';

var _debug = require('debug')('express:debug');
var _error = require('debug')('express:error');

exports.debug = _debug;
exports.err = function (message) {
  return _error('error with message %o', message);
};