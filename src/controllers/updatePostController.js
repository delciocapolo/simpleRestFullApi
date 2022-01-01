const POST = require('../models/postModel');
const updateRegisterService = require('../services/updateRegisterService');

const updatePostController = (req, res) => {
	const { body } = req;
	const { id } = req.params;
	updateRegisterService(POST, id, body);
	return res.status(201).json({ message: 'Post atualizado com sucesso' });
};

module.exports = updatePostController;
