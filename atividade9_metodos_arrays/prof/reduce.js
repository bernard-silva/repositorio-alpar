function reduce(array, callback, initialValue) {
    let accumulator = initialValue

    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }

    return accumulator
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = reduce(arr, (accumulator, item) => {
    return accumulator + item
}, 0)

const sum2 = reduce(arr, (accumulator, item) => {
    return accumulator + item
}, '0')

const sum3 = reduce(arr, (accumulator, item) => {
    return accumulator + ', ' + item
}, '0')

console.log(sum)
console.log(sum2)
console.log(sum3)