const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) => {
const time = 9999;
  new Promise((resolve, reject) => {
    if (duration >= maxDuration){
      reject (new Error('This is request timed out')); }
      else {
      setTimeout(() => {
      resolve (`Response received: $ {duration}ms`);
      

       
      // TODO: If the duration is longer than maxDuration, reject() the promise
      // TODO: Otherwise resolve() the promise
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
