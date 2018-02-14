# happy-utils
共用函数库，提取出大部分业务需要的共用的函数。

### [happy-utils](https://github.com/cilla123/happy-utils)的定位是一个共用函数库，提取出大部分业务需要的共用的函数。
---------------------------------------------------------------

```js
npm install --save happy-utils
```

### 使用
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

### 模块
目前有6个模块：

- 1.date与日期相关的函数
- 2.string与字符串相关的函数
- 3.number与数字计算相关的函数
- 4.money与金钱相关的函数
- 5.url与URL相关的函数
- 6.validate与校验相关的函数

如果需要其他的函数，请联系ddanlife@163.com添加，最好可以直接提PR。

## 如果觉得好用，请在github star 和fork，github地址： [https://github.com/cilla123/happy-utils](https://github.com/cilla123/happy-utils) 