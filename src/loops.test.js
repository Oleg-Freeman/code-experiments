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

// for loop inside an interval
async function test4() {
    let count = 0;
    const queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const interval = setInterval(async () => {
        if (count < 3) {
            for (let i = 0; i < 3; i++) {
                ++count;
                console.log('Queue:', queue[i]);
                await new Promise((resolve) => setTimeout(resolve, 3000));
                queue.shift();
                --count;
            }
        }
        if (queue.length === 0) {
            clearInterval(interval);
            console.log('Done');
        }
    }, 1000);
}

// Will "return" command break the for loop
async function test5() {
    const queue = [1, 2, 3, 4, 5];

    for (const item of queue) {
        console.log('Item:', item);
        if (item === 3) {
            return;
        }
    }}

module.exports = {
    test1,
    test2,
    test3,
    test4,
    test5
};
