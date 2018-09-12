/**
 * 校验中国手机号
 * @param {string} value 手机号
 * @return {boolean}
 * @runkit true
 * @example
 * const { isChinaMobile } = require('happy-utils/validate')
 * isChinaMobile(13120273187); // true
 * isChinaMobile('13120273187g'); // false
 */
function isChinaMobile(value) {
    return isNumber(value) && value.length == 11
}

/**
 * 检查字符串是否存在中文
 * @param {string} value 待检测字符串
 * @return {boolean}
 * @runkit true
 * @example
 * const { isChinese } = require('happy-utils/validate')
 * isChinese('a工具'); // true
 * isChinese('aaaa'); // false
 */
function isChinese(value) {
    return (/[\u4e00-\u9fa5]/gm.test(String(value)))
}

/**
 * 判断一个字符串是否是 iso 标准日期
 * @param {string} value 日期字符串
 * @returns {boolean} 是否是 iso 标准日期
 * @runkit true
 * @example
 * const { isDate } = require('happy-utils/validate')
 * isDate(new Date());//true
 */
function isDate(value) {
    return !isNaN(new Date(value))
}

/**
 * 校验邮箱
 * @param {string} value 邮箱
 * @return {boolean} 是否是邮箱
 * @runkit true
 * @example
 * const { isEmail } = require('happy-utils/validate')
 * isEmail('wulv@youzan.com');//true
 */
function isEmail(value) {
    var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    return reg.test(value)
}

/**
 * 校验身份证
 * @param {string} value 身份证
 * @return {boolean}
 * @runkit true
 * @example
 * const { isIDcard } = require('happy-utils/validate')
 * isIDcard('32141244212412');//false
 */
function isIDcard(value) {
    var reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
    return reg.test(value)
}

/**
 * 校验手机号
 * @param {string} value 手机号
 * @return {boolean}
 * @runkit true
 * @example
 * const { isMobile } = require('happy-utils/validate')
 * isMobile(13170273187); // true
 * isMobile('13170273187g'); // false
 */
function isMobile(value) {
    return (/^((\+86)|(86))?(1)\d{10}$/.test(value) || /^\+?(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1|)-?\d{1,14}$/.test(String(value)))
}

/**
 * 校验数字
 * @param {string} 要检验的数字（无小数点，正负号）
 * @return {boolean}
 * @runkit true
 * @example
 * const { isNumber } = require('happy-utils/validate')
 * isNumber(111); //true
 * isNumber('23456'); //true
 * isNumber('2ggg6'); //false
 */
function isNumber(value) {
    return (/^\d+$/.test(value))
}

/**
 * 校验座机号
 * @param {string} value 座机号
 * @return {boolean}
 * @runkit true
 * @example
 * const { isPhone } = require('happy-utils/validate')
 * isPhone('0556-7037651'); // true
 * isPhone('13170273187g'); // false
 */
function isPhone(value) {
    return (/^0[0-9\-]{10,13}$/.test(String(value)))
}

/**
 * 校验验证码
 * @param {string} value 6位验证码
 * @return {boolean}
 * @runkit true
 * @example
 * const { isPostalCode } = require('happy-utils/validate')
 * isPostalCode('123456'); // true
 * isPostalCode('4567'); // false
 */
function isPostalCode(value) {
    return (/^\d{6}$/.test(String(value)))
}

/**
 * 校验腾讯QQ号
 * @memberof module:validate
 * @param {string} value QQ
 * @return {boolean}
 * @runkit true
 * @example
 * const { isQQ } = require('happy-utils/validate')
 * isQQ('https://www.qq.com/'); // false
 * isQQ('543885224'); // true
 */
function isQQ(value) {
    return (/^[1-9][0-9]{4,9}$/gim.test(String(value)))
}

/**
 * 校验URL
 * @param {string} value url
 * @return {boolean}
 * @runkit true
 * @example
 * const { isUrl } = require('happy-utils/validate')
 * isUrl('https://www.ddanlife.com/api'); // true
 * isUrl('http://www.ddanlife.com/api'); // true
 * isUrl('//www.ddanlife.com/api'); // true
 * isUrl('www.ddanlife.com/api'); // false
 */
function isUrl(value) {
    return (/^(https?:|)\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(String(value)))
}

module.exports = {
    isChinaMobile,
    isChinese,
    isDate,
    isEmail,
    isIDcard,
    isMobile,
    isNumber,
    isPhone,
    isPostalCode,
    isQQ,
    isUrl
}