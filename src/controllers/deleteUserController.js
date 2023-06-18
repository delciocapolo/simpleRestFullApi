const USER = require('../models/userModel');
const deleteRegisterService = require('../services/deleteRegisterService');

const deleteUserController = (req, res) => {
	const { id } = req.params;
	deleteRegisterService(USER, 'id', id);
	return res.status(204).end();
};

module.exports = deleteUserController;
