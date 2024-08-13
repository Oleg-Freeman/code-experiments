const config = require('../config');
const { NodeSSH } = require('node-ssh');

function connect(ssh) {
    return ssh.connect({
        host: config.ssh.ip,
        username: 'root',
        password: config.ssh.password,
        // privateKey: config.ssh.privateKeyPath,
    });
}

async function test() {
    console.log('config:', config);
    const ssh = new NodeSSH();

    try {
        await connect(ssh);
        const result = await ssh.execCommand('ls -la');
        console.log('Result:', result);
        await ssh.execCommand('exit');
        console.log('Connection closed');
        return true;
    } catch (error) {
        console.error(error);
    }
}

async function test2() {
    console.log('config:', config);

    try {
        await new Promise((resolve) => {
            const ssh = new NodeSSH();
            connect(ssh).then(() => {
                ssh.execCommand('ls -la').then((result) => {
                    console.log('Result:', result);
                    ssh.execCommand('exit').then(() => {
                        console.log('Connection closed');
                        resolve(true);
                    });
                });
            });
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    test,
    test2,
};
