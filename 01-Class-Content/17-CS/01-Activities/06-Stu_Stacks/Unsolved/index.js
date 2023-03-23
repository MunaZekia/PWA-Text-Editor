// create the Stack class with two methods to remove and add an element
class Stack {
    // why are stack first in last out
    //  it is the last item in the array that is removed
    // create a constructor that takes in an array
    // which is the container for the stack
    // then set the container to the array
    // the array is empty by default
    // if no array is passed in, 
    // then the container is an empty array
    //Queue is first in first out,
    // stack is last in first out
    
    constructor(container = []) {
        this.container = container;
        // this container is the array
    }
    addToStack(newItem) {
        return this.container.push(newItem);
        // then add the new item to the container
        // then return the container
        // add stack is the same as push
        // it adds an item to the end of the array
        // pop removes the last item from the array
        
    }
    removerFromStack() {
        return this.container.pop();
        // then remove the last item from the container
        // then return the container
        // remove stack is the same as pop
        
    }
}
    
   
module.exports = Stack;
