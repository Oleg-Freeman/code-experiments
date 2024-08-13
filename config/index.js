const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    ssh: {
        privateKeyPath: process.env.PRIVATE_KEY_PATH,
        ip: process.env.SERVER_IP,
        password: process.env.PASSWORD,
    },
};
