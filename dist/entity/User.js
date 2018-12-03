'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _typeorm = require('typeorm');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var User = (_dec = (0, _typeorm.Entity)({ name: 'user_tbl' }), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)({ type: 'integer' }), _dec3 = (0, _typeorm.Column)({ type: 'varchar', length: 30 }), _dec(_class = (_class2 = function User() {
    _classCallCheck(this, User);

    _initDefineProp(this, 'id', _descriptor, this);

    _initDefineProp(this, 'name', _descriptor2, this);
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'id', [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return undefined;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return undefined;
    }
})), _class2)) || _class);
exports.default = User;