const { override,addWebpackPlugin,overrideDevServer } = require('customize-cra');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');


const addWriteFilePlugin = (config) => {
  config.plugins.push(new WriteFilePlugin());
  config.output.futureEmitAssets = false;
  // https://github.com/gajus/write-file-webpack-plugin/issues/74
  return config;
};

const addDevServerCOOPReponseHeader = (config) => {
  config.headers = {
    ...config.headers,
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin"
  }
  return config
}

module.exports = {
  webpack:override(
    addWebpackPlugin(new CopyPlugin({
      patterns: [{
        from: path.resolve(
          __dirname,
          'node_modules',
          '@zoomus',
          'websdk',
          'dist',
          'lib',
          'av',
        ),
        to: path.resolve(__dirname, 'public', 'lib'),
      }, {
        from: path.resolve(
          __dirname,
          'tools'
        ),
        to: path.resolve(__dirname, 'public', 'tools'),
      }],
    })), addWriteFilePlugin),
    devServer: overrideDevServer(addDevServerCOOPReponseHeader)
}
