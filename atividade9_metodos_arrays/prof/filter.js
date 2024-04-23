function filter(array, callback) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray[newArray.length] = array[i]
        }
    }

    return newArray
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(filter(arr, (item) => {
    if (item > 6) {
        return true
    }
    return false
}))
// console.log(arr)