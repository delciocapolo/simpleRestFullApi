const { app } = require('./app');

// ROTA DE USUARIOS
const mainRouter = require('./routes/mainRouter');
const insertUserRouter = require('./routes/insertUserRouter');
const deleteUserRouter = require('./routes/deleteUserRouter');
const updateUserRouter = require('./routes/updateUserRouter');

// ROTA DE POSTS
const getPostRouter = require('./routes/getPostRouter');
const insertPostRouter = require('./routes/insertPostRouter');
const deletePostRouter = require('./routes/deletePostRouter');
const updatePostRouter = require('./routes/updatePostRouter');

// CONFIGURACOES
const { connection } = require('./models/connectionDB');
// const userModel = require('./models/userModel');
// const postModel = require('./models/postModel');
connection.sync();

// USO DAS ROTAS
//  ROTAS USER
app.use(mainRouter);
app.use(insertUserRouter);
app.use(deleteUserRouter);
app.use(updateUserRouter);
//  ROTAS POST
app.use(getPostRouter);
app.use(insertPostRouter);
app.use(deletePostRouter);
app.use(updatePostRouter);
