const { Sequelize } = require('sequelize');
const { logDatabase } = require('../global/log');
require('dotenv').config();

const config = {
	timestamps: false,
	freezeTableName: true
};

const connection = new Sequelize({
	username: process.env.MYSQL_USER,
	host: process.env.MYSQL_HOST,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DB,
	dialect: process.env.MYSQL_DIALECT
});

connection
	.authenticate()
	.then(_res => logDatabase('CONNECTION CREATED IN SUCESS'))
	.catch(err => logDatabase(`CONNECTION BAD: ${err}`));

module.exports = { connection, config };
