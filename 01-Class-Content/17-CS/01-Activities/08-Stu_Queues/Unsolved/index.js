// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(container = []) {
        this.container=container;
    //Create a constructor method that takes in a container
    // Then set the container to the container passed in
    }
    addToQueue(newItem) {
        return this.container.push(newItem);
    // We then create a method called addToQueue that takes in a new item
    // Then we add that item to the end of the container using THE PUSH method
    }
    // Queue is first in first out,

    // stack is last in first out
     
  removeFromQueue() {
    return this.container.shift();
    // We then create a method called removeFromQueue that takes in a new item
    // Then we remove the first item from the container using THE SHIFT method
  }
}

module.exports = Queue;
