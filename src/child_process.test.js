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
    // Changes from Github
    const result = await exec('git status');
    console.log('Current command:', result);
}

// Test shell command execution using child_process
async function testShellCommand() {
    const result = await exec('cd /media/oleg/Storage/coding/node-js/test/test ; git status');

    console.log('result:', result);
}

module.exports = {
    stopDocker,
    testGit,
    testShellCommand,
};
