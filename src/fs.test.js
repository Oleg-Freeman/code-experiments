const fs = require('fs');

function testFs() {
    const configExists = fs.existsSync('./config.json');

    console.log(configExists);
}

function testMkdir() {
    const dirExists = fs.existsSync('./test');

    if (!dirExists) {
        fs.mkdirSync('./test');
    }
    // fs.mkdirSync('./test');
}

function testReadDir() {
    const files = fs.readdirSync('./src/files/testReadDir');

    console.log(files);
    console.log(files.length);
}

// Test new Node v22 glob() function
async function testGlob() {
    const { glob } = require('node:fs/promises'); // list paths with matching pattern

    for await (const entry of glob('./src/files/testReadDir/*')) console.log(entry);
}

module.exports = {
    testFs,
    testMkdir,
    testReadDir,
    testGlob,
};
