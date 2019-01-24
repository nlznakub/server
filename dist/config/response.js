"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var success = exports.success = function success(res, result, code) {
  return res.status(code || 200).json({ success: true, result: result });
};
var failed = exports.failed = function failed(res, message, code) {
  return res.status(code || 400).json({ success: false, message: message });
};