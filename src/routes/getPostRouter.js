const getPostRouter = require('express').Router();
const getPostController = require('../controllers/getPostController');

getPostRouter.get('/post', getPostController);

module.exports = getPostRouter;
