/* eslint-disable @typescript-eslint/no-var-requires */
const lodash_1 = require('lodash')

exports.utils = {
    quiet: () => '',
    qr: () => '',
    urlEncode(value) {
        return encodeURIComponent(value).replace(/[!'()]/g, function (c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
        })
    },
    urlDecode(value) {
        return decodeURIComponent(value)
    },
    base64Encode(value) {
        return Buffer.from(value).toString('base64')
    },
    base64Decode(value) {
        return Buffer.from(value, 'base64').toString('ascii')
    },
    parseJson(value) {
        return JSON.parse(value)
    },
    toJson(value) {
        return value !== undefined ? JSON.stringify(value) : JSON.stringify(null)
    },
    getErrors() {
        return this.errors
    },
    isNull(value) {
        return value === null || typeof value == 'undefined'
    },
    isNullOrEmpty(value) {
        if (this.isNull(value)) return true
        if (value instanceof Object) {
            return Object.keys(value.toJSON()).length == 0
        }
        if (Array.isArray(value)) {
            return value.toJSON().length == 0
        }
        return !!value
    },
    isNullOrBlank(value) {
        return this.isNullOrEmpty(value)
    },
    defaultIfNull(value, defaultValue = '') {
        if (value !== null && value !== undefined) return value
        return defaultValue
    },
    defaultIfNullOrEmpty(value, defaultValue) {
        if (value) return value
        return defaultValue
    },
    defaultIfNullOrBlank(value, defaultValue) {
        if (value) return value
        return defaultValue
    },
    isString(value) {
        return value instanceof String
    },
    isNumber(value) {
        return typeof value === 'number'
    },
    isBoolean(value) {
        return typeof value === 'boolean'
    },
    isList(value) {
        return Array.isArray(value)
    },
    isMap(value) {
        if (value instanceof Map) return value
        return value != null && typeof value === 'object'
    },
    typeOf(value) {
        if (value === null) return 'Null'
        if (this.isList(value)) return 'List'
        if (this.isMap(value)) return 'Map'
        switch (typeof value) {
            case 'number':
                return 'Number'
            case 'string':
                return 'String'
            case 'boolean':
                return 'Boolean'
            default:
                return 'Object'
        }
    },
    matches(pattern, value) {
        return new RegExp(pattern).test(value)
    },
    now: new Date(),
    str: {
        toUpper(str) {
            return str.toUpperCase()
        },
        toLower(str) {
            return str.toLowerCase()
        },
        toReplace(str, substr, newSubstr) {
            return str.replace(new RegExp(substr, 'g'), newSubstr)
        },
        normalize(str, form) {
            return str.normalize(form.toUpperCase())
        },
    },
    math: {
        roundNum: Math.round,
        minVal: Math.min,
        maxVal: Math.max,
        randomDouble: Math.random,
        randomWithinRange: lodash_1.random,
    },
}
