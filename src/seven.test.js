const util = require('util');
const config = require('../config');

let connection_mysql = null;
let connection_mysql_detstat = null;
let query = null;
function connect() {
    connection_mysql = mysql.createPool({
        connectionLimit: Config.mysql.connectionLimit,
        host: Config.mysql.host,
        port: Config.mysql.port,
        user: Config.mysql.user,
        password: Config.mysql.password,
        database: Config.mysql.database,
    });
    connection_mysql_detstat = mysql.createPool({
        connectionLimit: Config.mysql.connectionLimit,
        host: Config.mysql.host,
        port: Config.mysql.port,
        user: Config.mysql.user,
        password: Config.mysql.password,
        database: Config.mysql.database_detstat,
    });

    connection_mysql.on('enqueue', () => {
        console.error('connection_mysql_pool Waiting for available connection slot');
    });

    connection_mysql_detstat.on('enqueue', () => {
        console.error('connection_mysql_pool_detstat Waiting for available connection slot');
    });
}
connect();

async function test() {
    const query = util.promisify(connection_mysql.query).bind(connection_mysql);
    let data = [];

    for (let i = 0; i < 10; i++) {
        data.push([182, 236, randomIntFromInterval(100, 800), 1719817955 + i, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
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
