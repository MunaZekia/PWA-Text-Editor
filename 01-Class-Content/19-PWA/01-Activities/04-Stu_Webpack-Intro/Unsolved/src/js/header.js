export const headerClick = () => {// export is used to export the function headerClick to be used in other files. headerClick is a function that changes the color of the header element to blue or black depending on the current color.
  const header = document.getElementById('header');// header is a variable that is assigned to the element with the id of header.
  if (header.style.color === 'blue') {// if the color of the header is blue, then the color of the header will be changed to black.
    header.style.color = 'black';// if the color of the header is black, then the color of the header will be changed to blue.
  } else {// if the color of the header is not blue, then the color of the header will be changed to blue.
    header.style.color = 'blue';
    \|||\
  }
};
