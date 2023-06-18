const { logController } = require('../global/log');
const USER = require('../models/userModel');
const { getRegister, getPost } = require('../services/getRegisterService');

const mainControllerUser = async (_req, res) => {
	const result = await getRegister(USER);
	return res.status(200).json({
		message: 'Todos os usuarios',
		data: result
	});
};
const mainControllerPost = async (req, res) => {
	const result = await getPost();
	return res.status(200).json({
		message: 'POST de todos os usuarios',
		data: result
	});
};
module.exports = { mainControllerUser, mainControllerPost };
