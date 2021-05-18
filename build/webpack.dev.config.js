const webpack = require("webpack");
module.exports = {
  /*
   ** source map: 是一个信息文件，里面储存着位置信息(转换后的代码的每一个位置，所对应的转换前的位置)。
   ** cheap: source map 会忽略文件的列信息
   ** module: 会定位到 ts源码，而不是转译后的 js源码。
   ** eval-source-map: 将source map以 DataURI 形式打包到文件中。
   */
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        devtools: "cheap-module-eval-source-map",
      },
    }),
  ],
};
