const service = require('../services/getAllService');
const log = require('debug')('api:service');

const mainController = async (_req, res) => {
	const infoData = await service.Users();
	res.json({
		message: 'Todos os usuarios',
		data: JSON.stringify(infoData, null, 4)
	});
};

module.exports = mainController;
