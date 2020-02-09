const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	env: {
		VERBIX_TOKEN: process.env.VERBIX_TOKEN,
	},
};
