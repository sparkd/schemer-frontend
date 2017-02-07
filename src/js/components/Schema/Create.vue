<template>
  <div>    
    <schema-form :schema="schema" method="POST" :action="this.resolvePathName()" :title="'Create new ' + this.schema.title" buttonText="Create"></schema-form>
  </div>
</template>

<script>

import SchemaAPIMixin from './Mixins/API.js'
import SchemaForm from './Form.vue'

export default {
  name: 'SchemaCreate',
  mixins: [SchemaAPIMixin],
  components: {
    SchemaForm
  },
  data () {
    return {      
      slug: this.$route.params.schemaSlug,
      path: 'schemaJSONPath',
      schema: {}
    }
  },
  methods: {
    apiCallback: function (response) {
      this.schema = response.body
    }
  }   
}
</script>


