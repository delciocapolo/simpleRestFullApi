const updatePostRouter = require('express').Router();
const updatePostController = require('../controllers/updatePostController');
const validateValuesMiddleware = require('../middlewares/validateValuesMiddleware');

updatePostRouter.put(
	'/post/:id',
	validateValuesMiddleware,
	updatePostController
);

module.exports = updatePostRouter;
