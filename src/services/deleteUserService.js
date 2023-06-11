const { Op } = require('sequelize');
const User = require('../models/userModel');
const { log } = require('../models/connectionDB');

const deleteUserService = async idUser => {
	await User.destroy({
		where: {
			id: {
				[Op.eq]: idUser
			}
		}
	})
		.then(_res => log('Usuario deletado com sucesso'))
		.catch(err => log(`Nao foi possivel deletar usuario | Erro: ${err}`));
};

module.exports = deleteUserService;
