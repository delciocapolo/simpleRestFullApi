const updateUserRouter = require('express').Router();
const updateUserController = require('../controllers/updateUserController');
const validateValuesMiddleware = require('../middlewares/validateValuesMiddleware');

updateUserRouter.put(
	'/user/:id',
	validateValuesMiddleware,
	updateUserController
);

module.exports = updateUserRouter;
