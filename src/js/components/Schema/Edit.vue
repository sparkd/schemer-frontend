<template>
  <div>    
    <schema-form :schema="schema" :record="record" method="PUT" :action="this.resolvePathName()" :title="'Edit ' + this.id" buttonText="Save"></schema-form>
  </div>
</template>

<script>

import SchemaAPIMixin from './Mixins/API.js'
import SchemaForm from './Form.vue'
var path = require('path')  

export default {
  name: 'SchemaCreate',
  mixins: [SchemaAPIMixin],
  components: {
    SchemaForm
  },
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


