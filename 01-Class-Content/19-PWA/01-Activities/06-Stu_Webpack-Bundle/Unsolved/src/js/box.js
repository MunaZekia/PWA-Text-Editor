// TODO: Import yellow robot image as Yellow
import{Yellow} from '../images/yellow.png';
// TODO: Import blue robot image as Blue
import{Blue} from '../images/blue.png';

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.src === Yellow) {
    box.src = Blue;
  } else {
    box.src = Yellow;
  }
};
