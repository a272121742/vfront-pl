// load the default config generator.
const path = require('path');
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  config.module.rules[1] = {
    test: /\.vue$/,
    use: [{
      loader: 'vue-loader',
      options: {
     
      }
    },
    {
      loader: 'iview-loader',
      options: {
        prefix: true
      }
    }]
  };
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader'
  });
  config.module.rules.push({
    test: /iview\/.*?js$/,
    loader: 'babel-loader'
  });
  config.module.rules.push({
    test: /\.(html|tpl)$/,
    loader: 'html-loader'
  });
  
  config.resolve.extensions.push('.ts', '.tsx', '.vue');
  config.resolve.alias['@'] = path.resolve('src');

  return config;
};