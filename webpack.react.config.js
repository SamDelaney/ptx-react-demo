const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config = { 
  target: "electron-renderer",
  devtool: "source-map",
  entry: ["./src/app/renderer.jsx", "./src/app/components/Demo.css"],
  output: {
    filename: "renderer.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader"
        ],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx",".css"]
  },
  plugins: [htmlPlugin],
  stats: {
    children: false
  }
};

module.exports = (env, argv) => {
  return config;
};
