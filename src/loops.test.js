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

// test while loop with timers
async function test2() {
    const queue = [1, 2, 3, 4, 5];

    const interval = setInterval(() => {
        queue.push(queue[queue.length - 1] + 1);
        console.log('Queue:', queue);

        if (queue.length >= 10) {
            clearInterval(interval);
        }
    }, 1000);

    while (queue.length) {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        queue.shift();
    }
}

// test while loop
async function test3() {
    const queue = [1, 2, 3, 4, 5];

    while (queue.length) {
        console.log('Queue:', queue);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        queue.shift();
    }
}

module.exports = {
    test1,
    test2,
    test3,
};
