const { environment } = require('@rails/webpacker');

const erb = require('./loaders/erb');
environment.loaders.prepend('erb', erb);

environment.splitChunks();

module.exports = environment;
