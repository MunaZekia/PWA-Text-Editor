// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  // function binarySearch(array, element) { is a function that takes in two parameters, an array and an element. the purpose of this function is to search for an element in an array. if the element is found, it will return the element. if the element is not found, it will return -1.
  let start = 0;
  // let start = 0; is a variable that represents the first index of the array.
  let end = array.length - 1;
  // let end = array.length - 1; is a variable that represents the last index of the array.

   while (start <= end) {
    // while (start <= end) { is a conditional statement that will run as long as the start is less than or equal to the end. which is 9.
    let mid = Math.floor((start + end) / 2);
    // let mid = Math.floor((start + end) / 2); is a variable that represents the middle index of the array. in this case, the middle index is 4.

    if (array[mid] === element) {
      // if (array[mid] === element) { is a conditional statement that will run if the middle index of the array is equal to the element. in this case, the middle index is 4, and the element is 7. 
      
      // return;
      return true;
    } else if (array[mid] < element) {
      // else if (array[mid] < element) { is a conditional statement that will run if the middle index of the array is less than the element. in this case, the middle index is 4, and the element is 7.
      start = mid + 1;
      // start = mid + 1; is a variable that represents the first index of the array. in this case, the first index is 5.
    } else {
      // else { is a conditional statement that will run if the middle index of the array is greater than the element. in this case, the middle index is 4, and the element is 7.
      end = mid - 1;
      // end = mid - 1; is a variable that represents the last index of the array. in this case, the last index is 3.
    }
    
  }
return fasle;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;
// binarySearch doesnt need curly braces because it is a one line function. it is a function that takes in two parameters, an array and an element. the purpose of this function is to search for an element in an array. if the element is found, it will return the element. if the element is not found, it will return -1.


