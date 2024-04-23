function splice(array, indexStart, deleteCount, ...items) {
    const newArray = []
    const arrayToDelete = []
    for (let i = 0; i < array.length; i++) {
        if (i >= indexStart && i < indexStart + deleteCount) {
            arrayToDelete[arrayToDelete.length] = array[i]
        } else {
            newArray[newArray.length] = array[i]
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        array[i] = newArray[i]
    }
    array.length = newArray.length

    for (let i = array.length - 1; i >= indexStart; i--) {
        array[i + items.length] = array[i]
    }

    for (let i = 0; i < items.length; i++) {
        array[indexStart + i] = items[i]
    }

    return arrayToDelete
}

const arr = ['maça', 'banana', 'pêra', 'uva', 'manga']
const pedaco = splice(arr, 2, 2, 'abacate', 'côco')
console.log(arr)
console.log(pedaco)


//  APENAS 1 ITEM
// function splice(array, indexStart, deleteCount) {
//     const newArray = []
//     const arrayToDelete = []
//     for (let i = 0; i < array.length; i++) {
//         if (i < indexStart || i >= indexStart + deleteCount) {
//             arrayToDelete[arrayToDelete.length] = array[i]
//         } else {
//             newArray[newArray.length] = array[i]
//         }
//     }

//     for (let i = 0; i < newArray.length; i++) {
//         array[i] = newArray[i]
//     }
//     array.length = newArray.length

//     return arrayToDelete
// }

// const arr = ['maça', 'banana', 'pêra', 'uva', 'manga', 'abacate', 'côco']
// const pedaco = splice(arr, 2, 2)
// console.log(arr)
// console.log(pedaco)