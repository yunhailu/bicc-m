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
    icon: 'server', text: 'Services', router: 'service'
}, {
    icon: 'users', text: 'About us', router: 'about'
}];

export const host = 'hibicc.com';

export const isDev = process.env.NODE_ENV == 'development';