const inquirer = require("inquirer");

inquirer
.prompt([
    {
        type:"iput",
        message: "what is your name",
        name:"email"
    }
])
.then((response)=>
response.confirm === response.email)
? console.log("Perfect:" + response.email)
: console.log("enter again");