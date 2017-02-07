<template>
<div>
  <div class="row">
    <div class="col-md-8">
      <h1 class="page-title">{{ record._id }}</h1>
    </div>
    <div class="col-md-4">
      <router-link class="btn btn-primary" :to="{ name: 'schema.list', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>Back to {{ slug }}</router-link>
      <router-link class="btn btn-primary" :to="{ name: 'schema.edit', params: { schemaSlug: slug, itemId: id }}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>Edit</router-link>
      <router-link class="btn btn-danger" :to="{ name: 'schema.delete', params: { schemaSlug: slug, itemId: id }}"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Delete</router-link>   
    </div>        
  </div>
  <div class="row">
    <div class="col-md-7">  
      <table class="table table-hover table-striped">
        <tbody>
          <tr v-for="(property_type, property_name) in schema.properties">
            <th>
              {{ property_name }}
            </th>
            <td>
              {{ record[property_name] }}             
            </td>
          </tr>
         </tbody> 
      </table>
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
