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

// Iterate over a Set
function test2() {
    const mySet = new Set([3, 4, 5, 6, 7]);

    // Iterate over Set using for..of
    for (const value of mySet) {
        console.log(value);
    }

    // Iterate over Set using forEach
    mySet.forEach((value, i) => {
        // No index in Set, i is same as value
        console.log(i, value);
    });
}

module.exports = {
    test1,
    test2,
};
