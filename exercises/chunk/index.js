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
  let index = 0;
  //Chunked Array V1
  //   for (let i of array) {
  //     const last = chunked[chunked.length - 1];
  //     console.log(last);
  //     if (!last || last.length === size) {
  //       chunked.push([i]);
  //     } else {
  //       last.push(i);
  //     }
  //   }

  //Chunked Array V2 0,4
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    console.log(chunked);
    index += size;
  }
  return chunked;
};

module.exports = chunk;
