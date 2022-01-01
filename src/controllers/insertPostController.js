const POST = require('../models/postModel');
const insertRegisterService = require('../services/insertRegisterService');

const insertPostController = (req, res) => {
	insertRegisterService(POST, req);
	return res.status(201).json({ message: 'Post inserido com sucesso' });
};

module.exports = insertPostController;
