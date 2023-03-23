// 1) Where is carNoise stored?
// it is stored in the global execution context. 
//It is assigned the string, 'Honk'
const carNoise = 'Honk';
// 2) Where is goFast stored?
// it is stored in the global execution context.
// It is assigned the function, goFast
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned a value when the goFast function is called.
  // and inside the function of goFast
  
  // 5) Where is makeNoise stored?
  // makeNoise is stored in the global execution context
  // and inside the function of goFast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  //  makeNoise is called and the carNoise is passed in as an argument. and which mean the function is executed
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
//  goFast is called and the number 80 is passed in as an argument. and which mean the function is executed
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
