const { parse } = require('csv');
const fs = require('fs');
const path = require('path');

const processFile = async () => {
    const records = [];
    const parser = fs.createReadStream(path.join(__dirname, 'report.csv')).pipe(parse({}));
    for await (const record of parser) {
        // Work with each record
        records.push(record);
    }
    return records;
};

async function run() {
    const data = await processFile();

    console.log(data);
}

run();
