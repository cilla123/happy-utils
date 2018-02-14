/**
 * 设置本地存储的值
 * @param {*} key 
 * @param {*} value 
 */
function setLocalData(key, value) {
    localStorage.setItem(key, value)
}

/**
 * 获取本地存储的值
 * @param {*} key 
 */
function getLocalData(key) {
    return localStorage.getItem(key)
}
