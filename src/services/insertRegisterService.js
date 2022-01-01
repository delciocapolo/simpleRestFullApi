const { logService } = require('../global/log');
const localization = require('./get/localizationService');

// const msgInsert = res =>
// 	logDatabase(`Registo inserido com sucesso | ${res} linhas afetadas`);
// const errInsert = err => logDatabase(`Registo nao inserido | Erro: ${err}`);

const insertRegisterService = (tbl_name, req) => {
	const { body, ip } = req;
	const ipUser = ip || '207.97.277.329';
	const insertSubFn = async data => {
		await tbl_name.create(data);
	};

	if (Array.isArray(body)) {
		body.forEach(register =>
			Object.keys(register).includes('nacionalidade') &&
			register.nacionalidade === ''
				? insertSubFn({ ...register, nacionalidade: localization(ipUser) })
				: insertSubFn(register)
		);
	} else {
		Object.keys(body).includes('nacionalidade') && body.nacionalidade === ''
			? insertSubFn({ ...body, nacionalidade: localization(ipUser) })
			: insertSubFn(body);
	}
	logService('Registo(s) cadastrado(s) com sucesso');
};

module.exports = insertRegisterService;
