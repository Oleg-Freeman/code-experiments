// Test destructuring inside for .. of loop
function test1() {
    console.log('Test destructuring inside for .. of loop');
    let arr = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 },
    ];

    for (const { name, age } of arr) {
        console.log(`Name: ${name}, Age: ${age}`);
    }
    console.log();
    console.log('Test destructuring of empty array');
    arr = [];
    for (const { name, age } of arr) {
        console.log(`Name: ${name}, Age: ${age}`);
    }

    console.log();
    console.log('Test destructuring of array with empty data');
    arr = [{}];
    for (const { name, age } of arr) {
        console.log(`Name: ${name}, Age: ${age}`);
    }
}

module.exports = {
    test1,
};
