const { log } = require('../models/connectionDB');
const User = require('../models/userModel');
const localization = require('./get/localizationService');
const { validateFn, multiValidateFn } = require('./get/validateData');

const msgInsert = _res => log('Usuario inserido com sucesso');
const errInsert = err => log(`Usuario nao inserido | Erro: ${err}`);

const insertUserService = async obj => {
	const { body } = obj;
	const ip = obj.ip || '207.97.277.329';

	if (validateFn('undefined', body))
		throw new Error(
			`Um dos parametros passados em "insertUserService" esta indefinido/vazio`
		).message;
	if (Array.isArray(body) && multiValidateFn('undefined', body)) {
		await User.bulkCreate(body);
	} else {
		validateFn('undefined', body.nacionalidade)
			? await User.create({ ...body, nacionalidade: localization(ip) })
			: await User.create(body);
	}
};

module.exports = insertUserService;
