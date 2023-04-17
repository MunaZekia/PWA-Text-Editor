import React from "react";

// function List(props) {
//   return (
//     <ul className="list-group">
//       {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
//       {props.groceries.map((item) => {
//         return (

//           // TODO: Your code here
//         );
//       })}
//     </ul>
//   );
// }

function List(props) {
  // props is an object that contains the groceries array
  return (
    // return a ul element with a className of list-group
    <ul className="list-group">
      // map over the groceries array and return a li element for each item
      {props.groceries.map((item) => {
        // item is the current item in the array
        // this is the callback function that will be called for each item in the array
        return (
          <li className="list-group-item" key={item.id}>
            // we are returning a li element with a className of list-group-item
            and a key attribute //
            {item.name}
            // the li element will contain the item's name
          </li>
        );
      })}
    </ul>
  );
}
// over all this is a function that returns a ul element with a className of list-group

export default List;
