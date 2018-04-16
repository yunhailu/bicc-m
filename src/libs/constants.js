/**
 * Created by yunhailu on 2018/4/7.
 */
// export const pxToRem = (num) => {
//     return num / 75 + 'rem';
// };

export const headerList = [{
    icon: 'home', text: 'Home', router: 'home'
}, {
    icon: 'folder', text: 'Programs', router: 'programs'
}, {
    icon: 'server', text: 'Services', router: 'services'
}, {
    icon: 'users', text: 'About us', router: 'about'
}, {
    icon: 'question-circle', text: 'FAQ', router: 'FAQ'
}, {
    icon: 'envelope-open', text: 'Contact us', router: 'contact'
}];

export const host = 'hibicc.com';

export const isDev = process.env.NODE_ENV == 'development';

export const colors = ['#9c81e7', '#e7818a', '#b8e781', '#e7a581', '#81a0e7'];

export const about = [{
    text: 'About BICC',
    icon: 'th-large',
    name: 'detail',
    params: { id: 14 }
}, {
    text: 'Testimonials',
    icon: 'tag',
    name: 'list',
    params: { type: 'tag', category: 'testimonials' }
}, {
    text: 'Learning System',
    icon: 'sitemap',
    name: 'detail',
    params: { id: 22 }
}, {
    text: 'Teacher\'s Profile',
    icon: 'tv',
    name: 'list',
    params: { type: 'tag', category: 'teachers' }
}, {
    text: 'Why choose BICC',
    icon: 'anchor',
    name: 'detail',
    params: { id: 48 }
}, {
    text: 'Recommendation',
    icon: 'book',
    name: 'list',
    params: { type: 'tag', category: 'recommendations' }
}, {
    text: 'Accreditations',
    icon: 'shopping-bag',
    name: 'detail',
    params: { id: 66 }
}, {
    text: 'Partners',
    icon: 'paper-plane',
    name: 'list',
    params: { type: 'card', category: 'partners' }
}];