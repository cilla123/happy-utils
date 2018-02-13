/**
 * 如果数字小于10前面自动添加0
 * @param {number} num 数字
 * @return {string} 处理后的字符串
 */
function addZero(num) {
    return num >= 0 && num < 10 ? "0" + num : String(num);
}

module.exports = {
    addZero
}