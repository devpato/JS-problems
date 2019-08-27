// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse = (str) => {
    //return str.split('').reverse().join('');
    // let reversed = '';
    // for( let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
