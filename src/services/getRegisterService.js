const getRegister = async tbl_name => {
	const users = await tbl_name.findAll();
	return users;
};

module.exports = { getRegister };
