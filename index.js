// Required
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const html = require("./src/page-template");
const validator = require("email-validator");

// Async functions
const appendFileAsync = util.promisify(fs.appendFile);

let teamMembers = [];
let teamString = ``;

console.clear();
console.log("----------------------------------------");
console.log("Team Profile Generator by Shelby Kohring");
console.log("----------------------------------------");

// Main function to run application
async function appMenu() {
  try {
    await prompt();

    for (let i = 0; i < teamMembers.length; i++) {
      teamString = teamString + html.generateCard(teamMembers[i]);
    }

    const finalHTML = html.generateHTML(teamString);

    console.clear();
    console.log("---------------------------");
    console.log("Generating index.html file.");
    console.log("---------------------------");

    appendFileAsync("./dist/index.html", finalHTML);

    console.clear();
    console.log("------------------------");
    console.log("index.html file created!");
    console.log("------------------------");

  } catch (err) {
    return console.log(err);
  }
}

// Prompt inquirer to get user input
async function prompt() {
  let inputComplete = "";

  do {
    try {
      let input = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the employee's name? (Required)",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter the employee's name!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Enter the employee's ID: (Required)",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the employee's ID!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Enter the employee's email address: (Required)",
          validate: (emailInput) => {
            if (emailInput) {
              // validate with npm email-validator
              return validator.validate(emailInput);
            }
          },
        },
        {
          type: "list",
          name: "role",
          message: "What is the employee's role?",
          choices: ["Engineer", "Manager", "Intern"],
        },
      ]);

      // if statements depending on selected role
      let input2 = "";

      if (input.role === "Engineer") {
        input2 = await inquirer.prompt([
          {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username? (Required)",
            validate: (githubInput) => {
              if (githubInput) {
                return true;
              } else {
                console.log("Please enter the engineeer's GitHub username!");
                return false;
              }
            },
          },
        ]);

        // add to teamMembers Array
        const engineeer = new Engineer(
          input.name,
          input.id,
          input.email,
          input2.github
        );
        teamMembers.push(engineeer);

      } else if (input.role === "Manager") {
        input2 = await inquirer.prompt([
          {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number? (Required)",
            validate: (officeNumberInput) => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log("Please enter the manager's office number!");
                return false;
              }
            },
          },
        ]);

        // add to teamMembers Array
        const manager = new Manager(
          input.name,
          input.id,
          input.email,
          input2.officeNumber
        );
        teamMembers.push(manager);

      } else if (input.role === "Intern") {
        input2 = await inquirer.prompt([
          {
            type: "input",
            name: "school",
            message: "What school is the intern attending? (Required)",
            validate: (schoolInput) => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter the school the intern is attending!");
                return false;
              }
            },
          },
        ]);

        // add to teamMembers Array
        const intern = new Intern(
          input.name,
          input.id,
          input.email,
          input2.school
        );
        teamMembers.push(intern);
      }
    } catch (err) {
      return console.log(err);
    }
    inputComplete = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Do you want to continue adding employees?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (inputComplete.finish === "Yes");
}

// initial application
appMenu();
