const geoip = require('fast-geoip');
const log = require('debug')('api:service');

const localization = async ipLocation => {
	const { country } = await geoip.lookup(ipLocation);
	return country;
};

module.exports = localization;
