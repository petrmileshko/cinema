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
  plugins: [
    new copyFiles({
      patterns: [{ from: "public"}],
    })
  ]
};
