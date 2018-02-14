/**
 * 给大数字添加逗号分隔符
 * @param {number} value  待格式化的值
 * @returns {string} 格式化后的值
 * @runkit true
 * @example
 * const { formatLargeNumber } = require('happy-utils/money')
 * formatLargeNumber(1000000);
 * // => '1,000,000'
 */
function formatLargeNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * 格式化金钱格式，默认是分
 * @param {number} value  待格式化的金额数字
 * @param {boolean} cent 是否是分
 * @returns {string} 格式化之后的金额，精度2位
 * @runkit true
 * @example
 * const { format } = require('happy-utils/money')
 * format(1000000, false));
 * //'1,000,000.00'
 * format(1000000);
 * //'10,000.00'
 */
function format(value) {
    const cent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true
    value = parseFloat(value)
    if (cent) {
        value /= 100
    }
    return formatLargeNumber(value.toFixed(2))
}

/**
 * 计算金钱的加法，返回格式化后的格式，默认是分
 * @param {number} a 参数a
 * @param {number} b 参数b
 * @param {boolean} cent 是否是分
 * @returns {string}
 * @runkit true
 * @example
 * const { add } = require('happy-utils/money')
 * add(1000000, 200));
 * //'10,002.00'
 */
function add(a, b) {
    const cent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
    a = parseFloat(a, 10)
    b = parseFloat(b, 10)
    return format(a + b, cent)
}

/**
 * 相减
 * @param  {string|number} a 参数a
 * @param  {string|number} b 参数b
 * @param {boolean} true 是否是分
 * @returns {string}
 * @runkit true
 * @example
 * const { minus } = require('happy-utils/money')
 * minus('3', '1.2');
 * // => '2.80'
 */
function minus(a, b) {
    const cent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
    a = parseFloat(a, 10)
    b = parseFloat(b, 10)
    return format(a - b, cent)
}

/**
 * 相乘
 * @param  {string|number} a
 * @param  {string|number} b
 * @param {boolean} true 是否是分
 * @returns {string}
 * @runkit true
 * @example
 * const { multiply } = require('happy-utils/money')
 * minus('3', '1.2');
 * // => '3.60'
 */
function multiply(a, b) {
    const cent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true
    a = parseFloat(a, 10)
    b = parseFloat(b, 10)
    return format(a * b, cent)
}

/**
 * toCent 把字符串转成以分为单位的整数。
 * @param  {string} amount
 * @returns {number}
 * @runkit true
 * @example
 * const { toCent } = require('happy-utils/money')
 * toCent('4.90');
 * // => 490
 */
function toCent(amount) {
    return Math.round(parseFloat(amount) * 100)
}

/**
  * tozhCN 把字符串转成以分为单位的整数。
  * @param {number|string} num 金额
  * @returns {string} 中文大写的金额, 标准会计格式
  * @runkit true
  * @example
  * const { tozhCN } = require('happy-utils/money')
  * tozhCN(500.3);
  * // => 伍佰元叁角整
  */
function tozhCN(num) {
    if (typeof num === 'number') {
        num = String(num)
    }
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)) {
        throw new Error('\u975E\u6CD5\u6570\u636E: ' + JSON.stringify(num))
    }
    let unit = '京亿万仟佰拾兆万仟佰拾亿仟佰拾万仟佰拾元角分', str = ''
    num += '00'
    const pos = num.indexOf('.')
    if (pos >= 0) {
        num = num.substring(0, pos) + num.substr(pos + 1, 2)
    }
    unit = unit.substr(unit.length - num.length)
    for (let i = 0, len = num.length; i < len; i++) {
        str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i)
    }
    return str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(兆|万|亿|元)/g, '$1').replace(/(兆|亿)万/g, '$1').replace(/(京|兆)亿/g, '$1').replace(/(京)兆/g, '$1').replace(/(京|兆|亿|仟|佰|拾)(万?)(.)仟/g, '$1$2零$3仟').replace(/^元零?|零分/g, '').replace(/(元|角)$/g, '$1整')
}

module.exports = {
    formatLargeNumber,
    format,
    add,
    minus,
    multiply,
    toCent,
    tozhCN,
}