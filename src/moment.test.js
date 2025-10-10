const moment = require('moment');

// Get hours from start of the day till now
function test1() {
    const hours = moment().startOf('day').fromNow();

    console.log(hours);
}

// Test diff with the negative value
function test2() {
    const a = moment('2023-10-01 10:00:00');
    const b = moment('2023-10-01 12:00:00');
    const diff = a.diff(b, 'hours');

    console.log(diff); // Output: -2
    console.log(Math.abs(diff));
}

//Test set previous month day (February) from current month (March)
function test3() {
    let currentDate = moment('2024-03-31');
    let previousMonthDate = currentDate.subtract(1, 'month');

    console.log(previousMonthDate.format('YYYY-MM-DD')); // Output: 2024-02-29

    /* ************* */

    currentDate = moment('2024-03-30');
    previousMonthDate = currentDate.subtract(1, 'month');

    console.log(previousMonthDate.format('YYYY-MM-DD')); // Output: 2024-02-29

    /* ************* */

    currentDate = moment('2024-03-29');
    previousMonthDate = currentDate.subtract(1, 'month');

    console.log(previousMonthDate.format('YYYY-MM-DD')); // Output: 2024-02-29
}

module.exports = {
    test1,
    test2,
    test3,
};
