const express = require('express');
const pg = require('pg');

// require('dotenv').config();

const app = express();
// const client = new pg.Client({
// TODO: config
// });
const pool = new pg.Pool({
    // TODO: config
});

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    // await client.connect()
    // const res = await client.query('SELECT NOW()')
    const res = await pool.query('SELECT NOW()');

    console.log(res.rows[0]);

    console.log(`Example app listening at http://localhost:${port}`);
});
