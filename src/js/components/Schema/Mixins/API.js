import SchemaPathMixin from './Path.js'

export default {
  mixins: [SchemaPathMixin],
  methods: {
    callApi: function (callback) {
      // Get the endpoint from the path mixin
      var endpoint = this.resolvePathName(this.path)
        this.$http.get(endpoint, {
        // Update schemas 
        }).then(response => {
          callback(response)
        }, response => {
          console.log('Fetch Failed')
        })
    },
    resolvePathName: function () {
      return this[this.path]
    }
  },      
  mounted: function(){
    this.callApi(this.apiCallback)
  }  
}
