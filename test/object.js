Promise.all([
    load('src/object.js'),
    load('src/primitive.js'),
]).then(([objectsEq, primitivesEq]) => {
    var assert = console.assert;

    var eq = objectsEq({
        a: primitivesEq,
        b: primitivesEq,
        c: (a, b) => true,
    });

    assert(eq({}, {}));
    assert(eq({a: 1}, {a: 1}));
    assert(eq({a: 1, b: 2}, {a: 1, b: 2}));
    assert(eq({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 4}));
    assert(!eq({a: 1}, {}));
    assert(!eq({a: 1}, {a: 2}));

    // inner compartors should not be called on missing keys
    assert(objectsEq({a: (a, b) => assert(false)})({}, {}));
})
