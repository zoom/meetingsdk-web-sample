const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "eval",
  mode: "development",
  context: __dirname,
  target: "web",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {},
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.BABEL_ENV": JSON.stringify("development"),
    }),
  ],
};
