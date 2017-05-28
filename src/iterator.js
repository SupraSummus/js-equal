Promise.resolve(function (cmp) {
    return function (a, b) {
        var iterators = [a, b];
        while (true) {
            var values = iterators.map(i => i.next());
            if (values.every(v => v.done)) return true;
            if (values.some(v => v.done)) return false;
            if (!cmp(values[0].value, values[1].value)) return false;
        }
    };
})
