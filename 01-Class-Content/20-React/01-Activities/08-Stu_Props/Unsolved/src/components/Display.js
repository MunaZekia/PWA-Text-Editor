import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <div>
      */Instead of passing it as an attribute, 
      //we are nesting it inside of the Display component. This is called "composition" in React. We are composing the Card component inside of the Display component. */
      <Card name={canine.name} description={Spot.description} id={canine.id} />
    // ${canine.name} is a template literal. 
    // template literals are a way to interpolate a variable into a string.
    //It is a way to interpolate a variable into a string.
    // we are insering a variable into a string by using a curly 
    //brace and the variable name.
    </div>
  );
}


