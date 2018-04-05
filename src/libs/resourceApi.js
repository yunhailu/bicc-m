/**
 * Created by yunhailu on 2018/4/5.
 */
import Vue from 'vue'
import Resource from 'vue-resource';
Vue.use(Resource);

const resourceRoot = 'http://www.hibicc.com/drupalapi';
const API = {
    HOMES_SLIDERS: `${resourceRoot}/homesliders.json`,
    HOMES_ARTICLE: `${resourceRoot}/node/57.json`,
    HOMES_RECOMMENDS: `${resourceRoot}/homerecommends.json`
};

const Request = {
    jsonp (url,params) {
        return Vue.http.jsonp(url, { params, credentials: true })
        .then(response => response.data)
        .catch(error => error);
    }
};

/**
 * @description 获取首页信息, 轮播图片获取全部
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const homesSliders = (params = {}) => {
    return Request.jsonp(API.HOMES_LIDERS, { params, credentials: true } );
};

/**
 * @description 获取首页信息, 文字介绍接口
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const homesArticle = (params = {}) => {
    return Request.jsonp(API.HOMES_ARTICLE, { params, credentials: true } );
};

/**
 * @description 获取首页信息, 获取推荐信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const homesRecommends = (params = {}) => {
    return Request.jsonp(API.HOMES_RECOMMENDS, { params, credentials: true } );
};