# 🐛 The Delete Button Does Not Remove the List Item When Clicked

Work with a partner to resolve the following issues:

* As a user, I want to be able to delete a list item from a list when I click on the list item.
// we need to add an event listener to the list item
// by clicking on the list item, we need to remove it from the list
// we need to remove the list item from the database
// we need to update the database
// we can start by going to the index.js file
//export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const todosDb = await openDB('todos', 1);
  const tx = todosDb.transaction('todos', 'readonly');
  const store = tx.objectStore('todos');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};
 

* As a user, I want to be able to edit a list item when I click the Edit button.

## Expected Behavior

When a user clicks on an item, it is removed from the list of tasks.

When a user clicks on the Edit button, a text input is displayed with the list item to be edited. After pressing the Enter key, the list item is updated accordingly.

## Actual Behavior

When a user clicks on the item, it is not removed from the list of tasks.

When a user clicks the Edit button, a text input does not appear with the list item to be edited. After pressing the Enter key, the list item is not updated properly.

## Steps to Reproduce the Problem

To reproduce the problem, follow these steps: 

1. In the command line, navigate to `24-Stu_IndexedDB-CRUD/Unsolved`.

2. Run `npm install`.

3. To launch the application, run `npm run dev`.

4. Navigate to `http://localhost:8080` in your browser.

5. Create a new To Do item at the bottom of the page.

6. Click on a list item to attempt to delete it.

7. Click on the Edit button to attempt to edit the list item.

## Assets

The following image demonstrates the web application's appearance and functionality:

![Demo of the TODO list by adding, removing, and editing a list item.](./Assets/todo-list.gif)

---

## 💡 Hints

What types of permissions do you need to alter data inside a database? 
// we need to have the permission to read and write to the database
// and we need to have the permission to delete from the database

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How does the usage of CRUD operations with IndexedDB compare with their usage with SQL databases? 
// is 
// we need to use the same CRUD operations with IndexedDB as we do with SQL databases

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
