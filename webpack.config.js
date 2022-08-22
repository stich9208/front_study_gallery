import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const __dirname = path.resolve();

export default {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    open: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "/dev": {
        target: "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com",
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
