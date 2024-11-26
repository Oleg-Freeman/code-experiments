function test() {
    const id = Date.now();
    setInterval(() => console.log(`${id} NESTED INTERVAL`), 5000);
}

module.exports = test;
