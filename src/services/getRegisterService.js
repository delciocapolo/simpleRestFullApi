const { QueryTypes } = require('sequelize');
const { connection } = require('../models/connectionDB');

const getRegister = async tbl_name => {
	const users = await tbl_name.findAll();
	return users;
};
const getPost = async () => {
	const query =
		'select `user`.`username`,`user`.`nacionalidade`,`user`.`seguidores`,`post`.`texto` as post, `post`.`partilhas` from user join post on `post`.`identificacao` = `user`.`id`';
	const info = await connection.query(query, { type: QueryTypes.SELECT });
	return info;
};

module.exports = { getRegister, getPost };
