const { app, log } = require('./app');
const mainRouter = require('./routes/mainRouter');
const insertUserRouter = require('./routes/insertUserRouter');

const { connection } = require('./models/connectionDB');

// const userModel = require('./models/userModel');
// const postModel = require('./models/postModel');
connection.sync();

app.use(mainRouter);
app.use(insertUserRouter);
