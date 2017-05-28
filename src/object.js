load('utils/xor.js').then(xor => {
    return function (cmps) {
        return function (a, b) {
            for (var key in cmps) {
                if (cmps.hasOwnProperty(key)) {
                    if (xor(key in a, key in b)) return false;
                    if ((key in a) && (key in b)) {
                        if (!cmps[key](a[key], b[key])) return false;
                    }
                }
            }
            return true;
        };
    };
})
