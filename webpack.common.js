const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
   entry: {
     index: ['./src/index.js'],
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: './src/about.pug',
      filename: "credits.html"
    }), 
    new HtmlWebpackPlugin({
       template: './src/index.pug',
       filename: "index.html"
     }),
     new MiniCssExtractPlugin({
       
     })

   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module:{
    rules: [
      {
        test: /\.(png|jp(e?)g|gif)$/i,
        use:{
          loader:"file-loader",
          options:{
            name: "[name].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.wav$/i,
        use:{
          loader:"file-loader",
          options:{
            name: "[name].[ext]",
            outputPath: "sounds"
          }
        }
      },
      {
        test: /\.pug$/i,
        use:["pug-loader"]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {loader:"css-loader",options:{url:false}}],
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