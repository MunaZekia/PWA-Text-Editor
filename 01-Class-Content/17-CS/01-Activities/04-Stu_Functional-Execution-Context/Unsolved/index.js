// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  let total = sum();
  return sum() / array.length;
}

module.exports = avg;
