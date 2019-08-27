// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

maxChar = (str) => {
    const obj = {};
    let max = 0;
    let maxChar = '';
    //Solution v1
    // for(let char of str) {     
    //     if(!obj[char]) {
    //         obj[char] = 1
    //     } else {
    //         obj[char]++;
    //     }
    // }
    
    // for ( let char in obj) {
    //     if ( obj[char] > max) {
    //         max = obj[char];
    //         maxChar = char;
    //     }
    // }

    //Solution V2
    // str.split('').map(c=>{
    //     obj[c] ? obj[c]++ : obj[c] = 1 
    // })

    // const keys = Object.keys(obj);
    // return keys.reduce((acc, curr) => obj[curr] > obj[acc] ? curr : acc, keys[0] );

    //Solution V3
    str.split('').map(c =>{
        obj[c] =  obj[c] + 1 || 1
        if ( obj[c] > max) {
            max = obj[c];
            maxChar = c;
        }
    });
    
    return maxChar;
}

module.exports = maxChar;
