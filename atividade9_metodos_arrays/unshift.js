function unshift(array, items) {
    for (let i = array.length; i >= 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = items
    return array
}

let arr = [1, 2, 3]
console.log(unshift(arr, 0))
console.log(arr)