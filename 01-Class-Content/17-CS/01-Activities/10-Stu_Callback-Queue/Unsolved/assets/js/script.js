// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
  setTimeout(() => {
    console.log("pause complete");
  }, milliSeconds (8000));
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

const 

pause(8000);


