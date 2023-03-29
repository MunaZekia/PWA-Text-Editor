// TODO: Add a comment describing what the `position` parameter means for this function.
// A `position` parameter is a number that represents the position of a number in the Fibonacci sequence. For example, the 9th position in the Fibonacci sequence is 34.

// fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. The first two numbers in the sequence are 0 and 1. example of the first 10 numbers in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// const fibonacci = (position) => { is a function that takes in a parameter called `position`. postion is a number that represents the position of a number in the Fibonacci sequence. in this case, the number is 9.
const fibonacci = (position) => {
  // the purpose of this conditional statement is to return the position if it is less than 2.
  // TODO: Add a comment describing the purpose of this conditional statement.
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // this return statement is returning the sum of the two numbers before it. for example, the 9th position in the Fibonacci sequence is 34. 34 is the sum of the two numbers before it, which are 21 and 13.
  return fibonacci(position - 1) + fibonacci(position - 2);
};
// if we give it 0 it returns 0, if we give it 1 it returns 1, if we give it 2 it returns 1, if we give it 3 it returns 2, if we give it 4 it returns 3, if we give it 5 it returns 5, if we give it 6 it returns 8, if we give it 7 it returns 13, if we give it 8 it returns 21, if we give it 9 it returns 34.

// TODO: What will this return?
// this will return the 9th position in the Fibonacci sequence, which is 34.
console.log(fibonacci(9));
