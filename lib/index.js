'use strict';

const _ = require('lodash');

const Hoek = require('hoek');
const Defaults = require('./default-config');
const routes = require('./routes');
const packageJson = require('../package.json');


const internals = {};

internals.settings = Hoek.applyToDefaults(Defaults, options);
exports.register = function (plugin, options, next) {
	internals.settings = Hoek.applyToDefaults(Defaults, options);

	const routesArray = routes.getRoutesArray(internals.settings);
  	plugin.route(routesArray);
  	next();
}

exports.register.attributes = {
  pkg: packageJson
};

// Export internals for testing
exports._internals = internals;
