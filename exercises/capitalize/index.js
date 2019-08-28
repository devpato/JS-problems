// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

capitalize = str => {
  //V1
  //   return str
  //     .split(" ")
  //     .map(w => {
  //       return w.charAt(0).toUpperCase() + w.slice(1);
  //     })
  //     .join(" ");

  //V2
  const arr = str.split(" ");
  return arr.reduce((acc, word) => {
    console.log(acc);
    return (
      acc +
      (acc === "" ? "" : " ") + // add space before next word if necessary
      word[0].toUpperCase() +
      word.slice(1)
    );
  }, "");
};

module.exports = capitalize;
