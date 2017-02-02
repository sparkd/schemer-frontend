import Vue from 'vue'
Vue.use(require('vue-resource'));

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

const vueConfig = require('vue-config')
Vue.use(vueConfig, require('./config.js'))


import App from './App.vue'
import Schemer from './Schemer.vue'

new Vue({
    el: '#app',
    mounted: function() {
        console.log('Vue initiated');
    },
    components: {
        Schemer
    }
});
