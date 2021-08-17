const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const {EnvironmentPlugin} = require(`webpack`);

 module.exports = merge(common, {
   mode: 'production',

   optimization: {
    splitChunks: {
        chunks: 'all',
    },
    runtimeChunk: true,
},
plugins:[
  new EnvironmentPlugin({
    PHRASE:'Уже поздно'
  }),
]

 });