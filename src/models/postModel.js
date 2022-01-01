const { connection, config } = require('./connectionDB');
const { DataTypes } = require('sequelize');

const POST = connection.define(
	'post',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		texto: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		identificacao: {
			type: DataTypes.UUID,
			defaultValue: '0'
		},
		partilhas: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	},
	config
);

module.exports = POST;
