function test() {
    console.log(Date.now());
    console.log(new Date().getTime());
}

function test2() {
    const d = new Date('2025-10-22');
    let result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);

    d.setDate(9);
    d.setMonth(8);
    result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);

    d.setDate(d.getDate() - 30);
    result = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
    console.log(result);
}

module.exports = {
    test,
    test2,
};
