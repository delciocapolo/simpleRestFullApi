const log = require('debug')('api:controller');
const USER = require('../models/userModel');
const updateRegisterService = require('../services/updateRegisterService');

const updateUserController = (req, res) => {
	const { id } = req.params;
	const { body } = req;

	updateRegisterService(USER, id, body);
	res.status(201).json({ message: 'Dados de usuario atualizados com sucesso' });
};

module.exports = updateUserController;
