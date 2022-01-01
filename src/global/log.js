const logDatabase = require('debug')('api:database');
const logServer = require('debug')('api:server');
const logService = require('debug')('api:service');
const logController = require('debug')('api:controller');
const logMiddleware = require('debug')('api:middleware');

module.exports = {
	logDatabase,
	logServer,
	logService,
	logController,
	logMiddleware
};
