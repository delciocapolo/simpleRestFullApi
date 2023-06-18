const { logMiddleware } = require('../global/log');
const {
	multiValidateFn,
	validateObjFn
} = require('../services/get/validateData');

const validateValuesMiddleware = (req, res, next) => {
	const { body } = req;

	if (Array.isArray(body) && !multiValidateFn(body)) {
		return res.status(400).json({
			message: 'Algum dos valores da lista de usuarios esta indefinido !'
		});
	}
	if (!validateObjFn(body)) {
		return res.status(400).json({
			message: 'O valor de um dos campos esta indefindo'
		});
	}
	next();
};

module.exports = validateValuesMiddleware;
