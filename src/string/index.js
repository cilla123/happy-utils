const { isArray, reduce, isPlainObject,  } = require('lodash')

/**
 * 如果数字小于10前面自动添加0
 * @param {number} num 数字
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { addZero } = require('happy-utils/string')
 * addZero(5);
 * // => '05'
 */
function addZero(num) {
    return num >= 0 && num < 10 ? "0" + num : String(num);
}

/** 
 * 获取HTML里的文字内容,此方法只能用于浏览器，服务器环境不能使用
 * @param {string} str html字符串
 * @return {string} 处理后的文字
 * @example
 * const { getDecodeHTMLEntities } = require('happy-utils/string')
 * decodeHTMLEntities('<li>111<span>222</span></li>')
 * // '111222'
 */
function getDecodeHTMLEntities(str){
    const element = document.createElement('div');
    if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
    }
    return str;
}

/**
 * 字符串的转义,将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`
 * @param {string} text处理前字符串
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { getEscapeText } = require('happy-utils/string')
 * getEscapeText('<hello>')
 * // '&lt;hello&gt;'
 */
function getEscapeText(text) {
    const _escape = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;'
    }
    const escapeExpr = /(&|<|>|"|')/g
    return ('' + text).replace(escapeExpr, function (match) {
        return _escape[match]
    });
}

/**
 * 字符串的反转义,将`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号
 * @param {string} text 处理前字符串
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { getUnescapeText } = require('happy-utils/string')
 * getUnescapeText('&lt;hello&gt;')
 * // '<hello>'
 */
function getUnescapeText(text) {
    const _unescape = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#x27;': "'"
    }
    const unescapeExpr = /(&amp;|&lt;|&gt;|&quot;|&#x27;)/g;
    return ('' + text).replace(unescapeExpr, function (match) {
        return _unescape[match];
    });
}

/**
 * 获取随机字母数字混合字符串
 * @param {number} length 长度
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { makeRandomString } = require('happy-utils/string')
 * makeRandomString(5)
 */
function makeRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    length = length || 10;
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/**
 * 下划线格式字符串转为驼峰格式
 * @param {string} text处理前字符串
 * @return {string} 处理后的字符串
 * @runkit true
 * @example
 * const { toCamelCase } = require('happy-utils/string')
 * toCamelCase('to_camel_case')
 * // 'toCamelCase'
 */
function toCamelCase(str) {
    return str.replace(/\_[a-z]/g, function (item) {
        return item[1].toUpperCase();
    });
}

/**
 * 驼峰格式字符串转为下划线格式
 * @param {string} text处理前字符串
 * @return {string} 处理后的字符串
 */
function toSnakeCase(str) {
    return str.replace(/[A-Z]/g, function (item) {
        return "_" + item[0].toLowerCase();
    });
}

/**
 * 将Object的key从下划线格式字符串转为驼峰格式
 * @param {object | array} value 待处理对象或数组
 * @param {boolean} deep 是否递归处理
 * @return {object | array} 处理后的对象或数组
 * @runkit true
 * @example
 * const { mapKeysToCamelCase } = require('happy-utils/string')
 * mapKeysToCamelCase({ happy_key: 1 })
 * // { happyKey: 1 }
 */
function mapKeysToCamelCase(value){
    const deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let res = void 0;
    if (isArray(value) && value.length > 0) {
        res = [];
    } else if (isPlainObject(value) && Object.keys(value).length > 0) {
        res = {};
    } else {
        return value;
    }
    return reduce(value, function (result, val, key) {
        if (deep) {
            val = mapKeysToCamelCase(val);
        }
        const newKey = typeof key === 'string' ? toCamelCase(key) : key;
        result[newKey] = val;
        return result;
    }, res);
}

/**
 * 将数组或者对象里的key从驼峰格式字符串转为下划线格式
 * @param {object | array} value 待处理对象或者数组
 * @param {boolean} deep 是否递归处理
 * @return {object| array} 处理后的对象
 * @runkit true
 * @example
 * const { mapKeysToSnakeCase } = require('happy-utils/string')
 * mapKeysToSnakeCase({ happyKey: 1 });
 * // { happy_key: 1 }
 */
function mapKeysToSnakeCase(value) {
    const deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let res = void 0;
    if (isArray(value) && value.length > 0) {
        res = [];
    } else if (isPlainObject(value) && Object.keys(value).length > 0) {
        res = {};
    } else {
        return value;
    }
    return reduce(value, function (result, val, key) {
        if (deep) {
            val = mapKeysToSnakeCase(val);
        }
        const newKey = typeof key === 'string' ? toSnakeCase(key) : key;
        result[newKey] = val;
        return result;
    }, res);
}


module.exports = {
    addZero,
    getDecodeHTMLEntities,
    getEscapeText,
    getUnescapeText,
    makeRandomString,
    mapKeysToCamelCase,
    toCamelCase,
    mapKeysToSnakeCase,
    toSnakeCase
}