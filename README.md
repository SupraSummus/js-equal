Microlibrary for deep equality checking
=======================================

Example
-------

    Promise.all([
        load('src/object.js'),
        load('src/primitive.js'),
        load('src/iterable.js'),
    ]).then(([objectsEq, primitivesEq, iterablesEq]) => {

        var eq = objectsEq({
            id: primitivesEq,
            tasks: iterablesEq((a, b) => a == b),
            description: (a, b) => {
                if (a == b) return true;
                if (!a || !b) return false;
                return window.confirm('Is "' + a + '" same as "' + b + '"?');
            },
        });

        console.log(eq(
            {id: 44, tasks: [1, 2, 3]},
            {id: 44, tasks: ['1', 2, 3]}
        )); // true

        console.log(eq(
            {id: 44},
            {id: 44}
        )); // true

        console.log(eq(
            {id: 44},
            {id: '44'}
        )); // false

        console.log(eq(
            {description: 'big hairy spider'},
            {description: 'awful 8legged thing'}
        )); // well, it depends...
    });
