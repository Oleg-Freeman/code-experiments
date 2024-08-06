const regex = new RegExp(
    '^([a-zA-Z0-9])(([-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$'
);

console.log(regex.test('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!'));
