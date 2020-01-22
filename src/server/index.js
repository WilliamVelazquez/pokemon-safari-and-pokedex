require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['png', 'svg', 'gif', 'jpg', 'jpeg'],
  name: '/assets/images/[name].[ext]',
});

require('./server.js');
