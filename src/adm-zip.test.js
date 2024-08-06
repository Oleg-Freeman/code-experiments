const AdmZip = require('adm-zip');
const path = require('path');

async function run() {
    const content = 'test content';
    const zip = new AdmZip();

    zip.addFile('/test_folder/test_folder.txt', Buffer.from(content, 'utf8'), 'entry comment goes here');
    zip.addFile('/test_folder2/test_folder.txt', Buffer.from(content, 'utf8'), 'entry comment goes here');
    await zip.writeZipPromise(path.join(__dirname, 'test2.zip'), {});
}

run();
