/**
 * Created by yunhailu on 2018/3/26.
 */

let doc = document;
let docEl = doc.documentElement;
let metaEl = doc.querySelector('meta[name="viewport"]');
let tid;
// 刷新REM
function refreshRem () {
    var width = docEl.getBoundingClientRect().width;

    var fontSize = width / 10;
    docEl.style.fontSize = fontSize + 'px';

    var effectSize = parseFloat(getComputedStyle(docEl).fontSize);
    if (effectSize !== fontSize) {
        // fix：华为荣耀、魅族m1 note、三星Note4等手机内置webview会自动对设置的font-size乘一个系数，导致页面偏大（Font Boosting）
        docEl.style.fontSize = fontSize * fontSize / effectSize + 'px';
    }
}
function createViewport () {
    var scale = 1;
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    docEl.firstElementChild.appendChild(metaEl);
}
// 启动函数
export default function () {
    createViewport();
    refreshRem();
    window.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100);
    }, false);
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 100);
        }
    }, false);
}
