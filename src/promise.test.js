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

module.exports = {
    promiseArray,
    promiseArray2,
    timeout,
    timeout2,
    test1,
    test2,
};
