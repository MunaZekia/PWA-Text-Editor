Step 1. Create a function that accepts a sorted array and the element we are searching for.
const binarySearch = fuction (arr, x, start, end) {
  // Your code here
};

Step 2. Define two variable which represent the start index and the end index of the given array.
 const start = 0;
 const end = arr.length - 1;


Step 3. While start index is less than or equal to end index we continue to loop through the given array.

while (start <= end) {
    const middle = Math.floor((start + end) / 2);
  // Your code here
}

Step 4. Define a variable which represents the middle index of the given array.

if (arr[middle] === x) {
    return true;
  } else if (arr[middle] < x) {
   return binarySearch(arr, x, middle + 1, end);
  } else {
    return binarySearch(arr, x, start, middle - 1);
  }
  return false;
Step 4. If given element is at the given array's middle index, return true.

Step 5. Else if the given array's middle index less than the given element, start index equals the middle index plus one.

Step 6. Else update the end index to the middle index minus one.

Step 7. After exiting the loop return false because given element was not found.