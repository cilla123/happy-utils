# happy-utils
共用函数库，提取出大部分业务需要的共用的函数。

### [happy-utils](https://github.com/cilla123/happy-utils)的定位是一个共用函数库，提取出大部分业务需要的共用的函数。
---

```js
npm install --save happy-utils
```

### 一、使用
使用方法类似于lodash，需要使用哪个函数，只引用当前函数。

```js
const { getCurrentDay } = require('happy-utils/date')
或
const hu = require('happy-utils')
hu.dateUtils.getCurrentDay()
或
const { dateUtils } = require('happy-utils')
dateUtils.getCurrentDay()
```

### 二、模块
目前有10个模块：

- 1.date与日期相关的函数
- 2.string与字符串相关的函数
- 3.number与数字计算相关的函数
- 4.money与金钱相关的函数
- 5.url与URL相关的函数
- 6.validate与校验相关的函数
- 7.device与设备相关的函数
- 8.network与网络相关的函数
- 9.storage与存储相关的函数
- 10.map地图坐标转换

### 三、文档

#### 3.1：[Date日期](https://github.com/cilla123/happy-utils/blob/master/date/index.js)

##### dateFormat(value, format):时间戳转日期

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 时间戳 | number |  | |
| format | 格式化 | string | 1."yyyy-MM-dd hh:mm:ss"</br>2."yyyy年MM月dd日"</br>3."MM/dd/yyyy"</br>4."yyyyMMdd"</br>5."hh:mm:ss" | yyyy-MM-dd hh:mm:ss |

##### isSameDay(a, b):是否是同一天

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| a | 日期 | Date |  | |
| b | 日期 | Date | |  |

##### getCurrentDay(time):获取指定时间年月日

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| time | 日期 | Date |  | |

##### getTimestamp(date):日期转时间戳,毫秒

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| date | 日期 | Date |  | |

##### getCurrentWeek(time, language):获取指定时间属于周几

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| time | 日期 | Date |  | |
| language | 语言 | string | zh, en| zh |

##### getBeforeDate(num): 获取当前指定的前几天的日期

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| num | 前几天 | number |  | |

##### formatWeek(data): 格式化周几到周几-->"周一至周三、周六、周日"

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| data | 星期几数组 | Array | 例如：[1, 2, 3, 4, 5] | |

#### formatTimes(data): 格式化时间，几点到几点-->"08:00至20:00、07:00至21:00"

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| data | 时间数组 | Array | 例如：[{"startTime":"08:00","endTime":"20:00"}, {"startTime":"07:00","endTime":"21:00"}] | |

##### formatPassTime(startTime): 格式化距现在的已过时间--->"刚刚"

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| startTime | 时间 | Date | | |


#### 3.2：[string字符串](https://github.com/cilla123/happy-utils/blob/master/string/index.js)

##### addZero(num): 如果数字小于10前面自动添加0

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| num | 数字 | number | | |

##### getDecodeHTMLEntities(str): 获取HTML里的文字内容,此方法只能用于浏览器，服务器环境不能使用

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| str | html字符串 | string |  | |

##### getEscapeText(text): 字符串的转义,将`&`, `<`, `>`, `"`, `'`分别转义为`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| text | text处理前字符串 | string |  | |

##### getUnescapeText(text): 字符串的反转义,将`&amp;`, `&lt;`,  `&gt;`, `&quot;`, `&#x27;`替换为转义前的符号

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| text | text处理前字符串 | string |  | |


##### makeRandomString(length): 获取随机字母数字混合字符串

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| length | 长度 | number |  | 10 |

##### toCamelCase(str): 下划线格式字符串转为驼峰格式

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| str | 字符串 | string |  |  |

##### toSnakeCase(str): 驼峰格式字符串转为下划线格式

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| str | 字符串 | string |  |  |

##### mapKeysToCamelCase(value): 将Object的key从下划线格式字符串转为驼峰格式

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待处理对象或数组 | Object 或 Array |  |  |

##### mapKeysToSnakeCase(value): 将数组或者对象里的key从驼峰格式字符串转为下划线格式

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待处理对象或数组 | Object 或 Array |  |  |

#### 3.3：[number数字](https://github.com/cilla123/happy-utils/blob/master/number/index.js)

##### accAdd(arg1, arg2): 加法函数，用来得到精确的加法结果

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| arg1 | 参数1 | number |  |  |
| arg2 | 参数2 | number |  |  |

##### accDiv(arg1, arg2): 除法函数，用来得到精确的除法结果

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| arg1 | 参数1 | number |  |  |
| arg2 | 参数2 | number |  |  |

##### accMul(arg1, arg2): 乘法函数，用来得到精确的乘法结果

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| arg1 | 参数1 | number |  |  |
| arg2 | 参数2 | number |  |  |

##### accSub(arg1, arg2): 减法函数，用来得到精确的减法结果

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| arg1 | 参数1 | number |  |  |
| arg2 | 参数2 | number |  |  |

