const { environment } = require('@rails/webpacker');

environment.loaders
  .get('sass')
  .use.splice(0, 1, { loader: 'style-loader', options: {} });

const erb = require('./loaders/erb');
environment.loaders.prepend('erb', erb);

environment.splitChunks();

module.exports = environment;
