const { isSameDay, getCurrentDay, dateFormat, getTimestamp, getCurrentWeek, getBeforeDate } = require('../src/date')

const d1 = new Date('2017-08-12')
const d2 = new Date('2017-08-11')
const d3 = new Date(1328119322000)

// 判断是否相同日期
const isd = isSameDay(d1, d2)
console.log(isd)

// 获取日期,不传就是获取当前日期
const currentDay = getCurrentDay()
const currentDay2 = getCurrentDay(d2)
const currentDay3 = getCurrentDay(d3)
console.log(currentDay, currentDay2, currentDay3)

// 日期格式化
const df = dateFormat(1328119322000, 'yyyy-MM-dd')
console.log(df)

// 获取时间戳
const timestamp = getTimestamp('2017-08-11')
const timestamp2 = getTimestamp('2017-08-11 12:20:21')
console.log(timestamp, timestamp2)

// 获取星期几
const currentWeek = getCurrentWeek(d1, 'zh')
console.log(currentWeek)

// 获取前几天日期
const beforeDate = getBeforeDate(100)
console.log(beforeDate)

