Promise.all([
    load('src/iterator.js'),
    load('src/primitive.js'),
]).then(([iteratorsEqual, primitivesEqual]) => {
    var assert = console.assert;

    var eq = iteratorsEqual(primitivesEqual);
    var iter = a => a[Symbol.iterator]();
    var repeat = function* (v) {
        while (true) {
            yield v;
        }
    };

    assert(eq(iter([]), iter([])));
    assert(eq(iter([1, 2, 3]), iter([1, 2, 3])));
    assert(!eq(iter([1]), iter([2])));
    assert(!eq(iter([1]), iter([])));

    // iterator doesn't equal to itself, because it's traversed during comparsion
    var a = iter([1, 2, 3]);
    assert(!eq(a, a));
    // but in some cases a == a
    var b = iter([1, 1, 2, 2]);
    assert(eq(b, b));

    // infinite iterators can be not-equal but if they are equal comparing them will never end
    assert(!eq(repeat(4), repeat(5)));
})
