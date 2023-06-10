const User = require('../models/userModel');

const Users = async () => {
	const users = await User.findAll();
	return users;
};

module.exports = { Users };
