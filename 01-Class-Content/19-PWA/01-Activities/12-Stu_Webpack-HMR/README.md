# 🏗️ Add Webpack Development Server to a Project Using Hot Module Replacement (HMR)

Work with a partner to implement the following user story:

* As a developer, I want to add a `webpack-dev-server` to my project so that I can use Hot Module Replacement (HMR) to update the page without a full page refresh.

* As a developer, I want to learn how to configure `webpack-dev-server` so that it can test my project in a way that allows my work to continue without much downtime.

## Acceptance Criteria

* It is done when I have installed `webpack-dev-server` as a `devDependency`.
//

* It is done when I have a `webpack.config.js` file in my project that includes the `devServer` property.
// we can add the devServer property to the webpack.config.js file by adding the following code: 
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true
  },

* It is done when I have added a `hot` property to the `devServer` object in `webpack.config.js` and set its value to `only`.
// we can add the hot property to the devServer object in webpack.config.js by adding the following code:
//

* It is done when I have added a `dev` command to `package.json` that runs `webpack-dev-server --open`.

* It is done when I have opened `Unsolved/src/js/index.js` and added logic to accept Hot Module Replacement (HMR), as shown in the documentation.
// we can add the following code to the index.js file to accept HMR: 
if (module.hot) {
    module.hot.accept();
  }

* It is done when I have opened `Unsolved/src/js/header.js` and updated the code so that the header changes to `orange` instead of 
`blue` on the button click. 
// we can update the header.js file to change the header to orange instead of blue by adding the following code:
// document.querySelector('h1').style.color = 'orange';


## 📝 Notes

* If you encounter any issues with loading your most recent changes, refresh the page or try again in a private/incognito window. You may have to refresh a few times!

## 💡 Hints

* What other options are available for the `devServer` property?
// Properties like contentBase, compress, port, and hot are available for the devServer property.
//contentBase is the directory where the files are served from.
// port is the port number where the files are served from.
// hot is a boolean that tells the devServer to use HMR.
//HRM is a feature that allows you to update the page without a full page refresh. HRm stants for Hot Module Replacement.
// compress is a boolean that tells the devServer to compress the files before serving them. because the files are compressed, the files are served faster.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What is another way to run `webpack-dev-server` without needing to add it to our `package.json` file?
// we can run webpack-dev-server without needing to add it to our package.json file by using the following command: npx webpack-dev-server --open
//npx is a package runner that allows us to run packages without needing to install them. it stands for npm package runner.

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
