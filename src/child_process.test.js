const childProcess = require('child_process');
const { promisify } = require('util');

const exec = promisify(childProcess.exec);

function stopDocker(name) {
    return new Promise((resolve, reject) => {
        childProcess.exec(`docker stop ${name}`, (err, stdout, stderr) => {
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

async function testGit() {
    const result = await exec('git status');
    console.log('Current command:', result);
}

module.exports = {
    stopDocker,
    testGit,
};
