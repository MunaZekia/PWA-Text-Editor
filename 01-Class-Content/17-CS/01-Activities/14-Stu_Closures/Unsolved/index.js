// TODO: Complete the 'counter' function below.
//fubction counter() {
    //
function counter() {
    var count = 0;
    return function() {
        return count++;
    }
    

}

module.exports = counter;
