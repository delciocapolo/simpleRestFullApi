const insertUserRouter = require('express').Router();
const insertUserController = require('../controllers/insertUserController');

insertUserRouter.post('/user', insertUserController);

module.exports = insertUserRouter;
