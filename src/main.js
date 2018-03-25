// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import flexible from './libs/flexible';

Vue.config.productionTip = false;

const app = {
    main () {
        this.init();
    },
    init () {
        flexible();
        /* eslint-disable no-new */
        new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        });
    }
};

app.main();