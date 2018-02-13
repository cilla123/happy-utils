const big = require('big.js')

/**
 * 加法函数，用来得到精确的加法结果
 * @param {number} arg1 参数1
 * @param {number} arg2 参数2
 * @returns {number}
 */
function accAdd(arg1, arg2) {
    arg1 = new big(arg1)
    arg2 = new big(arg2)
    return parseFloat(arg1.plus(arg2).toFixed())
}

/**
 * 除法函数，用来得到精确的除法结果
 * @param {number} arg1 参数1
 * @param {number} arg2 参数2
 * @returns {number}
 */
function accDiv(arg1, arg2) {
    arg1 = new big(arg1)
    arg2 = new big(arg2)
    return parseFloat(arg1.div(arg2).toFixed())
}

/**
 * 乘法函数，用来得到精确的乘法结果
 * @param {number} arg1 参数1
 * @param {number} arg2 参数2
 * @returns {number}
 */
function accMul(arg1, arg2) {
    arg1 = new big(arg1)
    arg2 = new big(arg2)
    return parseFloat(arg1.times(arg2).toFixed())
}

/**
 * 减法函数，用来得到精确的减法结果
 * @param {number} arg1 参数1
 * @param {number} arg2 参数2
 * @returns {number}
 */
function accSub(arg1, arg2) {
    arg1 = new big(arg1)
    arg2 = new big(arg2)
    return parseFloat(arg1.minus(arg2).toFixed())
}

module.exports = {
    accAdd,
    accDiv,
    accMul,
    accSub,
}