const fs = require('fs/promises');

const giveaway = async () => {
    const file = await fs.readFile('/media/oleg/Storage/coding/node-js/test/test/src/files/giveaway.txt', 'utf8');

    let updatedFile = file.split('\n');
    const newFile = [];
    // .map((line) => {
    //     console.log(line);
    //
    //     if (line.includes('Reply')) return '';
    //     if (line.includes('profile picture')) return '';
    //     if (line.includes('1 like')) return '';
    //
    //     return line;
    // })
    // .filter((line) => {
    //     return !line.includes('21h');
    // });

    for (let i = 0; i < updatedFile.length; i++) {
        const line = updatedFile[i];
        const nextLine = updatedFile[i + 1];

        if (line !== '' && nextLine !== '') {
            console.log(`${line}=>=>${nextLine}`);
            newFile.push(`${line}=>=>${nextLine}`);
        }
    }

    await fs.writeFile('/media/oleg/Storage/coding/node-js/test/test/src/files/giveaway.txt', newFile.join('\n'));

    // console.log(file);
};

module.exports = {
    giveaway,
};
