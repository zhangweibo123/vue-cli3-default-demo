const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';
const { VUE_APP_API_BASE } = process.env;

module.exports = {
  publicPath: './',
  assetsDir: './static/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://101.132.242.183:8005',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  css: {
    sourceMap: false,
    requireModuleExtension: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/stylesheets/index.less')]
    }
  },
  chainWebpack: config => {
    if (isProduction) {
      // 删除预加载
      config.plugins.delete('preload');
      // 压缩代码: 压缩空格等
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      });
    }
  },
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(
        new uglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
              // warning: false
            },
            sourceMap: false,
            // 开启多进程构建
            parallel: true
          }
        })
      );
    }
  },
  productionSourceMap: false,
  // 启用并行化
  parallel: require('os').cpus().length > 1
};
