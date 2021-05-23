process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const environment = require('./environment');
environment.loaders
  .get('sass')
  .use.splice(0, 1, { loader: 'style-loader', options: {} });

module.exports = environment.toWebpackConfig();
