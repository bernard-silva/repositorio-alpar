function push(array, ...items) {
    let index = 0
    for (i = 0; i < array.length; i++) {
        index++
    }

    for (i of items) {
        array[index] = i
        index++
    }
    return array
}

const frutas = ['maçã', 'banana'];
let novaFruta = ['uva', 'melao', 'goiaba']

console.log(push(frutas, novaFruta))
