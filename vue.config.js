// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const path = require("path");
// const axios = require("axios");

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
    // proxy: "https://c.y.qq.com/" // 配置跨域处理,只有一个代理,
    proxy: {
      "/apipc": {
        target: "https://u.y.qq.com/", //需要代理的地址
        changeOrigin: true,
        pathRewrite: {
          "^/apipc": "/"
        }
      },
      "/huangyi": {
        target: "http://ustbhuangyi.com/", //需要代理的地址
        changeOrigin: true,
        pathRewrite: {
          "^/huangyi": "/"
        }
      },
      "/api": {
        target: "https://c.y.qq.com", //需要代理的地址
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/" //这里理解成用‘/api’代替target里面的地址，调取接口时直接用/api代替
        }
      }
    }
    // before: function(app) {
    //   app.get("/api/getRecommend", function(req, res) {
    //     const url =
    //       "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
    //     axios
    //       .get(url, {
    //         headers: {
    //           referer: "https://c.y.qq.com/",
    //           host: "c.y.qq.com"
    //         },
    //         params: req.query
    //       })
    //       .then(response => {
    //         res.json(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   });
    //   app.get("/api/getDiscList", function(req, res) {
    //     const url =
    //       "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg";
    //     axios
    //       .get(url, {
    //         headers: {
    //           referer: "https://c.y.qq.com/",
    //           host: "c.y.qq.com"
    //         },
    //         params: req.query
    //       })
    //       .then(response => {
    //         res.json(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   });
    // }
  }
};
