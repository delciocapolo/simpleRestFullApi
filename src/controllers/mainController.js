const service = require('../services/getAllService');
const log = require('debug')('api:controller');

const mainController = async (_req, res) => {
	const infoData = await service.Users();
	res.json({
		message: 'Todos os usuarios',
		data: infoData
	});
};

module.exports = mainController;
