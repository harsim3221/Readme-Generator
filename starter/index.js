// Declaring all the Global require's
const fs = require("fs");  
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log( " Welcome to my README generator")
console.log( " Answer the following questions to generate a high quality README for the project")

// array of questions for user
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is the title of the project?.",
        validate: your_Input => {
            if (your_Input){
                return true;
            } else { 
               console.log(" Enter a title to continue!");
               return false;
            }
            }
        },
      
      {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
        validate: your_description => {
            if (your_description) {
                return true;
            } else { 
               console.log(" Enter a project description!");
               return false;
            }
            }
      },

      {
        type: "input",
        name: "installation",
        message: "How to you install your project?.",
        validate: your_installation => {
            if (your_installation){
                return true;
            } else { 
               console.log(" Enter the steps of installation to continue.");
               return false;
            }
            }
      },

      {
        type: "input",
        name: "usage",
        message: "How do you use this project?",
        validate: your_usage => {
            if (your_usage){
                return true;
            } else { 
               console.log(" Enter the information on how to use project");
               return false;
            }
            }
      },

      {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
        validate: your_licence => {
            if (your_licence){
                return true;
            } else { 
               console.log(" Select a license for the project.");
               return false;
            }
            }
      },

      {
        type: "input",
        name: "contribution",
        message: "How can users contribute to this project?",
        validate: your_contribution => {
            if (your_contribution){
                return true;
            } else { 
               console.log(" Provide information on how to contribute to the project!");
               return false;
            }
            }
      },

      {
        type: "input",
        name: "test",
        message: "How does the user test this project?",
        validate: your_test => {
            if (your_test){
                return true;
            } else { 
               console.log(" Explain how to test this project.");
               return false;
            }
            }
      },

      {
        type: "input",
        name: "github",
        message: "Enter the GitHub Username (Required)",
        validate: github_Input => {
            if (github_Input){
                return true;
            } else { 
               console.log(" Please enter your GitHub Username!");
               return false;
            }
            }  
      },

       {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
        validate: email_Input => {
            if (email_Input){
                return true;
            } else { 
               console.log(" Please enter your email");
               return false;
            }
            }
      },

       {
        type: "input",
        name: "video",
        message: "Provide walkthrough of required tests.",
        validate: your_video => {
            if (your_video){
                return true;
            } else { 
               console.log(" Please show the video of the project");
               return false;
            }
            }
      },
    ];    


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log(" Success! You can now preview your README file");
    });
};

// function to initialize program
function init()
 {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });

};

// function call to initialize program
init();
