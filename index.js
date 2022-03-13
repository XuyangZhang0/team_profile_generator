// External packages
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");


// Internal packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { generateManagerElement, generateEngineerElement, generateInternElement } = require("./src/elements");
const generateHtml = require("./src/html");

//HTML Elements variables
let managerEl;
let engineerEl;
let internEl;
let html;

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter team manager name.',
    },
    {
        type: 'input',
        name: 'employeeid',
        message: 'What is the Employee ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Email Address.',
    },
    {
        type: 'input',
        name: 'officenumber',
        message: 'Enter Office Number.',
    },

];

const EmployeeQuestions = [
    {
        type: 'loop',
        message: 'Add another employee?',
        name: 'employees',
        questions: [

            {
                type: 'list',
                message: 'What type of employee are you adding?',
                name: 'type',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter name.',
            },
            {
                type: 'input',
                name: 'employeeid',
                message: 'What is the Employee ID?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter Email Address.',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter GitHub Username.',
                when: (employee) => employee.type === "Engineer",
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the school name.',
                when: (employee) => employee.type === "Intern",
            },

        ],
    },
];



function init() {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            // console.log(data);
            const manager = new Manager(data.name, data.employeeid, data.email, data.officenumber);
            managerEl = generateManagerElement(manager);
            employeeLoop();
        })
}



function employeeLoop() {
    inquirer
        .prompt(EmployeeQuestions)
        .then((data) => {
            // console.log(data); //Object
            // console.log(data.employees); //Array
            const employees = data.employees;
            const engineers = [];
            const interns = [];

            for (let i = 0; i < employees.length; i++) {
                const e = employees[i];
                if (e.type === "Engineer") {
                    const engineer = new Engineer(e.name, e.employeeid, e.email, e.github)
                    engineers.push(engineer);
                } else if (e.type === "Intern") {
                    const intern = new Intern(e.name, e.employeeid, e.email, e.school)
                    interns.push(intern);
                }
            }

            engineerEl = generateEngineerElement(engineers);
            // console.log(engineerEl);
            internEl = generateInternElement(interns);
            // console.log(internEl);
            html = generateHtml(managerEl, engineerEl, internEl);

            fs.writeFile('index.html', html, (err) =>
                err ? console.error(err) : console.log('Success! index.html file ready!')
            );
        })
}

// Function call to initialize app
init();



