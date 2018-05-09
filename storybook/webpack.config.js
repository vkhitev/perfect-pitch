const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.unshift({
    test: /.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: ['babel-plugin-rewire'],
      },
    },
  })

  return defaultConfig;
};
