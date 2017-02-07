import Vue from 'vue'
Vue.use(require('vue-resource'));

require('./filters/json.js');

// Set up jQuery and auxiliary libs 
window.$ = window.jQuery = require('jquery');

// Add alpaca
window.Alpaca = require('alpaca/dist/alpaca/bootstrap/alpaca.js');

// Set up config
const vueConfig = require('vue-config')
Vue.use(vueConfig, require('./config.js'))

// Set up schema forms
import VueFormGenerator from "vue-form-generator";
Vue.use(VueFormGenerator);

// Import components
import SchemaIndex from './components/Schema/Index.vue'
import SchemaList from './components/Schema/List.vue'
import SchemaCreate from './components/Schema/Create.vue'
import SchemaShow from './components/Schema/Show.vue'
import SchemaEdit from './components/Schema/Edit.vue'
import SchemaDelete from './components/Schema/Delete.vue'

// Add filters
require('./filters/json.js');

// Set up routing
// See https://vuejs.org/v2/guide/migration-vue-router.html for version changes
var VueRouter = require('vue-router');
Vue.use(VueRouter)
var router = new VueRouter({
    history: true,
    routes: [
        { path: '/', component: SchemaIndex, name: 'schema.index' },
        { path: '/:schemaSlug', component: SchemaList, name: 'schema.list' },        
        { path: '/:schemaSlug/create', component: SchemaCreate, name: 'schema.create' },
        { path: '/:schemaSlug/:itemId', component: SchemaShow, name: 'schema.show' },        
        { path: '/:schemaSlug/:itemId/edit', component: SchemaEdit, name: 'schema.edit' },
        { path: '/:schemaSlug/:itemId/delete', component: SchemaDelete, name: 'schema.delete' },
    ]    
});

import App from './App.vue'

new Vue({
    el: '#app',
    router: router,
    components: {
        SchemaIndex,
        SchemaList,
        SchemaCreate
    }
});
