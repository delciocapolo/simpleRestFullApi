const { log } = require('../models/connectionDB');
const User = require('../models/userModel');
const { validateFn, multiValidateFn } = require('./validateData');

const insertUserService = async obj => {
	if (validateFn('undefined', obj))
		return new Error(
			`Um dos parametros passados em "insertUserService" esta indefinido/vazio`
		).message;
	if (Array.isArray(obj) && !multiValidateFn('undefined', obj)) {
		await User.bulkCreate(obj);
	} else {
		const { userName, sexo, nacionalidade, seguidores } = obj;
		await User.create({
			userName,
			sexo,
			nacionalidade,
			seguidores
		})
			.then(res => log('Valores inseridos com sucesso'))
			.catch(err => log(`Valores nao inseridos | Erro: ${err}`));
	}
};

module.exports = insertUserService;
