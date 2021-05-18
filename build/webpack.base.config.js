const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "app.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js", // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
            options: {
              // 为 vue 文件添加 .ts 扩展名，以方便 ts 处理
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // 通过一个模版帮助我们生成网站首页，并将输出文件嵌入
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ],
};
