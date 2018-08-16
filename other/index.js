/**
 * 修改标题
 */
function setTitle(title) {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger" && !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i)) {
    setTimeout(function () {
      //利用iframe的onload事件刷新页面
      document.title = title;
      var iframe = document.createElement('iframe');
      iframe.style.visibility = 'hidden';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.onload = function () {
        setTimeout(function () {
          document.body.removeChild(iframe);
        }, 0);
      };
      document.body.appendChild(iframe);
    }, 0);
  }else {
    document.title = title || document.title;
  }
}

module.exports = {
  setTitle
}