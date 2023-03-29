Step 1. Create a function that accepts an array and an element.
// 
 function linearSearch(arr, elem) {
    // 
    for (var i = 0; i < arr.length; i++) {
        // 
        if (arr[i] === elem) {
        // 
        return i;
        }
    }
    // 
    return -1;
 }

Step 2. Loop through each element in the given array.
// 
 for (var i = 0; i < arr.length; i++) {
    // 
    if (arr[i] === elem) {
    // 
    return i;
    }
}

Step 3. Check to see if the index of the array we are looping through is equal to the element.
// 
 if (arr[i] === elem) {
    // 
    return i;
}

Step 4. Return the index of the matching element.
// 
 return i;

Step 5. Return negative one if no matching element is found in the array.

// 
 return -1;
