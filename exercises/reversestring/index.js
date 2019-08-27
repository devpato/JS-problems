// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

reverse = (str) => {
    //V1
    //return str.split('').reverse().join('');
    
    //V2
    // let reversed = '';
    // for( let character of str) {
    //     reversed = character + reversed;
    // }
    // return reversed;

    //V3
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
