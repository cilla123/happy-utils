# happy-utils
共用函数库，提取出大部分业务需要的共用的函数。

### happy-utils的定位是一个共用函数库，提取出大部分业务需要的共用的函数。
---------------------------------------------------------------

```
npm install --save happy-utils
```

### 使用
使用方法类似于lodash，需要使用哪个函数，只引用当前函数。

```
const { getCurrentDay } = require('happy-utils/date')
或
const hu = require('happy-utils')
hu.dateUtils.getCurrentDay()
或
const { dateUtils } = require('happy-utils')
dateUtils.getCurrentDay()
```

### 模块
目前有3个模块：

- 1.date与日期相关的函数
- 2.string与字符串相关的函数
- 3.number与数字计算相关的函数