const deletePostRouter = require('express').Router();
const deletePostController = require('../controllers/deletePostController');

deletePostRouter.delete('/post/:id', deletePostController);

module.exports = deletePostRouter;
