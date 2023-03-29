// Create our input data
const unsortedInputArray = [5, 3, 7, 6, 2, 9];
// we could use binary search to find the index of the value we are looking for. binary search works by comparing the value we are looking for with the value in the middle of the array. if the value we are looking for is greater than the value in the middle of the array, we can eliminate the first half of the array. if the value we are looking for is less than the value in the middle of the array, we can eliminate the second half of the array. we can then repeat this process on the remaining half of the array until we find the value we are looking for. binary search is a divide and conquer algorithm. it is a very efficient algorithm for finding a value in a sorted array. it is also a recursive algorithm. what does it mean to be a recursive algorithm? how do we implement a recursive algorithm?
 const unsortedInputArray = [5, 3, 7, 6, 2, 9];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array) => {
  
  if (array.length <= 1) {
    return array;
  }
else {
  const left = [];
  // this means that the pivot is the last element in the array
  const right = [];
  // this means that the pivot is the last element in the array
  const newArray = [];
  // this means that the pivot is the last element in the array
  const pivot = array.pop();
  // this means that the pivot is the last element in the array
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return newArray.concat(quickSort(left), pivot, quickSort(right));
};
};
const sorted = quickSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');

//quick sort is a sorting algorithm that uses a divide and conquer approach to sort an array vs bubble sort which uses a swap approach to sort an array. quick sort is a recursive algorithm. what does it mean to be a recursive algorithm? how do we implement a recursive algorithm? 
// recursive means that the function calls itself. we implement a recursive algorithm by calling the function within the function.
