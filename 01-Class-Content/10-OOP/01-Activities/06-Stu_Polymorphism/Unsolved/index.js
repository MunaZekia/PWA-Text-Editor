// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (!A)
  
    // if input is great or equal to 90 the respose should be A, If it is 
    if (typeof input === 'number') {
      if(input >= 90 && input < 100) {
        response= "A"
      }
      if (inRange (input === 'number')){
        response = 'A'
      }

      // TODO: Add logic here to return a single letter grade
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      switch(input) {
        case 'A':
          response = '90 - 100';
          break;
      }
      return response;
    }
  };
}


const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
