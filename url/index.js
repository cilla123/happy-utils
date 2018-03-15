/**
 * 获取url的参数
 * @param {键} name 
 * @param {地址} url 
 * @returns 对应的键的值
 * @example
 * const { getParameterByName } = require('happy-utils/url')
 * getParameterByName("http://www.ddanlife.com?&ben=123&ken=sss", "ben");
 * // "123"
 */
function getParameterByName(name, url) {
    name = name.replace(/[[]/, '\\[').replace(/[]]/, '\\]')
    url = url ? '?' + url.split('#')[0].split('?')[1] : window.location.search
    const results = RegExp('[?&]' + name + '=([^&#]*)').exec(url)
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : ''
}

/**
 * 删除url的参数
 * @param {地址} url 
 * @param {参数} parameter
 * @returns 删除后的url地址 
 * @example
 * const { removeParameter } = require('happy-utils/url')
 * removeParameter("http://www.ddanlife.com?&ben=123&ken=sss", "ben");
 * // "?ken=sss"
 */
function removeParameter(url, parameter) {
    const urlparts = url.split('?')
    if (urlparts.length >= 2) {
        const prefix = encodeURIComponent(parameter) + '='
        const pars = urlparts[1].split(/[&;]/g)
        for (let i = pars.length; i-- > 0;) {
            if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }
        url = urlparts[0] + '?' + pars.join('&')
        return url
    }
    return url
}

/**
 * 对象转url字符串参数
 * @param {对象} obj 
 * @example
 * const { obj2UrlString } = require('happy-utils/url')
 * obj2UrlString({a: 2, b: 3, k: 5});
 * // "?a=2&b=3&k=5"
 */
function obj2UrlString(obj) {
    let string = '';
    for (const key in obj) {
        if (obj[key] === '') {
            continue;
        }
        string += key.trim() + '=' + obj[key] + '&';
    }
    return string ? '?' + string.slice(0, string.length - 1) : ''
}

/**
 * 添加url参数
 * @param {地址} url 
 * @param {对象} obj
 * @example
 * const { addParameter } = require('happy-utils/url')
 * addParameter('http://www.ddanlife.com', { "ben": 123, "ken": "sss" })
 * // "http://www.ddanlife.com?&ben=123&ken=sss"
 */
function addParameter(url, obj) {
    if (!url || url.length === 0 || url.trim().indexOf('javascript') === 0) {
        return ''
    }
    const hashArray = url.split('#')
    const paraArray = hashArray[0].split('?')
    const para = {}
    // 原有参数放入para对象
    if (paraArray[1]) {
        paraArray[1].split('&').forEach(function (item) {
            let tempArr = void 0
            tempArr = item.split('=')
            // 参数值中有等号，做处理
            para[tempArr[0]] = tempArr.slice(1).join('=')
        });
    }
    // 将需要添加的参数放入para对象
    Object.keys(obj).forEach(function (key) {
        para[key.trim()] = encodeURIComponent(obj[key])
    });
    // 重组url
    url = paraArray[0] + obj2UrlString(para)
    return hashArray[1] ? url += '#' + hashArray[1] : url
}

/**
 * 补全url
 * @param {string} path 自己填写的路径
 * @param {string} url 指定urls的某一个属性
 * @return {string} 返回补全的url
 * @example
 * const { fullUrl } = require('happy-utils/url')
 * fullUrl('/film/list','www.ddanlife.com');
 * // "//www.ddanlife.com/film/list"
 * fullUrl('/film/list','//www.ddanlife.com');
 * // "//www.ddanlife.com/film/list"
 */
function fullUrl(path, url) {
    const urlPrefix = url.substr(0, 2)
    const prefix = urlPrefix === '//' ? '' : '//'
    return prefix + url + path;
}

/** 
 * 修改当前浏览器的参数
 * @param {对象} obj
 * @example
 * const { changeBrowserUrlParameter } = require('happy-utils/url')
 * // old_url: http://www.ddanlife.com?&ben=123&ken=sss
 * changeBrowserUrlParameter({ "ken": "change" })
 * // changed_url: "http://www.ddanlife.com?&ben=123&ken=change"
 */
function changeBrowserUrlParameter(obj){
    const url = addParameter(window.location.href, obj)
    window.history.pushState('', '', url);
}


module.exports = {
    getParameterByName,
    removeParameter,
    obj2UrlString,
    addParameter,
    fullUrl,
    changeBrowserUrlParameter,
}