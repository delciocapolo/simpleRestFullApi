const { connection, config } = require('./connectionDB');
const { DataTypes } = require('sequelize');
const localization = require('../services/localizationService');

const User = connection.define(
	'user',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		userName: {
			type: DataTypes.STRING(350),
			allowNull: false,
			unique: true
		},
		sexo: {
			type: DataTypes.ENUM('S', 'M'),
			defaultValue: 'M'
		},
		nacionalidade: {
			type: DataTypes.STRING(900),
			defaultValue: localization()
		},
		seguidores: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		}
	},
	config
);

module.exports = User;
