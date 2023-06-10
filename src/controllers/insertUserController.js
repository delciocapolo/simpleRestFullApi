const insertUserService = require('../services/insertUserService');
const log = require('debug')('api:service');

const insertUserController = (req, res) => {
	log(req.body);
	res.status(201).end('Criado com sucesso');
	// const { userName, sexo, nacionalidade, seguidores } = req.body;
	// insertUserService({ userName, sexo, nacionalidade, seguidores });
};

module.exports = insertUserController;
