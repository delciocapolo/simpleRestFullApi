const insertPostRouter = require('express').Router();
const insertPostController = require('../controllers/insertPostController');
const validateValuesMiddleware = require('../middlewares/validateValuesMiddleware');

insertPostRouter.post('/post', validateValuesMiddleware, insertPostController);

module.exports = insertPostRouter;
