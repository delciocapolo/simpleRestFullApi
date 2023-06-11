const deleteUserService = require('../services/deleteUserService');

const deleteUserController = (req, res) => {
	const { id } = req.params;
	const { body } = req;
	deleteUserService(id, body);
	res.status(204).end();
};

module.exports = deleteUserController;
