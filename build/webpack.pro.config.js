const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  plugins: [
    /*
     ** 背景：为了避免缓存，需要在文件后加入hash，如此多次构建会产生很多无用的文件
     ** 作用：通过 clean-webpack-plugin，在每次成功构建之后，帮助我们自动清空dist目录
     */
    new CleanWebpackPlugin(),
  ],
};
