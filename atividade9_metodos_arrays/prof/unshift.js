function unshift(array, ...items) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + items.length] = array[i]
    }

    for (let i = 0; i < items.length; i++) {
        array[i] = items[i]
    }
    return array.length
}

const arr = ['maça', 'banana', 'pêra', 'uva']
console.log(unshift(arr, 'manga', 'abacate', 'côco'))
console.log(arr)

// APENAS 1 ITEM
// function unshift(array, items) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         array[i + 1] = array[i]
//     }
//     array[0] = items
//     return array
// }

// const arr = ['maça', 'banana', 'pêra', 'uva']
// console.log(unshift(arr, 'manga'))
// console.log(arr)