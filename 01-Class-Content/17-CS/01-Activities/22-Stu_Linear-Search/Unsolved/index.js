const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,7]
// this is the array that we will be searching through

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
  // we use a for loop to iterate through the array
    for ( i = 0; i < array.length; i++) {
      // i is the index of the array is 0 and we iterate through the array. i++ is the incrementer
      // then we use an if statement to check if the element is found
      if (array[i] === element) {
        // if the element is found, we return the index
        return i;
        // if the element is not found, we return -1
      }
    }
    return -1;
};
module.exports={linearSearch}

  // Use a for loop to iterate through the array
  // If the element is found, return the index
  // If the element is not found, return -1


