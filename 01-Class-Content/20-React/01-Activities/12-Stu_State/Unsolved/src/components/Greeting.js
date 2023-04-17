// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
function Greeting() { // first we are creating a function called Greeting, then we are using the useState hook to set the initial value of the greeting variable to a string that welcomes the students to class.
  const [greeting, setGreeting] = useState('Welcome the following students to class!');

//const can not reassisgn the value of the variable, but let can.
}

  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['John', 'Grace', 'Jared']);
  // we are using the useState hook to set the initial value of the group variable to an array of three students in our class. We are also using the useState hook to set the initial value of the greeting variable to a string that welcomes the students to class.

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">Welcome the following students to class!</p>
        // we fixed the p tag below to render the greeting variable, instead of just Message

        <p className="card-text">Message</p>
        <ul>
          <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li>
      // the use state return the setter and the variable, so we can use the variable to access the array.
          //we are using the map method to iterate over the group array and render a list item for each student in the array.

          {/* TODO: Fix the list below so that each member of your group is accessed from the `group` array */}
          
        </ul>
      </div>
    </div>
  );
}


export default Greeting;
