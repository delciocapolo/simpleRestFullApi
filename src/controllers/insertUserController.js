const insertUserService = require('../services/insertUserService');
const log = require('debug')('api:controller');

const insertUserController = (req, res) => {
	insertUserService(req);
	res.status(201).json({ message: 'Usuario cadastrado com sucesso!' });
};

module.exports = insertUserController;
