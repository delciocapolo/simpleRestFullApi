const { Op } = require('sequelize');
const User = require('../models/userModel');
const log = require('debug')('api:service');

const updateUserService = async (idUser, datas) => {
	const { _options } = await User.findByPk(idUser);
	const { attributes } = _options;

	Object.keys(datas).map(async key => {
		if (attributes.includes(key)) {
			await User.update(
				{ [key]: datas[key] },
				{
					where: {
						id: {
							[Op.eq]: idUser
						}
					}
				}
			)
				.then(res => log(`Registo de usuario atualizado! ${res}`))
				.catch(err => log('Alteracao de registo nao sucedida | Erro: ' + err));
		}
	});
};

module.exports = updateUserService;
