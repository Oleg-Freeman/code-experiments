// Divide a string into n equal pieces
function divideString() {
    const n = 3;
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const partLength = Math.floor(str.length / n);

    for (let i = 0; i < n; i++) {
        // start = 0, 0 + partLength
        // end = partLength
        console.log(str.substring(i * partLength, i + 1 === n ? str.length : (i + 1) * partLength));
    }
}

module.exports = {
    divideString,
};
