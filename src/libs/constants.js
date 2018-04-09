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
}];

export const host = 'hibicc.com';

export const isDev = process.env.NODE_ENV == 'development';

export const colors = ['#9c81e7', '#e7818a', '#b8e781', '#e7a581', '#81a0e7'];

export const about = [{
    text: 'About BICC',
    icon: 'th-large'
}, {
    text: 'Testimonials',
    icon: 'tag'
}, {
    text: 'Learning System',
    icon: 'sitemap'
}, {
    text: 'Teacher\'s Profile',
    icon: 'tv'
}, {
    text: 'Why choose BICC',
    icon: 'anchor'
}, {
    text: 'Recommendation',
    icon: 'book'
}, {
    text: 'Accreditations',
    icon: 'shopping-bag'
}, {
    text: 'Partners',
    icon: 'paper-plane'
}];