import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routerBefore = (to, from, next) => {
    console.log('to', to);
    document.body.scrollTop = 0;
    return next();
};

const router = new Router({
    routes: [{
        path: '/hello',
        component: (resolve) => {
            require.ensure(['@/components/Hello/Hello'], () => {
                resolve(require('@/components/Hello/Hello'));
            });
        }
    }, {
        name: 'home',
        path: '/',
        component: (resolve) => {
            require.ensure(['@/components/Home/Home'], () => {
                resolve(require('@/components/Home/Home'));
            });
        }
    }, {
        name: 'programs',
        path: '/programs',
        component: (resolve) => {
            require.ensure(['@/components/Programs/Programs'], () => {
                resolve(require('@/components/Programs/Programs'));
            });
        }
    }, {
        name: 'services',
        path: '/services',
        component: (resolve) => {
            require.ensure(['@/components/Services/Services'], () => {
                resolve(require('@/components/Services/Services'));
            });
        }
    }, {
        name: 'about',
        path: '/about',
        component: (resolve) => {
            require.ensure(['@/components/About/About'], () => {
                resolve(require('@/components/About/About'));
            });
        }
    }, {
        name: 'list',
        path: '/list/:type/:category',
        component: (resolve) => {
            require.ensure(['@/components/List/List'], () => {
                resolve(require('@/components/List/List'));
            });
        }
    }, {
        name: 'detail',
        path: '/detail/:id',
        component: (resolve) => {
            require.ensure(['@/components/Detail/Detail'], () => {
                resolve(require('@/components/Detail/Detail'));
            });
        }
    }, {
        name: 'contact',
        path: '/contact',
        component: (resolve) => {
            require.ensure(['@/components/ContactUs/ContactUs'], () => {
                resolve(require('@/components/ContactUs/ContactUs'));
            });
        }
    }]
});

router.beforeEach(routerBefore.bind(router));

export default router;
