const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const ESLintPlugin = require('eslint-webpack-plugin');
 const PrettierPlugin = require("prettier-webpack-plugin");
 const {EnvironmentPlugin} = require(`webpack`);

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
   plugins:[

    new EnvironmentPlugin({
      PHRASE:'Тут может быть ваша реклама'
    }),
    new PrettierPlugin({
      printWidth: 80,               
      tabWidth: 2,                  
      useTabs: false,               
      semi: true,                   
      encoding: 'utf-8',            
      extensions: [ ".js", ".ts" ] 
    }),

    new ESLintPlugin({
      fix:true
    }),
   ]
   
 });