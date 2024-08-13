function _test_command() {
    const blockCommand = ['rm', 'chmod', 'chown', 'dd', 'mkfs'];
    const commands = ['ls', 'rm', 'cat', 'dd'];

    for (const command of commands) {
        console.log('Testing command:', command);
        if (blockCommand.includes(command)) {
            return command;
        }
    }
}

function test1() {
    const blockedCommand = _test_command();

    console.log('Blocked command:', blockedCommand);
}

module.exports = {
    test1,
};
