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
    }]
});

router.beforeEach(routerBefore.bind(router));

export default router;
