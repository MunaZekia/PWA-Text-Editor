# 🐛 Loader Returning 'Module Not Found' Error

Work with a partner to resolve the following issue(s):

* As a developer, when I run `npm run build`, the build should be successful.

## Expected Behavior

When I run `npm run build`, the `dist` folder should be created and no errors should be displayed.

## Actual Behavior

When I run `npm run build`, an error is displayed.

## Steps to Reproduce the Problem

1. Navigate to `Unsolved` folder in terminal.

2. Run `npm install` and `npm run build` in terminal.

3. An error reading "Module not found: Error: path argument is not a string" is displayed in console and the `dist` folder is not created. The build is not successful.

---

## 💡 Hints

How do you activate a loader in webpack?
// webpack.config.js file we can start by adding a module property to the object that we are exporting. This module property will be an object with a rules property. The rules property will be an array of objects. Each object will be a rule that we want to apply to our code. We can add a rule for our JavaScript files by adding an object to the array with a test property and a use property. The test property will be a regular expression that will test for a file extension. The use property will be an array of loaders that we want to use on the files that match the test property. the code is as follows: 

```js 

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* How can you create a custom loader?
// the easiest way to create a custom loader is to use the npm init command. This will create a package.json file for your loader. You can then add a main property to the package.json file that points to the loader file. You can then install your loader using npm install <loader-name>. You can then use your loader in your webpack.config.js file by adding it to the use property of the rule object.

```js
// 

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
