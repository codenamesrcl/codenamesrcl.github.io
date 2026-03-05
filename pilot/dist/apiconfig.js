var _keys = {
   local: {
      key: '{{your key here}}',
      url: '{{}}',
   }
},
keys = {
   local: null
}
Object.freeze(keys);

var models = [
   {
      label: '{{display label}}',
      value: '{{model name/path}}'
   }
],
ollamamodels = {
   models: [
      {
         label: 'qwen3.5:9b',
         value: 'qwen3.5:9b'
      }
   ],
   default: 'qwen3.5:9b'
}

var config = {
   keys: keys,
   models: ollamamodels.models,
   default_model: ollamamodels.default
}

export default config;