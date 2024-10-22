const { exec } = require('child_process');

function stopDocker(name) {
    return new Promise((resolve, reject) => {
        exec(`docker stop ${name}`, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            console.log(stdout);
            resolve();
        });
    });
}

module.exports = {
    stopDocker,
};
