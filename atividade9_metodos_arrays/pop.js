const frutas = ['maçã', 'banana'];

function pop(array) {
    const lastIndex = array.length - 1
    const item = array[lastIndex]
    delete array[lastIndex]
    array.length = lastIndex
    return item
}

console.log(pop(frutas))
console.log(frutas)