const deletePostRouter = require('express').Router();
const deletePostController = require('../controllers/deletePostController');

deletePostRouter.delete('/post', deletePostController);

module.exports = deletePostRouter;
