const bitwiseOperations = require('./src/bitwise-operators.test');
const promiseTests = require('./src/promise.test');
const ssh = require('./src/node-ssh.test');
const timersTest = require('./src/timers.test');
const loops = require('./src/loops.test');
const urls = require('./src/url.test');
const seven = require('./src/seven/seven.test');
const httpTest = require('./src/http.test');
const functions = require('./src/functions.test');
const basic = require('./src/basic.test');
const date = require('./src/date.test');
const mysqlTest = require('./src/mysql.test');
const giveawayTest = require('./src/giveaway.test');

(async () => {
    try {
        // bitwiseOperations();
        // await promiseTests.timeout();
        // ssh.test2();
        // await timersTest.test4();
        // await loops.test5();
        // urls.test();
        // await seven.monitorSeed();
        // await seven.clearLiveServers();
        // await seven.countDynamicServers();
        // timersTest.test9();
        // httpTest.test_1();
        // functions.test_2();
        await promiseTests.test7();
        // basic.test1();
        // date.test();
        // mysqlTest.test1();
        // await giveawayTest.giveaway();
    } catch (error) {
        console.error('Global Error: ', error);
    } finally {
        // process.exit();
    }
})();
