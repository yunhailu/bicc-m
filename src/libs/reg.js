/**
 * Created by yunhailu on 2018/4/5.
 */
const REG = {
    img: /<img[^>]+src=['"]([^'"]+)['"]+/g
};

export const getImageSrc = html => {
    let result = [];
    let temp;

    while( (temp= REG.img.exec(html)) != null ) {
        result.push(temp[1]);
    }
    return result;
};