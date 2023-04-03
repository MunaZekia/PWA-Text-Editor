# 📖 Implement Cursor Methods to Change How Documents Are Returned

Work with a partner to implement the following user story:

* As a developer, I want to change the order in which read operations return documents.
// app.get("/api/notes", function(req, res) {
//   db.Note.find({
//     _id: req.params.id
})
}

* As a developer, I want to omit documents from the list of returned documents and limit the returned number of documents.

## Acceptance Criteria

* It is done when the documents are returned in descending order using MongoDB methods.



* It is done when the results are limited to five documents.
// app.get("/api/notes", function(req, res) {
  db.collection("notes")
  .find({})
  .sort({ _id: -1 }) // it is -1 because it is descending order
  .limit(5).toArray(function(err, data) {
    if (err) {
      throw err;
    }
    res.json(data);
});
// this means that it will return the first 5 documents in the database and it will be in descending order and it will be in an array format 

* It is done when documents that contain the largest five numbers are skipped.

* It is done when routes are successfully tested and the results are returned in Insomnia.

## 📝 Notes

Refer to the documentation:

  * [MongoDB docs on Sort](https://docs.mongodb.com/manual/reference/method/cursor.sort/)

  * [MongoDB docs on Skip](https://docs.mongodb.com/manual/reference/method/cursor.skip/)

  * [MongoDB docs on Limit](https://docs.mongodb.com/manual/reference/method/cursor.limit/)

## 💡 Hints

* Does MongoDB store documents in a particular order? What happens if there are duplicate values?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What method can we use to maximize performance and prevent MongoDB from returning more results than required for processing?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
