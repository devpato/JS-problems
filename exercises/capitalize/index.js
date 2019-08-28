// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //V1
  return str
    .split(" ")
    .map(w => {
      return w.charAt(0).toUpperCase() + w.substring(1, w.length);
    })
    .join(" ");
}

module.exports = capitalize;
