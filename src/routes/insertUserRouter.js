const insertUserRouter = require('express').Router();
const insertUserController = require('../controllers/insertUserController');
const validateValuesMiddleware = require('../middlewares/validateValuesMiddleware');

insertUserRouter.post('/user', validateValuesMiddleware, insertUserController);

module.exports = insertUserRouter;
