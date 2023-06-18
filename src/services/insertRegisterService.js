const { execSync } = require('node:child_process');
const ipChanger = require('ip');
const { logService } = require('../global/log');
const localization = require('./get/localizationService');
const { simpleValidateFn } = require('./get/validateData');

const insertRegisterService = async (tbl_name, req) => {
	const { body } = req;

	const insertDatas = async data => await tbl_name.create(data);
	const insertDataAuto = async (data = {}) => {
		try {
			let userIP = execSync('curl ifconfig.me/ip') || '207.97.227.239';
			await insertDatas({
				...data,
				nacionalidade: await localization(userIP.toString())
			});
		} catch (err) {
			logService(
				`UM ERRO OCORREU AO INSERIR AUTOMATICAMENTE O REGISTO DE NACIONALIDADE: ${err}`
			);
		}
	};
	const checkGeneralCondition = (register, key) =>
		Object.keys(register).includes(key) && simpleValidateFn(register[key]);

	if (Array.isArray(body)) {
		body.forEach(async register =>
			checkGeneralCondition(register, 'nacionalidade')
				? await insertDataAuto(register)
				: await insertDatas(register)
		);
		logService(`Registo(s) cadastrado(s) com sucesso`);
	} else {
		checkGeneralCondition(body, 'nacionalidade')
			? await insertDataAuto(body)
			: await insertDatas(body);
		logService(`Registo(s) cadastrado(s) com sucesso`);
	}
};

module.exports = insertRegisterService;
