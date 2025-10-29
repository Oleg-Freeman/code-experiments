function sleep(ms) {
    console.log('Sleeping for:', ms);
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomByRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    sleep,
    randomByRange,
};
