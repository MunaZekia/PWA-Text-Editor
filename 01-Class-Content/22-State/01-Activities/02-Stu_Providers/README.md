# 🏗️ Implement Global State with React Context API

Work with a partner to implement the following user story:

* As a developer, I want to consume data/values from a single, global source across my entire React application.

## Setup

Copy the `src` directory from the unsolved folder into `00-practice-app` before you begin.

## Acceptance Criteria

* It's done when a global state object has been defined with the following properties: an array of students with `name` and `major` properties.
// first step is to create a global state object with the properties of name and major in the file GlobalState.js
* It's done when the provider is made available to child components.

* It's done when the associated test suite passes with zero failures when `npm run test` is run.

---

## 💡 Hints

When defining global state, which properties should be present? Should we care what type they are initialized with?
// the properties that should be present are the ones that are going to be used in the app. we should care what type they are initialized with because it will affect how they are used in the app.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Can an app have multiple providers? If so, are they allowed to be nested?
// yes, an app can have multiple providers. They can be nested, but it is not recommended. because it can cause performance issues.

Use [Google](https://google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
