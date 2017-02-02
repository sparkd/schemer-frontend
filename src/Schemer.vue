<template>
  <ul>
    <li v-for="schema in schemas">
      {{ schema.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'schemer',
  data () {
    return {
      schemas: []
    }
  },
  mounted: function() {
    var path = require('path')
    var apiEndpoint = path.join(this.$config.api.host, this.$config.api.prefix)
    this.$http.get(this.apiEndpoint, {
        // Update schemas 
        }).then(response => {
          this.schemas = response.body
        }, response => {
          console.log('Fetch Failed')
        })
  },
  computed: {
    apiEndpoint: function () { 
      // var path = require('path')
      // var pathParts = ['api']
      return this.$config.api.host + '/' + 'api/';
    }
  }  
  // methods: {
  //   api: function () {
  //     this.counter += 1
  //     this.$emit('increment')
  //   }
  // },  
}
</script>


