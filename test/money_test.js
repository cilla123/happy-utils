const {
    formatLargeNumber,
    format,
    add,
    minus,
    multiply,
    toCent,
    tozhCN,
} = require('../money')

// 给大数字添加逗号分隔符
console.log(formatLargeNumber(100000000))

// 格式化金钱格式, true代表是分
console.log(format(100000000, false))
console.log(format(100000000, true))
console.log(format(100000000))

// 计算金钱的加法，返回格式化后的格式
console.log(add(1000000, 200, false))

// 相减
console.log(minus(1000000, 200, false))

// 相乘
console.log(minus(1000000, 200, false))

// 转分
console.log(toCent(1))

// 转中文
console.log(tozhCN(23012030.22))



