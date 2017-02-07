<template>
  <form></form>
</template>

<script>

export default {
  name: 'SchemaForm',
  props: ['schema', 'record', 'method', 'action', 'title', 'buttonText'],
  watch: {
    schema: function (schema, oldSchema) {

      var options = {
        "fields": {},
        "label": this.title,
        "form": {
            "attributes": {
                "method": this.method,
                "action": this.action,
                "enctype": "multipart/form-data"
            },
            "buttons": {
                "submit": {
                    "value": this.buttonText,
                    "styles": "btn btn-primary"
                }
            }
        },
      };

      Object.keys(schema['properties']).map(function(key, index) {
         options['fields'][key] = {
            type: this.getAlpacaFieldType(schema['properties'][key]['type']),
            label: this.formatLabel(key)
         };
      }.bind(this));

      Alpaca(this.$el, {
        schema: schema,
        options: options,
        data: this.record,
      })
    },
  }, 
  methods: {
    formatLabel: function (fieldName) {
      // TODO: Split the string etc., Capitalization can be styled
      return fieldName
    },
    // There are not exact mappings between alpaca and json schema fields
    // String => text
    getAlpacaFieldType: function (schemaType) {
      switch(schemaType) {
          case 'string':
              return 'text'
              break;
          default:
              return schemaType
      }      
    }    
  }  
}
</script>


