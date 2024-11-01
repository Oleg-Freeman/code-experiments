const util = require('util');
const config = require('../../config');
const mysql = require('mysql');
const fs = require('fs/promises');
const path = require('path');

let connection_mysql = null;
let connection_mysql_detstat = null;

function connect() {
    connection_mysql = mysql.createPool({
        connectionLimit: 10,
        host: config.db.host,
        port: 3306,
        user: config.db.user,
        password: config.db.password,
        database: 'seven',
    });
    connection_mysql_detstat = mysql.createPool({
        connectionLimit: 10,
        host: config.db.host,
        port: 3306,
        user: config.db.user,
        password: config.db.password,
        database: 'seven_source_statistic',
    });

    connection_mysql.on('enqueue', () => {
        console.error('connection_mysql_pool Waiting for available connection slot');
    });

    connection_mysql_detstat.on('enqueue', () => {
        console.error('connection_mysql_pool_detstat Waiting for available connection slot');
    });
}
connect();

const query = util.promisify(connection_mysql.query).bind(connection_mysql);

async function test() {
    let data = [];

    for (let i = 0; i < 10; i++) {
        data.push([182, 236, 20, 1719817955 + i, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    }

    let sql = `INSERT INTO statistic (
                dsp, ssp, protected_scans, unixtime, bids_dsp_cnt, bids_dsp_sum, bids_ssp_cnt, bids_ssp_sum, bids_under_floor_cnt, errors_cnt, 
                geoedge_blocks_cnt, impressions_cnt, impressions_dsp_sum, impressions_ssp_sum, pixalate_block, protected_block, requests_cnt, 
                scanner_blocks_cnt, timeouts_cnt, win_notifications_cnt
                ) VALUES ${data.map((d) => `(${d.join(',')})`).join(',')}`;

    // console.log(sql);

    const rows = await query(sql);
    console.log(rows);
}

async function monitorSeed() {
    // const query = util.promisify(connection_mysql.query).bind(connection_mysql);
    let data = await fs.readFile(path.join(__dirname, 'monitor_old_data.json'), 'utf8');
    const inserts = [];

    data = JSON.parse(data);

    data.data.forEach(({ time, server, req, bids, imp, revenue, spend }) => {
        const d = new Date();
        let [_, minute] = time.split(':');
        minute = minute[0] === '0' ? minute[1] : minute;
        minute = 30 - parseInt(minute);
        let minuteDiff = d.getMinutes() - minute;
        const hours = minuteDiff > 0 ? d.getHours() : d.getHours() - 1;
        minuteDiff = minuteDiff > 0 ? minuteDiff : 60 + minuteDiff;
        d.setHours(hours);
        d.setMinutes(minuteDiff);

        // console.log(d.toISOString());

        inserts.push(`('${server}', ${Math.round(d.getTime() / 1000)}, ${req}, ${bids}, ${imp}, ${revenue}, ${spend})`);
    });

    console.log('Insert number:', inserts.length);

    await query(`
        insert into live_servers (server, unixtime, requests_cnt, bids_dsp_cnt, impressions_cnt, impressions_dsp_sum, impressions_ssp_sum)
        values ${inserts.join(',')};
    `);
    // console.log('data:', data);
}

async function clearLiveServers() {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    // console.log(date.getTime());
    const sql = `DELETE FROM live_servers WHERE unixtime < ${Math.round(date.getTime() / 1000)};`;
    // const sql = `SELECT * FROM live_servers WHERE unixtime < ${Math.round(date.getTime() / 1000)};`;
    const rows = await query(sql);
    console.log(rows);
}

module.exports = {
    test,
    monitorSeed,
    clearLiveServers,
};
