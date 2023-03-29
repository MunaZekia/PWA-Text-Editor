// Create our input data
 const unsortedInputArray = [5, 3, 7, 6, 2, 9];
 // this is the array we will be sorting
 // unsortedInputArray is seeded with random numbers
 // bubble sort is a sorting algorithm that compares adjacent elements and swaps them if they are out of order. in other words, it compares the first element with the second element, if the first element is greater than the second element, it swaps the two. it then compares the second with the third, and so on. in this way, the largest values bubble up to the end of the array. after each iteration, the algorithm ignores the last element in the array because it is already sorted. this process continues until the array is sorted.
 // what does it  mean to force a swap? how do we do that?
 // it means that we are going to swap the values of two variables without using a third variable. we can do this by using the addition and subtraction operators. for example, if we want to swap the values of a and b, we can do this: for example: a = 5, b = 10; a = a + b; b = a - b; a = a - b; a = 15, b = 5

 //If we don't want to use the force method and implement one that's a bit more efficient, how can we know if the array is sorted early?
 //  we are able to use for loops to iterate through the array and compare the values of the current index with the next index. if the current index is greater than the next index, we can return false. if we reach the end of the array and have not returned false, we can return true. and if we return true, we can break out of the while loop.

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
  // unsoretedInputArray.push(Math.round(Math.random() * 2000)); means
  // the bubble sort will be sorting an array of 2000 random numbers. if [5,3,7,6,2,9] how to bubble sort?
  // while (let i = 0; i < 2000; i++) {
}
// this is the array we will be sorting and it is seeded with random numbers

// TODO: create bubble sort function
const bubbleSort = (array) => {
  // while the array is not sorted
  while (!isSorted(array)) {
    //!
    // iterate through the array
    for (let i = 0; i < array.length; i++) {
      // if the current index is greater than the next index
      if (array[i] > array[i + 1]) {
        // swap the values
        swap(array, i, i + 1);
      }
    }
  }
  // return the sorted array
  return array;
};
  // this is the array we will be sorting and it is seeded with random numbers


// const sorted = bubbleSort(unsortedInputArray);
// console.log('Post Sort:', sorted.join(' '));
// console.log('DONE!');


// bubble sort is a sorting algorithm that compares adjacent elements and swaps them if they are out of order