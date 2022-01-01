const { logController } = require('../global/log');
const USER = require('../models/userModel');
const { getRegister } = require('../services/getRegisterService');

const mainController = async (req, res) => {
	const infoData = await getRegister(USER);
	return res.status(200).json({
		message: 'Todos os usuarios',
		data: infoData
	});
};

module.exports = mainController;
