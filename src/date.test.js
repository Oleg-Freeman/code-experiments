function test() {
    console.log(Date.now());
    console.log(new Date().getTime());
}

function test2() {
    const d = new Date('2025-10-22');
    let result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);

    d.setDate(9);
    d.setMonth(8);
    result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);

    d.setDate(d.getDate() - 30);
    result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);
}

// Test timestamp in seconds
function test3() {
    const secondsInDay = 86400;
    const endTime = Math.floor(Date.now() / secondsInDay / 1000) * secondsInDay;
    const startTime = endTime - 7 * secondsInDay;
    console.log('Start Time (s): ', startTime);
    console.log('End Time (s): ', endTime);
    console.log('Start Date: ', new Date(startTime * 1000).toISOString());
    console.log('End Date: ', new Date(endTime * 1000).toISOString());
}

// compare timestamp in seconds
function test4() {
    const d = new Date();
    console.log('Unix Time (ms): ', d.getTime());
    console.log('Unix Time (s): ', Math.floor(d.getTime() / 1000));
    console.log('UTC seconds:', d.getUTCSeconds());
}

// test seconds in a day
function test5() {
    const secondsInDay = 86400;
    const timestampInSeconds = Math.floor(Date.now() / 1000);
    // const timestampInSeconds = 1709201234;
    const dayTimestamp = Math.floor(timestampInSeconds / secondsInDay);
    console.log('Timestamp : ', Date.now());
    console.log('timestampInSeconds : ', timestampInSeconds);
    console.log('dayTimestamp : ', dayTimestamp);
    console.log('timestampInSeconds : ', dayTimestamp * secondsInDay);
}

// Date arithmetic
function test6() {
    const d1 = new Date('2024-06-10T12:00:01Z');
    const d2 = new Date('2024-06-10T12:00:00Z');

    console.log('Subtract d1 - d2 :', d1 - d2);
    console.log('Subtract d2 - d1 :', d2 - d1);
    console.log('Subtract d1 - d1 :', d1 - d1);
    console.log('Add d1 + d2 :', d1 + d2); // Will not work as expected
}

module.exports = {
    test,
    test2,
    test3,
    test4,
    test5,
    test6,
};
