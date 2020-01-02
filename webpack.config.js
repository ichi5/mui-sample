const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js?[hash]"
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./html/index.html"
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      name: "vendors",
      chunks: "initial"
    }
  }
};
