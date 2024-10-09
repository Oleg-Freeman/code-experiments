const http = require('http');

const PORT = 5000;

function test_1() {
    console.log('test_1: starting server');
    http.createServer((req, res) => {
        console.log('METHOD:', req.method);
        console.log('PATH:', req.url);
        console.log('HEADERS:', req.headers);
        console.log('ORIGIN:', req.host);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK\n');
    }).listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
}

function test_2() {
    // fetch data from the https://jsonplaceholder.typicode.com/todos/1 URL
    const https = require('https');
    const options = {
        host: 'jsonplaceholder.typicode.com',
        path: '/todos/1',
        method: 'GET',
    };
    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}

module.exports = {
    test_1,
    test_2,
};
