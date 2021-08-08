const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 


 module.exports = {
   entry: {
     app: ['./src/index.js','./src/main.css'],
   },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Numbers In Grey',
      template: './src/indexGrey.html',
      filename: 'indexGrey.html',
    }), 
    new HtmlWebpackPlugin({
       title: 'Numbers In Color',
       template: './src/index.html',
       filename: 'index.html',
     }),
     new MiniCssExtractPlugin({
      filename: '[name].css',
  }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module:{
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
   }
 };