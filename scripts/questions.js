const inquirer = require('inquirer');
const cTable = require('console.table');
const baseUrl = 'http://localhost:3001';
const ui = new inquirer.ui.BottomBar();

const mainMenu = [
    'What would you like to do?',
    'View All Employees',
    'Add Employee',
    'Update Employee Role',
    'View All Roles',
    'Add Role',
    'View All Departments',
    'Add Department',
    'Exit',
    'Use arrow keys to move up and down and reveal all choices'
];

const departmentQuestion = 'What is the name of the department?';

const roleQuestions = [
    'What is the name of the role?',
    'What is the salary of the role?',
    'Which department does the role belong to?'
];

const employeeQuestions = [
    "What is the employee's first name?",
    "What is the employee's last name?",
    "What is the employee's role?",
    "Who is the employee's manager?",
    "Which employee's role do you want to update?",
    "Which role do you want to assign the selected employee?",
]

function startMenu() {
    ui.log.write(mainMenu[9]);

    inquirer
        .prompt([
            {
                type:'list',
                name:'menuChoice',
                message: mainMenu[0],
                choices: [
                    mainMenu[1],
                    mainMenu[2],
                    mainMenu[3],
                    mainMenu[4],
                    mainMenu[5],
                    mainMenu[6],
                    mainMenu[7],
                    new inquirer.Separator(),
                    mainMenu[8],
                    new inquirer.Separator(),
                ]
            }
        ])
        .then ((answer) => {
            const { menuChoice } = answer;

            switch(menuChoice) {
                case mainMenu[1]:
                    console.log(`Your choice was ${mainMenu[1]}`);
                    displayEmployees();
                    break;
                case mainMenu[2]:
                    console.log(`Your choice was ${mainMenu[2]}`);
                    getDepartmentList();
                    break;
                case mainMenu[3]:
                    console.log(`Your choice was ${mainMenu[3]}`);
                    break;
                case mainMenu[4]:
                    console.log(`Your choice was ${mainMenu[4]}`);
                    displayRoles();
                    break;
                case mainMenu[5]:
                    console.log(`Your choice was ${mainMenu[5]}`);
                    newRolePrompt();
                    break;
                case mainMenu[6]:
                    console.log(`Your choice was ${mainMenu[6]}`);
                    displayDepartments();
                    break;
                case mainMenu[7]:
                    console.log(`Your choice was ${mainMenu[7]}`);
                    newDepartmentPrompt();
                    break;
                case mainMenu[8]:
                    console.log(`Your choice was ${mainMenu[8]}`);
                    break;
            }
        })
}

//GET ALL DEPARTMENTS
const displayDepartments = async () => {
    const result = await fetch(baseUrl +'/api/departments', {
        method: 'GET',
    });
    const json = await result.json();
    console.table(json.data);
    startMenu();
    return json;

}

//GET DEPARTMENT LIST ARRAY
const getDepartmentList = async () => {
    const departmentData = await fetch(baseUrl + '/api/departments-list', {
        method: 'GET',
    });
    const json = await departmentData.json();
    const departmentList = await json.data;
    return departmentList;
}

//GET ALL ROLES
const displayRoles = async () => {
    const result = await fetch(baseUrl +'/api/roles', {
        method: 'GET',
    });
    const json = await result.json();
    console.table(json.data);
    startMenu();
    return json;
}

//GET ALL ROLES
const displayEmployees = async () => {
    const result = await fetch(baseUrl +'/api/employees', {
        method: 'GET',
    });
    const json = await result.json();
    console.table(json.data);
    startMenu();
    return json;
}

//NEW DEPARTMENT QUESTIONS
function newDepartmentPrompt (){
    inquirer
        .prompt ([
            {
                type:'input',
                name:'newDepartment',
                message: departmentQuestion,
            }
        ])
        .then (answer => {
            const newDepartment = JSON.stringify(answer)
            console.log("New Department saved as " + newDepartment)
            addDepartment(answer)
            
        })
}
//ADD THE NEW DEPARTMENT
const addDepartment = async (answer) => {
    const newDepartment = JSON.stringify(answer);
    const result = await fetch(baseUrl + '/api/new-department', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: newDepartment
    });
    const json = await result.json();
    console.log('Department added to the database', json);
    startMenu();
    return json;
}

//ADD A NEW ROLE
async function addRole (answers) {
    const newRole = JSON.stringify(answers);
    const result = await fetch(baseUrl + '/api/new-role', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: newRole
    });
    const json = await result.json();
    console.log('Role added to the database', json);
    startMenu();
    return json;
}
//prompt 
async function newRolePrompt(){
    const departmentList = await getDepartmentList();
    inquirer
        .prompt ([
            {
                type:'input',
                name:'title',
                message: roleQuestions[0],
            },
            {
                type:'input',
                name:'salary',
                message: roleQuestions[1],
            },
            {
                type:'list',
                name:'department_id',
                message: roleQuestions[2],
                choices: departmentList,
            }
        ])
        .then ((answers) => {
            addRole(answers);
        })
}


module.exports = { startMenu };