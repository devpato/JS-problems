// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

chunk = (array, size) => {
  const chunked = [];

  //Chuncked Array V1
  for (let i of array) {
    const last = chunked[chunked.length - 1];
    console.log(last);
    if (!last || last.length === size) {
      chunked.push([i]);
    } else {
      last.push(i);
    }
  }
  return chunked;
};

module.exports = chunk;
