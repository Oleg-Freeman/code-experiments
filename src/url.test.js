function test() {
    const url1 = new URL('http://204.62.12.215:3030');
    const url2 = new URL('https://204.62.12.215:3030');
    const url3 = new URL('204.62.12.215:3030');
    const url4 = new URL('204.62.12.215');
    const url5 = new URL('https://204.62.12.215');

    console.log('url1:', url1);
    console.log('url2:', url2);
    console.log('url3:', url3);
    console.log('url4:', url4);
    console.log('url5:', url5);
}

module.exports = {
    test,
};
