const mainRouter = require('express').Router();
const mainController = require('../controllers/mainController');

mainRouter.get('/user', mainController);

module.exports = mainRouter;
