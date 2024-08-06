function testCopyObject() {
    const obj1 = {
        a: 1,
        b: {
            c: 2,
        },
    };
    const obj2 = {
        a: 4,
        b: {
            d: 5,
        },
    };
    console.log({ ...obj1, ...obj2 });
    console.log(Object.assign({}, obj1, obj2));
}
