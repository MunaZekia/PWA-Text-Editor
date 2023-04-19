import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Make sure that the value isn't empty
    if (!item.text) {
      return;
    }

    // Create a new bucket list item with an ID and a completed value
    const newItem = {
      id: Math.floor(Math.random() * 10000),
      text: item.text,
      completed: false,
    };
  };

    // TODO: Write logic to add the new bucket item to the bucket state variable
    
  

  // Function to mark bucket list item as complete
  const completeBucketItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedBucket = bucket.map((item) => {
      if (item.id === id) { 
        // we are using the bang operator to flip the boolean value
        // fliping the boolean value is called a toggle
        // types of operator are unary, binary, ternary
        // 
        item.completed = !item.completed;// this line is calling from the bucket state variable which is an array and found in the useState hook form line 5  
        
        // the bang operator is a unary operator which means it only takes one argument, one argument is the item.completed
        // the argument be
      }
      return item;
    });
      
      // TODO: Write logic that marks an item as complete or incomplete when invoked

  

    setBucket(updatedBucket);
  };

  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function

    const array = bucket.filter((item) => item.id !== id);
    // [...bucket] is the spread operator, which 
    // we are using the spread operator to copy the array
    // TODO: Update the bucket state variable
  };

  // Function to edit the bucket list item
  const editBucketItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
