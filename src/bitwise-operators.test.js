function decodeBase64ToDecimal1(str) {
    const buffer = Buffer.alloc(1, str, 'base64');

    return buffer[0] >> 2;
}

// TODO: take only first n fom str
function decodeBase64ToDecimal2(str, n) {
    const buffer = Buffer.from(str, 'base64');

    let binaryString = ''; // TODO: will be very big for large str
    for (let i = 0; i < buffer.length; i++) {
        binaryString += buffer[i].toString(2).padStart(8, '0');
    }

    const bits = binaryString.substring(0, n);

    return parseInt(bits, 2);
}

function decodeBase64ToDecimal3(str, n) {
    // console.log('n:', n, n <= 8 ? '1 byte' : Math.ceil(n / 8) + ' bytes');
    const buffer = Buffer.alloc(Math.ceil(n / 8), str, 'base64');

    // console.log('buffer.toString():', buffer.toString());
    // console.log('buffer to decimal:', parseInt(buffer.toString('hex'), 16));
    // let binaryString = [];
    // for (let i = 0; i < buffer.length; i++) {
    //     binaryString.push(buffer[i].toString(2).padStart(8, '0'));
    // }
    let binary = 0;
    for (let i = 0; i < buffer.length; i++) {
        // console.log(binary.toString(2));
        // console.log((buffer[i] << ((buffer.length - i - 1) * 8)).toString(2));
        // console.log('-------------------');

        binary = binary | (buffer[i] << ((buffer.length - i - 1) * 8));
        // console.log('i:', i, 'number:', (buffer.length - i - 1) * 8);
        // console.log('binary:', binary.toString(2));
        // console.log();
    }

    // console.log('binary:', binaryString.join(''));
    // console.log('binary:', binary.toString(2));

    if (buffer.length * 8 > n) {
        binary = binary >> (buffer.length * 8 - n);
    }

    // console.log('binary:', binary.toString(2));

    return binary;
}

function run() {
    const result = decodeBase64ToDecimal3(Buffer.from('hello').toString('base64'), 6);
    console.log('result:', result);
}

module.exports = run;
