const {
    addZero,
    getDecodeHTMLEntities,
    getEscapeText,
    makeRandomString,
    mapKeysToCamelCase,
    toCamelCase,
    mapKeysToSnakeCase,
    toSnakeCase,
    getUnescapeText,
} = require('../src/string')

// 数字小于10前面自动添加0
console.log(addZero(5))

// 获取HTML里的文字内容，只能用于浏览器此方法
// const domStr = '<li>111哈哈<span>22哟哟2</span></li>'
// console.log(getDecodeHTMLEntities(domStr))

// 字符串的转义
console.log(getEscapeText('<p>'))

// 生成随机字符串
console.log(makeRandomString(100))

// 将Object的key从下划线格式字符串转为驼峰格式
console.log(mapKeysToCamelCase({ happy_key: 2 }))

// 下划线格式字符串转为驼峰格式
console.log(toCamelCase('to_camel_case'))

// 驼峰格式字符串转为下划线格式
console.log(toSnakeCase('toSnakeCase'))

// 将数组或者对象里的key从驼峰格式字符串转为下划线格式
console.log(mapKeysToSnakeCase({ toSnakeCase: 2 }))

// 字符串的反转义, 将`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号
console.log(getUnescapeText('&lt;/div&gt;'))