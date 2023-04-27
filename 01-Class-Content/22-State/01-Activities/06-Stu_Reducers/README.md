# 🐛 Reducer Fails to Add/Remove Students

Work with a partner to resolve the following issue(s):

* As a developer, I want to implement reducers into my application to update global state.

* As a developer, I want to be able to diagnose and fix the issue associated with the reducer that is causing the tests to fail.

## Setup

Copy the `src` directory from the unsolved folder into `00-practice-app` before you begin.
  
## Expected Behavior

When the tests are run, all of them should pass.

## Actual Behavior

The suite that tests the reducer is failing for adding and removing student functionality.
in studentcontext.js, the reducer is not returning the correct state in the switch statement. line 10 should be return state.concat(action.student) and line 15 should be return state.filter(student => student.id !== action.id)

## Steps to Reproduce the Problem

1. Navigate to the `06-Stu-Reducers/Unsolved` folder and run `npm install`.

2. Run `npm run test`.

3. Note that the test fails.

its failing because the reducer is not returning the correct state in the switch statement. 
in the file reducer.js, the switch statement is not returning the correct state. line 10 should be return state.concat(action.student) and line 15 should be return state.filter(student => student.id !== action.id)


---

## 💡 Hints

How does the test's error message inform us about where the error is occurring?

How can we use `switch` statements to an advantage in this activity?
//switch statements are used to execute different actions based on different conditions.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Where have we seen the term **reduce** elsewhere in Javascript?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
