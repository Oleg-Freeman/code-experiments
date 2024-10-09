function test_1() {
    let counter = 0;

    function increment(c) {
        ++c;
        console.log('Counter after increment:', c);
    }

    for (let i = 0; i < 10; i++) {
        increment(counter);
    }
}

function test_2() {
    let counter = { value: 0 };

    function increment(c) {
        ++c.value;
        console.log('Counter after increment:', c);
    }

    for (let i = 0; i < 10; i++) {
        increment(counter);
    }
}

module.exports = {
    test_1,
    test_2,
};
