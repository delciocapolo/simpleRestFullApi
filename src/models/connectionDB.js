const { Sequelize } = require('sequelize');
const log = require('debug')('api:database');
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
	.then(_res => log('CONNECTION CREATED IN SUCESS'))
	.catch(err => log(`CONNECTION BAD: ${err}`));

module.exports = { connection, config, log };
