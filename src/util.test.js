const util = require('util');

// Test inspect function with a complex object
function test1() {
    const obj = {
        name: 'Test Object',
        details: {
            age: 30,
            hobbies: ['reading', 'gaming', 'coding'],
            address: {
                street: '123 Main St',
                city: 'Anytown',
                country: 'USA',
            },
        },
        createdAt: new Date(),
        isActive: true,
    };

    console.log('Node inspect()');
    console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));
    console.log('JSON.stringify()');
    console.log(JSON.stringify(obj, null, 2));
    console.log('console.dir()');
    console.dir(obj, { depth: null, colors: true });
}

module.exports = {
    test1,
};
