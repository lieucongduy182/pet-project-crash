import Vue from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import '/node_modules/primeflex/primeflex.css';

import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

// Components PrimeVue
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';

import api from '@/services/api.js';

Vue.prototype.$http = api;
Vue.config.productionTip = false;
Vue.use(PrimeVue, { ripple: true });

Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('InputText', InputText);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
