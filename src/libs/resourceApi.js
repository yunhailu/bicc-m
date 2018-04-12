/**
 * Created by yunhailu on 2018/4/5.
 */
import Vue from 'vue';
import Resource from 'vue-resource';
import { isDev } from './constants';
Vue.use(Resource);

const mackRoot = 'http://localhost:3000';
// const resourceRoot = 'http://www.hibicc.com/drupalapi';
const resourceRoot = '/drupalapi';
const API = !isDev ? {
    HOMES_SLIDERS: `${resourceRoot}/homesliders.json`,
    HOMES_ARTICLE: `${resourceRoot}/node/57.json`,
    HOMES_RECOMMENDS: `${resourceRoot}/homerecommends.json`,
    COURSES: `${resourceRoot}/courses.json`,
    GET_COURSE_DETAIL: `${resourceRoot}/node/299.json`,
    GET_PRODUCTS: `${resourceRoot}/products.json`,
    GET_SERVICES: `${resourceRoot}/services.json`,
    GET_ACCOMMODATIONS: `${resourceRoot}/accommodations.json`,
    GET_TESTIMONIALS: `${resourceRoot}/testimonials.json`,
    GET_TEACHERS: `${resourceRoot}/teachers.json`,
    GET_RECOMMENDATIONS: `${resourceRoot}/recommendations.json`,
    GET_PARTNERS: `${resourceRoot}/partners.json`,
    GET_FAQ: `${resourceRoot}/faqs.json`
} : {
    HOMES_SLIDERS: `${mackRoot}/homesliders`,
    HOMES_ARTICLE: `${mackRoot}/node_57`,
    HOMES_RECOMMENDS: `${mackRoot}/homerecommends`,
    COURSES: `${mackRoot}/courses`,
    GET_COURSE_DETAIL: `${mackRoot}/node_299`,
    GET_PRODUCTS: `${mackRoot}/products`,
    GET_SERVICES: `${mackRoot}/services`,
    GET_ACCOMMODATIONS: `${mackRoot}/accommodations`,
    GET_TESTIMONIALS: `${mackRoot}/testimonials`,
    GET_TEACHERS: `${mackRoot}/teachers`,
    GET_RECOMMENDATIONS: `${mackRoot}/recommendations`,
    GET_PARTNERS: `${mackRoot}/partners`,
    GET_FAQ: `${mackRoot}/faqs`
};

const getNodeURL = id => {
    // return !isDev ? `${resourceRoot}/node/${id}.json` : `${mackRoot}/node_${id}`;
    return !isDev ? `${resourceRoot}/node/${id}.json` : `${mackRoot}/node_57`;
};

const Request = {
    ajax (url, params) {
        let method = 'get';
        if (isDev) {
            method = 'jsonp';
        }
        return Vue.http[method](url, { params, credentials: true })
            .then(response => response.data)
            .catch(err => err);
    },
    jsonp (url, params) {
        return Vue.http.jsonp(url, { params, credentials: true })
            .then(response => response.data)
            .catch(err => err);
    },
    get (url, params) {
        return Vue.http.get(url, { params })
            .then(response => response.data)
            .catch(error => error);
    },
    post (url, params) {
        return Vue.http.get(url, params)
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
    return Request.ajax(API.HOMES_SLIDERS, { params, credentials: true });
};

/**
 * @description 获取首页信息, 文字介绍接口
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const homesArticle = (params = {}) => {
    return Request.ajax(getNodeURL(params.id), { params, credentials: true });
};

/**
 * @description 获取首页信息, 获取推荐信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const homesRecommends = (params = {}) => {
    return Request.ajax(API.HOMES_RECOMMENDS, { params, credentials: true });
};

/**
 * @description 项目页面信息, 获取课程列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getCourses = (params = {}) => {
    return Request.ajax(API.COURSES, { params, credentials: true });
};

/**
 * @description 项目页面信息, 获取课程详情信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getCoursesDetail = (params = {}) => {
    return Request.ajax(getNodeURL(params.id), { params, credentials: true });
};

/**
 * @description 项目页面信息, 获取课程价格信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getProducts = (params = {}) => {
    return Request.ajax(API.GET_PRODUCTS, { params, credentials: true });
};

/**
 * @description 项目页面信息, 获取service列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getServices = (params = {}) => {
    return Request.ajax(API.GET_SERVICES, { params, credentials: true });
};

/**
 * @description 项目页面信息, 获取accommodations列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getAccommodations = (params = {}) => {
    return Request.ajax(API.GET_ACCOMMODATIONS, { params, credentials: true });
};

/**
 * @description 关于我们页面信息, 获取testimonials列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const testimonials = (params = {}) => {
    return Request.ajax(API.GET_TESTIMONIALS, { params, credentials: true });
};

/**
 * @description 关于我们页面信息, 获取teachers列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const teachers = (params = {}) => {
    return Request.ajax(API.GET_TEACHERS, { params, credentials: true });
};

/**
 * @description 关于我们页面信息, 获取recommendations列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const recommendations = (params = {}) => {
    return Request.ajax(API.GET_RECOMMENDATIONS, { params, credentials: true });
};

/**
 * @description 关于我们页面信息, 获取partners列表信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const partners = (params = {}) => {
    return Request.ajax(API.GET_PARTNERS, { params, credentials: true });
};

/**
 * @description 获取详情页面信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getDetail = (params = {}) => {
    return Request.ajax(getNodeURL(params.id), { params, credentials: true });
};

/**
 * @description 获取详情页面信息
 * @param {Object} params - 必填项，以json对象形式传参
 * @return {Promise}
 * */
export const getFAQ = (params = {}) => {
    return Request.ajax(API.GET_FAQ, { params, credentials: true });
};