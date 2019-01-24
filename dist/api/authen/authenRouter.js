'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _check = require('express-validator/check');

var _filter = require('express-validator/filter');

var _authenController = require('./authenController');

var _authenController2 = _interopRequireDefault(_authenController);

var _validate = require('../../middleware/validate');

var _token = require('../../middleware/token');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var route = (0, _express.Router)();

route.post('/getUser', (0, _token.validate_token)(), [(0, _check.check)('user_id').isNumeric().withMessage('user_id not found')], (0, _validate.validate)(), _authenController2.default.getUser);

exports.default = route;