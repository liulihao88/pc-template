"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");
const FileManagerPlugin = require("filemanager-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// let nowTime =
//   new Date().getMonth() +
//   1 +
//   "月" +
//   new Date().getDate() +
//   "号" +
//   new Date().getHours() +
//   "时" +
//   new Date().getMinutes() +
//   "分";

let now = new Date();
let nowTime =
  now.getMonth() +
  1 +
  "月" +
  now.getDate() +
  "日" +
  now.getHours() +
  "时" +
  now.getMinutes() +
  "分";

const name = defaultSettings.title || "vue Admin Template"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: require("./mock/mock-server.js"),
  },
  css: {
    loaderOptions: {
      scss: {
        // 引入scss全局变量文件，@是我们设置的别名，执行src目录
        prependData: `@import "~@/styles/variables.scss";`,
      },
    },
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      extensions: [".js", ".json", ".vue", ".jsx", ".ts", ".tsx"],
      alias: {
        "@": resolve("src"),
        u: resolve("src/utils"),
        v: resolve("src/views"),
        s: resolve("src/styles"),
      },
    },
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial",
      },
    ]);

    config.plugin("compress").use(FileManagerPlugin, [
      {
        events: {
          onEnd: {
            delete: [
              // 首先需要删除项目根目录下的所有.zip文件
              `./*.zip`, // eg: './dist/*zip
            ],
            archive: [
              // 然后我们选择dist文件夹将之打包成dist.zip并放在根目录
              {
                source: `./dist`, // eg: './dist
                destination: `./dist-PC端工程协同${nowTime}.zip`, // eg: './dist/项目名称-正式版-时间.zip'
              },
            ],
          },
        },
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/,
          },
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-elementUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  },
};
