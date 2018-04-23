/**
 * 地图坐标算法
 * @author Ben赖珏豪
 * 声明：如果有抄袭，必有追究！
 * 电话:15217681427
 * QQ:892156860
 * 微信：892156860
 * @example
 * const { MapTransformer } = require('happy-utils/map')
 * // 手机坐标转精确坐标
 * const lnglat = MapTransformer.gpsToGcj(lng, lat)
 * cosnt lnglatXY = MapTransformer.gpsToBaidu(lng, lat)
 * 
 */
const MapTransformer = (function () { var j = 0.006693421622965943, h = 6378245, f = function (a, c) { return (a < 72.004 || a > 137.8347) && (c < 0.8293 || c > 55.8271) }, p = function (c, l) { var a = 2 * c - 100 + 3 * l + 0.2 * l * l + 0.1 * c * l + 0.2 * Math.sqrt(Math.abs(c)); return a += 2 * (20 * Math.sin(6 * c * Math.PI) + 20 * Math.sin(2 * c * Math.PI)) / 3, a += 2 * (20 * Math.sin(l * Math.PI) + 40 * Math.sin(l / 3 * Math.PI)) / 3, a += 2 * (160 * Math.sin(l / 12 * Math.PI) + 320 * Math.sin(l * Math.PI / 30)) / 3 }, d = function (c, l) { var a = 300 + c + 2 * l + 0.1 * c * c + 0.1 * c * l + 0.1 * Math.sqrt(Math.abs(c)); return a += 2 * (20 * Math.sin(6 * c * Math.PI) + 20 * Math.sin(2 * c * Math.PI)) / 3, a += 2 * (20 * Math.sin(c * Math.PI) + 40 * Math.sin(c / 3 * Math.PI)) / 3, a += 2 * (150 * Math.sin(c / 12 * Math.PI) + 300 * Math.sin(c / 30 * Math.PI)) / 3 }, m = function (n, i) { if (f(n, i)) { return { lng: n, lat: i } } var q = d(n - 105, i - 35), e = p(n - 105, i - 35), u = i / 180 * Math.PI, o = Math.sin(u); o = 1 - j * o * o; var s = Math.sqrt(o); return e = 180 * e / (h * (1 - j) / (o * s) * Math.PI), q = 180 * q / (h / s * Math.cos(u) * Math.PI), { lng: n + q, lat: i + e } }, b = function (c, q) { var a = c, u = q, l = Math.sqrt(a * a + u * u) + 0.00002 * Math.sin(u * Math.PI), r = Math.atan2(u, a) + 0.000003 * Math.cos(a * Math.PI); return c = l * Math.cos(r) + 0.0065, q = l * Math.sin(r) + 0.006, { lng: c, lat: q } }, g = function (c, q) { var a = c - 0.0065, u = q - 0.006, l = Math.sqrt(a * a + u * u) - 0.00002 * Math.sin(u * Math.PI), r = Math.atan2(u, a) - 0.000003 * Math.cos(a * Math.PI); return c = l * Math.cos(r), q = l * Math.sin(r), { lng: c, lat: q } }, k = function (c, l) { var a = m(c, l); return b(a.lng, a.lat) }; return { gpsToGcj: m, gcjToBaidu: b, baiduToGcj: g, gpsToBaidu: k } })();

module.exports = {
    MapTransformer
}