#### 3.4：[money金钱](https://github.com/cilla123/happy-utils/blob/master/money/index.js)

##### formatLargeNumber(value): 给大数字添加逗号分隔符

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待格式化的值 | number |  |  |

##### format(value, cent): 格式化金钱格式，默认是分

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待格式化的金额数字 | number |  |  |
| cent | 是否是分 | boolean | true, false |  true |

##### add(a, b, cent): 计算金钱的加法，返回格式化后的格式，默认是分

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| a | 参数a | number |  |  |
| b | 参数a | boolean |  |  |
| cent | 是否是分 | boolean | true, false |  true |

##### minus(a, b, cent): 计算金钱的相减，返回格式化后的格式，默认是分

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| a | 参数a | number |  |  |
| b | 参数a | boolean |  |  |
| cent | 是否是分 | boolean | true, false |  true |

##### multiply(a, b, cent): 计算金钱的相乘，返回格式化后的格式，默认是分

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| a | 参数a | number |  |  |
| b | 参数a | boolean |  |  |
| cent | 是否是分 | boolean | true, false |  true |

##### toCent(amount): 把字符串转成以分为单位的整数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| amount | 例如4.90可以转成490 | string |  |  |

##### tozhCN(num): 把字符串转成以分为单位的整数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| num | 例如500.3可以转成伍佰元叁角整 | number 或 string |  |  |

#### 3.5：[url](https://github.com/cilla123/happy-utils/blob/master/url/index.js)

##### getParameterByName(name, url): 获取url的参数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| name | 键 | string |  |  |

##### removeParameter(url, parameter): 删除url的参数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| name | 键 | string |  |  |
| parameter | 参数 | string | | |

##### obj2UrlString(obj): 对象转url字符串参数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| obj | 对象 | Object |  |  |

##### addParameter(url, obj): 添加url参数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| url | 地址 | string |  |  |
| obj | 对象 | Object |  |  |

##### fullUrl(path, url): 补全url

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| path | 自己填写的路径 | string |  |  |
| url | string | 指定urls的某一个属性 |  |  |

##### changeBrowserUrlParameter(obj): 修改当前浏览器的参数

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| obj | 例如：{ "ken": "change" } | Object |  |  |

#### 3.6：[validate校验](https://github.com/cilla123/happy-utils/blob/master/validate/index.js)

##### isChinaMobile(value): 校验中国手机号

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 手机号码 | string |  |  |

##### isChinese(value): 检查字符串是否存在中文

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isDate(value): 判断一个字符串是否是 iso 标准日期

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isEmail(value):校验邮箱

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isIDcard(value): 校验身份证

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isMobile(value): 手机号

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isNumber(value): 校验数字

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isPhone(value): 校验座机号

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isPostalCode(value): 校验验证码

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isQQ(value): 校验腾讯QQ号

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

##### isUrl(value): 校验URL

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| value | 待检测字符串 | string |  |  |

#### 3.7：[device设备](https://github.com/cilla123/happy-utils/blob/master/device/index.js)

##### isWeixin(): 是否微信内置浏览器

##### getMobileType(): 获取手机类型 

##### getOs(): 获取打开的网页在哪里打开

#### 3.8：[network网络](https://github.com/cilla123/happy-utils/blob/master/network/index.js) 

##### download(href, title): 生成下载

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| href | 路径 | string |  |  |
| title | 名字 | string |  |  |

#### 3.9：[storage存储](https://github.com/cilla123/happy-utils/blob/master/storage/index.js) 

##### setLocalData(key, value): 设置本地存储的值

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| key | 键 | string |  |  |
| value | 值 | string |  |  |

##### getLocalData(key): 获取本地存储的值

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| key | 键 | string |  |  |

##### setCookie(key, value, days): 设置Cookie

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| key | 键 | string |  |  |
| value | 值 | string |  |  |
| days | 天数 | number |  |  |

##### removeCookie(name): 根据name删除cookie

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| key | 键 | string |  |  |

##### getCookie(name): 根据name读取cookie

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| key | 键 | string |  |  |

#### 3.10：[map地图](https://github.com/cilla123/happy-utils/blob/master/map/index.js) 

##### 此方法较为特殊，调用方法如下

```js
const { MapTransformer } = require('happy-utils/map')
// 手机坐标转精确坐标
const lnglat = MapTransformer.gpsToGcj(lng, lat)
cosnt lnglatXY = MapTransformer.gpsToBaidu(lng, lat)
```

#### 3.11：[other其它](https://github.com/cilla123/happy-utils/blob/master/other/index.js) 

##### setTitle(title): 动态设置标题

| 参数   | 说明 |  类型  | 可选值 | 默认值 |
| :----: | :----: | :----: |:---- |:----: |
| title | 标题 | string |  |  |

---


如果需要其他的函数，请联系ddanlife@163.com添加，最好可以直接提PR。

### 如果觉得好用，请在github star 和fork，github地址： [https://github.com/cilla123/happy-utils](https://github.com/cilla123/happy-utils) 