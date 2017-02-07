var Vue = require('vue');

Vue.filter('json', value => { return JSON.stringify(value, null, 2) } )