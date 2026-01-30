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

// Test creating 2 child processes and combining their output
async function testMultipleChildProcesses() {
    return new Promise((resolve, reject) => {
        // Create first child process
        const child1 = childProcess.spawn('echo', ['Hello from child process 1']);
        // Create second child process  
        const child2 = childProcess.spawn('echo', ['Hello from child process 2']);

        let output1 = '';
        let output2 = '';
        let processesCompleted = 0;

        // Collect output from first child
        child1.stdout.on('data', (data) => {
            output1 += data.toString();
        });

        // Collect output from second child
        child2.stdout.on('data', (data) => {
            output2 += data.toString();
        });

        // Handle completion of first child
        child1.on('close', (code) => {
            console.log(`Child process 1 exited with code ${code}`);
            processesCompleted++;
            if (processesCompleted === 2) {
                // Both processes completed, combine and print output
                const combinedOutput = `Combined output:\n${output1}${output2}`;
                console.log(combinedOutput);
                resolve(combinedOutput);
            }
        });

        // Handle completion of second child
        child2.on('close', (code) => {
            console.log(`Child process 2 exited with code ${code}`);
            processesCompleted++;
            if (processesCompleted === 2) {
                // Both processes completed, combine and print output
                const combinedOutput = `Combined output:\n${output1}${output2}`;
                console.log(combinedOutput);
                resolve(combinedOutput);
            }
        });

        // Handle errors
        child1.on('error', reject);
        child2.on('error', reject);
    });
}

module.exports = {
    stopDocker,
    testGit,
    testShellCommand,
    testMultipleChildProcesses,
};
