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
    const files = fs.readdirSync('./test/test');

    console.log(files);
    console.log(files.length);
}
