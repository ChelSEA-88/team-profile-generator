const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employeeRoster = [];

function createManager() {
   
    inquirer.prompt([
        {
            type: "input",
            name: "managerName", 
            message: "What is your manager's name?"
        },{
            type: "input",
            name: "managerId", 
            message: "What is your manager's id number?"
        },{
            type: "input",
            name: "managerEmail", 
            message: "What is your manager's email?"
        },{
            type: "input",
            name: "managerOfficeNumber", 
            message: "What is your manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        employeeRoster.push(manager);
        createTeam();
    })
}

function createTeam(){
    inquirer.prompt(
        {
            type: "list",
            name: "employeeChoice",
            message: "Which type of employee would you like to add? If you are done adding employees, select 'build the team'",
            choices: [
                "Engineer",
                "Intern",
                "Build the team"
            ]
        }
    ).then(userChoice => {
        switch(userChoice.employeeChoice){
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                buildTeam();
        }
    })
}

function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName", 
            message: "What is your engineer's name?"
        },{
            type: "input",
            name: "engineerId", 
            message: "What is your engineer's id number?"
        },{
            type: "input",
            name: "engineerEmail", 
            message: "What is your engineer's email?"
        },{
            type: "input",
            name: "engineerGithub", 
            message: "What is your engineer's Github?"
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employeeRoster.push(engineer);
        createTeam();
    })
}

function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName", 
            message: "What is your intern's name?"
        },{
            type: "input",
            name: "internId", 
            message: "What is your intern's id number?"
        },{
            type: "input",
            name: "internEmail", 
            message: "What is your intern's email?"
        },{
            type: "input",
            name: "internSchool", 
            message: "What school is your intern attending?"
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internSchool, answers.internGithub);
        employeeRoster.push(intern);
        createTeam();
    })
}

function buildTeam(){
    fs.writeFileSync(outputPath, render(employeeRoster), "utf-8", function(err, answers) {
        if (err)
        throw err;
    });
   
}
createManager();



