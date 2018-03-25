import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: (resolve) => {
            require.ensure(['@/components/Hello/Hello'], () => {
                resolve(require('@/components/Hello/Hello'));
            });
        }
    }]
});
