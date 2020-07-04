require('./bootstrap');
window.Vue = require('vue');

import Vuetify from '../plugins/vuetify.js'
import App from './App.vue';
import Router from '../js/router.js'
import Store from './Store/index.js'


const app = new Vue({
    el: "#app",
    router: Router,
    vuetify: Vuetify,
    store: Store,
    render: h => h(App)
});
