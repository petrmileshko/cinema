const path = require("path");
const copyFiles = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  devtool: 'source-map',
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new copyFiles({
      patterns: [{ from: "public"}],
    })
  ]
};
