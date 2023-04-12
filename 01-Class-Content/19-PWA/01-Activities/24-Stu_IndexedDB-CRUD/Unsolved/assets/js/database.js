import { openDB } from 'idb';
// this is the library we are using to create the database

const initdb = async () =>
// this is the function that will create the database
//
  openDB('todos', 1, { // this is the name of the database
    upgrade(db) {// this is the function that will create the database
      if (db.objectStoreNames.contains('todos')) {
        // this is the name of the object store
        console.log('todos database already exists');
        return;// if the database already exists, we don't need to create it again
      }
      db.createObjectStore('todos', { keyPath: 'id', 
      // this is the name of the key, the key is the unique identifier for each item in the database
      autoIncrement: true }); // this will automatically increment the key
      console.log('todos database created');
      // this will log to the console that the database was created
    },
  });

export const postDb = async (content) => {
  // this is the function that will post the data to the database
  
  console.log('Post to the ase');
  // this will log to the console that the data is being posted to the database
  
  const todosDb = await openDB('todos', 1);
  //  this will open the database and await the response
  
  const tx = todosDb.transaction('todos', 'readwrite');
  // this will create a transaction and await the response
  
  const store = tx.objectStore('todos');
  // this will create the object store
  
  const request = store.add({ todo: content });
  // this will add the data to the database
  
  const result = await request;
  // this will await the response
  
  console.log('🚀 - data saved to the database', result);
  // this will log to the console that the data was saved to the database
};

export const getAllDb = async () => {
  // this is the function that will get all the data from the database

  console.log('GET all from the database');
  // this will log to the console that the data is being retrieved from the database

  const todosDb = await openDB('todos', 1);
  // this will open the database and await the response

  const tx = todosDb.transaction('todos', 'readonly');
  // this will create a transaction and await the response

  const store = tx.objectStore('todos');
  // this will create the object store

  const request = store.getAll();
  // this will get all the data from the database

  const result = await request;
  // this will await the response

  console.log('result.value', result);// this will log to the console the data that was retrieved from the database
  return result; // this will return the data
};


export const getOneDb = async (id) => {
  console.log('GET from the database');
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.get(id);
  const result = await request;
  console.log('result.value', result);
  return result;
}; // this is the function that will get one item from the database and await the response
// this is the same as getAllDb but we are using get instead of getAll

// TODO: Fix the function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readwrite');
  // we changed from 'readonly' to 'readwrite' 
  //because we are deleting and not just reading
  // we need to be able to write to the database
  // to delete the item
  const store = tx.objectStore('todos');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
}; // this whole function is basically the same as getOneDb but we are using delete instead of get

// TODO: Fix the function below:
export const putDb = async (id, content) => {

  console.log('PUT to the database');
  const todosDb = await openDB('todos', 1);

  const tx = todosDb.transaction('todos', 'readwrite');
  
  const store = tx.objectStore('todos');
  const request = store.put({ id: id, todo: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}; // function is basically the same as postDb but we are using put instead of add

// 

initdb();
