const {
	multiValidateFn,
	validateObjFn
} = require('../services/get/validateData');

const log = require('debug')('api:middleware');

const validateValuesMiddleware = (req, res, next) => {
	const { body } = req;

	const err = () => {
		const msg = 'OS VALORES INSERIDOS NAO PODEM SER VAZIOS/UNDEFINED';
		return res.status(400).json({ message: msg });
	};

	if (Array.isArray(body) && multiValidateFn('undefined', body)) err();
	if (validateObjFn('undefined', body)) err();
	next();
};

module.exports = validateValuesMiddleware;
