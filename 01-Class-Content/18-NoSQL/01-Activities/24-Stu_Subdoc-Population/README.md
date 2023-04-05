# 🐛 Tag Population Not Working

Work with a partner to resolve the following issue:

* As a user, I should be able to see all tags associated with a `post` after running the Mongoose populate method on the `Posts` model.
// 
## Expected Behavior

When a user queries a `post`, the controller should return the `post` with an array that is populated with the associated `tags`.
// we need to use the populate method to populate the tags array with the associated tags.
// the code is 

## Actual Behavior

When a user runs the application in an attempt to get a post, they are presented with the following error:


```sh
TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags`
```

## Steps to Reproduce the Problem

Follow these steps to reproduce the problem:

1. In the command line, navigate to `Unsolved/` and run `npm i`.

2. Run `npm run seed` to populate an example database, or `npm run dev` to run the development server.

3. Notice the following error: ``TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags``.

## 💡 Hints

* When referencing another schema inside a Post schema, what attributes and types must be specified?
// we need to specify the type and ref, and The ref is the name of the model that we are referencing. The type is the type of data that we are expecting to get back.

* Use `npm run dev` to automatically restart your application after you save changes.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What are the performance benefits associated with using the populate method in Mongoose as opposed to the `$lookup` operator in MongoDB?
// The populate method is a Mongoose method that allows us to populate a document with data from another collection. The $lookup operator is a MongoDB operator that allows us to join data from two collections. 

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
