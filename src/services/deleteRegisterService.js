const { Op } = require('sequelize');
const { logDatabase } = require('../global/log');

const deleteRegisterService = async (tbl_name, idColumn, idUser) => {
	await tbl_name
		.destroy({
			where: {
				[idColumn]: {
					[Op.eq]: idUser
				}
			}
		})
		.then(res => logDatabase(`Registo deletado com sucesso | ${res} afetada`))
		.catch(err =>
			logDatabase(`Nao foi possivel deletar registo | Erro: ${err}`)
		);
};

module.exports = deleteRegisterService;
