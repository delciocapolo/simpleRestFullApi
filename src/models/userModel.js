const { connection, config } = require('./connectionDB');
const { DataTypes } = require('sequelize');
const POST = require('./postModel');

const USER = connection.define(
	'user',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(350),
			allowNull: false,
			unique: true
		},
		sexo: {
			type: DataTypes.ENUM('F', 'M'),
			defaultValue: 'M'
		},
		nacionalidade: {
			type: DataTypes.STRING(500),
			defaultValue: 'Angola'
		},
		seguidores: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	config
);
USER.hasOne(POST, { foreignKey: 'identificacao' });
module.exports = USER;
