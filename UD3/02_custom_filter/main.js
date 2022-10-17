const assert = require('assert').strict;

function select(array, conditionCallback) {
    let result = []

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (conditionCallback(element)) {
            result.push(element)
        }
    }

    return result
}

function pairs(element){
    return element % 2 ==0
}

function gt15(element){
    return element>15
}

function lt10(element){
    return element < 10
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])