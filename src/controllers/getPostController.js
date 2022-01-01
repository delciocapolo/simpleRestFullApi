const POST = require('../models/postModel');
const { getRegister } = require('../services/getRegisterService');

const getPostController = async (req, res) => {
	const posts = await getRegister(POST);
	return res.status(200).json({
		message: 'Todos os Posts',
		data: posts
	});
};

module.exports = getPostController;
