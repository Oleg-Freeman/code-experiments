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
const mysql2Test = require('./src/mysql2.test');
const giveawayTest = require('./src/giveaway.test');
const childProcessTest = require('./src/child_process.test');
const arrayTest = require('./src/array.test');
const momentTest = require('./src/moment.test');
const nodeUtilTest = require('./src/util.test');
const fsTest = require('./src/fs.test');
const myUtil = require('./utils');

(async () => {
    try {
        // bitwiseOperations();
        // await promiseTests.timeout();
        // await promiseTests.testPromisify();
        // ssh.test2();
        // await timersTest.test4();
        // await loops.test5();
        // urls.test();
        // await seven.monitorSeed();
        // await seven.admListSeed();
        // await seven.clearLiveServers();
        // await seven.countDynamicServers();
        // await seven.bundlesStatsSeed();
        // await seven.clearBundlesStats();
        await seven.addAverageRequests();
        // timersTest.test9();
        // httpTest.test_1();
        // functions.test_2();
        // basic.test1();
        // date.test();
        // date.test2();
        // await mysqlTest.testPromisifyMysql();
        // mysql2Test.test1();
        // await giveawayTest.giveaway();
        // await childProcessTest.testGit();
        // arrayTest.test1();
        // momentTest.test3();
        // nodeUtilTest.test1();
        // await fsTest.testGlob();
        // await fsTest.testReadDir();
    } catch (error) {
        console.error('Global Error: ', error);
    } finally {
        // process.exit();
    }
})();
