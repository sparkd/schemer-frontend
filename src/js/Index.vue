<template>
<div>
  <div class="panel panel-default" v-for="(schema, slug) in schemas">
  <div class="panel-body">
    <router-link :to="{ name: 'schema.list', params: { schemaSlug: slug }}">{{ schema.title }}</router-link> 
    <router-link :to="{ name: 'schema.create', params: { schemaSlug: slug }}">Create</router-link> 
  </div>
</div>  
</div>
</template>

<script>
export default {
  name: 'SchemaIndex',
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


