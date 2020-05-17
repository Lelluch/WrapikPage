const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    'Home': './source/index.js',
    'AboutUs': './source/aboutUs.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "source"),
    //overlay: true,
    compress: true,
    port: 9000,
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./source/fonts/",
        to: "./fonts",
      },
      {
        from: "./source/images/",
        to: "./images",
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['Home'],
      filename: 'index.html',
      template: './source/index.pug'
    }),
    new HtmlWebpackPlugin({
      chunks: ['AboutUs'],
      filename: 'aboutUs.html',
      template: './source/aboutUs.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.pug/,
        loader: ["raw-loader", "pug-html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
