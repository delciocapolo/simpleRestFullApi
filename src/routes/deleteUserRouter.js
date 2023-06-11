const deleteUserRouter = require('express').Router();
const deleteUserController = require('../controllers/deleteUserController');

deleteUserRouter.delete('/user/:id', deleteUserController);

module.exports = deleteUserRouter;
