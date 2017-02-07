<template>
<div>
  <h1 class="page-title">Content types</h1>
  <div class="panel panel-default" v-for="(schema, slug) in schemas">
  <div class="panel-body">
    <div class="col-md-9">
      <router-link :to="{ name: 'schema.list', params: { schemaSlug: slug }}"><h4>{{ schema.title }}</h4></router-link>
      <p>{{ schema.description }}</p>
    </div>
    <div class="col-md-3">
      <ul class="list-no-bullets">
        <li><router-link class="btn btn-primary" :to="{ name: 'schema.create', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Create new</router-link></li>
        <li><router-link class="btn btn-primary" :to="{ name: 'schema.list', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>View records</router-link></li>        
      </ul>          
    </div>
   </div>
</div>  
</div>
</template>

<script>

import SchemaAPIMixin from './Mixins/API.js'

export default {
  name: 'SchemaIndex',
  mixins: [SchemaAPIMixin],
  data () {
    return {
      path: 'indexPath',
      schemas: []
    }
  },
  methods: {
    apiCallback: function (response) {
      this.schemas = response.body
      console.log(this.schemas);
    }
  } 
}
</script>


