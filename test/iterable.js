Promise.all([
    load('src/iterable.js'),
    load('src/primitive.js'),
]).then(([iterablesEqual, primitivesEqual]) => {
    var assert = console.assert;

    var eq = iterablesEqual(primitivesEqual);

    assert(eq([], []));
    assert(eq([1, 2, 3], [1, 2, 3]));
    assert(!eq([1], [2]));
    assert(!eq([1], []));

    var a = [1, 2, 3];
    assert(eq(a, a));
})
