const mainRouter = require('express').Router();
const {
	mainControllerUser,
	mainControllerPost
} = require('../controllers/mainController');

mainRouter.get('/user', mainControllerUser);
mainRouter.get('/post', mainControllerPost);

module.exports = mainRouter;
