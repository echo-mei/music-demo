// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const path = require("path");

function resolve(dir) {
  console.log(__dirname);
  return path.join(__dirname, dir);
}

const TransformModulesPlugin = require("webpack-transform-modules-plugin");

module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/online/" : "/",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("common", resolve("src/common"))
      .set("api", resolve("src/api"))
      .set("cube-ui", "cube-ui/lib");
  },
  configureWebpack: {
    plugins: [new TransformModulesPlugin()]
  },
  devServer: {
    port: 9999, // 端口号
    host: "localhost",
    open: true, //配置自动启动浏览器
    proxy: "https://c.y.qq.com/" // 配置跨域处理,只有一个代理,
    // proxy: {
    //   "/api": {
    //     target: "<url>",
    //     changeOrigin: true
    //   },
    //   "/foo": {
    //     target: "<other_url>"
    //   }
    // }
  }
};
