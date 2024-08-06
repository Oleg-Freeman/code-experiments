const http = require('http');

const server = http.createServer((req, res) => {
    let body = [];

    console.log('new request');
    console.log(`//${req.headers.host}${req.url}`);

    req.on('data', (chunk) => {
        body.push(chunk);
    });
    req.on('end', () => {
        body = Buffer.concat(body).toString('utf8');

        console.log(body);

        res.write(JSON.stringify({ ok: true }));
        res.end();
    });
    req.on('error', (error) => {
        console.error(error);
    });
});

server.listen(5000);
console.log('ready');
