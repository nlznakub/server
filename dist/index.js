'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _cookieSession = require('cookie-session');

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _expressRateLimit = require('express-rate-limit');

var _expressRateLimit2 = _interopRequireDefault(_expressRateLimit);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _api = require('./api');

var _debug = require('./config/debug');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();
require('./knex'); // use knex

var app = (0, _express2.default)();
var version = '/api/v1';

/*####################### SETTING #######################*/
// use helmet
app.use((0, _helmet2.default)());

var whitelist = ['http://localhost:3000', undefined];
// const corsOption = {
//     origin: (origin, cb) => {
//         debug('origin %o', origin);
//         if (whitelist.indexOf(origin) !== -1) {
//             cb(null, true)
//         } else {
//             cb(new Error('Not allows by Cors'))
//         }
//     },
//     optionsSuccessStatus: 200,
//     preflightContinue: true,
//     credentials: true
// }

// app.use(cors(corsOption));
app.use(_bodyParser2.default.urlencoded({ extended: true, limit: '50mb' }));
app.use(_bodyParser2.default.json({ limit: '50mb' }));

app.use((0, _cookieSession2.default)({
    name: 'knex-session',
    keys: ['knext'],
    maxAge: 8 * 60 * 60 * 1000,
    cookie: {
        httpOnly: true,
        secure: true
    }
}));

var limiter = (0, _expressRateLimit2.default)({
    windowsMs: 60 * 1000,
    max: 200
});

app.use(limiter);

/*####################### DEBUG #######################*/
app.use(function (req, res, next) {
    (0, _debug.debug)('origin %o', req.originalUrl);
    next();
});

/*####################### API #######################*/
(0, _api.createApi)(app, version);

app.listen(process.env.PORT, function () {
    (0, _debug.debug)('Server is running port focus: ' + process.env.PORT);
});