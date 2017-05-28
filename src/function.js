load('src/iterable.js').then(function (iterablesEqual) {
    return function (domain, cmp) {
        var iterablesCmp = iterablesEqual(cmp);
        return function (a, b) {
            return iterablesCmp(
                domain.map(a),
                domain.map(b)
            );
        };
    };
})
