function slice(array, indexStart, indexEnd) {
    const newArray = []
    for (a in array) {
        if (a >= indexStart && a < indexEnd) {
            newArray[a] = array[a]
        }
    }

    for (let i = 0; i < newArray.length - 1; i++) {
        newArray[i] = newArray[i + indexStart]
    }

    newArray.length = (indexEnd - indexStart)
    return newArray
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(slice(arr, 1, 5))
