# 🏗️ Delete Data Using MongoDB and Express.js

Work with a partner to implement the following user story:

* As a developer, I want to be able to delete an existing document in a MongoDB database.
//db.bookCollection.deleteOne({title: "The Hobbit"})

* As a developer, I want to be able to update data in an existing document in a MongoDB database.
//db.bookCollection.updateOne({title: "The Hobbit"}, {$set: {author: "J.R.R. Tolkien"}})

## Acceptance Criteria

* It is done when I use the existing `/create` GET Route to create a new document that includes a title.
//db.bookCollection.insertOne({title: "The Hobbit"})
//how would we modle one to many relationship
// one to many relationship is when one document has many nested documents and one to one relationship is when one document has one nested document

* It is done when I add a new `/delete` DELETE route that uses a filter to find a single document by its unique `_id` and deletes that document. The `_id` value should be provided by the request body.
//db.bookCollection.deleteOne({title: "The Hobbit"})

* It is done when I test the route using Insomnia and the document that I just created is deleted. No other documents should be changed.
//inserting nesting data, and deleting it
// 
## 💡 Hints

* Why is it important to specify a filter when updating and deleting documents?
//to find the document
* Why do you need to require the `ObjectId()` when sending an `_id` string in JSON? 
//to convert the string to an object id, which means it can be used to find the document

* When deleting a document, how can we inform users that the document with `_id` they provided was found in our collection?
//if the document is found, it will be deleted, if not, it will return an error

//update one delete one find one find many
// they are all methods of the collection object
// update one takes a filter and an update object
//delete one takes a filter and deletes the first document that matches the filter
//find one takes a filter and returns the first document that matches the filter
//find many takes a filter and returns all documents that match the filter
//update one take

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are indexes? How do they support the efficient execution of queries in MongoDB?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
