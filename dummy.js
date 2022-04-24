const fs = require('fs')
const inquirer = require('inquirer')

const defaultQuestions = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "list",
            message: "What would you like to do?",
            choices: ["View Employee Roster", 
                "Add Employee to Roster", 
                "Update an Employee Role", 
                "View all Roles in Department", 
                "Add a Role to Department", 
                "View all Departments", 
                "Add a New Department", 
                "Quit"]
        }
    ])
}

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'deptid',
            message: "What is the Department id?"

        },
        {
            type: 'input',
            name: 'deptname',
            message: "What Department would you like to add?"

        }
    ])
}

const addEmployeeInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employid',
            message: "What is the Employee id?"

        },
        {
            type: 'input',
            name: 'first_name',
            message: "What is the Employee first_name?"

        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the Employee last_name?"

        },
        {
            type: 'input',
            name: 'role_id',
            message: "What is the Employee role_id?"

        },
        {
            type: "list",
            name: 'manager_id',
            message: "Who is the Manager of the Employee?",
            choices: ["", "","","","","",""]

        }
    ])
}

const addEmployeeRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employid',
            message: "What is the Employee id?"

        },
        {
            type: 'input',
            name: 'title',
            message: "What is the Employee Role?"

        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary of the Employee Role?"

        },
        {
            type: 'input',
            name: 'roledept',
            message: "What is the department of the role"

        },
        {
            type: "list",
            name: 'manager_id',
            message: "Who is the Manager of the Employee?",
            choices: ["",
                "None",
                "",
                "",
                "",
                "",
                ""]

        }
    ])
}