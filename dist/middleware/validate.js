'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = undefined;

var _check = require('express-validator/check');

var _response = require('../config/response');

var validate = exports.validate = function validate() {
    return function (req, res, next) {
        var error = (0, _check.validationResult)(req);
        if (!error.isEmpty()) {
            return (0, _response.failed)(res, error.array()[0].msg);
        }

        next();
    };
};