function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

const arr = ['maça', 'banana', 'pêra', 'uva', 'manga', 'abacate', 'côco']
forEach(arr, (item, index, array) => {
    console.log(index, item.toUpperCase(), array)
})