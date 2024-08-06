async function promiseArray() {
    let result = new Promise((resolve) => resolve([1, 2, 3]));

    console.log('Promise result:', result);
    console.log('Resolved result:', await result);

    result = new Promise((resolve) => resolve([4, 5, 6].map(async () => true)));

    console.log('Promise result:', result);
    console.log('Resolved result:', await result);
}

module.exports = {
    promiseArray,
};
