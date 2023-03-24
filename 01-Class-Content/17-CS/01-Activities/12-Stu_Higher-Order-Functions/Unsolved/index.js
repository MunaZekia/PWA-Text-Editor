const grades = [56, 78, 99, 85];
// this means that the accumulator is the first value in the array, the current value is the second value in the array, and the index is the third value in the array. 
// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    if (index === array.length - 1) {
        return (accumulator + currentValue) / array.length;
    }
    
        return accumulator/array.length;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage);

console.log(gradeAverage);
