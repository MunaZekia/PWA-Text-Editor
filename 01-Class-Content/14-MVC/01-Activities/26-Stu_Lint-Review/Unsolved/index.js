const numbers = [2, 4, 6, 8];
let squaredNums = [];
// TODO: Use map to square the numbers in the array
// and store the new values in the squaredNums array


if (numbers.length > 0) {
  squaredNums = numbers.map((num) => {
    return num ** 2;
  });
}

console.log(squaredNums);
