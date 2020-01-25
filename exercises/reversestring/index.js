// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let revered = '';
    for (let char of str) {
        revered = char + revered
    }
    return revered
}

// function reverse(str) {
//     return str.split('').reduce((rev, char) => {
//         return char + rev
//     }, '')
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

module.exports = reverse;
