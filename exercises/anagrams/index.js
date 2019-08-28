// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

anagrams = (stringA, stringB) => {
  //V1
  return (
    stringA
      .replace("/[^w]/g")
      .toLowerCase()
      .split("")
      .sort()
      .join() ===
    stringB
      .replace("/[^w]/g")
      .toLowerCase()
      .split("")
      .sort()
      .join()
  );
  //V2
  //   const aCharMap = buildingCharMap(stringA);
  //   const bCharMap = buildingCharMap(stringB);
  //   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
  //     return false;
  //   }
  //   for (let char in aCharMap) {
  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }
  //   return true;
};

buildingCharMap = str => {
  const charMap = {};
  for (let char of str.replace("/[^w]/g").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};

module.exports = anagrams;
