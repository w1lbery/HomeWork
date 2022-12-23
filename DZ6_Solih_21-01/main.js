const input = document.getElementById('input')
const words = document.getElementById('words')

const reverse = e => {
    let array = []
    array.push(input.value)
    array.map(word => {
        const wOrdS = document.createElement('p')
        words.append(wOrdS)
        wOrdS.append(word.split('').reverse().join(''))
    })
    input.value = ''
}
input.addEventListener('keydown', e => e.keyCode === 13 ? reverse() : false)