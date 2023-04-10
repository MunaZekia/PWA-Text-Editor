import { openDB } from 'idb';
// this is the IndexedDB library, 
//which we installed in the previous activity
// and imported into our database.js file.

const initdb = async () =>
// const initdb = async () is a function that will be called in the next step.

// TODO: Add a comment explaining what this method does

  openDB('todos', 1, { 
    // openDB is a method that takes three parameters:
    // 1. The name of the database
    // 2. The version of the database
    // 3. An object that contains the upgrade method
    // TODO: Add a comment explaining the functionality of this method:
    upgrade(db) { 
      // upgrade is a method that takes one parameter, db
      //which is the database object that we're upgrading
      // we are upgrading the database by adding an object store
      if (db.objectStoreNames.contains('todos')) {
        // if the database already exists, 
        //then we don't need to create it
        console.log('todos database already exists');
        // console.log a message to the console
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      // createObjectStore is a method that takes two parameters:
      // 1. The name of the object store
      
      // 2. An object that contains the keyPath and autoIncrement properties
      //keyPath is the property that we want to use as the key for each object
      console.log('todos database created');
    },
  });

initdb();
 // this is the function call that will execute the initdb function


 //local storage is a simple way to store data in the browser
 //indexedDB is a more complex way to store data in the browser
 //service workers are a way to cache data in the browser