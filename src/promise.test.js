const { sleep } = require('../utils');

async function promiseArray() {
    let result = new Promise((resolve) => resolve([1, 2, 3]));

    console.log('Promise result:', result);
    console.log('Resolved result:', await result);

    result = new Promise((resolve) => resolve([4, 5, 6].map(async () => true)));

    console.log('Promise result:', result);
    console.log('Resolved result:', await result);

    result = await Promise.all([1, 2, 3].map(async () => true));

    console.log('Promise result:', result);
}

async function promiseArray2() {
    const obj = {};
    const result = await Promise.all(
        [1, 2, 3].map(async (i) => {
            obj[i] = i;
            return i;
        })
    );

    console.log('Promise result:', result);
    console.log('Object:', obj);
}

async function timeout() {
    // prettier-ignore
    const arr = [1, 2, 3], obj = {};
    // prettier-ignore
    const promises = arr.map((item, i) => {
        return new Promise((resolve) => setTimeout(async () => {
            console.log('Timeout:', item);
            await sleep(1)
            obj[item] = item;
            resolve();
        }, 1 * i, obj, resolve));
    });

    await Promise.all(promises);

    console.log('Object:', obj);
}

async function timeout2() {
    // prettier-ignore
    const arr = [1, 2, 3], obj = {};
    // prettier-ignore
    const promises = arr.map((item, i) => {
        return new Promise((resolve) => setTimeout(() => {
            console.log('Timeout:', item);
            return sleep(1).then(() => obj[item] = item).then(() => resolve());
        }, 1 * i, obj, resolve));
    });

    await Promise.all(promises);

    console.log('Object:', obj);
}

async function test1() {
    async function someFunc() {
        await new Promise((resolve, reject) => setTimeout(() => reject('Oups'), 1000));
    }

    try {
        someFunc(); // Will not work, need to await or use .catch()
        console.log('Done');
    } catch (error) {
        console.error(error);
    }
}

// test Promise.allSettled
async function test2() {
    const result = await Promise.allSettled(
        [1, 2, 3].map(async (i) => {
            if (i === 2) {
                throw new Error('Oups!');
            }

            return i;
        })
    );

    result.forEach((item) => {
        if (item.status === 'fulfilled') {
            console.log('Fulfilled:', item.value);
        } else {
            console.log('Rejected:', item.reason.message);
        }
    });
}

// test error handling
function test3() {
    async function someFunc() {
        await new Promise((resolve, reject) => setTimeout(() => reject('Oups'), 1000));
    }

    someFunc().catch((error) => console.error(error));
    // someFunc();
    console.log('Done');
}

// test Promise.race
async function test4() {
    let count = 0;

    Promise.race([
        new Promise((resolve, reject) =>
            setTimeout(() => {
                console.log('Promise 1');
                ++count;
                resolve(1);
            }, 1000)
        ),
        new Promise((resolve, reject) =>
            setTimeout(() => {
                console.log('Promise 2');
                ++count;
                reject(new Error('Упс!'));
            }, 2000)
        ),
        new Promise((resolve, reject) =>
            setTimeout(() => {
                console.log('Promise 3');
                ++count;
                resolve(3);
            }, 3000)
        ),
    ])
        .then(console.log)
        .catch(console.error)
        .finally(() => console.log('Count:', count)); // will not work
}

// test promise chaining
async function test5() {
    const res = await new Promise((resolve, reject) => resolve('0'))
        .then((result) => {
            console.log('Result:', result);
            return result + '1';
        })
        .catch((error) => {
            console.error('Error:', error);
            return 'e';
        })
        .then((result) => {
            console.log('Result:', result);
            return result + '3';
        })
        .finally(() => {
            console.log('Finally');
            return 55;
        })
        .then((result) => {
            console.log('Result:', result);
            return result + 1;
        });

    console.log('-----------------');
    console.log('Result:', res);
}

// Test Promise.resolve
function test6() {
    const res = Promise.resolve('Hello');

    console.log('Result:', res);
    res.then(console.log);
}

module.exports = {
    promiseArray,
    promiseArray2,
    timeout,
    timeout2,
    test1,
    test2,
    test3,
    test4,
    test5,
    test6,
};
