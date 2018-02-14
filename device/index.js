/**
 * 是否微信内置浏览器
 * @return {Boolean}
 */
function isWeixin() {
    const ua = navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i) == 'micromessenger'
}

/** 
 * 获取手机类型 
 */
function getMobileType() {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    if (isAndroid) {
        return 'android'
    } else if (isiOS) {
        return 'iphone'
    }
}

/**
 * 获取打开的网页在哪里打开
 * @return {String}
 */
const getOs = () => {
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad'
    const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os'
    const bIsMidp = sUserAgent.match(/midp/i) == 'midp'
    const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4'
    const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb'
    const bIsAndroid = sUserAgent.match(/android/i) == 'android'
    const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce'
    const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile'
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'mobile'
    } else {
        return 'web'
    }
}

module.exports = {
    isWeixin,
    getMobileType,
    getOs
}