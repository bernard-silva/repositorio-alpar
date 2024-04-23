function shift(array) {
    const firstItem = array[0]
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }

    const lastIndex = array.length - 1
    delete array[lastIndex]
    array.length = lastIndex

    return firstItem
}

let arr = [1, 2, 3, 4, 5]
console.log(shift(arr))
console.log(arr) 