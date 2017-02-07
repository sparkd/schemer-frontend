<template>
<div>
  <div class="row">
    <div class="col-md-10">
      <h1 class="page-title">{{ schema.title }}</h1>
    </div>
    <div class="col-md-2">
        <router-link class="btn btn-primary" :to="{ name: 'schema.create', params: { schemaSlug: slug }}"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>Create new</router-link>   
    </div>        
  </div>

  <div class="row">
    <div class="col-md-7">
      <div class="table-responsive" v-if="records.length">
        <table class="table table-hover table-striped">
          <tbody>
            <tr v-for="record in records">
              <td>
                <ul class="list-unstyled">
                  <li v-for="(property_type, property_name) in schema.properties">
                    <strong>{{ property_name }}:</strong> {{ record[property_name] }}
                  </li>
                </ul>              
              </td>
              <td>
                <ul class="list-inline pull-right">
                  <li>
                    <router-link class="btn btn-primary" :to="{ name: 'schema.show', params: { schemaSlug: slug, itemId: record._id }}">
                    <span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span>View</router-link>                      
                  </li>
                  <li>
                    <router-link class="btn btn-primary" :to="{ name: 'schema.edit', params: { schemaSlug: slug, itemId: record._id }}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>Edit</router-link>                    
                  </li>
                  <li>
                    <router-link class="btn btn-danger" :to="{ name: 'schema.delete', params: { schemaSlug: slug, itemId: record._id }}">
                    <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>Delete</router-link>                      
                  </li>                  
                </ul>
                 
              </td>
            </tr>
           </tbody> 
        </table>
      </div>  
      <div v-else>There are no {{ schema.title }} records</div>        
    </div>
 
    <div class="col-md-5">
      <pre>{{schema | json }}</pre>
    </div>
  </div>  
</div>
</template>

<script>

import SchemaAPIMixin from './Mixins/API.js'

export default {
  name: 'SchemaList',
  mixins: [SchemaAPIMixin],
  data () {
    return {
      records: [],
      schema: {},
      slug: this.$route.params.schemaSlug,
      path: 'schemaPath',
    }
  },
  methods: {
    apiCallback: function (response) {
      this.records = response.body.records
      this.schema = response.body.schema
    }
  } 
}
</script>


