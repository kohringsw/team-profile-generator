// Required
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const uitl = require("util");
const fs = require("fs");
const render = require("./src/page-template.js");
const validator = require("email-validator");

// Async functions
const asyncWriteFile = util.promisify(fs.writeFile);
const asyncAppendFile = util.promisify(fs.appendFile);

//
const teamMembers = [];
const teamString = ``;

console.log("Team Profile Generator by Shelby Kohring");

// Function to run application
async function appMenu() {
  try {
    await prompt();

    for (let i = 0; i < teamMembers.length; i++) {
      teamString = teamMembers + render.generateCard(teamMembers[i]);
    }

    let finalHTML = render.generateHTML(teamString);

    console.log("Generating index.html file.");

    asyncWriteFile("./dist/index.html", finalHTML);

    console.log("index.html file created!");
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
              // use email-validator
              validator.validate("test@email.com");
              return true;
            } else {
              console.log("Please enter a valid email address!");
              return false;
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
        input2 = await inquire.prompt([
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
        input2 = await inquire.prompt([
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
        input2 = await inquire.prompt([
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
        name: "done",
        message: "Do you want to continue adding employees?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (inputComplete.done === "Yes");
}

// initial application
appMenu();
