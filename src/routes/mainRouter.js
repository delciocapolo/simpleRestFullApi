const mainRouter = require('express').Router();
const mainController = require('../controllers/mainController');

mainRouter.get('/', mainController);

module.exports = mainRouter;
