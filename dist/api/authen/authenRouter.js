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

route.get('/getUserAll', _authenController2.default.getUserAll);

route.post('/getUser',
// validate_token(),
// [
//     check('user_id').isNumeric().withMessage('user_id not found')
// ],
// validate(),
_authenController2.default.getUser);

exports.default = route;