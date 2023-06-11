const { app, log } = require('./app');
const mainRouter = require('./routes/mainRouter');
const insertUserRouter = require('./routes/insertUserRouter');
const deleteUserRouter = require('./routes/deleteUserRouter');
const updateUserRouter = require('./routes/updateUserRouter');

const { connection } = require('./models/connectionDB');
const User = require('./models/userModel');

// const userModel = require('./models/userModel');
// const postModel = require('./models/postModel');
connection.sync();

app.use(mainRouter);
app.use(insertUserRouter);
app.use(deleteUserRouter);
app.use(updateUserRouter);
