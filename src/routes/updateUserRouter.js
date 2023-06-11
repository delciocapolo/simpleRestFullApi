const updateUserRouter = require('express').Router();
const updateUserController = require('../controllers/updateUserController');

updateUserRouter.put('/user/:id', updateUserController);

module.exports = updateUserRouter;
