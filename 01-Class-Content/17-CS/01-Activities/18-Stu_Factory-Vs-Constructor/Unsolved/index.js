// TODO: Refactor the class to a factory function.

// between constructor and factory functions, 
//which do you prefer and why?
// I prefer constructor functions because they are more 
//readable and easier to understand.
const getInformation = (state) => ({
  information: () => {
    console.log(state.title, state.description);
  }
  //

});
const lesson = function(){
  const state = {
    title: 'Module 17 - Computer Science',
    description: 'CS for JS'
  };
  return {...getInformation(state)}
};
  // title and description are static, which means they cannot be changed
  // title and description are parameters
  // parameters are placeholders for arguments
  // information is dynamic, which means it can be changed
const csForJS = lesson();
csForJS.information();
