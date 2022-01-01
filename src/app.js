const express = require('express');
const { logServer } = require('./global/log');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () =>
	logServer(`Server is running at http://127.0.0.1:${PORT}`)
);

module.exports = { app };
