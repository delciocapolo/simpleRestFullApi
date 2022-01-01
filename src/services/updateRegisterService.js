const { Op } = require('sequelize');
const { logService } = require('../global/log');

const updateRegisterService = async (tbl_name, idUser, datas) => {
	const { _options } = await tbl_name.findByPk(idUser);
	const { attributes } = _options;

	Object.keys(datas).map(async key => {
		if (attributes.includes(key)) {
			await tbl_name
				.update(
					{ [key]: datas[key] },
					{
						where: {
							id: {
								[Op.eq]: idUser
							}
						}
					}
				)
				.then(res =>
					logService(
						`Campo "${key}" atualizado com sucesso | ${res} linhas afetadas`
					)
				)
				.catch(err =>
					logService('Alteracao de registo nao sucedida | Erro: ' + err)
				);
		} else {
			logService(`O campo ${key} nao existe na table ${tbl_name}`);
		}
	});
};

module.exports = updateRegisterService;
