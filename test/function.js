Promise.all([
    load('src/function.js'),
    load('src/primitive.js'),
]).then(function ([functionsEqual, primitivesEqual]) {
    var assert = console.assert;

    var mkFn = function (map) {
        return n => map.get(n);
    };
    var a = mkFn(new Map([
        [0, 0],
        [1, 1],
        [2, 2],
    ]));
    var b = mkFn(new Map([
        [0, 0],
        [1, 2],
    ]));

    var never = (a, b) => false;

    assert(functionsEqual([], primitivesEqual)(a, b));
    assert(functionsEqual([0], primitivesEqual)(a, b));
    assert(!(functionsEqual([0, 1], primitivesEqual)(a, b)));
    assert(!(functionsEqual([0, 2], primitivesEqual)(a, b)));
    assert(functionsEqual([0, 3], primitivesEqual)(a, b));
    assert(functionsEqual([], never)(a, b));
    assert(!(functionsEqual([0], never)(a, b)));
})
