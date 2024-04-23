function pop(array) {
    const value = array[array.length - 1]
    // console.log(value)
    // array.length -= 1
    array.length = array.length - 1
    return value
}

const arr = ['maça', 'banana', 'pêra', 'uva']
console.log(pop(arr))
console.log(arr)