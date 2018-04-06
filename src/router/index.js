import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/hello',
        component: (resolve) => {
            require.ensure(['@/components/Hello/Hello'], () => {
                resolve(require('@/components/Hello/Hello'));
            });
        }
    }, {
        path: '/',
        component: (resolve) => {
            require.ensure(['@/components/Home/Home'], () => {
                resolve(require('@/components/Home/Home'));
            });
        }
    }, {
        path: '/programs',
        component: (resolve) => {
            require.ensure(['@/components/Programs/Programs'], () => {
                resolve(require('@/components/Programs/Programs'));
            });
        }
    }]
});
