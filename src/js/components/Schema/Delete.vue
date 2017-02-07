<template>
<div>
  <div class="row">
    <div class="col-md-8">
      <h1 class="page-title">Confirm delete</h1>
    </div>
    <div class="col-md-4">
      <router-link class="btn btn-primary pull-right" :to="{ name: 'schema.list', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>Back to {{ slug }}</router-link>
    </div>        
  </div>
  <div class="row">
    <div class="col-md-7">  
      <h2>Are you sure you want to delete record {{ record._id }}?</h2>
      <router-link class="btn btn-primary" :to="{ name: 'schema.list', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>Cancel</router-link>
      <button class="btn btn-danger pull-right"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Delete</button>
    </div>      
    <div class="col-md-5">
      <pre>{{record | json }}</pre>
    </div>
  </div>        
</div>
</template>

<script>

import SchemaAPIMixin from './Mixins/API.js'
var path = require('path')  

export default {
  name: 'SchemaShow',
  mixins: [SchemaAPIMixin],
  data () {
    return {
        slug: this.$route.params.schemaSlug,
        id: this.$route.params.itemId,
        path: 'recordPath',
        schema: {},
        record: {}        
    }
  },
  methods: {
    apiCallback: function (response) {
      this.record = response.body.record
      this.schema = response.body.schema
    }
  }
}
</script>
