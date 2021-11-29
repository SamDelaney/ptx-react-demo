const path = require("path");

const config = {
  target: "electron-main",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
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
        test: /\\.css$/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: true,
                },
            },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};

module.exports = (env, argv) => {
  return config;
};
