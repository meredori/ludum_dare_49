const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
  
  const miniCssExtractPlugin = new MiniCssExtractPlugin();

module.exports = {
    entry: './src/index.js',
    plugins: [
        htmlPlugin,
        miniCssExtractPlugin
    ],
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                generator: {
                  filename: 'images/[name][ext][query]'
                }
              },
              {
                test: /\.jsx$/,
                use: ["babel-loader"]
              },
              {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                generator: {
                  filename: 'images/[name][ext][query]'
                }                
              },
            {
                test: /\.png/,
                type: 'asset/resource',                
                generator: {
                  filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][ext][query]'
                }
            },
            {
              test: /\.html$/i,
              loader: "html-loader",
            },
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    }
};