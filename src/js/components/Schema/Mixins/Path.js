export default {
  // List of named paths 
  computed: {
    recordPath: function () { 
      return this.makePath([this.slug, this.id])
    },
    schemaPath: function () { 
      return this.makePath([this.slug])
    }, 
    schemaJSONPath: function () { 
      return this.makePath([this.slug + '.schema.json'])
    },     
    indexPath: function () { 
      return this.makePath()
    },        
  },    
  methods: {
    makePath: function (pathParts = []) {
        var path = require('path')
        pathParts = [this.$config.api.prefix].concat(pathParts);
        // console.log(this.$config.api.host.ensureSlash())
        // Add trailing slash to host if it doesn't exist 
        var endpoint = this.ensureSlash(this.$config.api.host)
        endpoint += path.join.apply(this, pathParts)
        // Ensure endpoint ends with /
        if (endpoint.indexOf("json") === -1){
            endpoint = this.ensureSlash(endpoint);
        }
        return endpoint
    },
    ensureSlash: function (path) {
        return path.replace(/\/?$/, '/')
    }

  },  
}