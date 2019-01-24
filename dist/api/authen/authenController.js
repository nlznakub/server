'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/* สำหรับจัดการฟังก์ชั่น */


var _index = require('../../knex/index');

var _index2 = _interopRequireDefault(_index);

var _debug = require('../../config/debug');

var _authenModel = require('./authenModel');

var _authenModel2 = _interopRequireDefault(_authenModel);

var _response = require('../../config/response');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var authenController = function () {
    function authenController() {
        _classCallCheck(this, authenController);
    }

    _createClass(authenController, [{
        key: 'getUser',
        value: async function getUser(req, res) {
            try {
                var result = await _authenModel2.default.getUserAll({ user_id: user_id });
                (0, _response.success)(res, result);
                (0, _debug.debug)(result);
            } catch (error) {
                (0, _debug.err)(error, req.originalUrl);
                (0, _response.failed)(res, "get user error");
            }
        }
    }, {
        key: 'insertUser',
        value: async function insertUser(req, res) {
            try {

                (0, _response.success)(res, '');
            } catch (error) {
                (0, _debug.err)(error.message, req.originalUrl);
                (0, _response.failed)(res, '');
            }
        }
    }]);

    return authenController;
}();

exports.default = new authenController();