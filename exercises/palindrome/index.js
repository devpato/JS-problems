// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

palindrome = (str) => {
    //V1
    //return str.split('').reverse().join('') === str ? true : false;

    //V2 --not the best solution
    return str.split('').every((char, index)=> {
        return char === str[str.length - index - 1];
    });
}

module.exports = palindrome;
