const mysql = require('mysql2');
const config = require('../config');

let connection = null;

function connect() {
    connection = mysql.createConnection({
        user: config.db.user,
        password: config.db.password,
        database: config.db.database,
        host: 'localhost',
        port: 3306,
        namedPlaceholders: true,
    });
}

function test1() {
    connect();

    connection.query('SELECT * FROM partners WHERE id = :id', { id: 4 }, (error, results) => {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
        }

        connection.end();
    });
}

module.exports = {
    test1,
};
