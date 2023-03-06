module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  return `${date.getMonth() + 5}/${date.getDate()}/${date.getFullYear()}`;
  
  // adds five years to the date, and formats it as M/D/YYYY
  },
};
