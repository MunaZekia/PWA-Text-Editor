// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
<<<<<<< HEAD
  // value of total is returned to where sum() is invoked
  return sum()/array.length;
  // sum()/array.length; is the return value of avg()
  // sum() is invoked and it returns the value of total
  // total is not defined in the avg() execution context because it is defined in the sum() execution context. which means that total is not defined in the global execution context. rather it is defined in the sum() execution context. 
=======
  let total = sum();
  return sum() / array.length;
>>>>>>> e858df73a3aa06d12c833b0ed3e5900836d2ded9
}

module.exports = avg;
