const bitwiseOperations = require('./src/bitwise-operators.test');
const promiseTests = require('./src/promise.test');
const ssh = require('./src/node-ssh.test');
const timersTest = require('./src/timers.test');
const loops = require('./src/loops.test');
const urls = require('./src/url.test');
const seven = require('./src/seven/seven.test');
const httpTest = require('./src/http.test');
const functions = require('./src/functions.test');

(async () => {
    try {
        // bitwiseOperations();
        // await promiseTests.timeout();
        // ssh.test2();
        // await timersTest.test();
        // await loops.test3();
        // urls.test();
        // await seven.monitorSeed();
        // timersTest.test6();
        // httpTest.test_1();
        // functions.test_2();
        await promiseTests.test4();
    } catch (error) {
        console.error(error);
    } finally {
        // process.exit();
    }
})();
