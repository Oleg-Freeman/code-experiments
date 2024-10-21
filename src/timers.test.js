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

module.exports = {
    test,
    test2,
    test3,
    test4,
    test5,
    test6,
};
