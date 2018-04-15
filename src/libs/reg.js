/**
 * Created by yunhailu on 2018/4/5.
 */
const REG = {
    img: /<img[^>]+src=['"]([^'"]+)['"]+/g,
    a: /<a[^>]+href=['"]([^'"]+)['"]+/g,
    cxt: />([^>]+)</,
    table: /<table([^>]+)<\/table>/g
};

export const getImageSrc = html => {
    let result = [];
    let temp;

    while ((temp = REG.img.exec(html)) != null) {
        result.push(temp[1]);
    }
    return result;
};

export const getAHref = html => {
    let result = [];
    let temp;

    while ((temp = REG.a.exec(html)) != null) {
        result.push(temp[1]);
    }
    return result;
};

export const setAVoid = html => {
    const result = getAHref(html);
    result.forEach(item => {
        html = html.replace(item, 'javascript:void(0);');
    });
    return html;
};

export const getHTMLCxt = (html, tag) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(html, 'text/xml');

    // 提取数据
    const countrys = xmlDoc.getElementsByTagName(tag);

    const arr = [];

    for (let i = 0; i < countrys.length; i++) {
        arr.push(countrys[i].textContent);
    }
    return arr;
};

export const setTable = html => {
    let temp;

    while ((temp = REG.table.exec(html)) != null) {
        html.replace(REG.table, '<div class="html-table">' + temp[1] + '</div>');
        console.log('<div class="html-table">' + temp[1] + '</div>');
    }
    return html;
};