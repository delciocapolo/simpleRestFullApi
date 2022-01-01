const USER = require('../models/userModel');
const insertRegisterService = require('../services/insertRegisterService');

const insertUserController = (req, res) => {
	insertRegisterService(USER, req);
	return res.status(201).json({ message: 'Usuario cadastrado com sucesso!' });
};

module.exports = insertUserController;
