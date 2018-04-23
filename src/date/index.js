const { addZero } = require('../string')

/** 中文配置 */
const zh = {
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
        return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
}

/** 英文配置 */
const en = {
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    amPm: ['am', 'pm'],
    DoFn: function DoFn(D) {
        return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
}

/**
 * 时间戳转日期
 * @param {date} value 时间戳
 * @param {string} format 格式化
 * 
 * format格式如下:
 * 1."yyyy-MM-dd hh:mm:ss"
 * 2."yyyy年MM月dd日"
 * 3."MM/dd/yyyy"
 * 4."yyyyMMdd"
 * 5."hh:mm:ss"
 */
function dateFormat(value, format){
    if (typeof value == 'string') value = Number(value);
    if (!format) format = "yyyy-MM-dd hh:mm:ss"
    var date = new Date(value);
    var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //day
        "h+": date.getHours(), //hour
        "m+": date.getMinutes(), //minute
        "s+": date.getSeconds(), //second
        "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
        "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 * 是否是同一天
 * @param {date} a 日期a
 * @param {date} b 日期b
 * @return {boolean} 是否是同一天
 */
function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/**
 * 获取指定时间年月日
 * @param {date} time 时间
 * @return {string} yyyy-mm-dd
 */
function getCurrentDay(time) {
    time = time || new Date();
    var month = time.getMonth() + 1;
    month = addZero(month);
    var day = time.getDate();
    day = addZero(day);
    var year = time.getFullYear();
    return year + '-' + month + '-' + day;
}

/**
 * 日期转时间戳,毫秒
 * @param {date} date 日期格式 yyyy-MM-dd hh:mm:ss
 */
function getTimestamp(date){
    return Date.parse(date)
}

/** 
 * 获取指定时间属于周几
 * @param {date} time 日期
 * @param {string} language 语言，可以不传入
 */
function getCurrentWeek(time, language){
    time = time || new Date()
    if (!language) return time.getDay()
    const week = language === 'zh' ? zh.dayNamesShort : en.dayNamesShort
    return week[time.getDay()]
}

/**
 * 获取当前指定的前几天的日期
 * @param {number} num 前几天
 */
function getBeforeDate(num){
    if (typeof num === 'string') num = Number(num)
    const n = num
    const d = new Date()
    let year = d.getFullYear()
    let mon = d.getMonth()+1
    let day = d.getDate()
    if(day <= n){
        if(mon > 1) {
            mon = mon - 1
        } else {
            year = year - 1
            mon = 12
        }
    }
    d.setDate(d.getDate() - n)
    year = d.getFullYear()
    mon = d.getMonth()+1
    day = d.getDate()
    s = year + "-" + ( mon < 10 ? ('0' + mon ) : mon ) + "-" + ( day <10 ? ( '0' + day ) : day )
    return s
}

/**
 * 格式化周几到周几
 * @param {Array} data 
 * @runkit true
 * @example
 * const { formatWeek } = require('happy-utils/date')
 * formatWeek([1,2,3,4,5,6]);
 * // => "周一至周六"
 * formatWeek([1,2,4,5,6]);
 * // => "周一、周二、周四至周六"
 * formatWeek([1,2,3,,6, 7]);
 * // => "周一至周三、周六、周日"
 */
function formatWeek(data) {
    let flag, midArray, newArray = [], string = ''
    const array = data.sort((a, b) => { return a - b })
    const weekStringArr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

    array.map((v) => {
        if (flag === parseInt(v)) {
            midArray.push(flag)
            flag++
            return
        }
        midArray = [parseInt(v)]
        flag = parseInt(v) + 1
        newArray.push(midArray)
    })

    for (var value of newArray) {
        if (value.length >= 3) {
            string += weekStringArr[value[0] - 1] + '至' + weekStringArr[value[value.length - 1] - 1] + '、'
        } else if (value.length == 2) {
            string += weekStringArr[value[0] - 1] + '、' + weekStringArr[value[1] - 1] + '、'
        } else if (value.length == 1) {
            string += weekStringArr[value[0] - 1] + '、'
        }
    }

    return string.substr(0, string.length - 1)
}

/**
 * 格式化时间，几点到几点
 * @param {Array} data 
 * @runkit true
 * @example
 * const { formatTimes } = require('happy-utils/date')
 * formatTimes([{"startTime":"08:00","endTime":"20:00"}]);
 * // => "08:00至20:00"
 * formatTimes([{"startTime":"08:00","endTime":"20:00"}, {"startTime":"07:00","endTime":"21:00"}]);
 * // => "08:00至20:00、07:00至21:00"
 */
function formatTimes(data) {
    let string = '';
    for (var i = 0; i < data.length; i++) {
        string += data[i].startTime + '至' + data[i].endTime + '、';
    }
    return string.substr(0, string.length - 1);
}

/**
 * 格式化距现在的已过时间
 * @param  {Date} startTime 
 * @return {String}
 * @runkit true
 * @example
 * const { formatPassTime } = require('happy-utils/date')
 * formatPassTime(new Date());
 * // => "刚刚"
 * formatPassTime(new Date('2016-07-01'));
 * // => "1年前"
 */
function formatPassTime(startTime) {
    const currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + "年前"
    if (month) return month + "个月前"
    if (day) return day + "天前"
    if (hour) return hour + "小时前"
    if (min) return min + "分钟前"
    else return '刚刚'
}

module.exports = {
    zh,
    en,
    isSameDay,
    getCurrentDay,
    dateFormat,
    getTimestamp,
    getCurrentWeek,
    getBeforeDate,
    formatWeek,
    formatTimes,
    formatPassTime,
}