const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    ssh: {
        privateKeyPath: process.env.PRIVATE_KEY_PATH,
        ip: process.env.SERVER_IP,
        password: process.env.PASSWORD,
    },
    db: {
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        databaseStats: process.env.DB_NAME_STATS,
    },
    telegram: {
        apiKey: process.env.TELEGRAM_API_KEY,
        chatId: process.env.TELEGRAM_CHAT_ID,
    },
};
