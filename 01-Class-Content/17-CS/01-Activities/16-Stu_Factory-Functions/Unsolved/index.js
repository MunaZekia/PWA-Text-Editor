// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };
// factory function is  a function that returns an object and can be reused to create multiple objects.
  return {
    name: studentInfo.name,
    // name is a key in the object, and the value is the value of the name key in the studentInfo object
    gradeYear: studentInfo.gradeYear,
    // gradeYear is a key in the object, and the value is the value of the gradeYear key in the studentInfo object
    greet

    
    : function () {
      console.log(
        `My name is ${this.name} and I am in ${this.gradeYear} grade`
      );
    },
  };
}

const newStudent = student('Dominique', '11th');
newStudent.greet();

module.exports = student;
