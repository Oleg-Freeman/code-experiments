const mysql = require('mysql');
const config = require('../config');
const { sleep } = require('../utils');

let connection = null;

function connect() {
    connection = mysql.createPool({
        connectionLimit: 15,
        host: config.db.host,
        port: config.db.port,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
    });

    connection.on('enqueue', () => {
        console.error('MySQL: Waiting for available connection slot');
    });
}

async function testPromisifyMysql() {
    connect();

    const result = await new Promise((resolve, reject) => {
        connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }

            console.log('Callback result', results);

            resolve(results);
        });
    });

    await sleep(1000);

    console.log('Promisified result', result);
}

module.exports = {
    testPromisifyMysql,
};
