const { sleep } = require('../utils');


// TODO: Will it work or not?
function test() {
    setTimeout(async () => {
        console.log('Timeout 1');
        await sleep(1);
        console.log('Timeout 2');
    }, 1000);
}

module.exports = {
    test,
};
