const inquirer = require('inquirer');

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
                    mainMenu[8],
                ]
            }
        ])
        .then ((answer) => {
            const { menuChoice } = answer;

            switch(menuChoice) {
                case mainMenu[1]:
                    console.log(`Your choice was ${mainMenu[1]}`);
                    break;
                case mainMenu[2]:
                    console.log(`Your choice was ${mainMenu[2]}`);
                    break;
                case mainMenu[3]:
                    console.log(`Your choice was ${mainMenu[3]}`);
                    break;
                case mainMenu[4]:
                    console.log(`Your choice was ${mainMenu[4]}`);
                    break;
                case mainMenu[5]:
                    console.log(`Your choice was ${mainMenu[5]}`);
                    break;
                case mainMenu[6]:
                    console.log(`Your choice was ${mainMenu[6]}`);
                    break;
                case mainMenu[7]:
                    console.log(`Your choice was ${mainMenu[7]}`);
                    break;
                case mainMenu[8]:
                    console.log(`Your choice was ${mainMenu[8]}`);
                    break;
            }
        })
}
module.exports = { startMenu };