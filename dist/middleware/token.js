'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate_token = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _response = require('../config/response');

var _debug = require('../config/debug');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate_token = exports.validate_token = function validate_token() {
    return function (req, res, next) {
        if (req.headers && req.headers.authorization) {
            _jsonwebtoken2.default.verify(req.headers.authorization, process.env.SIGN, function (error, decode) {
                if (error) {
                    (0, _debug.err)('token not found', req.originalUrl);
                    (0, _response.failed)(res, 'token not found');
                } else {
                    // value = 
                    (0, _debug.debug)(req.session.token);
                    next();
                }
            });
        } else if (req.session.token) {
            _jsonwebtoken2.default.verify(req.session.token, process.env.SIGN, function (err, decode) {
                if (err) {
                    err('token not found', req.originalUrl);
                    (0, _response.failed)(res, 'token not found');
                } else {
                    // value = 
                    (0, _debug.debug)(req.session.token);
                    next();
                }
            });
        } else {
            req.session.token = null;
            (0, _debug.err)('token not found', req.originalUrl);
            (0, _response.failed)(res, 'token invalidate');
        }
    };
};