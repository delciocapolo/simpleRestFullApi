const log = require('debug')('api:controller');
const updateUserService = require('../services/updateUserService');

const updateUserController = (req, res) => {
	const { id } = req.params;
	const { body } = req;

	updateUserService(id, body);
	res.status(201).json({ message: 'Dados de usuario atualizados com sucesso' });
};

module.exports = updateUserController;
