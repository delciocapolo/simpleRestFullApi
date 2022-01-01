const { log } = require('../models/connectionDB');
const User = require('../models/userModel');
const localization = require('./get/localizationService');

const msgInsert = _res => log('Usuario inserido com sucesso');
const errInsert = err => log(`Usuario nao inserido | Erro: ${err}`);

const insertUserService = async obj => {
	const { body } = obj;
	const ip = obj.ip || '207.97.277.329';

	if (Array.isArray(body)) await User.bulkCreate(body);
	else {
		Object.keys(body).includes('nacionalidade')
			? await User.create(body)
			: await User.create({ ...body, nacionalidade: localization(ip) });
	}
};

module.exports = insertUserService;
