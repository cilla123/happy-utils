const {
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
} = require('../validate')

// 判断是否是中国的手机
console.log(isChinaMobile("13120273187"))
console.log(isChinaMobile("131202731877"))

// 判断是否有中文
console.log(isChinese("13120273187哈哈"))
console.log(isChinese("13120273187"))
