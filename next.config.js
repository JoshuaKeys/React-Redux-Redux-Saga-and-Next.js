const withLess = require('@zeit/next-less');
const { resolve } = require('path');
module.exports = withLess({
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.ts$|\.tsx$/,
        use: [
          {
            loader: resolve('loaders/console-loader.js'),
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    );
    return config;
  },
});
