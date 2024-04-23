function slice(array, indexStart, indexEnd = -1) {
    const newArray = []

    indexEnd = indexEnd < 0 ? array.length : indexEnd

    for (let i = indexStart; i < indexEnd; i++) {
        newArray[newArray.length] = array[i]
    }

    return newArray
}

const arr = ['maça', 'banana', 'pêra', 'uva', 'manga', 'abacate', 'côco']
console.log(slice(arr, 2, 5))
// console.log(slice(arr, 2)) // Se o indexEnd não for informado, assume como -1 e retorna o array.length
console.log(arr)
