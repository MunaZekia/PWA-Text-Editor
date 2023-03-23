class Queue {
  // default value allows queue to instantiate without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the back of the queue
  addToQueue(el) {
    return this.container.push(el);
    //PUSH is the same as ADD TO STACk, 
    //it adds an item to the end of the array
  }

  // removes an element from the front of the queue
  removeFromQueue() {
    return this.container.shift();
    // SHIFT is the same as REMOVE FROM STACK
    // it removes the first item from the array
    
  }
}

module.exports = Queue;
