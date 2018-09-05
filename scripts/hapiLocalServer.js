'use strict';
// Load Modules

const Hapi = require('hapi');
const _ = require('lodash');
const walmartTest = require('../lib');

const DEFAULT_PORT = 8080;

const getServer = (options, callback) => {
  const server = new Hapi.Server();

  server.connection({
      port: DEFAULT_PORT),
    labels: ['http', 'https', 'api']
  });
const registrations = [];
registrations.push(walmartTest);

server.register(registrations, (err) => {
  if (err) {
    return callback(err);
  }
  server.start((error) => {
    if (error) {
      return callback(error);
    }
    return callback(null, server);
  });
});
};
if (!module.parent) {
  getServer(localOptions, (err, server) => {
    if (err) {
      throw err;
    }

    console.log(`Server started. API on ${server.info.port}`);
  });
}
module.exports = getServer;