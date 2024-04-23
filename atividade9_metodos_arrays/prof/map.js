function map(array, callback) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i], i, array)
    }

    return newArray
}

const arr = ['maça', 'banana', 'pêra', 'uva', 'manga', 'abacate', 'côco']
console.log(map(arr, (item, index) => {
    return item.toUpperCase()
}))
console.log(arr)