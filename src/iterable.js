load('src/iterator.js').then(function (iteratorsEqual) {
    return function (cmp) {
        var iteratorCmp = iteratorsEqual(cmp);
        return function (a, b) {
            return iteratorCmp(
                a[Symbol.iterator](),
                b[Symbol.iterator]()
            );
        };
    };
})
