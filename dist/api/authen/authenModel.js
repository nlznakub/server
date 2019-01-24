'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* สำหรับเชื่อมต่อ Database */


var _index = require('../../knex/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var authenModel = function () {
    function authenModel() {
        _classCallCheck(this, authenModel);
    }

    _createClass(authenModel, [{
        key: 'registerAuth',
        value: function registerAuth() {
            return (0, _index2.default)('').insert();
        }
    }, {
        key: 'loginAuth',
        value: function loginAuth(_ref) {
            _objectDestructuringEmpty(_ref);
        }
    }, {
        key: 'getUserAll',
        value: function getUserAll(_ref2) {
            var user_id = _ref2.user_id;

            return (0, _index2.default)('tbl_user').select().where({ user_id: user_id });
        }
    }]);

    return authenModel;
}();

exports.default = new authenModel();