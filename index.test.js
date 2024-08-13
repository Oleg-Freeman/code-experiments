const bitwiseOperations = require('./src/bitwise-operators.test');
const promiseTests = require('./src/promise.test');
const ssh = require('./src/node-ssh.test');
const timersTest = require('./src/timers.test');
const loops = require('./src/loops.test');

(async () => {
    try {
        // bitwiseOperations();
        // await promiseTests.timeout();
        // ssh.test2();
        // await timersTest.test();
        loops.test1();
    } catch (error) {
        console.error(error);
    }
})();
