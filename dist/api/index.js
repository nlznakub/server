'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createApi = undefined;

var _authenRouter = require('./authen/authenRouter');

var _authenRouter2 = _interopRequireDefault(_authenRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApi = exports.createApi = function createApi(app, version) {
    app.use(version + '/auth', _authenRouter2.default);
};