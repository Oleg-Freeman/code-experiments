const { sleep } = require('../utils');

// TODO: Will it work or not?
function test() {
    setTimeout(async () => {
        console.log('Timeout 1');
        await sleep(1);
        console.log('Timeout 2');
    }, 1000);
}

function test2() {
    const res = [];

    // const interval = setInterval(() => {
    //     console.log('Res:', res);
    //     if (res.length === 4) {
    //         clearInterval(interval);
    //     }
    // }, 1000);

    [1, 2, 3, 4].forEach((point, i) => {
        setTimeout(() => {
            return new Promise((resolve) => {
                console.log('Point:', point);
                res.push(point);
                console.log('Res:', res);
                resolve();
            });
        }, 1000 * i);
    });

    // Will not work due to async code
    // console.log('Res:', res);
}

function test3() {
    const startTimer = Date.now();

    function run() {
        console.log('Timeout 2');

        if (Date.now() - startTimer > 5000) {
            console.log('Timeout Finished');
            console.log('Time:', Date.now() - startTimer);
        } else {
            setTimeout(run, 1000);
        }
    }

    setTimeout(() => {
        console.log('Timeout 1');
        run();
    }, 1000);
}

// closure test
function test4() {
    let counter = 0;

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log('Counter:', ++counter);
        }, 1000 * i);
    }
}

// Will interval continue if paused?
function test5() {
    let counter = 0;

    const interval = setInterval(async () => {
        if (counter === 1) {
            await sleep(3 * 1000);
        }
        console.log('Counter:', ++counter);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Interval cleared');
    }, 5000);
}

function test6() {
    let loading = false;

    const interval = setInterval(async () => {
        if (loading) {
            return console.log('Loading');
        }
        loading = true;
        await sleep(5 * 1000);
        console.log('Finished');
        loading = false;
    }, 1000);

    setTimeout(() => {
        loading = false;
        clearInterval(interval);
        console.log('Interval cleared');
    }, 10 * 1000);
}

// test timeout cancel
function test7() {
    const timeout = setTimeout(() => {
        console.log('Timeout');
    }, 1000);

    setTimeout(() => {
        clearTimeout(timeout);
        console.log('Timeout cleared');
    }, 500);
}

// test timeout cancel
async function test8() {
    const queue = [1, 2, 3, 4, 5, 6, 7];
    let count = 0,
        timeout;

    while (queue.length) {
        if (count >= 3) {
            console.log('Waiting...');
            await sleep(5 * 1000); // Will not work because of async code. Need a Promise cancel here
            continue;
        }
        ++count;
        const item = queue.shift();
        console.log('Item:', item);
        sleep(6 * 1000)
            .then(() => {
                --count;
            })
            .catch(console.error)
            .finally(() => {
                console.log('Finished');
                clearTimeout(timeout);
            });
    }
}

// test setInterval with nested setInterval inside required file
function test9() {
    const interval = setInterval(() => {
        console.log('Require a nested function');
        require('./files/nestedIntervalTest')();
    }, 10000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('Interval cleared');
    }, 60000 * 3);
}

// Test if Node.js loop is blocked
function test10() {
    setInterval(() => {
        const last = process.hrtime();
        setImmediate(() => {
            const diff = process.hrtime(last);
            console.log(`setImmediate callback executed after ${diff[0]}s ${diff[1] / 1e6}ms`);
        });
    }, 500);
}

// Test already processed timeout cancel
function test11() {
    const timeouts = [];
    for (let i = 0; i < 10; i++) {
        const timeout = setTimeout(() => {
            console.log('Timeout:', i);
        }, 1000 * i);
        timeouts.push(timeout);
    }

    setTimeout(() => {
        timeouts.forEach((timeout, i) => {
            clearTimeout(timeout);
            console.log('Timeout cleared:', i);
        });
    }, 1000 * 5);
}

// Test delayed timeout cancel
function test12() {
    const timeout = setTimeout(() => {
        console.log('Timeout :', timeout);
    }, 1000);

    setTimeout(() => {
        clearTimeout(timeout);
        console.log('Timeout cleared');
    }, 1000 * 3);
    setTimeout(() => {
        clearTimeout(timeout);
        console.log('The Timeout cleared again');
    }, 1000 * 5);
}

module.exports = {
    test,
    test2,
    test3,
    test4,
    test5,
    test6,
    test7,
    test8,
    test9,
    test10,
    test11,
    test12,
};
