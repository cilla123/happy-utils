/**
 * 设置本地存储的值
 * @param {string} key 
 * @param {string} value 
 */
function setLocalData(key, value) {
    localStorage.setItem(key, value)
}

/**
 * 获取本地存储的值
 * @param {string} key 
 */
function getLocalData(key) {
    return localStorage.getItem(key)
}

/**
 * 设置Cookie
 * @param {String} name 
 * @param {String} value 
 * @param {Number} days 
 */
function setCookie(name, value, days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = name + '=' + value + ';expires=' + date
}

/**
 * 根据name删除cookie
 * @param  {String} name 
 */
function removeCookie(name) {
    setCookie(name, '1', -1)
}

/**
 * 根据name读取cookie
 * @param  {String} name 
 * @return {String}
 */
function getCookie(name) {
    const arr = document.cookie.replace(/\s/g, "").split(';')
    for (let i = 0; i < arr.length; i++) {
        const tempArr = arr[i].split('=')
        if (tempArr[0] == name) return decodeURIComponent(tempArr[1])
    }
    return ''
}

module.exports = {
    setLocalData,
    getLocalData,
    setCookie,
    removeCookie,
    getCookie,
}
