const POST = require('../models/postModel');
const deleteRegisterService = require('../services/deleteRegisterService');

const deletePostController = (req, res) => {
	const { id } = req.params;
	deleteRegisterService(POST, 'id', id);
	return res.status(204).end();
};

module.exports = deletePostController;
