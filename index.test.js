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
        // loops.test1();
        // urls.test();
        // seven.monitorSeed();
        // timersTest.test4();
        // httpTest.test_1();
        // functions.test_2();
        promiseTests.test1();
    } catch (error) {
        console.error(error);
    } finally {
        // process.exit();
    }
})();
